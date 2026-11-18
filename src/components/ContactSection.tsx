import React, { useState } from 'react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { Copy, Check, ArrowUpRight, Send, Terminal, Mail, Phone, FileText, MessageSquare } from 'lucide-react';
import { Animate, fadeUp, fadeLeft, fadeRight } from './ScrollAnimations';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Signal Transmission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A] tactical-grid-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Section Header: SEND THE SIGNAL // Available Q1 2027 */}
        <div className="mb-14 sm:mb-20">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag mb-4">
              <span>06</span>
              <span className="text-white/20">/</span>
              <span>SIGNAL TRANSMISSION</span>
              <span className="text-signal-orange text-[10px] ml-2">// AVAILABLE NOW</span>
            </div>
          </Animate>

          <Animate variants={fadeUp} custom={1}>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.88] max-w-4xl">
              SEND THE <span className="text-signal-orange">SIGNAL.</span>
            </h2>
          </Animate>

          <Animate variants={fadeUp} custom={2}>
            <p className="mt-5 text-base sm:text-xl text-white/70 font-sans max-w-2xl leading-relaxed">
              Got a system that needs building, an engineering team to reinforce, or a product ready to ship? One transmission and I’m on it.
            </p>
          </Animate>
        </div>

        {/* Alter Layout: Direct Channel Radar (Left) & Transmission Console (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Action & Coordinates */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card with Quick Copy */}
            <div className="p-6 rounded-2xl bg-[#0E1013] border border-white/15 relative overflow-hidden group shadow-xl">
              <div className="flex items-center justify-between text-[10px] font-mono text-signal-orange uppercase tracking-wider mb-2">
                <span>// DIRECT TRANSMISSION CHANNEL</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="flex items-center justify-between gap-3 mt-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-alter uppercase text-xl sm:text-2xl font-bold text-white hover:text-signal-orange transition-colors break-all"
                >
                  {personalInfo.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#15181C] border border-white/10 hover:border-signal-orange text-white/70 hover:text-white transition-all shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied ? (
                <p className="mt-2 text-xs font-mono text-emerald-400">
                  Transmisi berhasil disalin ke clipboard!
                </p>
              ) : (
                <p className="mt-2 text-xs font-mono text-white/40">
                  Klik alamat email atau ikon salin untuk mengirim pesan instan.
                </p>
              )}
            </div>

            {/* Social Coordinates Radar */}
            <div className="space-y-2.5">
              <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider mb-1">
                // SOCIAL &amp; PROFESSIONAL COORDINATES
              </div>

              {/* Instagram */}
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/50 hover:bg-[#12151B] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#15181C] flex items-center justify-center text-signal-orange group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-alter uppercase text-sm font-bold text-white group-hover:text-signal-orange transition-colors">
                      Instagram
                    </span>
                    <span className="block text-xs font-mono text-white/50">@rsydanyy</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-signal-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/50 hover:bg-[#12151B] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#15181C] flex items-center justify-center text-signal-orange group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-alter uppercase text-sm font-bold text-white group-hover:text-signal-orange transition-colors">
                      LinkedIn
                    </span>
                    <span className="block text-xs font-mono text-white/50">in/muhammadirsyaddany</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-signal-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/50 hover:bg-[#12151B] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#15181C] flex items-center justify-center text-signal-orange group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-alter uppercase text-sm font-bold text-white group-hover:text-signal-orange transition-colors">
                      GitHub
                    </span>
                    <span className="block text-xs font-mono text-white/50">github.com/MuhammadIrsyadDany</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-signal-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/628997984448"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/50 hover:bg-[#12151B] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#15181C] flex items-center justify-center text-signal-orange group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-alter uppercase text-sm font-bold text-white group-hover:text-signal-orange transition-colors">
                      WhatsApp Direct
                    </span>
                    <span className="block text-xs font-mono text-white/50">+62-899-7984-448</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-signal-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Tactical Transmission Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1013] border border-white/15 relative overflow-hidden shadow-2xl">
              {/* Tactical Corners */}
              <div className="tactical-corner-tl" />
              <div className="tactical-corner-tr" />
              <div className="tactical-corner-bl" />
              <div className="tactical-corner-br" />

              <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 mb-6">
                <span className="text-signal-orange font-bold">// TRANSMISSION DISPATCH FORM</span>
                <span className="text-white/40">ENCRYPTION: STANDARD</span>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-signal-orange/20 border border-signal-orange text-signal-orange mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-alter uppercase text-2xl font-bold text-white">
                    SIGNAL TRANSMITTED
                  </h3>
                  <p className="text-sm text-white/70 font-sans max-w-sm mx-auto">
                    Klien email Anda telah terbuka dengan draft pesan. Terima kasih atas transmisinya, saya akan membalas segera.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary text-xs mt-4"
                  >
                    Kirim Transmisi Baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                      NAME / SENDER IDENTITY
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan / Tech Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15181C] border border-white/10 focus:border-signal-orange focus:outline-none text-white text-sm font-sans placeholder:text-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15181C] border border-white/10 focus:border-signal-orange focus:outline-none text-white text-sm font-sans placeholder:text-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                      MESSAGE / TRANSMISSION BRIEF
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Ceritakan proyek, tantangan sistem, atau peluang kerja sama..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15181C] border border-white/10 focus:border-signal-orange focus:outline-none text-white text-sm font-sans placeholder:text-white/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto"
                    >
                      <Send className="w-4 h-4 mr-1" />
                      <span>Transmit Signal Now</span>
                    </button>

                    <a
                      href="/documents/CV_Muhammad_Irsyad_Dany.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-center text-xs"
                    >
                      <FileText className="w-3.5 h-3.5 mr-1" />
                      <span>Unduh CV Resmi (PDF)</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
