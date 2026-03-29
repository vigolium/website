"use server";

import { Resend } from "resend";
import disposableDomains from "disposable-email-domains";

const resend = new Resend(process.env.RESEND_API_KEY);

const FREE_EMAIL_PROVIDERS = new Set([
  "gmail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.co.in",
  "hotmail.com",
  "hotmail.co.uk",
  "outlook.com",
  "outlook.co.uk",
  "live.com",
  "live.co.uk",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "mail.com",
  "msn.com",
  "protonmail.com",
  "proton.me",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "gmx.com",
  "gmx.net",
  "fastmail.com",
  "tutanota.com",
  "tuta.com",
  "inbox.com",
  "mail.ru",
  "qq.com",
  "163.com",
  "126.com",
  "naver.com",
  "daum.net",
  "hanmail.net",
  "rediffmail.com",
]);

const DISPOSABLE_DOMAINS = new Set(disposableDomains as string[]);

function isBusinessEmail(email: string): { valid: boolean; reason?: string } {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return { valid: false, reason: "Invalid email address." };

  if (FREE_EMAIL_PROVIDERS.has(domain)) {
    return { valid: false, reason: "Please use your work email address." };
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { valid: false, reason: "Disposable email addresses are not allowed." };
  }

  return { valid: true };
}

export type FormState = {
  success: boolean;
  error?: string;
};

export async function submitDemoRequest(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const jobTitle = formData.get("jobTitle") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !company) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailCheck = isBusinessEmail(email);
  if (!emailCheck.valid) {
    return { success: false, error: emailCheck.reason };
  }

  const { error } = await resend.emails.send({
    from: "Vigolium <demo@contact.vigolium.com>",
    to: email,
    subject: `Demo Request Received - Vigolium`,
    template: {
      id: "14df6f3e-6e76-4635-a2ac-8cddbd8735f0",
      variables: {
        name,
        email,
        company,
        jobTitle: jobTitle || "",
        message: message || "",
      },
    },
  });

  if (error) {
    return { success: false, error: "Failed to send email. Please try again." };
  }

  return { success: true };
}
