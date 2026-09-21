"use client";

import { useState, type FormEvent } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "rounded-xl border border-black/15 bg-white px-4 py-3.5 font-sans text-sm text-foreground shadow-sm transition-colors placeholder:text-foreground/40 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";

const labelClasses =
  "font-mono text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-8 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
        <p className="rounded-xl border border-brand-primary/20 bg-brand-tint/40 p-6 font-sans text-base text-foreground">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project..."
          className={`${fieldClasses} resize-none`}
        />
      </div>

      {status === "error" ? (
        <p className="font-sans text-sm text-red-600">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-primary px-10 py-4 font-sans text-sm font-semibold text-white shadow-md shadow-brand-primary/20 transition-colors hover:bg-brand-mid disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        {status !== "submitting" ? (
          <span aria-hidden="true">&rarr;</span>
        ) : null}
      </button>
    </form>
  );
}
