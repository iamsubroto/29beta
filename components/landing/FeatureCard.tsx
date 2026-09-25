type FeatureCardProps = {
  title: string;
  children: React.ReactNode;
  tone?: "violet" | "cyan" | "lime";
};

const tones = {
  violet: "border-violetGlow/30 shadow-glow",
  cyan: "border-cyanGlow/25 shadow-cyan",
  lime: "border-limeGlow/25 shadow-[0_0_28px_rgba(163,230,53,0.12)]",
};

export function FeatureCard({
  title,
  children,
  tone = "cyan",
}: FeatureCardProps) {
  return (
    <article
      className={`rounded-lg border bg-panel/75 p-5 transition duration-300 hover:-translate-y-1 hover:bg-panelSoft/80 ${tones[tone]}`}
    >
      <h3 className="text-lg font-black uppercase text-white">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-mist">{children}</div>
    </article>
  );
}
