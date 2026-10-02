"use client";

import React, { useState } from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ArrowLeft, Send } from "lucide-react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = form.subject || `Message from ${form.name}`;

    const body = `Hi Nonso,

My name is ${form.name}.
My email is ${form.email}.

${form.message}

Best,
${form.name}`;

    const mailto = `mailto:KristalDev001@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen w-full items-center justify-center border-t border-[var(--border)] bg-[var(--bg)] px-6 py-24"
    >
      <div
        className={`w-full rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-500 ${
          showForm ? "max-w-3xl" : "max-w-3xl"
        }`}
      >
        {!showForm ? (
          <div className="flex flex-col items-center justify-center p-8 text-center md:p-16">
            <div className="w-full">
              <h1 className="text-4xl font-black tracking-tighter text-[var(--text)] md:text-5xl">
                <span className="text-[var(--muted)]">Wanna talk?</span>{" "}
                Contact Me.
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Whether you have a specific project in mind or just want to
                chat about potential collaborations, I'm always open to new
                ideas and engineering challenges.
              </p>
            </div>


            <div className="py-9">
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--text)] px-7 py-3.5 text-base font-bold text-[var(--bg)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 active:translate-y-0"
              >
                <Send className="h-4 w-4" />
                Start a Conversation
              </button>
            </div>

            <div className="mt-2 flex items-center justify-center gap-3">
              <a
                href="https://twitter.com/kristal_dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2.5 text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--text)] hover:text-[var(--text)]"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full fill-current"
                >
                  <title>X</title>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://github.com/Kristal951"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2.5 text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--text)] hover:text-[var(--text)]"
              >
                <FaGithub className="h-full w-full" />
              </a>

              <a
                href="mailto:KristalDev001@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2.5 text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--text)] hover:text-[var(--text)]"
              >
                <IoMail className="h-full w-full" />
              </a>

              <a
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2.5 text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--text)] hover:text-[var(--text)]"
              >
                <FaDiscord className="h-full w-full" />
              </a>
            </div>
          </div>
        ) : (

          <div className="p-6 sm:p-8 md:p-12">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back
            </button>

            <div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[var(--text)] md:text-4xl">
                Let’s start a conversation.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)] md:text-base">
                Tell me a little about what you're working on, what you need,
                or simply say hello.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[var(--text)]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[var(--text)]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[var(--text)]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[var(--text)]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or anything you'd like to discuss..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm leading-6 text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--muted)] transition-colors hover:border-[var(--text)] hover:text-[var(--text)]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--text)] px-6 py-3 text-sm font-bold text-[var(--bg)] transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;