"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
