import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "up0601@srmist.edu.in",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6382929030",
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "SRM University, Kattankulathur",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-xl text-blue-300 mt-4">Ready to create something amazing together?</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-strong rounded-2xl p-6 flex items-center gap-6 group cursor-pointer neon-box-glow"
                >
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-br ${info.gradient} relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                    
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-white/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                  
                  <div>
                    <p className="text-sm text-blue-400 mb-1">{info.label}</p>
                    <p className="text-lg font-semibold text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Decorative Element */}
              <motion.div
                className="relative h-64 glass rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20" />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-24 h-24 text-cyan-400/30" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 space-y-6 neon-box-glow">
                {/* Name Field */}
                <div>
                  <label className="block text-base font-medium text-blue-300 mb-2">Name</label>
                  <motion.div
                    animate={{
                      boxShadow: focusedField === 'name'
                        ? '0 0 20px rgba(59, 130, 246, 0.5)'
                        : '0 0 0px rgba(59, 130, 246, 0)',
                    }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 text-base glass border border-blue-500/30 rounded-xl text-white placeholder-blue-400/50 focus:outline-none focus:border-cyan-400 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </motion.div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-base font-medium text-blue-300 mb-2">Email</label>
                  <motion.div
                    animate={{
                      boxShadow: focusedField === 'email'
                        ? '0 0 20px rgba(6, 182, 212, 0.5)'
                        : '0 0 0px rgba(6, 182, 212, 0)',
                    }}
                    className="relative"
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 text-base glass border border-blue-500/30 rounded-xl text-white placeholder-blue-400/50 focus:outline-none focus:border-cyan-400 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-base font-medium text-blue-300 mb-2">Message</label>
                  <motion.div
                    animate={{
                      boxShadow: focusedField === 'message'
                        ? '0 0 20px rgba(59, 130, 246, 0.5)'
                        : '0 0 0px rgba(59, 130, 246, 0)',
                    }}
                    className="relative"
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="w-full px-4 py-4 text-base glass border border-blue-500/30 rounded-xl text-white placeholder-blue-400/50 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </motion.div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 text-lg btn-neon rounded-xl font-semibold text-white flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
