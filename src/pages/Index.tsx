import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Crosshair",
    title: "Стратегия",
    desc: "Анализируем противника, определяем слабые точки. Разрабатываем план атаки для вашего бизнеса.",
    num: "01",
    class: "SCOUT",
  },
  {
    icon: "Palette",
    title: "Дизайн",
    desc: "Создаём визуальные системы с огневой мощью. Каждый пиксель — на своём месте.",
    num: "02",
    class: "SPY",
  },
  {
    icon: "Code2",
    title: "Разработка",
    desc: "Строим неприступные цифровые укрепления. От MVP до полноценного продукта.",
    num: "03",
    class: "ENGINEER",
  },
  {
    icon: "TrendingUp",
    title: "Рост",
    desc: "Аналитика, SEO, маркетинг. Сносим конкурентов системно и предсказуемо.",
    num: "04",
    class: "SOLDIER",
  },
];

const stats = [
  { value: "120+", label: "ВЫПОЛНЕНО ЗАДАНИЙ" },
  { value: "8 ЛЕТ", label: "В СТРОЮ" },
  { value: "94%", label: "КЛИЕНТОВ ВОЗВРАЩАЮТСЯ" },
];

const works = [
  { category: "БРЕНДИНГ", title: "Ювелирный дом «Аркадия»", year: "2024", tag: "КРИТИЧНО" },
  { category: "ВЕБ-САЙТ", title: "Архитектурное бюро FORM", year: "2024", tag: "ВЫПОЛНЕНО" },
  { category: "ПЛАТФОРМА", title: "Инвестиционный фонд Credo", year: "2023", tag: "ВЫПОЛНЕНО" },
  { category: "РЕДИЗАЙН", title: "Клиника эстетической медицины", year: "2023", tag: "ВЫПОЛНЕНО" },
];

const teamClasses = ["SCOUT", "SOLDIER", "PYRO", "DEMOMAN", "HEAVY", "ENGINEER", "MEDIC", "SNIPER", "SPY"];

