import { useState } from "react";
import Button from "../components/Button.jsx";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form Error:", error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center py-10 sm:py-16">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-framex-soft backdrop-blur-xl sm:p-8">

        {/* Header */}
        <div className="mb-6 space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Contact
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Let&apos;s discuss your project.
          </h1>
          <p className="text-sm text-slate-300">
            Share a few details about what you&apos;re building. We&apos;ll follow up
            with a short note and a link to book time with our team.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-6 space-y-3 text-sm text-slate-300">
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
            <p>
              <span className="text-slate-400">Email</span>{" "}
              <span className="font-medium text-slate-100">
                framexstudio000@gmail.com
              </span>
            </p>

            <p>
              <span className="text-slate-400">Phone</span>{" "}
              <span className="font-medium text-slate-100">
                +91 94579 60622
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              href="https://wa.me/919457960622"
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
            >
              WhatsApp our team
            </Button>
          </div>
        </div>

        {/* Form */}
        <form
          className="space-y-4 text-sm text-slate-200"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-slate-300"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-xs font-medium text-slate-300"
              >
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="+91-00000-00000"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-medium text-slate-300"
              >
                Project details
              </label>

              <input
                id="message"
                name="message"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="Website, app, performance marketing, timelines…"
              />
            </div>
          </div>

          {/* Status messages */}

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully. Our team will contact you soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          {/* Submit Button */}

          <div className="pt-2">
            <Button type="submit" fullWidth disabled={loading}>
              {loading
                ? "Sending... (first request may take ~30s)"
                : "Submit project details"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;