import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import { toast } from "sonner";

import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { postFeedbackRequest } from "@/services/feedbackService";
import { Input } from "@/components/ui/Input";

const FloatingInput = ({ label, ...props }) => (
  <div className="relative">
    <Input placeholder=" " {...props} />

    <label
      className="
      absolute left-4 top-4
      pointer-events-none
      text-[var(--muted)]
      
      transition-all duration-200
      
      peer-placeholder-shown:text-base
      peer-placeholder-shown:top-4
      
      peer-focus:-top-2
      peer-focus:text-xs
      peer-focus:text-[var(--primary)]

      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-xs

      bg-[var(--card)]
      px-2
      rounded-md
      "
    >
      {label}
    </label>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.warning("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      await postFeedbackRequest(formData);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.success("Message sent successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Backend server is not hosted!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg)] px-4 py-20 text-[var(--fg)] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px] dark:bg-blue-400/10" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px] dark:bg-cyan-300/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Build Something"
          highlight="Amazing Together"
          description="Whether you have a project, job opportunity, or just want to say hello, my inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
          </span>

          <span className="text-sm font-medium text-green-500">
            Available for Full-time & Freelance
          </span>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlassCard className="h-full p-6 sm:p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-[var(--fg)]">
                  Get In Touch
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">
                  I am currently open for full-time roles, freelance projects,
                  and exciting collaborations. Feel free to reach out anytime.
                </p>
              </div>

              <div className="space-y-5">

                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-md"
                >
                  <div className="icon-glass h-14 w-14">
                    <FiMail className="text-2xl text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--fg)]">Email</h4>
                    <a
                      href="mailto:rajtayade2492006@gmail.com"
                      className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition"
                    >
                      rajtayade2492006@gmail.com
                    </a>
                    {/* <p className="text-sm text-[var(--muted)]">
                      rajtayade2492006@gmail.com
                    </p> */}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-md"
                >   <div className="icon-glass h-14 w-14">
                    <FiPhone className="text-2xl text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--fg)]">Phone</h4>
                    <p className="text-sm text-[var(--muted)]">
                      +91 87674 58908
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-md"
                >
                  <div className="icon-glass h-14 w-14">
                    <FiMapPin className="text-2xl text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--fg)]">Location</h4>
                    <p className="text-sm text-[var(--muted)]">
                      Pune, Maharashtra
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="my-8 h-px bg-[var(--border)]" />

              <div className="mt-8 flex gap-4">
                <motion.a
                  whileHover={{
                    y: -5,
                    rotate: -6,
                    scale: 1.08
                  }}
                  href="https://github.com/rajtayade24"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="icon-glass h-14 w-14 text-[var(--fg)] transition hover:-translate-y-1 hover:bg-[var(--card-strong)]"
                >
                  <FiGithub className="text-2xl" />
                </motion.a>

                <motion.a
                  whileHover={{
                    y: -5,
                    rotate: -6,
                    scale: 1.08
                  }}
                  href="https://www.linkedin.com/in/raj-tayade-68a800328/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="icon-glass h-14 w-14 text-[var(--fg)] transition hover:-translate-y-1 hover:bg-[var(--card-strong)]"
                >
                  <FiLinkedin className="text-2xl" />
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlassCard className="h-full p-6 sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <FloatingInput
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <FloatingInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

                <FloatingInput
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <div className="relative">
                  <textarea
                    rows={7}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="
                          peer
                          w-full
                          rounded-2xl
                          border border-[var(--border)]
                          bg-[var(--card)]
                          px-4 pt-6 pb-3
                          text-[var(--fg)]
                          resize-none
                          transition-all duration-300

                          focus:outline-none
                          focus:border-[var(--primary)]
                          focus:ring-4
                          focus:ring-[color-mix(in_srgb,var(--primary)_18%,transparent)]
                          focus:shadow-[0_0_24px_color-mix(in_srgb,var(--primary)_25%,transparent)]
                        "
                  />

                  <label
                    className="
                          absolute left-4 top-4
                          pointer-events-none
                          bg-[var(--card)]
                          px-2
                          rounded-md
                          text-[var(--muted)]
    
                          transition-all duration-200
    
                          peer-placeholder-shown:top-4
                          peer-placeholder-shown:text-base
    
                          peer-focus:-top-2
                          peer-focus:text-xs
                          peer-focus:text-[var(--primary)]
    
                          peer-not-placeholder-shown:-top-2
                          peer-not-placeholder-shown:text-xs
                        "
                  >
                    Message
                  </label>
                </div>

                <Button type="submit" className="w-full relative overflow-hidden " variant="primary">
                  <span className="relative z-10 flex items-center justify-center gap-2">

                    {loading ? "Sending..." : "Send Message"}

                    <FiSend className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    "/>

                  </span>

                  <div className="
                    absolute
                    inset-0
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                    bg-white/10
                    "/>
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Contact;