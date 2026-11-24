import React from 'react'
import { Linkedin, Github, Mail, UserCheck } from 'lucide-react'

export const Founder = () => {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-[#080C14] border-t border-white/[0.08]">
      <div className="container-xl">
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-accent-light block mb-4">
            [ 05 / Studio Leadership & Team ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Real people. Senior leadership. Zero anonymity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            International clients vet who is actually building their systems. Here is who leads the architecture and code.
          </p>
        </div>

        {/* Founder Card */}
        <div className="rounded-2xl bg-[#0D1526] border border-white/10 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Avatar / Monogram */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-28 h-28 rounded-2xl bg-brand-navy-dark border border-white/20 flex items-center justify-center text-white shadow-lg mb-5">
                <span className="font-mono text-3xl font-extrabold tracking-tight text-white">AI</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">Abdullahi Ismail</h3>
              <p className="text-sm font-mono text-brand-accent-light mt-1">Founder & Principal Systems Architect</p>
              <p className="text-xs text-slate-400 mt-0.5">Operating as Abuaslam Tech Lab (AtlabX)</p>

              {/* Direct Channels */}
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="https://github.com/abuaslam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:hello@atlabx.com"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  aria-label="Direct Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Bio & Engagement Model */}
            <div className="lg:col-span-8 space-y-6 text-slate-300 text-base leading-relaxed">
              <p>
                Abdullahi Ismail is a software engineer and systems architect specializing in custom web applications, mobile platforms, and resilient backend infrastructure. Based in Zaria, Nigeria, Abdullahi directly oversees technical strategy, system modeling, and production deployment across all client engagements.
              </p>

              <div className="p-6 rounded-xl bg-[#080C14] border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <UserCheck size={16} className="text-brand-electric" />
                  <span>The Studio Operating Model: Transparent & Lean</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  We don't inflate agency headcount to justify bloated retainers. Projects are architected and led directly by Abdullahi, partnering with a vetted network of senior specialists (mobile engineers, frontend designers, DevOps) when scaling capacity. You always work with senior engineers designing the architecture — zero junior staffing, zero communication drag.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Direct Technical Access
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-electric" />
                  Zero Junior Hand-Offs
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/60" />
                  Mutual NDA Standard
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder