import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Plus, Minus, Mail, Phone, MessageCircle, Globe, ChevronRight } from 'lucide-react';

// --- DATA EXTRACTION & STRUCTURE --- //

const servicesData = [
  {
    id: '01',
    title: 'Web Design & Development',
    tagline: 'Your digital storefront, built to impress and convert',
    img: '/images/web-dev.png',
    desc: "Your website is often the first — and most lasting — impression you make. We design and build websites that don't just look stunning; they're fast, responsive, and engineered to turn visitors into paying clients. Whether it's a landing page, a corporate site, or a full-scale web platform, we build it to work as hard as you do.",
    get: ['Custom UI/UX design', 'Mobile-first, responsive builds', 'SEO-ready architecture', 'Fast load speeds & performance', 'CMS integration (if needed)', 'Post-launch lifetime maintenance'],
    why: "We don't use cookie-cutter templates. Every site we build is designed from scratch around your brand and your goals — then supported forever after launch.",
    chip: 'Lifetime maintenance included'
  },
  {
    id: '02',
    title: 'Mobile App Development',
    tagline: 'Native experiences your users will keep coming back to',
    img: '/images/mobile-app.png',
    desc: "Mobile is where your customers live. We build iOS and Android apps that are intuitive, performant, and built for real-world usage — not just demos. From consumer apps to internal business tools, our developers bring your idea to life with clean code and a user experience that feels effortless.",
    get: ['iOS & Android development', 'UI/UX design for mobile', 'API & backend integration', 'App Store & Play Store submission', 'QA testing & bug-free delivery', 'Ongoing updates & support'],
    why: "Our mobile developers specialise in nothing else. You get focused expertise, not a web developer moonlighting in mobile — plus lifetime maintenance so your app never feels outdated.",
    chip: 'Lifetime maintenance included'
  },
  {
    id: '03',
    title: 'ERP Solutions',
    tagline: 'Streamline your entire operation with one intelligent system',
    img: '/images/erp.png',
    desc: "Running a business across spreadsheets, disconnected software, and manual processes isn't sustainable. We build custom ERP systems that unify your operations — from inventory and HR to finance, sales, and beyond — giving you real-time visibility and control across every department.",
    get: ['Custom ERP architecture & build', 'Module-based: HR, Finance, CRM, Inventory', 'Role-based access & dashboards', 'Data migration from legacy systems', 'Staff training & documentation', 'Lifetime support & upgrades'],
    why: "Off-the-shelf ERPs force you to adapt your business to their system. We build yours around how you actually work — then stay on to evolve it as your business grows.",
    chip: 'Lifetime maintenance included'
  },
  {
    id: '04',
    title: 'Branding & Graphic Design',
    tagline: 'Make your first impression unforgettable',
    desc: "Great branding isn't just a logo — it's the feeling your business leaves behind. We craft visual identities that are distinctive, memorable, and built to scale across every touchpoint. From your logo to your full brand guidelines, we give your business the visual foundation it deserves.",
    get: ['Logo design (multiple concepts)', 'Colour palette & typography system', 'Brand guidelines document', 'Business card & stationery design', 'Social media brand kit', 'All source files included'],
    why: "Our designers don't just make things look good — they build visual systems with strategy behind them. Your brand will be consistent, recognisable, and ready for any medium.",
    img: '/images/branding.png'
  },
  {
    id: '05',
    title: 'Digital Marketing & SEO',
    tagline: 'Get found. Get clicks. Get customers.',
    desc: "Having a great website means nothing if no one sees it. We drive qualified traffic to your business through smart SEO, targeted ad campaigns, and data-backed digital strategy. Every move we make is tied to real outcomes — more visibility, more leads, more revenue.",
    get: ['On-page & technical SEO', 'Keyword research & content strategy', 'Google & Meta ad campaigns', 'Performance tracking & reporting', 'Conversion rate optimisation', 'Monthly strategy reviews'],
    why: "We don't chase vanity metrics. We focus on what actually matters — traffic that converts. Every campaign we run is built around your specific business goals.",
    img: '/images/marketing.png'
  },
  {
    id: '06',
    title: 'AI Agents & Business Automation',
    tagline: 'Let intelligent systems handle the heavy lifting',
    desc: "Repetitive tasks, manual follow-ups, data entry, call handling — these are hours your team should never waste. We build custom AI agents and automation workflows that handle your operational load intelligently, so your team can focus on work that actually matters.",
    get: ['Custom AI agent development', 'Call automation & IVR systems', 'Workflow & process automation', 'CRM & tool integrations', 'Lead qualification bots', 'Ongoing tuning & optimisation'],
    why: "We don't sell generic automation tools — we engineer solutions built specifically around your workflows. The result is systems that actually fit, not systems you have to work around.",
    chip: 'Lifetime maintenance included',
    img: '/images/ai-automation.png'
  },
  {
    id: '07',
    title: 'Video & Animation',
    tagline: 'Stories told in motion — with impact that lasts',
    desc: "In a world of scrolling thumbs, video stops people. We produce high-quality video content and animations that communicate your brand, product, or message in a way that text and images simply can't. Whether it's a brand film, explainer video, or social reel — we make you impossible to ignore.",
    get: ['Brand & corporate videos', 'Explainer & product demo animations', 'Social media reels & short-form content', 'Motion graphics & visual effects', 'Script writing & storyboarding', 'Multi-format delivery'],
    why: "Our video team handles everything from concept to final cut. No outsourcing, no delays — just polished, purposeful content that represents your brand at its best.",
    img: '/images/video.png'
  },
  {
    id: '08',
    title: 'Copywriting & Content',
    tagline: 'Words that connect, convert, and leave a mark',
    desc: "The best-designed website falls flat without the right words. We write copy and content that speaks directly to your audience — clear, compelling, and built to drive action. From website pages and landing pages to blogs and email campaigns, every word earns its place.",
    get: ['Website & landing page copy', 'Blog posts & long-form content', 'Email marketing sequences', 'Ad copy & campaign messaging', 'Product descriptions', 'Brand voice & tone guidelines'],
    why: "We write with strategy, not just style. Every piece of content we produce is built around your audience's psychology and your business's conversion goals.",
    img: '/images/web-dev.png'
  },
  {
    id: '09',
    title: 'Social Media Management',
    tagline: 'A consistent, compelling presence — without the overwhelm',
    desc: "Showing up consistently on social media is one of the most powerful things a brand can do — and one of the hardest to maintain. We handle your entire social presence: strategy, content creation, scheduling, and community engagement. You stay focused on your business while we grow your audience.",
    get: ['Monthly content calendar', 'Platform-specific content creation', 'Graphics, captions & hashtag strategy', 'Scheduling & publishing', 'Community management & replies', 'Monthly performance reports'],
    why: "We treat your social channels like they're our own brand. That means consistency, creativity, and content that actually resonates — not just filler posts to meet a quota.",
    img: '/images/social-media.png'
  },
  {
    id: '10',
    title: 'Poster & Advertisement Design',
    tagline: 'Visuals that stop the scroll and spark action',
    desc: "Whether it's a digital ad, a printed poster, a billboard, or a promotional banner — the design either commands attention or gets ignored. Our designers create visually striking advertising material that communicates your message instantly and drives the response you're looking for.",
    get: ['Digital & print ad creatives', 'Event & promotional posters', 'Social media ad banners', 'Flyers & brochures', 'Billboard & outdoor advertising', 'All formats & sizes delivered'],
    why: "Our designers understand that good advertising design is one part art, one part psychology. We make visuals that are beautiful and strategically built to drive action.",
    img: '/images/branding.png'
  },
  {
    id: '11',
    title: 'Custom & Bespoke Digital Solutions',
    tagline: 'Wait — need something not listed here?',
    desc: "Don't see exactly what you need? We love a challenge. Whether it's a niche technical requirement, an unconventional project, or something entirely new — our team is built to problem-solve. Bring us your idea and we'll tell you honestly how we can help.",
    isCustom: true
  }
];

