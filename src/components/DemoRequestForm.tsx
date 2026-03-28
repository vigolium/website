"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { submitDemoRequest, type FormState } from "@/app/request-demo/actions";

const initialState: FormState = { success: false };

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  backgroundColor: "transparent",
  border: "1px solid rgba(252,232,195,0.12)",
  borderRadius: "6px",
  color: "#fce8c3",
  fontSize: "0.85rem",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#918175",
  marginBottom: "6px",
};

function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div>
      <label htmlFor={name} style={labelStyle}>
        {label}
        {required && (
          <span style={{ color: "#f75341", marginLeft: "4px" }}>*</span>
        )}
      </label>
      <Tag
        id={name}
        name={name}
        type={textarea ? undefined : type}
        required={required}
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
        style={{
          ...inputStyle,
          ...(textarea
            ? { resize: "vertical" as const, minHeight: "100px" }
            : {}),
        }}
        onFocus={(e) => {
          (e.target as HTMLElement).style.borderColor =
            "rgba(80,250,123,0.4)";
        }}
        onBlur={(e) => {
          (e.target as HTMLElement).style.borderColor =
            "rgba(252,232,195,0.12)";
        }}
      />
    </div>
  );
}

export function DemoRequestForm() {
  const [state, formAction, pending] = useActionState(
    submitDemoRequest,
    initialState,
  );

  if (state.success) {
    return (
      <div className="text-center" style={{ padding: "2rem 0" }}>
        <CheckCircle
          size={40}
          style={{ color: "#50fa7b", margin: "0 auto 16px" }}
        />
        <h3
          className="ng-heading"
          style={{ fontSize: "1.3rem", marginBottom: "8px" }}
        >
          Request Received
        </h3>
        <p className="ng-body" style={{ fontSize: "0.85rem" }}>
          Thank you for your interest in Vigolium. We&apos;ll be in touch
          shortly with details about your demo.
        </p>
        <div style={{ marginTop: "24px" }}>
          <Link
            href="/"
            className="ng-link inline-flex items-center gap-2"
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          label="Full Name"
          name="name"
          required
          placeholder="Jane Smith"
        />
        <FormField
          label="Work Email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          label="Company"
          name="company"
          required
          placeholder="Acme Corp"
        />
        <FormField
          label="Job Title"
          name="jobTitle"
          placeholder="Security Engineer"
        />
      </div>

      <FormField
        label="What are you interested in?"
        name="message"
        textarea
        placeholder="Share more about what you'd like to know or your current security challenges..."
      />

      {state.error && (
        <div
          className="flex items-center gap-2"
          style={{
            color: "#f75341",
            fontSize: "0.8rem",
            padding: "8px 12px",
            border: "1px solid rgba(247,83,65,0.2)",
            borderRadius: "6px",
          }}
        >
          <AlertCircle size={14} />
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="relative overflow-hidden"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "12px 32px",
          border: "1px solid #50fa7b",
          color: pending ? "#1c1b19" : "#50fa7b",
          backgroundColor: pending ? "#50fa7b" : "transparent",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          cursor: pending ? "not-allowed" : "pointer",
          transition: "all 0.2s ease",
          opacity: pending ? 0.7 : 1,
          width: "100%",
          marginTop: "4px",
        }}
        onMouseEnter={(e) => {
          if (!pending) {
            e.currentTarget.style.backgroundColor = "#50fa7b";
            e.currentTarget.style.color = "#1c1b19";
          }
        }}
        onMouseLeave={(e) => {
          if (!pending) {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#50fa7b";
          }
        }}
      >
        <Send size={14} />
        {pending ? "Submitting..." : "Request Demo"}
      </button>
    </form>
  );
}
