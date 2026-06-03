import Image from "next/image";

import RevealSection from "@/components/RevealSection";

const services = [
  {
    title: "Tolkning och medling",
    description:
      "Språkstöd i samtal mellan familjer, företag och myndigheter med fokus på tydlighet och förståelse.",
  },
  {
    title: "Rådslag kring Italien",
    description:
      "Praktisk vägledning om hur processer i Italien fungerar, till exempel kontakter med institutioner och administration.",
  },
  {
    title: "Skriftligt språkstöd",
    description:
      "Hjälp med dokument, e-post och formulering när svenska och italienska möts i vardag eller affär.",
  },
];

const timeline = [
  "Uppvuxen i Ängelholm och studerade italienska på gymnasiet i Sverige.",
  "Flyttade till Italien vid 18 års ålder och studerade i Florens på Università per Stranieri.",
  "Bodde i Italien i 13 år (1982–1994) och byggde djup kulturell och språklig förankring.",
  "Läste italienska vid Lunds universitet från augusti 1997 till september 1998 (43 gamla poäng, motsvarande 64,5 hp idag).",
  "Yrkesverksam tolk för Semantix (2001–2016) och Språkservice (2013–2015).",
];

const highlights = [
  {
    label: "1982–1994",
    text: "13 år i Italien med språklig och kulturell förankring i vardagen.",
  },
  {
    label: "Semantix",
    text: "Tolkuppdrag mellan 2001 och 2016 i olika professionella sammanhang.",
  },
  {
    label: "Språkservice",
    text: "Aktiv tolk 2013–2015 med fokus på trygg kommunikation.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#f8f4ee] text-neutral-900">
      <main className="mx-auto box-border flex min-h-screen w-full min-w-0 max-w-6xl flex-col px-4 pb-20 pt-6 sm:px-6 sm:pt-8 md:px-10">
        <RevealSection
          as="header"
          className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
        >
          <div className="min-w-0 space-y-3">
            <p className="font-display text-3xl font-semibold tracking-tight text-[#183a2f] md:text-4xl">
              Italidea
            </p>
            <p className="max-w-full rounded-full border border-[#183a2f]/30 bg-white/80 px-3 py-2 text-xs font-medium leading-snug tracking-wide text-[#8b1e1e] backdrop-blur-sm sm:inline-block sm:w-fit sm:px-4 sm:text-sm">
              Svensk-italiensk tolkning och språkstöd
            </p>
          </div>
          <a
            href="#kontakt"
            className="btn-primary w-full shrink-0 px-5 py-2.5 text-sm sm:w-auto"
          >
            Kontakta oss
          </a>
        </RevealSection>

        <RevealSection className="grid min-w-0 gap-10 md:grid-cols-[1.25fr_1fr]">
          <div data-reveal className="min-w-0">
            <p className="mb-4 text-xs uppercase tracking-[0.14em] text-[#8b1e1e] sm:text-sm sm:tracking-[0.18em]">
              Benvenuti – välkommen
            </p>
            <h1 className="font-display text-[1.85rem] font-semibold leading-[1.15] text-balance text-[#183a2f] sm:text-4xl md:text-6xl md:leading-[1.05]">
              Erfaren italiensk tolk med ett hjärta i både Sverige och Italien
            </h1>
            <p className="mt-5 w-full max-w-2xl break-words text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Personlig och trygg hjälp för privatpersoner och företag som
              behöver språkstöd mellan Sverige och Italien.
            </p>
            <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#kontakt"
                className="btn-primary w-full px-5 py-2.5 text-sm sm:w-auto"
              >
                Kontakta mig
              </a>
              <a
                href="#tjanster"
                className="btn-secondary w-full px-5 py-2.5 text-sm sm:w-auto"
              >
                Se tjänster
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              <a
                href="mailto:cecilia.skoldebrink@gmail.com"
                className="break-all font-medium text-[#183a2f] underline decoration-[#183a2f]/30 underline-offset-2"
              >
                cecilia.skoldebrink@gmail.com
              </a>
              <span className="mx-2 text-neutral-400" aria-hidden>
                ·
              </span>
              <a
                href="tel:+46707273699"
                className="font-medium text-[#183a2f] underline decoration-[#183a2f]/30 underline-offset-2"
              >
                070-727 36 99
              </a>
            </p>
          </div>

          <div
            data-reveal
            className="card-lift min-w-0 w-full max-w-full overflow-hidden rounded-3xl border border-[#183a2f]/20 bg-white shadow-sm"
          >
            <div className="relative h-72 w-full">
              <Image
                src="/images/Mamma.jpg"
                alt="Porträtt av Cecilia Skoldebrink"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3">
              <div className="h-2 bg-[#1e7a49]" />
              <div className="h-2 bg-white" />
              <div className="h-2 bg-[#c53434]" />
            </div>
            <div className="p-6">
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Tillgänglighet
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>Distans och på plats enligt överenskommelse</li>
                <li>Uppdrag för både privatpersoner och företag</li>
                <li>Snabb återkoppling och tydlig offert</li>
              </ul>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="mt-12 grid min-w-0 gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.label}
              data-reveal
              className="card-lift rounded-2xl border border-[#183a2f]/20 bg-white p-5"
            >
              <p className="text-sm font-semibold text-[#183a2f]">{item.label}</p>
              <p className="mt-2 text-sm text-neutral-700">{item.text}</p>
            </article>
          ))}
        </RevealSection>

        <RevealSection id="tjanster" className="mt-24 min-w-0">
          <div data-reveal>
            <h2 className="font-display text-3xl font-semibold text-[#183a2f]">
              Tjänster
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-700">
              Professionellt språkstöd med personlig och varm service – anpassat
              efter varje uppdrag.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                data-reveal
                className="card-lift rounded-2xl border border-[#183a2f]/20 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-medium text-[#183a2f]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="mt-24 grid min-w-0 items-center gap-10 md:grid-cols-2">
          <div
            data-reveal
            className="card-lift min-w-0 w-full overflow-hidden rounded-3xl border border-[#183a2f]/20 bg-white shadow-sm"
          >
            <div className="relative h-72 w-full max-w-full">
              <Image
                src="/images/florence.jpg"
                alt="Giotto's Campanile och Florens katedral"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 text-sm text-neutral-600">
              Florens – staden där Cecilias resa med italienska tog fart.
            </div>
          </div>
          <div data-reveal className="min-w-0">
            <h2 className="font-display text-3xl font-semibold text-[#183a2f]">
              Om mig
            </h2>
            <p className="mt-4 leading-8 text-neutral-700">
              Jag är född 1962 och uppvuxen i Ängelholm. Jag studerade italienska
              redan på gymnasiet i Sverige och flyttade till Italien vid 18 års
              ålder för fortsatta studier i Florens på Università per Stranieri.
              Där byggde jag upp en djup språklig trygghet, träffade min make och
              bodde i Italien i 13 år (1982–1994).
            </p>
            <p className="mt-4 leading-8 text-neutral-700">
              Jag läste även italienska vid Lunds universitet från augusti 1997
              till september 1998, drygt två terminer (43 gamla poäng, motsvarande
              64,5 hp idag). Efter detta arbetade jag professionellt som tolk för
              Semantix och Språkservice under många år. Idag erbjuder jag samma
              kvalitet med ett personligt och varmt bemötande.
            </p>
          </div>
        </RevealSection>

        <RevealSection className="mt-16 grid min-w-0 items-center gap-10 md:grid-cols-2">
          <div data-reveal className="min-w-0">
            <h2 className="font-display text-3xl font-semibold text-[#183a2f]">
              Erfarenhet i praktiken
            </h2>
            <p className="mt-4 leading-8 text-neutral-700">
              Oavsett om det gäller möten, myndighetskontakter eller familjesamtal
              handlar det om att skapa trygghet i rummet – så att alla parter förstår
              varandra.
            </p>
          </div>
          <div
            data-reveal
            className="card-lift min-w-0 w-full overflow-hidden rounded-3xl border border-[#183a2f]/20 bg-white shadow-sm"
          >
            <div className="relative h-64 w-full max-w-full md:h-72">
              <Image
                src="/images/meeting.jpg"
                alt="Tolkning i professionellt möte"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 text-sm text-neutral-600">
              Tolkning och medling i professionella och privata sammanhang.
            </div>
          </div>
        </RevealSection>

        <RevealSection className="mt-16">
          <ol
            data-reveal
            className="space-y-3 rounded-2xl border border-[#183a2f]/20 bg-white p-6 text-sm text-neutral-700"
          >
            {timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </RevealSection>

        <RevealSection className="mt-10 rounded-2xl border border-[#183a2f]/20 bg-white p-6 text-xs text-neutral-600">
          <div data-reveal>
          <p className="font-semibold text-neutral-700">Bildkällor</p>
          <p className="mt-2">
            Foto: Pexels (fri licens). Porträtt: privat bild från kund.
          </p>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="https://www.pexels.com/photo/giotto-s-campanile-and-florence-cathedral-under-blue-sky-29152796/"
                className="underline decoration-[#183a2f]/30 underline-offset-2 hover:text-[#183a2f]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Florens (Pexels)
              </a>
            </li>
            <li>
              <a
                href="https://www.pexels.com/photo/two-women-talking-in-an-office-14797778/"
                className="underline decoration-[#183a2f]/30 underline-offset-2 hover:text-[#183a2f]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mötesscenario (Pexels)
              </a>
            </li>
          </ul>
          </div>
        </RevealSection>

        <RevealSection
          id="kontakt"
          className="mt-24 rounded-3xl border border-[#183a2f]/20 bg-white p-8 shadow-sm"
        >
          <div data-reveal>
            <h2 className="font-display text-3xl font-semibold text-[#183a2f]">
              Kontakt
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-700">
              Beskriv vad du behöver hjälp med så återkommer jag med förslag på
              upplägg och pris.
            </p>
            <div className="mt-4 flex w-full min-w-0 flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
              <a
                href="mailto:cecilia.skoldebrink@gmail.com"
                className="btn-secondary w-full px-4 py-2.5 sm:hidden"
              >
                Skicka e-post
              </a>
              <a
                href="mailto:cecilia.skoldebrink@gmail.com"
                className="btn-secondary hidden px-4 py-2 sm:inline-flex"
              >
                cecilia.skoldebrink@gmail.com
              </a>
              <a
                href="tel:+46707273699"
                className="btn-secondary w-full px-4 py-2.5 sm:w-auto"
              >
                070-727 36 99
              </a>
            </div>
          </div>

          <form
            data-reveal
            className="mt-8 grid gap-4 md:grid-cols-2"
            action="https://formsubmit.co/cecilia.skoldebrink@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Ny förfrågan från Italidea" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://italidea.netlify.app/tack"
            />
            <input
              className="rounded-xl border border-[#183a2f]/30 bg-[#fcfbf8] px-4 py-3 text-sm outline-none ring-[#183a2f] placeholder:text-neutral-500 transition-shadow focus:ring-2"
              name="Namn"
              type="text"
              placeholder="Ditt namn"
              autoComplete="name"
              required
            />
            <input
              className="rounded-xl border border-[#183a2f]/30 bg-[#fcfbf8] px-4 py-3 text-sm outline-none ring-[#183a2f] placeholder:text-neutral-500 transition-shadow focus:ring-2"
              name="E-post"
              type="email"
              placeholder="din@email.se"
              autoComplete="email"
              required
            />
            <input
              className="rounded-xl border border-[#183a2f]/30 bg-[#fcfbf8] px-4 py-3 text-sm outline-none ring-[#183a2f] placeholder:text-neutral-500 transition-shadow focus:ring-2 md:col-span-2"
              name="Ärende"
              type="text"
              placeholder="Till exempel: tolkhjälp vid möte"
              required
            />
            <textarea
              className="min-h-36 rounded-xl border border-[#183a2f]/30 bg-[#fcfbf8] px-4 py-3 text-sm outline-none ring-[#183a2f] placeholder:text-neutral-500 transition-shadow focus:ring-2 md:col-span-2"
              name="Meddelande"
              placeholder="Berätta kort om ditt ärende"
              required
            />
            <button type="submit" className="btn-primary px-6 py-3 text-sm md:col-span-2 md:w-fit">
              Skicka förfrågan
            </button>
          </form>
        </RevealSection>

        <RevealSection
          as="footer"
          className="mt-16 border-t border-[#183a2f]/15 pt-8 text-center text-sm text-neutral-600"
        >
          <div data-reveal>
          <p className="font-display text-lg text-[#183a2f]">Italidea</p>
          <p className="mt-2">Svensk-italiensk tolkning · Sverige &amp; Italien</p>
          <p className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3">
            <a
              href="mailto:cecilia.skoldebrink@gmail.com"
              className="max-w-full break-all underline decoration-[#183a2f]/25 underline-offset-2 hover:text-[#183a2f]"
            >
              cecilia.skoldebrink@gmail.com
            </a>
            <span className="hidden text-neutral-400 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href="tel:+46707273699"
              className="underline decoration-[#183a2f]/25 underline-offset-2 hover:text-[#183a2f]"
            >
              070-727 36 99
            </a>
          </p>
          </div>
        </RevealSection>
      </main>
    </div>
  );
}
