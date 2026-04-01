import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Layers",
    title: "Стратегия",
    desc: "Глубокое погружение в ваш бизнес. Определяем позиционирование, аудиторию и точки роста.",
    num: "01",
  },
  {
    icon: "PenTool",
    title: "Дизайн",
    desc: "Создаём визуальные системы, которые запоминаются и работают на результат.",
    num: "02",
  },
  {
    icon: "Code2",
    title: "Разработка",
    desc: "Быстрые, масштабируемые решения. От MVP до полноценного продукта.",
    num: "03",
  },
  {
    icon: "TrendingUp",
    title: "Рост",
    desc: "Аналитика, SEO, маркетинг. Помогаем расти системно и предсказуемо.",
    num: "04",
  },
];

const stats = [
  { value: "120+", label: "проектов" },
  { value: "8 лет", label: "опыта" },
  { value: "94%", label: "клиентов возвращаются" },
];

const works = [
  { category: "Брендинг", title: "Ювелирный дом «Аркадия»", year: "2024" },
  { category: "Веб-сайт", title: "Архитектурное бюро FORM", year: "2024" },
  { category: "Платформа", title: "Инвестиционный фонд Credo", year: "2023" },
  { category: "Редизайн", title: "Клиника эстетической медицины", year: "2023" },
];

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

  return (
    <div className="noise-overlay min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(42,80%,68%) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, hsl(42,80%,68%) 0%, transparent 70%)" }}
        />
      </div>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4 border-b border-border bg-background/80 backdrop-blur-xl" : "py-7"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="font-cormorant text-xl font-light tracking-[0.15em] text-gold">
            СТУДИЯ
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Услуги", "Работы", "О нас", "Контакт"].map((item) => (
              <button
                key={item}
                className="font-golos text-sm font-light tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="hidden md:block px-6 py-2.5 border border-gold/40 text-gold font-golos text-xs tracking-widest uppercase hover:bg-gold hover:text-background transition-all duration-300"
          >
            Связаться
          </button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-8 flex flex-col gap-6">
            {["Услуги", "Работы", "О нас", "Контакт"].map((item) => (
              <button
                key={item}
                className="font-golos text-sm font-light tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase text-left"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto w-full">
          {/* Overline */}
          <div
            className="flex items-center gap-4 mb-10 opacity-0-init animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <div className="w-8 h-px bg-gold opacity-60" />
            <span className="font-golos text-xs tracking-[0.3em] uppercase text-gold/70">
              Дизайн · Разработка · Рост
            </span>
          </div>

          {/* Heading */}
          <div className="overflow-hidden mb-4">
            <h1
              className="font-cormorant text-[clamp(4rem,12vw,9rem)] font-light leading-[0.9] tracking-tight opacity-0-init animate-fade-in"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              Создаём
            </h1>
          </div>
          <div className="overflow-hidden mb-4">
            <h1
              className="font-cormorant text-[clamp(4rem,12vw,9rem)] font-light leading-[0.9] tracking-tight italic text-gold-shimmer opacity-0-init animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              цифровые
            </h1>
          </div>
          <div className="overflow-hidden mb-12">
            <h1
              className="font-cormorant text-[clamp(4rem,12vw,9rem)] font-light leading-[0.9] tracking-tight opacity-0-init animate-fade-in"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              продукты
            </h1>
          </div>

          {/* Animated line */}
          <div
            className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-12 opacity-0-init animate-fade-in"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          />

          {/* Sub & CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <p
              className="font-golos text-base font-light text-muted-foreground max-w-sm leading-relaxed opacity-0-init animate-fade-in"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              Студия полного цикла. Берём сложные задачи и превращаем их в элегантные решения.
            </p>
            <div
              className="flex items-center gap-6 opacity-0-init animate-fade-in"
              style={{ animationDelay: "0.95s", animationFillMode: "forwards" }}
            >
              <button className="group flex items-center gap-3 px-8 py-4 bg-gold text-background font-golos text-xs font-medium tracking-widest uppercase hover:bg-gold-light transition-all duration-300">
                Начать проект
                <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="font-golos text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 border-b border-transparent hover:border-muted-foreground pb-0.5">
                Наши работы
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0-init animate-fade-in" style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent animate-float" />
          <span className="font-golos text-[10px] tracking-[0.3em] uppercase text-gold/40 rotate-90 origin-center mt-4 ml-4">scroll</span>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 border-y border-border" ref={statsRef}>
        <div className="max-w-6xl mx-auto grid grid-cols-3 divide-x divide-border">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 text-center transition-all duration-700 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="font-cormorant text-[clamp(2.5rem,6vw,4rem)] font-light text-gold leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-golos text-xs tracking-widest uppercase text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6" ref={servicesRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-end justify-between mb-16 transition-all duration-700 ${
              servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-px bg-gold/60" />
                <span className="font-golos text-[10px] tracking-[0.4em] uppercase text-gold/60">
                  Что мы делаем
                </span>
              </div>
              <h2 className="font-cormorant text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
                Услуги
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 font-golos text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300 pb-1 border-b border-transparent hover:border-gold/40">
              Все услуги <Icon name="ArrowUpRight" size={12} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`card-glass hover-gold-border p-8 flex flex-col gap-6 cursor-pointer group transition-all duration-700 ${
                  servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300">
                    <Icon name={s.icon} fallback="Star" size={16} className="text-gold/70 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <span className="font-cormorant text-4xl font-light text-muted/30 group-hover:text-gold/20 transition-colors duration-300">
                    {s.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-light mb-3 group-hover:text-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="font-golos text-sm font-light text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-gold/0 group-hover:text-gold/70 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="font-golos text-xs tracking-widest uppercase">Подробнее</span>
                  <Icon name="ArrowRight" size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="py-28 px-6 border-t border-border" ref={worksRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-16 transition-all duration-700 ${
              worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-gold/60" />
              <span className="font-golos text-[10px] tracking-[0.4em] uppercase text-gold/60">
                Портфолио
              </span>
            </div>
            <h2 className="font-cormorant text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
              Избранные работы
            </h2>
          </div>

          <div className="divide-y divide-border">
            {works.map((work, i) => (
              <div
                key={work.title}
                className={`group py-7 flex items-center justify-between cursor-pointer hover:pl-4 transition-all duration-500 ${
                  worksInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 150}ms` }}
              >
                <div className="flex items-center gap-8">
                  <span className="font-golos text-xs tracking-widest uppercase text-gold/50 w-24 hidden md:block">
                    {work.category}
                  </span>
                  <h3 className="font-cormorant text-2xl md:text-3xl font-light group-hover:text-gold transition-colors duration-300">
                    {work.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-golos text-xs text-muted-foreground">{work.year}</span>
                  <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                    <Icon name="ArrowUpRight" size={12} className="text-muted-foreground group-hover:text-gold transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 transition-all duration-700 delay-500 ${
              worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button className="font-golos text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold/40 pb-1">
              Смотреть все проекты →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 px-6" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-gold/40" />
              <span className="font-golos text-[10px] tracking-[0.4em] uppercase text-gold/50">
                Начнём?
              </span>
              <div className="w-12 h-px bg-gold/40" />
            </div>
            <h2 className="font-cormorant text-[clamp(3rem,8vw,7rem)] font-light leading-tight mb-8">
              Есть идея?<br />
              <span className="italic text-gold-shimmer">Воплотим вместе.</span>
            </h2>
            <p className="font-golos text-base font-light text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
              Расскажите о вашем проекте. Мы ответим в течение 24 часов и предложим подходящее решение.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group flex items-center gap-3 px-10 py-4 bg-gold text-background font-golos text-xs font-medium tracking-widest uppercase hover:bg-gold-light transition-all duration-300 w-full sm:w-auto justify-center">
                Написать нам
                <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="flex items-center gap-2 px-10 py-4 border border-border font-golos text-xs tracking-widest uppercase text-muted-foreground hover:border-gold/40 hover:text-gold transition-all duration-300 w-full sm:w-auto justify-center">
                <Icon name="Phone" size={12} />
                Позвонить
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
            <div className="font-cormorant text-2xl font-light tracking-[0.15em] text-gold">
              СТУДИЯ
            </div>
            <div className="flex items-center gap-8">
              {["Telegram", "VK", "Behance", "Dribbble"].map((s) => (
                <button
                  key={s}
                  className="font-golos text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="font-golos text-xs font-light text-muted-foreground/60">
              © 2024 Студия. Все права защищены.
            </p>
            <p className="font-golos text-xs font-light text-muted-foreground/40">
              Москва, Россия
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;