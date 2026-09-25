import Image from "next/image";
import logoChico from "@/logos/logo_chico.png";
import { AffiliateCalculator } from "./AffiliateCalculator";
import { AffiliateHeader } from "./AffiliateHeader";
import { CHATVIONIKO_TRIAL_URL } from "./affiliateConfig";
import { CTAButton } from "./CTAButton";
import { FAQAccordion } from "./FAQAccordion";
import { FeatureCard } from "./FeatureCard";
import { GradientText } from "./GradientText";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const earnings = [
  { subscriptions: "5", commission: "29 USD" },
  { subscriptions: "10", commission: "58 USD" },
  { subscriptions: "25", commission: "145 USD" },
  { subscriptions: "50", commission: "290 USD" },
  { subscriptions: "100", commission: "580 USD" },
];

const productFeatures = [
  {
    title: "Chat IA personalizable",
    text: "Cada conversacion puede configurarse con instrucciones, contexto, estilo de respuesta y nivel de creatividad.",
    tone: "cyan" as const,
  },
  {
    title: "Biblioteca de prompts",
    text: "Prompts preparados que pueden personalizarse y enviarse directamente al chat.",
    tone: "violet" as const,
  },
  {
    title: "Escritura guiada",
    text: "Define producto, audiencia, objetivo, formato y tono para generar varias propuestas de contenido.",
    tone: "lime" as const,
  },
  {
    title: "Keyword research",
    text: "Investigacion de palabras clave, intencion de busqueda, ideas de titulos y meta descriptions para SEO.",
    tone: "cyan" as const,
  },
  {
    title: "Generacion de imagenes con IA",
    text: "Creacion de piezas visuales mediante prompts directamente desde la plataforma.",
    tone: "violet" as const,
  },
  {
    title: "Estudio de video con IA",
    text: "Creacion de videos con estrategia, guion, voz, modelos de video y diferentes formatos.",
    tone: "lime" as const,
  },
  {
    title: "Avatares con IA",
    text: "Posibilidad de generar videos utilizando avatares que hablan.",
    tone: "cyan" as const,
  },
  {
    title: "Asistentes IA",
    text: "Asistentes configurables para investigacion, creacion de contenido, monitoreo, correo, recordatorios y otras tareas.",
    tone: "violet" as const,
  },
  {
    title: "Creacion de chatbots",
    text: "Chatbots personalizados para WordPress, paginas corporativas, landing pages, sitios de servicios, negocios y atencion al cliente.",
    tone: "lime" as const,
  },
];

const academyIncludes = [
  "Clases semanales en vivo",
  "Aprendizaje practico",
  "Ejercicios",
  "Aplicaciones reales con IA",
  "Comunidad",
  "Acompanamiento",
  "Certificado de finalizacion",
];

const ecosystemItems = [
  "Chat IA",
  "Prompts",
  "Imagenes",
  "Video",
  "SEO",
  "Asistentes",
  "Chatbots",
  "Academia Vioniko",
];

const affiliateSteps = [
  {
    title: "Prueba ChatVioniko",
    text: "Crea tu cuenta y conoce la plataforma mediante la prueba gratuita.",
  },
  {
    title: "Activa tu suscripcion",
    text: "Al contratar ChatVioniko desbloqueas las herramientas, Academia Vioniko y el acceso al apartado de afiliados.",
  },
  {
    title: "Activa el programa",
    text: "Dentro de tu cuenta entra al apartado Programa de Afiliados y completa el formulario correspondiente.",
  },
  {
    title: "Obten tu enlace",
    text: "Una vez habilitado, utiliza tu enlace personal para recomendar ChatVioniko.",
  },
  {
    title: "Genera comisiones",
    text: "Las nuevas suscripciones conseguidas mediante tu enlace pueden generar la comision correspondiente segun las condiciones del programa.",
  },
];

