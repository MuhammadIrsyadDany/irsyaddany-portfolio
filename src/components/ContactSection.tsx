import React, { useState } from 'react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { Copy, Check, ArrowUpRight, Send, FileText, MessageSquare } from 'lucide-react';
import { Animate, fadeUp } from './ScrollAnimations';

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
      className="py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A] tactical-grid-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Header: // Signal Available Q1 2027 */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="text-signal-orange font-bold">//</span>
            <span className="text-white uppercase font-bold tracking-wider">Signal</span>
          </div>
          <div className="flex items-center gap-2 text-signal-orange font-bold">
            <span className="w-2 h-2 rounded-full bg-signal-orange animate-signal-pulse" />
            <span>AVAILABLE Q1 2027 // READY FOR HIRE</span>
          </div>
        </div>

        {/* Alter Massive Display Headline: SEND THE SIGNAL */}
        <div className="mb-14 sm:mb-20">
          <Animate variants={fadeUp}>
            <h2 className="font-display text-[clamp(3.5rem,11vw,9.5rem)] font-black uppercase tracking-tight text-white leading-[0.84]">
              SEND THE <span className="text-signal-orange">SIGNAL.</span>
            </h2>
          </Animate>

          <Animate variants={fadeUp} custom={1}>
            <p className="mt-6 text-lg sm:text-2xl text-white/70 font-sans max-w-2xl leading-relaxed">
              Got a product that’s hard to engineer, or an enterprise system that needs building? One email and I’m on it.
            </p>
          </Animate>
        </div>

        {/* Alter Layout: Direct Email Link & Transmission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Email Action & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Big Email */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1013] border border-white/10 relative overflow-hidden shadow-2xl">
              <span className="text-[10px] font-mono text-signal-orange uppercase tracking-wider block mb-2">
                // DIRECT DISPATCH
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-alter uppercase text-xl sm:text-2xl font-bold text-white hover:text-signal-orange transition-colors break-all block"
              >
                {personalInfo.email}
              </a>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Transmisi Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-signal-orange" />
                      <span>Salin Alamat Email</span>
                    </>
                  )}
                </button>
                <span className="text-[10px] font-mono text-white/40">Gresik &amp; Malang, ID</span>
              </div>
            </div>

            {/* Social Coordinates */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider mb-2">
                // PROFESSIONAL COORDINATES
              </div>

              {[
                { label: 'Instagram', sub: '@rsydanyy', href: personalInfo.instagram, icon: InstagramIcon },
                { label: 'LinkedIn', sub: 'in/muhammadirsyaddany', href: personalInfo.linkedin, icon: LinkedinIcon },
                { label: 'GitHub', sub: 'github.com/MuhammadIrsyadDany', href: personalInfo.github, icon: GithubIcon },
                { label: 'WhatsApp', sub: '+62-899-7984-448', href: 'https://wa.me/628997984448', icon: MessageSquare },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/50 hover:bg-[#12151B] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#15181C] flex items-center justify-center text-signal-orange group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-alter uppercase text-sm font-bold text-white group-hover:text-signal-orange transition-colors">
                          {s.label}
                        </span>
                        <span className="block text-xs font-mono text-white/50">{s.sub}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-signal-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Tactical Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1013] border border-white/15 relative overflow-hidden shadow-2xl">
              <div className="tactical-corner-tl" />
              <div className="tactical-corner-tr" />
              <div className="tactical-corner-bl" />
              <div className="tactical-corner-br" />

              <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 mb-6">
                <span className="text-signal-orange font-bold">// TRANSMISSION DISPATCH FORM</span>
                <span className="text-white/40">STATUS: OPEN</span>
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
                    Klien email Anda telah terbuka dengan draf pesan. Terima kasih, saya akan membalas secepatnya.
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
                      placeholder="Ceritakan proyek, kebutuhan tim, atau peluang kerja sama..."
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