const faqs = [
  { q: "I don't have a full brief ready — can I still contact you?", a: "Absolutely. Most of our best projects started with just a rough idea. Share where you are and we'll help shape it into a clear plan together." },
  { q: "How quickly will you get back to me?", a: "Within 24 hours, every time — weekdays or weekends. You'll always hear from a real person, not an automated reply." },
  { q: "Do you work with international clients?", a: "Yes — we work with clients globally. We're comfortable across time zones and handle all communication and delivery fully online." },
  { q: "What happens after I submit the form?", a: "We review your enquiry, prepare relevant thoughts or questions, and reach out within 24 hours to schedule a free discovery call or share an initial recommendation." },
  { q: "Is there any cost to get in touch?", a: "None at all. The conversation is completely free and comes with zero obligation. We only move forward when you're genuinely happy to." }
];

// --- COMPONENTS --- //

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 text-[10px] sm:text-xs font-medium tracking-[0.15em] text-[#c9a96e] uppercase mb-6 sm:mb-8">
    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] opacity-80" />
    {children}
  </div>
);

const ButtonPrimary = ({ children, onClick, className = '' }) => (
  <button onClick={onClick} className={`group relative inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-[#c9a96e] hover:text-black hover:scale-[1.02] active:scale-95 ${className}`}>
    {children}
  </button>
);

