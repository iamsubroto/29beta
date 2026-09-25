type FAQGroup = {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export function FAQAccordion({ groups }: { groups: FAQGroup[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.title}
          className="rounded-lg border border-white/10 bg-panel/70 p-4 shadow-cyan"
        >
          <h3 className="mb-3 text-sm font-black uppercase text-cyanGlow">
            {group.title}
          </h3>
          <div className="space-y-2">
            {group.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-bold text-white">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-white/10 text-cyanGlow transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-mist">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