const audienceItems = [
  "Creadores de contenido",
  "Marketers",
  "Emprendedores",
  "Agencias",
  "Educadores",
  "Comunidades",
  "Freelancers",
  "Personas interesadas en IA",
  "Personas que recomiendan herramientas digitales",
];

const faqGroups = [
  {
    title: "Programa",
    items: [
      {
        question: "Cuanto cuesta ChatVioniko?",
        answer: "Actualmente tiene un precio de lanzamiento de 29 USD mensuales.",
      },
      {
        question: "Necesito tener ChatVioniko para ser afiliado?",
        answer:
          "Si. Para participar del Programa de Afiliados necesitas tener una suscripcion activa de ChatVioniko. Una vez suscripto tendras acceso al apartado de afiliados dentro de la plataforma.",
      },
      {
        question: "Donde me registro como afiliado?",
        answer:
          "El registro se realiza directamente dentro de ChatVioniko. Con tu suscripcion activa podras ingresar al apartado Programa de Afiliados, completar tus datos y solicitar la activacion.",
      },
      {
        question: "Puedo probar ChatVioniko antes de pagar?",
        answer:
          "Si. Puedes crear tu cuenta y realizar una prueba gratuita para conocer ChatVioniko antes de activar tu suscripcion.",
      },
      {
        question: "Cuanto recibo por una suscripcion directa?",
        answer:
          "El Nivel 1 ofrece un 20% del primer pago de cada suscripcion directa generada mediante tu enlace. Con el precio de 29 USD, el ejemplo actual equivale a 5.80 USD.",
      },
      {
        question: "Que es el Nivel 2?",
        answer:
          "Los afiliados certificados y aprobados pueden obtener un 5% del primer pago de suscripciones generadas por sus referidos.",
      },
      {
        question: "La comision es recurrente?",
        answer:
          "Segun las condiciones mostradas actualmente, la comision corresponde al primer pago. No se presenta como una comision recurrente.",
      },
      {
        question: "Que obtengo al activar mi suscripcion?",
        answer:
          "Obtienes acceso a las funciones disponibles de ChatVioniko, incluyendo herramientas de IA para contenido, investigacion, imagenes, video, asistentes, chatbots y otras funcionalidades. La suscripcion tambien incluye Academia Vioniko y acceso al apartado del Programa de Afiliados.",
      },
    ],
  },
  {
    title: "Condiciones",
    items: [
      {
        question: "Gano comision por los creditos?",
        answer:
          "No. Las comisiones aplican a las suscripciones, no a compras de creditos.",
      },
      {
        question: "Necesito muchos seguidores?",
        answer:
          "No necesariamente. El programa tambien puede utilizarse mediante contactos, comunidades, contenido educativo, clientes o audiencias especificas.",
      },
      {
        question: "Que incluye ChatVioniko?",
        answer:
          "Incluye chat IA personalizable, biblioteca de prompts, escritura guiada, keyword research, generacion de imagenes, generacion de video, avatares, asistentes IA, creacion de chatbots, Academia Vioniko con clases en vivo y otras herramientas disponibles dentro de la plataforma.",
      },
    ],
  },
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function HeroAffiliateVisual() {
  return (
    <div className="hero-visual relative mx-auto h-[430px] w-full max-w-lg lg:max-w-none">
      <div className="absolute inset-0 rounded-lg border border-cyanGlow/20 bg-panel/40 shadow-glow" />
      <div className="system-grid absolute inset-3 rounded-lg border border-white/10" />

      <div className="absolute left-6 top-7 w-[58%] rounded-lg border border-violetGlow/30 bg-panel/90 p-4 shadow-glow">
        <p className="text-xs font-black uppercase text-violet-200">Tu enlace</p>
        <div className="mt-4 rounded-md border border-white/10 bg-white/[0.04] p-3">
          <span className="block h-2 rounded bg-cyanGlow/50" />
          <span className="mt-2 block h-2 w-4/5 rounded bg-white/20" />
        </div>
        <p className="mt-4 text-xs font-bold text-mist">Comparte ChatVioniko</p>
      </div>

      <div className="absolute right-6 top-20 w-[43%] rounded-lg border border-cyanGlow/30 bg-panel/90 p-4 shadow-cyan">
        <p className="text-xs font-black uppercase text-cyanGlow">Nivel 1</p>
        <p className="mt-4 text-4xl font-black text-white">20%</p>
        <p className="mt-2 text-xs font-bold uppercase text-mist">suscripcion directa</p>
      </div>

      <div className="absolute bottom-24 left-10 w-[47%] rounded-lg border border-limeGlow/25 bg-panel/90 p-4 shadow-[0_0_28px_rgba(163,230,53,0.14)]">
        <p className="text-xs font-black uppercase text-limeGlow">Ejemplo</p>
        <p className="mt-4 text-3xl font-black text-white">5.80 USD</p>
        <p className="mt-2 text-xs font-bold uppercase text-mist">por suscripcion</p>
      </div>

      <div className="absolute bottom-8 right-8 w-[56%] rounded-lg border border-white/10 bg-panel/90 p-4">
        <p className="text-xs font-black uppercase text-white">Nivel 2 certificado</p>
        <div className="mt-4 flex items-center gap-2">
          {["Tu", "Afiliado", "Suscriptor"].map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-white/10 px-2 py-2 text-[11px] font-bold text-mist"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm font-black text-cyanGlow">5% segundo nivel</p>
      </div>

      <span className="pulse-line absolute left-[18%] top-[39%] h-px w-[58%] rotate-12 bg-cyanGlow/70" />
      <span className="pulse-line absolute bottom-[37%] left-[27%] h-px w-[44%] -rotate-12 bg-violetGlow/70" />
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs font-black uppercase text-mist">{label}</p>
    </div>
  );
}

export function AffiliateLandingPage() {
  return (
    <main id="inicio" className="min-h-screen overflow-hidden bg-ink text-white">
      <AffiliateHeader />

      <section className="relative px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="ambient-field absolute inset-0" aria-hidden="true" />
        <Reveal>
          <div className="relative z-10 mx-auto mb-8 flex max-w-7xl justify-center">
            <div className="hero-logo-glow relative flex flex-col items-center">
              <div className="mb-4 grid h-16 w-16 place-items-center rounded-lg border border-cyanGlow/25 bg-panel/80 shadow-cyan sm:h-20 sm:w-20">
                <Image
                  src={logoChico}
                  alt="ChatVioniko"
                  priority
                  className="h-11 w-11 object-contain sm:h-14 sm:w-14"
                  sizes="80px"
                />
              </div>
              <p className="bg-vioniko-gradient bg-clip-text text-4xl font-black uppercase leading-none text-transparent sm:text-6xl lg:text-7xl">
                ChatVioniko
              </p>
              <p className="mt-3 text-sm font-black uppercase text-mist sm:text-base">
                Programa de afiliados
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="inline-flex rounded-md border border-cyanGlow/30 bg-cyanGlow/10 px-3 py-2 text-xs font-black uppercase text-cyanGlow">
              Programa de afiliados
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-black uppercase leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Gana comisiones
              <br />
              <GradientText>recomendando ChatVioniko</GradientText>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-mist sm:text-lg">
              Comparte una plataforma completa de inteligencia artificial y recibe
              comisiones por las nuevas suscripciones que generes con tu enlace
              cuando tengas una suscripcion activa y el programa habilitado dentro de
              tu cuenta.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <StatPill label="Nivel 1" value="20%" />
              <StatPill label="Nivel 2 certificado" value="5%" />
              <StatPill label="Precio lanzamiento" value="29 USD" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={CHATVIONIKO_TRIAL_URL} className="w-full sm:w-auto">
                Probar ChatVioniko gratis
              </CTAButton>
              <CTAButton
                href="#como-funciona"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Ver como funciona el programa
              </CTAButton>
            </div>

            <p className="mt-6 max-w-2xl text-sm font-bold leading-6 text-mist">
              Prueba ChatVioniko gratis. Si luego activas tu suscripcion, tendras
              disponible el Programa de Afiliados dentro de tu cuenta.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-mist/80">
              Ideal para creadores de contenido, marketers, emprendedores,
              comunidades, agencias y personas que ya recomiendan herramientas
              digitales.
            </p>
          </Reveal>

          <Reveal>
            <HeroAffiliateVisual />
          </Reveal>
        </div>
      </section>

      <Section id="ganancias">
        <Reveal>
          <SectionHeading
            eyebrow="Cuanto puedes ganar"
            title="Cuanto podrias generar?"
            subtitle="Veamos algunos ejemplos utilizando el precio de lanzamiento actual de 29 USD."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="rounded-lg border border-violetGlow/30 bg-panel/75 p-6 shadow-glow">
              <p className="text-sm font-black uppercase text-cyanGlow">
                Comision directa
              </p>
              <p className="mt-4 text-4xl font-black uppercase text-white sm:text-5xl">
                29 USD x 20% = <GradientText>5.80 USD</GradientText>
              </p>
              <p className="mt-5 text-base leading-7 text-mist">
                Cada nueva suscripcion directa puede generar 5.80 USD de comision
                sobre el primer pago.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {earnings.map((item) => (
                <article
                  key={item.subscriptions}
                  className="rounded-lg border border-white/10 bg-panel/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40 hover:bg-panelSoft/80"
                >
                  <p className="text-3xl font-black text-white">{item.subscriptions}</p>
                  <p className="mt-1 text-xs font-black uppercase text-mist">
                    suscripciones
                  </p>
                  <p className="mt-4 text-2xl font-black text-limeGlow">
                    {item.commission}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-mist">
            Estos son ejemplos matematicos basados en una comision del 20% sobre una
            suscripcion de 29 USD. No representan ingresos garantizados.
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <AffiliateCalculator />
        </Reveal>
      </Section>

      <Section id="afiliados">
        <Reveal>
          <div className="grid gap-10 rounded-lg border border-violetGlow/30 bg-panel/75 p-6 shadow-glow lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-black uppercase text-cyanGlow">
                Nivel 2 certificado
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-[1.04] text-white sm:text-5xl">
                Y si construyes
                <br />
                <GradientText>tu propia red?</GradientText>
              </h2>
              <p className="mt-5 text-base leading-7 text-mist">
                Los afiliados oficiales certificados pueden acceder al Nivel 2 y
                recibir un 5% del primer pago de las suscripciones generadas por sus
                referidos.
              </p>
              <div className="mt-6 rounded-lg border border-limeGlow/25 bg-limeGlow/10 p-5">
                <p className="text-lg font-black text-limeGlow">
                  29 USD x 5% = 1.45 USD
                </p>
                <p className="mt-2 text-sm leading-6 text-mist">
                  20 suscripciones indirectas = 29 USD adicionales como ejemplo de
                  comision potencial.
                </p>
              </div>
              <p className="mt-4 text-xs font-bold uppercase text-mist/80">
                Nivel 2 sujeto a certificacion y aprobacion.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              {["Tu", "Afiliado referido", "Nuevo suscriptor"].map((item, index) => (
                <div key={item}>
                  <div className="rounded-lg border border-cyanGlow/20 bg-panel/80 p-5 text-center shadow-cyan">
                    <p className="text-xs font-black uppercase text-cyanGlow">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-xl font-black uppercase text-white">{item}</p>
                  </div>
                  {index < 2 ? (
                    <div className="grid place-items-center py-3 text-2xl font-black text-violetGlow">
                      ↓
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <p className="rounded-md border border-limeGlow/25 bg-limeGlow/10 p-3 text-sm font-black text-limeGlow">
                  20% directo
                </p>
                <p className="rounded-md border border-cyanGlow/25 bg-cyanGlow/10 p-3 text-sm font-black text-cyanGlow">
                  5% segundo nivel
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="que-incluye">
        <Reveal>
          <SectionHeading
            eyebrow="Que estas recomendando"
            title="No estas recomendando solo un chat"
            subtitle="ChatVioniko reune multiples herramientas de inteligencia artificial dentro de una sola suscripcion."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productFeatures.map((feature) => (
            <Reveal key={feature.title}>
              <FeatureCard title={feature.title} tone={feature.tone}>
                <p>{feature.text}</p>
              </FeatureCard>
            </Reveal>
          ))}

          <Reveal className="md:col-span-2 xl:col-span-3">
            <article className="relative overflow-hidden rounded-lg border border-limeGlow/40 bg-panel/80 p-6 shadow-[0_0_34px_rgba(163,230,53,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-panelSoft/80 sm:p-8">
              <div className="panel-lines absolute inset-0" aria-hidden="true" />
              <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="max-w-2xl">
                  <p className="inline-flex rounded-md border border-limeGlow/25 bg-limeGlow/10 px-3 py-2 text-xs font-black uppercase text-limeGlow">
                    Academia incluida
                  </p>
                  <h3 className="mt-4 text-3xl font-black uppercase text-white">
                    Academia Vioniko
                  </h3>
                  <p className="mt-4 text-base leading-7 text-mist">
                    Tu suscripcion a ChatVioniko tambien incluye acceso a Academia
                    Vioniko, donde aprenderas a utilizar inteligencia artificial de
                    forma practica mediante clases en vivo todas las semanas.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {academyIncludes.map((item) => (
                    <p
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm font-bold leading-5 text-mist"
                    >
                      <span className="mr-2 text-limeGlow" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-10 max-w-5xl rounded-lg border border-cyanGlow/25 bg-panel/75 p-6 text-center shadow-cyan sm:p-10">
            <p className="text-sm font-black uppercase text-cyanGlow">
              Ahora pruebalo tu
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.04] text-white sm:text-5xl">
              Descubre todo lo que puedes hacer
              <br />
              <GradientText>con ChatVioniko</GradientText>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-mist">
              Conoce la plataforma mas a fondo, explora sus herramientas y empieza
              con una prueba gratuita. Puedes registrarte y probar ChatVioniko antes
              de contratar la suscripcion.
            </p>
            <div className="mt-8">
              <CTAButton href={CHATVIONIKO_TRIAL_URL}>
                Probar ChatVioniko gratis
              </CTAButton>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-xs font-bold uppercase leading-5 text-mist/80">
              Cuando activas tu suscripcion desbloqueas todas las funcionalidades de
              ChatVioniko, incluyendo Academia Vioniko y el acceso al Programa de
              Afiliados.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-lg border border-cyanGlow/25 bg-panel/75 p-6 text-center shadow-cyan sm:p-10">
            <p className="text-sm font-black uppercase text-cyanGlow">
              Bloque de valor
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.04] text-white sm:text-5xl">
              Todo en una
              <br />
              <GradientText>sola suscripcion</GradientText>
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-mist">
              En lugar de explicar ChatVioniko como otro chat de IA, puedes mostrar
              que reune creacion de contenido, investigacion, imagenes, video,
              asistentes, chatbots, productividad y formacion dentro del mismo
              ecosistema.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {ecosystemItems.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-black uppercase text-white"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 text-4xl font-black uppercase text-white">
              = <GradientText>una sola suscripcion</GradientText>
            </p>
            <p className="mt-5 inline-flex rounded-md border border-limeGlow/25 bg-limeGlow/10 px-4 py-3 text-sm font-black uppercase text-limeGlow">
              29 USD / mes · precio de lanzamiento
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-sm font-bold leading-6 text-mist">
              Puedes registrarte gratis y probar la plataforma. Con la suscripcion
              activa se desbloquea el acceso completo, incluyendo Academia Vioniko y
              la seccion del Programa de Afiliados.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="como-funciona">
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title="Empezar es simple"
            subtitle="Primero conoces la plataforma. Luego, con tu suscripcion activa, habilitas el apartado de afiliados dentro de tu cuenta."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {affiliateSteps.map((step, index) => (
            <Reveal key={step.title}>
              <article className="h-full rounded-lg border border-violetGlow/25 bg-panel/75 p-5 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-vioniko-gradient text-sm font-black text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-black uppercase text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-mist">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <CTAButton href={CHATVIONIKO_TRIAL_URL}>
              Empezar prueba gratuita
            </CTAButton>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            title="Este programa es para ti?"
            subtitle="No necesitas tener millones de seguidores. Lo importante es poder mostrar de forma clara como ChatVioniko puede ayudar a otras personas."
          />
        </Reveal>
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
          {audienceItems.map((item) => (
            <Reveal key={item}>
              <span className="inline-flex rounded-md border border-cyanGlow/20 bg-cyanGlow/10 px-3 py-2 text-sm font-bold text-white transition hover:border-cyanGlow/50 hover:bg-cyanGlow/20">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-violetGlow/40 bg-panel/80 p-6 text-center shadow-glow sm:p-10">
            <div className="panel-lines absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-black uppercase leading-[1.04] text-white sm:text-5xl">
                Ya tienes personas a las que podria servirles ChatVioniko?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-mist">
                Empieza probando la plataforma, descubre que puedes recomendar y,
                cuando actives tu suscripcion, accede al Programa de Afiliados desde
                tu cuenta.
              </p>
              <div className="mt-8">
                <CTAButton href={CHATVIONIKO_TRIAL_URL}>
                  Empieza con ChatVioniko
                </CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="preguntas">
        <Reveal>
          <SectionHeading title="Preguntas frecuentes" />
        </Reveal>
        <Reveal className="mt-12">
          <FAQAccordion groups={faqGroups} />
        </Reveal>
      </Section>

      <Section className="pb-24">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-lg border border-violetGlow/40 bg-panel/80 p-6 text-center shadow-glow sm:p-10">
            <p className="text-sm font-black uppercase text-cyanGlow">
              Programa de afiliados
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.04] text-white sm:text-5xl">
              Todo empieza
              <br />
              <GradientText>conociendo ChatVioniko</GradientText>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-mist">
              Prueba la plataforma, descubre las herramientas que tendras para
              recomendar y, cuando actives tu suscripcion, podras acceder al Programa
              de Afiliados directamente desde tu cuenta.
            </p>
            <div className="mt-8">
              <CTAButton href={CHATVIONIKO_TRIAL_URL}>
                Probar ChatVioniko gratis
              </CTAButton>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-black uppercase text-mist">
              <span className="rounded-md border border-violetGlow/25 bg-violetGlow/10 px-3 py-2 text-violet-200">
                29 USD / mes precio de lanzamiento
              </span>
              <span className="rounded-md border border-limeGlow/25 bg-limeGlow/10 px-3 py-2 text-limeGlow">
                20% Nivel 1
              </span>
              <span className="rounded-md border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-2 text-cyanGlow">
                5% Nivel 2 para afiliados certificados
              </span>
            </div>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-black uppercase text-white">ChatVioniko Afiliados</p>
          <nav className="flex flex-wrap gap-5 text-sm text-mist" aria-label="Footer">
            <a href="#como-funciona" className="hover:text-white">
              Como funciona
            </a>
            <a href="#ganancias" className="hover:text-white">
              Ganancias
            </a>
            <a href="#que-incluye" className="hover:text-white">
              Que incluye
            </a>
            <a href="#preguntas" className="hover:text-white">
              Preguntas frecuentes
            </a>
          </nav>
          <p className="text-sm text-mist">© ChatVioniko</p>
        </div>
      </footer>
    </main>
  );
}
