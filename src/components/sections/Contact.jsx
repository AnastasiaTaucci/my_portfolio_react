import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  // Keeps the spinner visible for at least 0.8s
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setFormMessage("");

    const start = Date.now();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      const elapsed = Date.now() - start;

      if (elapsed < 800) {
        await delay(800 - elapsed);
      }

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.log(error);

      const elapsed = Date.now() - start;

      if (elapsed < 800) {
        await delay(800 - elapsed);
      }

      setStatus("error");
      if (!navigator.onLine) {
        setFormMessage(
          "You appear to be offline. Please check your connection and try again.",
        );
      } else {
        setFormMessage(
          "Something went wrong. Please try again or email me directly.",
        );
      }

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2
            className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    mb-8
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-600
                    bg-clip-text
                    text-transparent
                    text-center
                "
          >
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="Your name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              ></input>
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>
            <div>
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                minLength={10}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="Write your message here..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full text-white py-3 px-6 rounded font-medium transition overflow-hidden
                ${
                  status === "success"
                    ? "bg-green-500"
                    : status === "error"
                      ? "bg-red-500"
                      : "bg-blue-500"
                }
                ${
                  status === "sending"
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                }
              `}
            >
              {status === "sending" && (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  <span>Sending</span>
                </div>
              )}

              {status === "idle" && "Send Message"}
              {status === "success" && "Sent!"}
              {status === "error" && "Try Again"}
            </button>

            {/* message text */}
            {formMessage && (
              <p className={"text-sm text-center text-red-400"}>
                {formMessage}
              </p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
