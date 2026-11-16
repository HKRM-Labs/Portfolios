import { Heart, MessageSquare, Eye, Film, ArrowUpRight } from "lucide-react";

export default function AchievementsMatrix() {
  const metrics = [
    {
      label: "Instagram Posts",
      value: "74+",
      subtext: "Editorial shoots & drapes",
      icon: Film,
      color: "text-mauve-400",
    },
    {
      label: "Reels Impressions",
      value: "120K+",
      subtext: "Runway & screen video reach",
      icon: Eye,
      color: "text-champagne-200",
    },
    {
      label: "Discipline",
      value: "Runway & Screen",
      subtext: "Haute Couture & Film Acting",
      icon: Heart,
      color: "text-apricot-400",
    },
    {
      label: "Base Locations",
      value: "Hyd / Knl",
      subtext: "Hyderabad & Kurnool, India",
      icon: MessageSquare,
      color: "text-mauve-300",
    },
  ];

  const highlights = [
    {
      partner: "Frame Us Photography",
      handle: "@__frame__us",
      url: "https://www.instagram.com/__frame__us/",
      role: "Traditional Portrait Studio",
      scope: "Heritage silk saree series, cinematic lighting, and slow-motion pleat flows.",
    },
    {
      partner: "The Aarna Studio",
      handle: "@the.aarnastudio",
      url: "https://www.instagram.com/the.aarnastudio/",
      role: "Bridal & Hair Artistry",
      scope: "Regal South Indian bridal makeovers and antique temple gold styling.",
    },
    {
      partner: "Handloom Ateliers",
      handle: "Hyderabad & Kurnool",
      url: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      role: "Textile Collectives",
      scope: "Pure Kanjeevaram, Gadwal, and Banarasi silk drape showcases.",
    },
    {
      partner: "Commercial Screen",
      handle: "Cinema & Runway",
      url: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      role: "Screen & Runway Presence",
      scope: "Ramp walk presentations, commercial campaigns, and screen acting.",
    },
  ];

  return (
    <section id="achievements" className="w-full py-24 px-6 md:px-12 bg-plum-950 border-b border-champagne-300/15">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-mauve-300 font-syne block mb-2 font-bold">
            04 / Verified Track Record
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl text-champagne-100 font-normal uppercase tracking-tight">
            Key <span className="italic font-normal text-mauve-300">Collaborations</span> &amp; Reach
          </h2>
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-champagne-200/80 font-syne max-w-md">
          Verified audience engagement &amp; industry-acclaimed studio partnerships.
        </p>
      </div>

      {/* 4-Stat Grid with Large Voluptuous Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="p-8 rounded-2xl bg-plum-900 border border-champagne-300/15 hover:border-mauve-400/50 hover:bg-plum-850 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-mauve-300 font-syne font-bold">
                  {metric.label}
                </span>
                <Icon className={`w-5 h-5 ${metric.color} group-hover:scale-110 transition-transform`} />
              </div>
              <div>
                <span className="font-abril text-5xl sm:text-6xl text-champagne-100 font-normal block leading-none mb-3 group-hover:text-mauve-200 transition-colors">
                  {metric.value}
                </span>
                <span className="text-sm text-champagne-200/80 font-syne">
                  {metric.subtext}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Popular Collaborations: Big, Minimalist, Editorial 2-Column Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-champagne-300/20">
          <h3 className="font-abril text-2xl sm:text-3xl text-champagne-100 font-normal">
            Acclaimed Industry Studios
          </h3>
          <span className="text-xs uppercase tracking-[0.2em] text-mauve-300 font-syne font-semibold hidden sm:inline-block">
            Verified Credits
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 sm:p-10 rounded-2xl bg-plum-900/80 border border-champagne-300/15 hover:border-mauve-400/60 hover:bg-plum-850 transition-all block group shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-mauve-300 font-syne font-bold">
                  {item.role}
                </span>
                <span className="flex items-center gap-1 text-xs font-syne text-champagne-200 group-hover:text-mauve-300 transition-colors">
                  <span>{item.handle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <h4 className="font-abril text-2xl sm:text-3xl text-champagne-100 font-normal mb-3 group-hover:text-mauve-200 transition-colors">
                {item.partner}
              </h4>

              <p className="text-sm sm:text-base text-champagne-200/90 font-syne leading-relaxed">
                {item.scope}
              </p>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
