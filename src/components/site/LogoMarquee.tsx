export function LogoMarquee() {
  const logos = [
    "ACME",
    "Lumen",
    "Nimbus",
    "Vortex",
    "Northwind",
    "Quanta",
    "Helios",
    "Aether",
    "Cobalt",
    "Pulse",
    "Forge",
    "Orbit",
  ];
  const row = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-14">
        {row.map((name, i) => (
          <div
            key={i}
            className="text-2xl font-display font-bold tracking-tight text-muted-foreground/60 hover:text-foreground transition whitespace-nowrap"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
