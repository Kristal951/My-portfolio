import React from "react";
import {  FaGithub, FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-24 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-10 md:p-16 flex flex-col items-center justify-center text-center max-w-3xl w-full shadow-sm">
        <div className="w-full flex flex-col gap-4">
          <h1 className="w-full text-[var(--text)] tracking-tighter text-4xl md:text-5xl font-black">
            <span className="text-muted">Wanna talk?</span> Contact Me.
          </h1>

          <p className="text-base md:text-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Whether you have a specific project in mind or just want to chat
            about potential collaborations, I'm always open to new engineering
            challenges.
          </p>
        </div>

        <div className="w-full py-8 flex items-center justify-center">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--text)] border border-transparent px-8 py-3.5 text-lg font-bold text-[var(--bg)] hover:bg-transparent hover:text-[var(--text)] hover:border-[var(--text)] transition-all duration-300 ease-out cursor-pointer shadow-sm">
            <span>Start A Conversation</span>
          </button>
        </div>

        <div className="flex flex-row gap-4 mt-4 justify-center items-center">
          <a
            href="https://twitter.com/KristalDev001"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 p-3 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] border border-[var(--border)] hover:border-[var(--text)] rounded-xl transition-all duration-200 bg-[var(--bg)] cursor-pointer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-current"
            >
              <title>X</title>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="https://github.com/Kristal951"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 p-3 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] border border-[var(--border)] hover:border-[var(--text)] rounded-xl transition-all duration-200 bg-[var(--bg)] cursor-pointer"
          >
            <FaGithub className="w-full h-full" />
          </a>

          <a
            href="mailto:KristalDev001@gmail.com"
            className="w-12 h-12 p-3 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] border border-[var(--border)] hover:border-[var(--text)] rounded-xl transition-all duration-200 bg-[var(--bg)] cursor-pointer"
          >
            <IoMail className="w-full h-full" />
          </a>

          <a
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 p-3 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] border border-[var(--border)] hover:border-[var(--text)] rounded-xl transition-all duration-200 bg-[var(--bg)] cursor-pointer"
          >
            <FaDiscord className="w-full h-full" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
