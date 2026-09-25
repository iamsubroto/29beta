export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-vioniko-gradient bg-clip-text text-transparent">
      {children}
    </span>
  );
}
