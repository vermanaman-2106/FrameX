import { useState } from "react";

function StartProject() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!API_URL) {
      console.error("API URL not defined");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      business: e.target.business.value,
      projectType: e.target.projectType.value,
      cms: e.target.cms.value,
      pages: e.target.pages.value,
      budget: e.target.budget.value,
      notes: e.target.notes.value,
    };

    try {
      const response = await fetch(`${API_URL}/project-onboarding`, {
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

        // Optional redirect
        // window.location.href = "/thank-you";
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 bg-slate-950">
      <div className="w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-xl">

        {/* Header */}

        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white">
            Start Your Project
          </h1>
          <p className="text-slate-400 mt-2">
            Fill in the details below so our team can understand your requirements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Info */}

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-slate-300">Full Name *</label>
              <input
                name="name"
                required
                className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Email *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Phone / WhatsApp *</label>
              <input
                name="phone"
                required
                className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
                placeholder="+91"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Business Name</label>
              <input
                name="business"
                className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
                placeholder="Business / Brand name"
              />
            </div>

          </div>

          {/* Project Type */}

          <div>
            <label className="text-sm text-slate-300">
              Type of Website *
            </label>

            <select
              name="projectType"
              required
              className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
            >
              <option value="">Select</option>
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="Business Website">Business Website</option>
              <option value="E-commerce Website">E-commerce Website</option>
              <option value="Landing Page">Landing Page</option>
            </select>
          </div>

          {/* CMS */}

          <div>
            <label className="text-sm text-slate-300">
              Do you want a CMS to manage content?
            </label>

            <select
              name="cms"
              className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Pages */}

          <div>
            <label className="text-sm text-slate-300">
              Approx number of pages
            </label>

            <select
              name="pages"
              className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
            >
              <option value="3-5">3–5 pages</option>
              <option value="5-10">5–10 pages</option>
              <option value="10+">10+ pages</option>
            </select>
          </div>

          {/* Budget */}

          <div>
            <label className="text-sm text-slate-300">Budget Range</label>

            <select
              name="budget"
              className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
            >
              <option value="10k-20k">₹10k – ₹20k</option>
              <option value="20k-30k">₹20k – ₹30k</option>
              <option value="30k-50k">₹30k – ₹50k</option>
              <option value="50k+">₹50k+</option>
            </select>
          </div>

          {/* Notes */}

          <div>
            <label className="text-sm text-slate-300">
              Additional Notes
            </label>

            <textarea
              name="notes"
              rows="4"
              className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-white/10 text-white"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Status */}

          {status === "success" && (
            <p className="text-green-400 text-center">
              ✅ Project details submitted successfully. Our team will contact you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition"
          >
            {loading ? "Submitting..." : "Submit Project Details"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default StartProject;