function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [classIdx, setClassIdx] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const servicesInView = useInView(servicesRef);
  const worksInView = useInView(worksRef);
  const statsInView = useInView(statsRef);
  const ctaInView = useInView(ctaRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setClassIdx((i) => (i + 1) % teamClasses.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="noise-overlay min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Industrial background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Diagonal warning stripes — top */}
        <div className="absolute top-0 left-0 right-0 h-2 warning-stripe-red opacity-70" />
        {/* Ambient red glow */}
        <div
          className="absolute top-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(18,90%,52%) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(216,55%,42%) 0%, transparent 70%)" }}
        />
        {/* Metal grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(210,15%,60%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(210,15%,60%) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b-2 border-tf2-red bg-background/95 backdrop-blur-xl"
            : "border-b-2 border-transparent"
        }`}
      >
        {/* Warning stripe top accent */}
        <div className="h-1 warning-stripe opacity-80" />

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-tf2-red flex items-center justify-center" style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            }}>
              <span className="text-white font-tf2 text-xs font-bold">S</span>
            </div>
            <div className="font-tf2 text-2xl font-bold tracking-wider text-foreground uppercase">
              СТУДИЯ
            </div>
            <div className="hidden md:block metal-plate px-2 py-0.5">
              <span className="font-tf2body text-[10px] tracking-widest text-tf2-orange uppercase">
                RED Team
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {["Услуги", "Работы", "О нас", "Контакт"].map((item) => (
              <button
                key={item}
                className="px-4 py-2 font-tf2body text-sm tracking-widest text-muted-foreground hover:text-foreground hover:bg-tf2-metal-dark uppercase transition-all duration-150 border border-transparent hover:border-border"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="hidden md:block btn-tf2 px-5 py-2 text-sm">
            Связаться
          </button>

          <button
            className="md:hidden text-foreground p-2 border border-border hover:border-tf2-red transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/98 border-t-2 border-tf2-red px-6 py-6 flex flex-col gap-2">
            {["Услуги", "Работы", "О нас", "Контакт"].map((item) => (
              <button
                key={item}
                className="font-tf2body text-base tracking-widest text-muted-foreground hover:text-foreground hover:bg-tf2-metal-dark uppercase text-left py-3 px-4 border border-transparent hover:border-border transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </button>
            ))}
            <button className="btn-tf2 mt-4 py-3 text-sm">
              Связаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto w-full">

          {/* Class badge */}
          <div
            className="flex items-center gap-3 mb-8 opacity-0-init animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <div className="warning-stripe-red w-12 h-1" />
            <div className="metal-plate-red px-3 py-1 flex items-center gap-2">
              <span className="font-tf2 text-sm font-bold text-tf2-orange animate-flicker">
                ▶ ВЫБОР КЛАССА: {teamClasses[classIdx]}
              </span>
            </div>
          </div>

          {/* Main heading — TF2 big bold style */}
          <div className="mb-6">
            <h1
              className="font-tf2 font-bold leading-[0.85] tracking-wide opacity-0-init animate-fade-in"
              style={{
                fontSize: "clamp(5rem,15vw,11rem)",
                animationDelay: "0.2s",
                animationFillMode: "forwards",
              }}
            >
              СОЗДАЁМ
            </h1>
          </div>
          <div className="mb-6">
            <h1
              className="font-tf2 font-bold leading-[0.85] tracking-wide opacity-0-init animate-fade-in"
              style={{
                fontSize: "clamp(5rem,15vw,11rem)",
                color: "hsl(18, 90%, 58%)",
                textShadow: "4px 4px 0px hsl(18, 80%, 28%), 0 0 40px hsl(18, 90%, 40%)",
                animationDelay: "0.35s",
                animationFillMode: "forwards",
              }}
            >
              ЦИФРОВЫЕ
            </h1>
          </div>
          <div className="mb-10">
            <h1
              className="font-tf2 font-bold leading-[0.85] tracking-wide opacity-0-init animate-fade-in"
              style={{
                fontSize: "clamp(5rem,15vw,11rem)",
                animationDelay: "0.5s",
                animationFillMode: "forwards",
              }}
            >
              ПРОДУКТЫ
            </h1>
          </div>

          {/* Divider */}
          <div
            className="w-full h-1 warning-stripe opacity-40 mb-10 opacity-0-init animate-fade-in"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          />

          {/* Sub & CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div
              className="opacity-0-init animate-fade-in"
              style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}
            >
              <p className="font-tf2body text-base text-muted-foreground max-w-sm leading-relaxed uppercase tracking-wide">
                Студия полного цикла. Берём сложные задачи и превращаем их в элегантные решения.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-tf2-red animate-pulse" />
                <span className="font-tf2body text-xs text-tf2-red uppercase tracking-widest">
                  Принимаем новые задания
                </span>
              </div>
            </div>

            <div
              className="flex items-center gap-4 opacity-0-init animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <button className="btn-tf2 group flex items-center gap-3 px-8 py-4 text-base">
                НАЧАТЬ ПРОЕКТ
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
              </button>
              <button className="btn-tf2-secondary flex items-center gap-2 px-6 py-4 text-base">
                НАШИ РАБОТЫ
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0-init animate-fade-in"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <div className="metal-plate px-3 py-1">
            <span className="font-tf2body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              SCROLL
            </span>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-0 px-0 relative" ref={statsRef}>
        {/* Warning stripe separator */}
        <div className="warning-stripe h-3 opacity-60" />
        <div className="py-14 px-6 metal-plate-red">
          <div className="max-w-6xl mx-auto grid grid-cols-3 divide-x divide-tf2-rust">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-8 text-center transition-all duration-700 ${
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className="font-tf2 font-bold leading-none mb-2 text-tf2-yellow"
                  style={{
                    fontSize: "clamp(2.5rem,6vw,4.5rem)",
                    textShadow: "3px 3px 0px hsl(18, 80%, 28%)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-tf2body text-xs tracking-widest uppercase text-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="warning-stripe h-3 opacity-60" />
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6" ref={servicesRef}>
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div
            className={`flex items-end justify-between mb-16 transition-all duration-700 ${
              servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="warning-stripe-red w-8 h-1" />
                <span className="font-tf2body text-xs tracking-[0.4em] uppercase text-tf2-red">
                  ██ ЧТО МЫ ДЕЛАЕМ
                </span>
              </div>
              <h2
                className="font-tf2 font-bold leading-tight"
                style={{
                  fontSize: "clamp(3rem,7vw,6rem)",
                  textShadow: "3px 3px 0px rgba(0,0,0,0.5)",
                }}
              >
                УСЛУГИ
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 btn-tf2-secondary px-4 py-2 text-xs">
              ВСЕ УСЛУГИ <Icon name="ArrowUpRight" size={12} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-border/50">
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`tf2-panel riveted p-6 flex flex-col gap-5 cursor-pointer group transition-all duration-700 ${
                  servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Class badge */}
                <div className="flex items-start justify-between">
                  <div className="metal-plate px-2 py-1 group-hover:border-tf2-red transition-colors duration-300">
                    <span className="font-tf2 text-xs text-tf2-orange group-hover:text-tf2-yellow transition-colors">
                      {s.class}
                    </span>
                  </div>
                  <span
                    className="font-tf2 font-bold text-4xl text-foreground/10 group-hover:text-tf2-red/30 transition-colors duration-300"
                  >
                    {s.num}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 metal-plate flex items-center justify-center group-hover:border-tf2-red transition-all duration-300">
                  <Icon
                    name={s.icon}
                    fallback="Star"
                    size={20}
                    className="text-tf2-orange/80 group-hover:text-tf2-orange transition-colors duration-300"
                  />
                </div>

                <div>
                  <h3
                    className="font-tf2 font-bold mb-2 group-hover:text-tf2-orange transition-colors duration-300"
                    style={{ fontSize: "1.6rem", textShadow: "1px 1px 0 rgba(0,0,0,0.5)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="font-tf2body text-sm text-muted-foreground leading-relaxed uppercase tracking-wide">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-2 text-tf2-orange/0 group-hover:text-tf2-orange transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="font-tf2 text-sm tracking-widest">ПОДРОБНЕЕ</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="py-28 px-6 relative" ref={worksRef}>
        {/* Side accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 warning-stripe-red opacity-50" />

        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-14 transition-all duration-700 ${
              worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="warning-stripe w-8 h-1" />
              <span className="font-tf2body text-xs tracking-[0.4em] uppercase text-tf2-orange">
                ██ ПОРТФОЛИО
              </span>
            </div>
            <h2
              className="font-tf2 font-bold leading-tight"
              style={{
                fontSize: "clamp(3rem,7vw,6rem)",
                textShadow: "3px 3px 0px rgba(0,0,0,0.5)",
              }}
            >
              ИЗБРАННЫЕ<br />РАБОТЫ
            </h2>
          </div>

          <div className="divide-y-2 divide-border">
            {works.map((work, i) => (
              <div
                key={work.title}
                className={`group py-6 flex items-center justify-between cursor-pointer hover:pl-4 hover:bg-tf2-metal-dark/30 transition-all duration-300 ${
                  worksInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 150}ms` }}
              >
                <div className="flex items-center gap-6">
                  <div className="metal-plate px-2 py-0.5 hidden md:block">
                    <span className="font-tf2 text-xs text-tf2-orange">{work.category}</span>
                  </div>
                  <h3
                    className="font-tf2 font-bold group-hover:text-tf2-orange transition-colors duration-200"
                    style={{
                      fontSize: "clamp(1.4rem,3vw,2rem)",
                      textShadow: "1px 1px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    {work.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={`hidden md:block metal-plate px-2 py-0.5 ${work.tag === "КРИТИЧНО" ? "metal-plate-red" : ""}`}
                  >
                    <span className={`font-tf2 text-xs ${work.tag === "КРИТИЧНО" ? "text-tf2-orange animate-flicker" : "text-foreground/60"}`}>
                      {work.tag}
                    </span>
                  </div>
                  <span className="font-tf2body text-xs text-muted-foreground">{work.year}</span>
                  <div className="w-9 h-9 metal-plate flex items-center justify-center group-hover:border-tf2-red group-hover:bg-tf2-red/10 transition-all duration-200">
                    <Icon name="ArrowUpRight" size={14} className="text-muted-foreground group-hover:text-tf2-orange transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-10 transition-all duration-700 delay-500 ${
              worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button className="btn-tf2-secondary flex items-center gap-2 px-6 py-3 text-sm">
              ВСЕ ПРОЕКТЫ →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-0 px-0 relative" ref={ctaRef}>
        <div className="warning-stripe h-3 opacity-60" />
        <div
          className="py-28 px-6"
          style={{
            background: "linear-gradient(160deg, hsl(210,15%,9%) 0%, hsl(18,30%,12%) 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Emblem */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-tf2-red/60" />
                <div className="metal-plate-red px-4 py-1">
                  <span className="font-tf2 text-sm text-tf2-orange tracking-widest">
                    ▶▶ ВНИМАНИЕ ◀◀
                  </span>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-tf2-red/60" />
              </div>

              <h2
                className="font-tf2 font-bold leading-tight mb-6"
                style={{
                  fontSize: "clamp(3rem,9vw,8rem)",
                  textShadow: "4px 4px 0px hsl(18, 80%, 22%), 0 0 60px hsl(18, 90%, 30%)",
                }}
              >
                ЕСТЬ ИДЕЯ?
              </h2>
              <h2
                className="font-tf2 font-bold leading-tight mb-10"
                style={{
                  fontSize: "clamp(3rem,9vw,8rem)",
                  color: "hsl(18, 90%, 58%)",
                  textShadow: "4px 4px 0px hsl(18, 80%, 22%), 0 0 60px hsl(18, 90%, 30%)",
                }}
              >
                ВОПЛОТИМ.
              </h2>

              <p className="font-tf2body text-base text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed uppercase tracking-wide">
                Расскажите о вашем проекте. Мы ответим в течение 24 часов и предложим план атаки.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-tf2 group flex items-center gap-3 px-10 py-4 text-base w-full sm:w-auto justify-center">
                  НАПИСАТЬ НАМ
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                </button>
                <button className="btn-tf2-secondary flex items-center gap-2 px-10 py-4 text-base w-full sm:w-auto justify-center">
                  ПОЗВОНИТЬ
                  <Icon name="Phone" size={14} />
                </button>
              </div>

              {/* Info line */}
              <div className="flex items-center justify-center gap-3 mt-8 opacity-50">
                <div className="w-2 h-2 rounded-full bg-tf2-orange animate-pulse" />
                <span className="font-tf2body text-xs text-muted-foreground uppercase tracking-widest">
                  Onlne · Время ответа &lt; 24ч · Бесплатная консультация
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="warning-stripe h-3 opacity-60" />
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-border bg-tf2-dark py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-tf2-red flex items-center justify-center" style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}>
                  <span className="text-white font-tf2 text-[10px] font-bold">S</span>
                </div>
                <div className="font-tf2 text-xl font-bold tracking-wider uppercase">СТУДИЯ</div>
              </div>
              <p className="font-tf2body text-sm text-muted-foreground uppercase tracking-wide max-w-xs">
                Цифровые продукты полного цикла.<br />Стратегия. Дизайн. Разработка. Рост.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "УСЛУГИ", items: ["Стратегия", "Дизайн", "Разработка", "Рост"] },
                { title: "КОМПАНИЯ", items: ["О нас", "Команда", "Карьера", "Блог"] },
                { title: "КОНТАКТ", items: ["hello@studio.ru", "+7 999 000-00-00", "Telegram", "Instagram"] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="warning-stripe-red w-4 h-0.5" />
                    <span className="font-tf2 text-sm text-tf2-orange">{col.title}</span>
                  </div>
                  {col.items.map((item) => (
                    <button key={item} className="block font-tf2body text-sm text-muted-foreground hover:text-foreground uppercase tracking-wide mb-1.5 transition-colors">
                      {item}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t-2 border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="font-tf2body text-xs text-muted-foreground uppercase tracking-widest">
              © 2024 Студия · Все права защищены
            </span>
            <div className="flex items-center gap-4">
              {["Политика конфиденциальности", "Условия использования"].map((item) => (
                <button key={item} className="font-tf2body text-xs text-muted-foreground hover:text-foreground uppercase tracking-wide transition-colors">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
