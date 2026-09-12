import React, { useState } from 'react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { Animate, fadeUp, blurIn, fadeLeft, fadeRight } from './ScrollAnimations';

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
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border-faint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag">
              <span>06</span>
              <span className="text-border-soft">/</span>
              <span>Get In Touch</span>
            </div>
          </Animate>
          <Animate variants={blurIn} custom={1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-primary max-w-2xl">
              Have an opportunity or project in mind? Let's connect.
            </h2>
          </Animate>
          <Animate variants={fadeUp} custom={2}>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl leading-reading">
              Saya terbuka untuk kesempatan kerja penuh waktu sebagai Web Developer, kolaborasi rekayasa perangkat lunak, maupun diskusi teknis seputar proyek web.
            </p>
          </Animate>
        </div>

        {/* Main Content Grid: Direct Channels (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Direct Action & Socials */}
          <Animate variants={fadeLeft} className="lg:col-span-5 w-full">
          <div className="space-y-6">

            {/* Direct Email Card */}
            <div className="card rounded-2xl p-6 space-y-3">
              <p className="text-2xs uppercase text-violet-light font-semibold tracking-wider">Direct Email Channel</p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-ink-primary hover:text-violet-light transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-bg-surface border border-border-faint hover:border-border-subtle text-ink-muted hover:text-ink-primary transition-colors shrink-0"
                  aria-label="Copy email address"
                  title="Salin alamat email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-2xs font-medium text-emerald-400">Email berhasil disalin ke clipboard!</p>
              )}
            </div>

            {/* Social Links List */}
            <div className="space-y-3">
              <p className="text-2xs uppercase text-ink-muted font-semibold tracking-wider">Tautan Profesional</p>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-xl p-4 flex items-center justify-between hover:border-border-soft transition-all group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-violet-light" />
                  <div>
                    <p className="text-sm font-semibold text-ink-primary">GitHub</p>
                    <p className="text-xs text-ink-muted">github.com/MuhammadIrsyadDany</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-violet-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-xl p-4 flex items-center justify-between hover:border-border-soft transition-all group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-violet-light" />
                  <div>
                    <p className="text-sm font-semibold text-ink-primary">LinkedIn</p>
                    <p className="text-xs text-ink-muted">linkedin.com/in/muhammadirsyaddany</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-violet-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
          </Animate>

          {/* Right Column: Clean Contact Form */}
          <Animate variants={fadeRight} custom={1} className="lg:col-span-7 w-full">
          <div>
            <div className="card rounded-2xl p-7 sm:p-9 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-ink-primary">Kirim Pesan Langsung</h3>
                <p className="text-xs text-ink-muted mt-1">
                  Isi formulir berikut untuk langsung menghubungi saya via email.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-violet-dim border border-violet-light/30 text-center space-y-2">
                  <p className="text-sm font-bold text-ink-primary">Terima kasih atas pesan Anda!</p>
                  <p className="text-xs text-ink-muted">Aplikasi email Anda akan terbuka untuk mengirimkan pesan ini.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-2xs uppercase text-ink-muted mb-1.5 font-semibold tracking-wider">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama Anda..."
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-subtle focus:border-violet-light focus:outline-none text-sm text-ink-primary placeholder-ink-faint transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-2xs uppercase text-ink-muted mb-1.5 font-semibold tracking-wider">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-subtle focus:border-violet-light focus:outline-none text-sm text-ink-primary placeholder-ink-faint transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-2xs uppercase text-ink-muted mb-1.5 font-semibold tracking-wider">
                      Pesan atau Keterangan Proyek
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Sampaikan detail pesan atau peluang kerja..."
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-subtle focus:border-violet-light focus:outline-none text-sm text-ink-primary placeholder-ink-faint transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Kirim Pesan</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
          </Animate>

        </div>

      </div>
    </section>
  );
};
