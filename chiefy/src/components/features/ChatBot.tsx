"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz73VxQHVLzjKepgp5IeIFkjeLThmMjauGiy4FzyYfBhf5FJBCx8gA9ytMDb4woJUMX/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative animate-bounce"
          aria-label="Open chat"
        >
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-[#0A0A0A] rounded-2xl w-[320px] sm:w-[340px] shadow-2xl border border-purple-500/20 backdrop-blur-lg transform transition-all duration-300">
          <div className="p-4 border-b border-purple-500/20 flex items-center justify-between bg-gradient-to-r from-purple-900/50 to-pink-900/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-xl text-white">💬</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Chiefy Chat</h3>
                <p className="text-xs text-white/70">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6">
            {!isSubmitted ? (
              <>
                <div className="mb-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-xl border border-purple-500/20">
                  <p className="text-white/90">
                    G'day! 👋 Chiefy's here, ready to give you a hand... what
                    can I sort out for you today?
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white/70 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 min-h-[120px] transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    {!isLoading && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  Thanks for reaching out!
                </h4>
                <p className="text-white/70">
                  Our team will get in touch with you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
