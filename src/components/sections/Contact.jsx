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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setFormMessage("");

    // function for spinner for at least 0.8s
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const start = Date.now();

    await emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then((result) => {
        setStatus("success");
        setFormMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus("idle");
          setFormMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);

        setStatus("error");
        setFormMessage("Something went wrong. Please try again.");

        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      });

      const elapsed = Date.now() - start;

      if (elapsed < 800) {
        await delay(800 - elapsed);
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
            <div className="relative">
              <input
                type="text"
                id="home"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              ></input>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            {formMessage && (
              <p
                className={`text-sm text-center ${status === "success" ? "text-green-400" : "text-red-400"}`}
              >
                {formMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden
                ${
                  status === "success" ? "bg-green-500" :
                  status === "error" ? "bg-red-500" : "bg-blue-500"
                }
                ${
                  status === "sending" ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                }
              `}
            >
              {/* message text */}

              {status === "sending" && (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  <span>Sending</span>
                </div>
              )}

              {status === "idle" && "Send Message"}
              {status === "success" && "Sent!"}
              {status === "error" && "Try Again"}

              
              {}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
