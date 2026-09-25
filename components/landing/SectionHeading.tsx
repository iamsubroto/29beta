import { GradientText } from "./GradientText";

type SectionHeadingProps = {
  eyebrow?: string;
  title?: string;
  gradient?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  gradient,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-4xl ${align === "center" ? "text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-black uppercase text-cyanGlow">{eyebrow}</p>
      ) : null}
      {title ? (
        <h2 className="text-3xl font-black uppercase leading-[1.04] text-white sm:text-4xl lg:text-5xl">
          {title}
          {gradient ? (
            <>
              <br />
              <GradientText>{gradient}</GradientText>
            </>
          ) : null}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="mt-5 text-base leading-7 text-mist sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
