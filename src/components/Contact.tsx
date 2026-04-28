"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, email, phone, message } = formData;
    
    // Construct Email Message
    const subject = `New Portfolio Inquiry from ${name}`;
    const body = `Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

    const mailtoUrl = `mailto:atultiwari997721@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  const whatsappUrl = "https://wa.me/917828706954?text=Hi%20Atul%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20work%20together!";

  return (
    <section id="contact" className="py-6 md:py-24 relative z-10 px-3 md:px-6">
      <div className="max-w-4xl mx-auto">
      <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="glass-card rounded-[1.5rem] md:rounded-[3rem] p-4 md:p-14 text-left border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur-xl"
        >
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500"></div>

            <div className="text-left mb-4 md:mb-10">
                 <span className="inline-block py-0.5 px-2 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2 md:mb-4">
                    ✨ Contact
                 </span>
                <h2 className="text-xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-2 md:mb-4 font-syne leading-tight break-words hyphens-auto">
                    Let&apos;s make something <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900 dark:from-slate-200 dark:to-slate-500">
                        awesome together!
                    </span>
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-2 md:ml-4">Your Name*</label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your name" className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                </div>
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-2 md:ml-4">Company Name</label>
                    <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Enter company name" className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                </div>
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-2 md:ml-4">Email Address*</label>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email" className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                </div>
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-2 md:ml-4">Phone Number*</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Enter phone number" className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                </div>
                 <div className="col-span-1 md:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-2 md:ml-4">A Few Words*</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project" rows={3} className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"></textarea>
                </div>
                
                 <div className="col-span-1 md:col-span-2 mt-2 md:mt-4 flex flex-col sm:flex-row gap-3">
                    <button type="submit" className="flex-1 py-3 md:py-4 rounded-[1.5rem] md:rounded-[2rem] bg-violet-600 text-white font-bold text-sm md:text-lg tracking-wide shadow-lg shadow-violet-600/20 hover:bg-violet-700 transition-all hover:-translate-y-1">
                        Send Message
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 md:py-4 rounded-[1.5rem] md:rounded-[2rem] bg-green-500 text-white font-bold text-sm md:text-lg tracking-wide shadow-lg shadow-green-500/20 hover:bg-green-600 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} /> WhatsApp Me
                    </a>
                </div>
            </form>

            {/* Footer Info Grid */}
            <div className="mt-6 md:mt-14 pt-4 md:pt-10 border-t border-black/5 dark:border-white/10 grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8">
                <div>
                    <h4 className="text-xs md:text-base font-bold text-slate-900 dark:text-white mb-1 md:mb-2">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-[10px] md:text-sm">Indore, MP India</p>
                </div>
                <div>
                    <h4 className="text-xs md:text-base font-bold text-slate-900 dark:text-white mb-1 md:mb-2">Phone</h4>
                    <a href="tel:+917828706954" className="text-slate-600 dark:text-slate-400 text-[10px] md:text-sm hover:text-violet-500 transition-colors">+91 78287 06954</a>
                </div>
                <div>
                    <h4 className="text-xs md:text-base font-bold text-slate-900 dark:text-white mb-1 md:mb-2">Email</h4>
                    <a href="mailto:atultiwari997721@gmail.com" className="text-slate-600 dark:text-slate-400 text-[10px] md:text-sm hover:text-violet-500 transition-colors break-all">atultiwari997721@gmail.com</a>
                </div>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/10 flex justify-between items-center flex-wrap gap-4">
                <p className="text-slate-600 dark:text-slate-500 text-sm font-medium">
                    © {new Date().getFullYear()} Atul Tiwari.
                </p>
                <div className="flex gap-4">
                     <SocialIcon href="mailto:atultiwari997721@gmail.com" Icon={Mail} />
                     <SocialIcon href="https://github.com/atultiwari997721" Icon={Github} />
                     <SocialIcon href={whatsappUrl} Icon={MessageCircle} />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ Icon, href }: { Icon: any, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-black/5 dark:border-white/10">
            <Icon size={18} />
        </a>
    )
}