const ButtonGhost = ({ children, onClick, className = '' }) => (
  <button onClick={onClick} className={`group relative inline-flex items-center justify-center gap-2 bg-transparent text-white border border-neutral-700 px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:border-[#c9a96e] hover:text-[#c9a96e] hover:bg-[#c9a96e]/10 active:scale-95 ${className}`}>
    {children}
  </button>
);

const ViewHome = ({ setView }) => (
  <div className="flex flex-col gap-24 sm:gap-40 pb-20">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
      .font-garamond { font-family: 'Cormorant Garamond', serif; }
    `}</style>
    {/* Hero */}
    <section className="min-h-[85vh] flex flex-col justify-center pt-40 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#c9a96e]/10 blur-[120px] rounded-full pointer-events-none" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-bold tracking-[0.1em] whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.015)' }}>AVLANCE</span>

      <div className="relative z-10">
        <FadeIn>
          <SectionLabel>Digital Agency</SectionLabel>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-8 text-white max-w-5xl">
            Built to scale, <br />
            <span className="text-[#c9a96e] italic font-garamond pr-4">Build to Last.</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10">
            AVLANCE is your all-in-one digital partner — from stunning websites and mobile apps to bold branding, smart automation, and AI-powered solutions. We don't just build for today. We build, grow, and maintain your digital presence for the long run.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonPrimary onClick={() => setView('contact')}>
              Start Your Project <ArrowRight className="w-4 h-4" />
            </ButtonPrimary>
            <ButtonGhost onClick={() => setView('services')}>
              Explore Capabilities
            </ButtonGhost>
          </div>
          <p className="text-xs text-neutral-600 italic mt-4">No commitment. Just a conversation.</p>
        </FadeIn>
      </div>
    </section>

    {/* Promises Strip */}
    <section>
      <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-3xl overflow-hidden relative z-10">
          {[
            { icon: <Globe className="w-5 h-5" />, title: 'Everything Under One Roof', desc: 'Web, mobile, branding, marketing, automation — we handle it all so you never need another agency.' },
            { icon: <Plus className="w-5 h-5" />, title: 'Results, Delivered Fast', desc: 'Our specialist team moves with urgency and precision to bring your ideas to life without the wait.' },
            { icon: <ArrowUpRight className="w-5 h-5" />, title: 'Lifetime Project Maintenance', desc: 'Every project we deliver comes with lifetime support. We grow with you — not just hand over and disappear.' }
          ].map((item, i) => (
            <div key={i} className="bg-black p-8 sm:p-10 group hover:bg-neutral-900 transition-colors">
              <div className="text-[#c9a96e] mb-6">{item.icon}</div>
              <h3 className="text-base font-medium mb-3">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* USPs Breakdown */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <FadeIn>
        <SectionLabel>Why AVLANCE</SectionLabel>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-6">Why clients choose us — and stay with us.</h2>
        <p className="text-neutral-400 text-lg">We replace the chaos of managing multiple vendors with a single, dedicated partnership.</p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex flex-col gap-10">
          {[
            { num: '01', title: 'We replace a whole team of agencies', desc: "Web designers, app developers, marketers, automation engineers — they're all under one roof at AVLANCE. Fewer vendors, faster decisions, better results." },
            { num: '02', title: 'We move fast — without cutting corners', desc: "Our specialists are handpicked for their ability to deliver excellence under tight timelines. Your project doesn't wait in a queue — it gets full attention." },
            { num: '03', title: "We're your partner for life, not just the launch", desc: "Every AVLANCE project comes with lifetime maintenance. Bugs, updates, improvements — we stay by your side long after the project goes live." },
            { num: '04', title: 'We serve every niche, every industry, globally', desc: "From startups in Chennai to enterprises in New York — we understand different markets and build digital solutions that truly fit your world." }
          ].map((usp, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <span className="text-sm font-mono text-[#c9a96e] mt-1">{usp.num}</span>
              <div>
                <h4 className="text-lg font-medium mb-2 group-hover:text-[#c9a96e] transition-colors">{usp.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* Services Chips */}
    <section>
      <FadeIn>
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4">One agency. Endless capabilities.</h2>
        <p className="text-neutral-400 text-lg mb-12">Whether you're starting from scratch or scaling fast, we have the right team for every challenge.</p>

        <div className="flex flex-wrap gap-3">
          {servicesData.filter(s => !s.isCustom).map((s, i) => (
            <button key={i} onClick={() => setView('services')} className="text-left px-5 py-4 rounded-2xl border border-neutral-800 hover:border-[#c9a96e] bg-neutral-900/30 hover:bg-[#c9a96e]/5 transition-all group">
              <span className="block text-sm font-medium text-white group-hover:text-[#c9a96e] transition-colors mb-1">{s.title}</span>
              <span className="block text-xs text-neutral-500 line-clamp-1">{s.tagline}</span>
            </button>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* How it Works & Industries */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-neutral-900 pt-20">
      <FadeIn>
        <SectionLabel>Process</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-medium mb-10">How it works</h2>
        <div className="flex flex-col gap-8">
          {[
            { num: '01', title: 'Tell us your vision', desc: 'Fill in a quick form or reach out directly. We respond within 24 hours — no delays, no runaround.' },
            { num: '02', title: 'We build it', desc: 'Our specialist team gets to work, delivering quality results at a pace that respects your timeline.' },
            { num: '03', title: 'We maintain it — forever', desc: "Your project is live. But we're not done. Lifetime support means AVLANCE is always in your corner." }
          ].map((step, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl border border-neutral-900 bg-neutral-950/50 hover:border-[#c9a96e]/50 transition-colors">
              <span className="text-xl font-light text-[#c9a96e]">{step.num}</span>
              <div>
                <h4 className="text-base font-medium mb-2">{step.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <SectionLabel>Reach</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-medium mb-4">Industries we serve</h2>
        <p className="text-neutral-400 text-sm mb-10">We don't believe in limiting who we help. Great digital work transcends industries.</p>
        <div className="flex flex-wrap gap-2">
          {['E-commerce', 'Healthcare', 'Education', 'Real Estate', 'Finance & Fintech', 'Hospitality', 'Logistics', 'Startups', 'Retail', 'SaaS & Tech', 'Media & Entertainment', 'Non-profits'].map((ind, i) => (
            <span key={i} className="px-4 py-2 rounded-full border border-neutral-800 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors cursor-default text-xs text-neutral-400 bg-neutral-900/30">
              {ind}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* Bottom CTA */}
    <section>
      <FadeIn>
        <div className="bg-neutral-900/50 border border-[#c9a96e]/20 rounded-3xl p-10 sm:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#c9a96e]/10 to-transparent pointer-events-none" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold tracking-[0.1em] whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.015)' }}>AVLANCE</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4 relative z-10">Ready to build something great?</h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10 relative z-10">Tell us your vision. We'll handle everything — from first pixel to lifetime support.</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <ButtonPrimary onClick={() => setView('contact')}>Start Your Project</ButtonPrimary>
            <ButtonGhost onClick={() => setView('contact')}>Contact Us Directly</ButtonGhost>
          </div>
          <p className="text-xs text-[#c9a96e]/70 mt-6 relative z-10">We respond within 24 hours. Available globally.</p>
        </div>
      </FadeIn>
    </section>
  </div>
);

const ViewServices = ({ setView }) => (
  <div className="flex flex-col gap-20 sm:gap-32 pb-20">
    <section className="pt-40 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c9a96e]/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <FadeIn>
        <SectionLabel>Our Services</SectionLabel>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 max-w-4xl">
          Every digital service your business will ever need — in one place.
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
          From your first website to enterprise automation, AVLANCE brings together specialist teams under one roof. No juggling vendors, no broken handoffs — just seamless execution and lifetime support across every solution we deliver.
        </p>
      </FadeIn>
    </section>

    <section className="flex flex-col gap-6">
      {servicesData.map((s, index) => (
        <FadeIn key={s.id} delay={index * 50}>
          <div className="border border-neutral-800 bg-black rounded-3xl p-8 sm:p-12 group hover:border-[#c9a96e]/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 sm:p-12 text-sm font-mono text-[#c9a96e] opacity-40 group-hover:opacity-100 transition-opacity z-20">{s.id}</div>

            {/* Service Image */}
            {s.img && (
              <div className="absolute top-0 right-0 w-[65%] h-full hidden lg:block pointer-events-none">
                <img src={s.img} alt="" className="w-full h-full object-cover opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-700 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
              </div>
            )}

            <div className="max-w-3xl relative z-10">
              <h2 className="text-2xl sm:text-3xl font-medium mb-3 group-hover:text-[#c9a96e] transition-colors">{s.title}</h2>
              <p className="text-neutral-500 text-sm sm:text-base font-medium mb-6">{s.tagline}</p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-10">{s.desc}</p>

              {!s.isCustom ? (
                <>
                  <div className="h-px w-full bg-neutral-900 group-hover:bg-[#c9a96e]/20 transition-colors mb-10" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-xs tracking-widest uppercase text-neutral-500 mb-5">What you get</h4>
                      <ul className="flex flex-col gap-3">
                        {s.get.map((item, i) => (
                          <li key={i} className="text-sm text-neutral-300 flex items-start gap-3">
                            <span className="text-[#c9a96e] mt-0.5">—</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-widest uppercase text-neutral-500 mb-5">Why AVLANCE</h4>
                      <p className="text-sm text-neutral-400 italic leading-relaxed mb-6">"{s.why}"</p>
                      {s.chip && (
                        <span className="inline-block px-3 py-1.5 rounded-full border border-[#c9a96e]/30 text-[11px] text-[#c9a96e] bg-[#c9a96e]/10">
                          ✦ {s.chip}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ButtonPrimary onClick={() => setView('contact')} className="!py-2.5 !px-5 !text-xs">Get a Free Quote</ButtonPrimary>
                  </div>
                </>
              ) : (
                <div className="mt-6">
                  <ButtonPrimary onClick={() => setView('contact')} className="!py-2.5 !px-5 !text-xs">Tell Us Your Idea</ButtonPrimary>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </section>

    <section>
      <FadeIn>
        <div className="bg-neutral-900/30 border border-[#c9a96e]/20 rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c9a96e]/5 to-transparent pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 relative z-10">Not sure which service you need?</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8 relative z-10">Tell us your goal and we'll recommend the right solution. No pressure, no jargon — just honest advice.</p>
          <div className="relative z-10"><ButtonPrimary onClick={() => setView('contact')}>Get a Free Recommendation</ButtonPrimary></div>
          <p className="text-xs text-neutral-500 mt-5 relative z-10">We respond within 24 hours. Serving clients globally.</p>
        </div>
      </FadeIn>
    </section>
  </div>
);

const ViewAbout = ({ setView }) => (
  <div className="flex flex-col gap-24 sm:gap-40 pb-20">
    <section className="pt-40 relative">
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[#c9a96e]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <FadeIn>
        <SectionLabel>About AVLANCE</SectionLabel>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 max-w-4xl">
          We exist because your vision deserves more than a one-time project.
        </h1>
        <div className="text-lg text-neutral-400 max-w-2xl leading-relaxed space-y-6">
          <p>Most agencies build something, hand it over, and move on. You're left managing updates, chasing support, and piecing together multiple vendors for every new need. We built AVLANCE because we believed there was a better way.</p>
          <p className="text-white font-medium">A single, reliable digital partner. One team with every skill you'll ever need. And a commitment that doesn't end at launch.</p>
        </div>
      </FadeIn>
    </section>

    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <FadeIn>
        <SectionLabel>Our Story</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-8">The gap we decided to fill</h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="text-sm sm:text-base text-neutral-400 leading-relaxed space-y-6">
          <p>We looked at the digital services landscape and noticed the same frustrations coming up again and again — businesses bouncing between agencies, projects going stale after delivery, and no one taking ownership beyond the invoice.</p>
          <blockquote className="pl-6 border-l-2 border-[#c9a96e] py-2 my-8 text-xl text-[#c9a96e] font-serif italic">
            "What if one team could handle everything, move fast, and actually stay?"
          </blockquote>
          <p>That question became AVLANCE. We assembled a team of specialists — designers, developers, marketers, automation engineers, and creative strategists — and built something rare: a full-service digital agency that treats every client relationship as a long-term partnership.</p>
          <p>We're new, and we're proud of it. We don't carry old habits or outdated processes. We carry fresh thinking, dedicated specialists, and a genuine hunger to prove ourselves through the quality of our work.</p>
        </div>
      </FadeIn>
    </section>

    <section>
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/40 border border-[#c9a96e]/20 hover:border-[#c9a96e]/50 transition-colors p-10 rounded-3xl group">
            <h4 className="text-xs tracking-widest uppercase text-[#c9a96e] mb-6">Our Mission</h4>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed group-hover:text-white transition-colors text-neutral-300">To empower businesses worldwide with complete digital solutions — built fast, built right, and supported for life.</p>
          </div>
          <div className="bg-neutral-900/40 border border-[#c9a96e]/20 hover:border-[#c9a96e]/50 transition-colors p-10 rounded-3xl group">
            <h4 className="text-xs tracking-widest uppercase text-[#c9a96e] mb-6">Our Vision</h4>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed group-hover:text-white transition-colors text-neutral-300">To be the last digital agency your business ever needs — a partner that grows with you at every stage.</p>
          </div>
        </div>
      </FadeIn>
    </section>

    <section>
      <FadeIn>
        <SectionLabel>Core Values</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-12">What we stand for</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Speed with substance', desc: "We move fast — but never at the cost of quality. Every deliverable is something we're proud to put our name on." },
            { title: 'Radical transparency', desc: "No jargon, no hidden costs, no surprises. You'll always know where your project stands." },
            { title: 'Lifetime ownership', desc: "We treat every project like it's our own. That's why we offer lifetime maintenance — because we care about what happens next." },
            { title: 'Client-first thinking', desc: "Your goals drive every decision we make. We don't push solutions — we find what genuinely fits." }
          ].map((val, i) => (
            <div key={i} className="border border-neutral-800 hover:border-[#c9a96e]/40 rounded-2xl p-8 bg-black transition-colors">
              <h4 className="text-base font-medium mb-3 text-white">{val.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>

    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <FadeIn>
        <SectionLabel>The Team</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">A team built for every challenge</h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="text-sm sm:text-base text-neutral-400 leading-relaxed space-y-6">
          <p>AVLANCE is made up of dedicated specialists across every digital discipline. No generalists wearing too many hats — when you come to us for a mobile app, a mobile app specialist builds it. When you need a brand identity, a brand designer creates it.</p>
          <p>Every team member shares one thing in common: a drive to deliver results that genuinely move the needle for our clients.</p>
        </div>
      </FadeIn>
    </section>

    <section>
      <FadeIn>
        <div className="bg-neutral-900/30 border border-[#c9a96e]/20 rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c9a96e]/5 to-transparent pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 relative z-10">Like what you see? Let's build something together.</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8 relative z-10">We'd love to hear about your project — big, small, or still just an idea.</p>
          <div className="relative z-10"><ButtonPrimary onClick={() => setView('contact')}>Start a Conversation</ButtonPrimary></div>
          <p className="text-xs text-neutral-500 mt-5 relative z-10">We respond within 24 hours, every time.</p>
        </div>
      </FadeIn>
    </section>
  </div>
);

const ViewContact = ({ setView }) => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="flex flex-col gap-20 sm:gap-32 pb-20">
      <section className="pt-40 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#c9a96e]/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-bold tracking-[0.1em] whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.015)' }}>AVLANCE</span>
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 max-w-3xl">
            Let's bring your vision to life.
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Whether you have a detailed brief or just a rough idea — we'd love to hear from you. Fill in the form below, drop us a message, or reach out directly. We promise a real response within 24 hours, no automated replies, no runaround.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {[
              { t: '24hr response', d: 'Every enquiry gets a genuine, personalised reply within 24 hours.' },
              { t: 'No obligation', d: 'Reaching out is just a conversation — zero pressure, zero commitment.' },
              { t: 'Globally available', d: 'We work across time zones and serve clients from every corner of the world.' }
            ].map((p, i) => (
              <div key={i} className="border-l border-[#c9a96e]/40 pl-5">
                <h4 className="text-sm font-medium mb-2 text-[#c9a96e]">{p.t}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-medium mb-8">Tell us about your project</h2>
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" id="name" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Your name *</label>
                </div>
                <div className="relative group">
                  <input type="text" id="company" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent" placeholder="Company" />
                  <label htmlFor="company" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Company / Business name</label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="email" id="email" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Email address *</label>
                </div>
                <div className="relative group">
                  <input type="tel" id="phone" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent" placeholder="Phone" />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Phone / WhatsApp</label>
                </div>
              </div>

              <div className="relative group mt-2">
                <select defaultValue="" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled className="text-neutral-900">Select a service...</option>
                  {servicesData.map(s => <option key={s.id} value={s.id} className="text-black">{s.title}</option>)}
                </select>
                <div className="absolute right-0 top-3.5 pointer-events-none text-neutral-500"><ChevronRight className="w-4 h-4 rotate-90" /></div>
                <label className="absolute left-0 -top-3.5 text-xs text-neutral-500 group-focus-within:text-[#c9a96e] transition-colors">Service(s) you're interested in *</label>
                <p className="text-[10px] text-neutral-600 mt-2 italic">Can't find what you need? Just describe it in the message below.</p>
              </div>

              <div className="relative group mt-2">
                <select defaultValue="" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled className="text-neutral-900">Select a budget range...</option>
                  <option value="1" className="text-black">Under $500</option>
                  <option value="2" className="text-black">$500 – $2,000</option>
                  <option value="3" className="text-black">$2,000 – $5,000</option>
                  <option value="4" className="text-black">$5,000+</option>
                  <option value="5" className="text-black">Not sure yet</option>
                </select>
                <div className="absolute right-0 top-3.5 pointer-events-none text-neutral-500"><ChevronRight className="w-4 h-4 rotate-90" /></div>
                <label className="absolute left-0 -top-3.5 text-xs text-neutral-500 group-focus-within:text-[#c9a96e] transition-colors">Estimated budget range</label>
              </div>

              <div className="relative group mt-2">
                <textarea id="message" rows="4" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Tell us about your project *</label>
              </div>

              <button className="bg-white text-black py-4 px-8 rounded-full text-sm font-medium hover:bg-[#c9a96e] transition-colors mt-4 w-full sm:w-auto self-start">
                Send My Enquiry →
              </button>
              <p className="text-[11px] text-neutral-600 text-center sm:text-left">We'll respond within 24 hours. Your information is kept private.</p>
            </form>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-12">
          <FadeIn delay={200}>
            <h3 className="text-xl font-medium mb-6">Direct contact</h3>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Mail className="w-4 h-4" />, type: 'Email', val: 'hello@avlance.com', note: 'Best for detailed enquiries' },
                { icon: <Phone className="w-4 h-4" />, type: 'Phone', val: '+91 XXXXX XXXXX', note: 'Mon–Sat, 9am–7pm IST' },
                { icon: <MessageCircle className="w-4 h-4" />, type: 'WhatsApp', val: 'Quick message welcome', note: 'Fastest way to reach us' }
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-800 hover:border-[#c9a96e]/40 transition-colors bg-neutral-900/30 group">
                  <div className="w-10 h-10 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 flex items-center justify-center text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-black transition-colors shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{c.type}</p>
                    <p className="text-sm font-medium text-white mb-0.5">{c.val}</p>
                    <p className="text-[11px] text-neutral-600">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 px-4 py-3 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/5 text-xs text-[#c9a96e] w-max">
              <Globe className="w-3.5 h-3.5" /> Serving clients across every time zone
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h3 className="text-xl font-medium mb-6">Questions before reaching out?</h3>
            <div className="flex flex-col border-t border-neutral-900">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-neutral-900">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left py-5 flex items-center justify-between gap-4 group"
                  >
                    <span className="text-sm font-medium group-hover:text-[#c9a96e] transition-colors pr-4">{faq.q}</span>
                    <span className="text-[#c9a96e] shrink-0">
                      {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-neutral-500 leading-relaxed pr-8">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

// --- PRELOADER --- //

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState('visible'); // visible -> sliding -> done

  useEffect(() => {
    // Phase 1: Logo clip-path reveal + line animation plays for 4.8s
    const slideTimer = setTimeout(() => setPhase('sliding'), 4800);
    // Phase 2: Curtain slides up (1.6s transition), then remove from DOM
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 6400);
    return () => {
      clearTimeout(slideTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <>
      <style>{`
        @keyframes fillProgress {
          0% {
            clip-path: inset(0 100% 0 0);
            filter: brightness(0.8);
          }
          40% {
            clip-path: inset(0 60% 0 0);
            filter: brightness(1);
          }
          50% {
            clip-path: inset(0 60% 0 0);
          }
          80% {
            clip-path: inset(0 15% 0 0);
          }
          90% {
            clip-path: inset(0 15% 0 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
            filter: brightness(1.1) drop-shadow(0 0 10px rgba(201, 169, 110, 0.3));
          }
        }
        @keyframes logoDive {
          0% {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1.1) drop-shadow(0 0 10px rgba(201, 169, 110, 0.3));
          }
          40% {
            transform: scale(0.92);
            opacity: 1;
            filter: brightness(1.3) drop-shadow(0 0 25px rgba(201, 169, 110, 0.8));
          }
          100% {
            transform: scale(4) translateY(-20px);
            opacity: 0;
            filter: brightness(2) blur(10px);
          }
        }
        @keyframes lineGrow {
          0% {
            height: 0;
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            height: 60px;
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            height: 60px;
            opacity: 0;
            transform: translateY(30px);
          }
        }
      `}</style>
      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{
          background: 'radial-gradient(circle at center, #111110 0%, #080808 100%)',
          transition: 'transform 1.6s cubic-bezier(0.8, 0, 0.2, 1), opacity 1.6s ease',
          transform: phase === 'sliding' ? 'translateY(-100%)' : 'translateY(0)',
          opacity: phase === 'sliding' ? 0 : 1,
          pointerEvents: phase === 'sliding' ? 'none' : 'auto',
        }}
      >
        <div className="flex flex-col items-center" style={{ gap: '40px' }}>
          <img
            src="./Logo.png"
            alt="AVLANCE"
            style={{
              height: '350px',
              animation: 'fillProgress 3.6s cubic-bezier(0.65, 0, 0.35, 1) forwards, logoDive 1s 3.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            }}
          />
          <div
            style={{
              width: '1px',
              height: '0',
              background: '#c9a96e',
              boxShadow: '0 0 15px rgba(201, 169, 110, 0.6)',
              animation: 'lineGrow 2s 1s cubic-bezier(0.8, 0, 0.2, 1) forwards',
            }}
          />
        </div>
      </div>
    </>
  );
};

// --- MAIN APP --- //

export default function App() {
  const [view, setView] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [siteRevealed, setSiteRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [view]);

  // Prevent scroll during preloader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  const handlePreloaderComplete = React.useCallback(() => {
    setLoading(false);
    // Small delay then trigger site entrance animations
    setTimeout(() => setSiteRevealed(true), 50);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans selection:bg-[#c9a96e] selection:text-black overflow-x-hidden">
      {/* Preloader */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-[400ms] ${isScrolled ? 'pt-5' : 'pt-[30px]'}`}>
        <div className={`flex items-center justify-between transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] border rounded-[50px] w-[95%] ${isScrolled
          ? 'max-w-[800px] px-8 py-1 bg-[#0f0f0f]/85 backdrop-blur-md border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'max-w-[1400px] px-0 py-2 bg-transparent border-transparent shadow-none'
          }`}>

          {/* Left Logo */}
          <div className="flex-1 flex justify-start">
            <button onClick={() => setView('home')} className="flex items-center relative z-50 group">
              <img
                src="./Logo.png"
                alt="AVLANCE"
                className={`object-contain origin-left transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-80 ${isScrolled ? 'h-[40px] md:h-[50px]' : 'h-[120px] md:h-[180px]'}`}
              />
            </button>
          </div>

          {/* Center Nav Links */}
          <div className={`hidden md:flex justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isScrolled ? 'gap-[20px]' : 'gap-[40px]'}`}>
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => setView(link.id)}
                className={`text-[0.75rem] font-medium uppercase tracking-[0.15em] transition-colors hover:text-[#c9a96e] relative ${view === link.id ? 'text-[#c9a96e]' : 'text-white'}`}
              >
                {link.label}
                {view === link.id && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c9a96e] rounded-full" />}
              </button>
            ))}
          </div>

          {/* Right Button & Mobile Toggle */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:block">
              <button
                onClick={() => setView('contact')}
                className={`text-[0.75rem] font-semibold uppercase tracking-[0.15em] px-6 py-3 rounded-[30px] transition-all duration-300 border ${isScrolled
                  ? 'bg-[#c9a96e] text-black border-[#c9a96e] hover:bg-transparent hover:text-[#c9a96e]'
                  : 'bg-transparent text-white border-transparent hover:text-[#c9a96e]'
                  }`}
              >
                Start Project
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden relative z-50 p-2 -mr-2 text-white hover:text-[#c9a96e] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#050505] z-40 transition-all duration-500 flex flex-col justify-center items-center gap-8 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {navLinks.map(link => (
          <button
            key={link.id}
            onClick={() => setView(link.id)}
            className={`text-3xl font-medium tracking-tight transition-colors hover:text-[#c9a96e] ${view === link.id ? 'text-[#c9a96e]' : 'text-white'}`}
          >
            {link.label}
          </button>
        ))}
        <div className="mt-8">
          <ButtonPrimary onClick={() => setView('contact')}>Start Your Project</ButtonPrimary>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 min-h-[90vh]">
        {view === 'home' && <ViewHome setView={setView} />}
        {view === 'services' && <ViewServices setView={setView} />}
        {view === 'about' && <ViewAbout setView={setView} />}
        {view === 'contact' && <ViewContact setView={setView} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-black pt-16 pb-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c9a96e]/5 blur-[100px] rounded-[100%] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="max-w-md">
              <img
                src="./Logo.png"
                alt="AVLANCE"
                className="h-[140px] md:h-[220px] object-contain mb-8 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setView('home')}
              />
              <p className="text-sm text-neutral-500 leading-relaxed">
                A single, reliable digital partner. One team with every skill you'll ever need. Built fast, built right, and supported for life.
              </p>
            </div>

            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs uppercase tracking-[0.1em] text-[#c9a96e] font-medium mb-2">Company</h4>
                {navLinks.map(link => (
                  <button key={link.id} onClick={() => setView(link.id)} className="text-sm text-neutral-400 hover:text-[#c9a96e] transition-colors text-left">
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xs uppercase tracking-[0.1em] text-[#c9a96e] font-medium mb-2">Social</h4>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#c9a96e] transition-colors">LinkedIn</a>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#c9a96e] transition-colors">Instagram</a>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#c9a96e] transition-colors">Twitter (X)</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-xs text-neutral-600">
            <p>© {new Date().getFullYear()} AVLANCE. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[#c9a96e] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#c9a96e] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}