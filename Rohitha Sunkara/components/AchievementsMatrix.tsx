import { Heart, MessageSquare, Eye, Film, ArrowUpRight, Clapperboard, Sparkles } from "lucide-react";

export default function AchievementsMatrix() {
  const metrics = [
    {
      label: "Viral Reach",
      value: "1.8M+",
      subtext: "Single viral reel",
      icon: Eye,
      color: "text-pink-600",
    },
    {
      label: "Impressions",
      value: "2.1M+",
      subtext: "Audience reach",
      icon: Film,
      color: "text-rose-600",
    },
    {
      label: "Film Status",
      value: "Open",
      subtext: "Films & series",
      icon: Clapperboard,
      color: "text-pink-500",
    },
    {
      label: "Base",
      value: "Hyderabad",
      subtext: "Tollywood & Pan-India",
      icon: Sparkles,
      color: "text-pink-700",
    },
  ];

  const highlights = [
    {
      partner: "Feature Films & OTT",
      handle: "Tollywood & Pan-India",
      url: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      role: "Cinema Casting",
      scope: "Audition-ready for lead and pivotal roles with rich emotional depth.",
    },
    {
      partner: "Viral Social Reach",
      handle: "@hitaa.s",
      url: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      role: "1.8M+ Reach",
      scope: "Organic screen magnetism exceeding 1.8M views on primary reel showcases.",
    },
    {
      partner: "Haute Couture & Bridal",
      handle: "Hyderabad Fashion",
      url: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      role: "Atelier & Lookbooks",
      scope: "Heritage handlooms, designer silhouettes, and grand bridal campaigns.",
    },
    {
      partner: "Multilingual Fluency",
      handle: "Telugu • Hindi • English",
      url: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      role: "Acting Range",
      scope: "Native Telugu fluency, fluent Hindi delivery, and English articulation.",
    },
  ];

  return (
    <section id="achievements" className="w-full py-24 px-6 md:px-12 bg-white border-b border-pink-200/80">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-syne block mb-2 font-bold">
            04 / Key Metrics
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl text-gray-900 font-normal uppercase tracking-tight">
            Key <span className="italic font-normal text-pink-600">Impact</span> &amp; Reach
          </h2>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-syne max-w-sm font-semibold">
          Audience engagement &amp; casting readiness.
        </p>
      </div>

      {/* 4-Stat Grid with Large Voluptuous Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="p-8 rounded-2xl bg-pink-50/50 border border-pink-200/80 hover:border-pink-500 hover:bg-pink-100/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-pink-700 font-syne font-bold">
                  {metric.label}
                </span>
                <Icon className={`w-5 h-5 ${metric.color} group-hover:scale-110 transition-transform`} />
              </div>
              <div>
                <span className="font-abril text-5xl sm:text-6xl text-gray-950 font-normal block leading-none mb-3 group-hover:text-pink-600 transition-colors">
                  {metric.value}
                </span>
                <span className="text-sm text-gray-600 font-syne font-medium">
                  {metric.subtext}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Collaborations: Editorial 2-Column Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-pink-200">
          <h3 className="font-abril text-2xl sm:text-3xl text-gray-900 font-normal">
            Screen &amp; Industry Repertoire
          </h3>
          <span className="text-xs uppercase tracking-[0.2em] text-pink-600 font-syne font-bold hidden sm:inline-block">
            Verified Casting Profile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 sm:p-10 rounded-2xl bg-white border border-pink-200 hover:border-pink-500 hover:bg-pink-50/40 transition-all block group shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-pink-600 font-syne font-bold">
                  {item.role}
                </span>
                <span className="flex items-center gap-1 text-xs font-syne text-gray-700 group-hover:text-pink-600 transition-colors font-semibold">
                  <span>{item.handle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <h4 className="font-abril text-2xl sm:text-3xl text-gray-900 font-normal mb-3 group-hover:text-pink-600 transition-colors">
                {item.partner}
              </h4>

              <p className="text-sm sm:text-base text-gray-600 font-syne leading-relaxed">
                {item.scope}
              </p>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
