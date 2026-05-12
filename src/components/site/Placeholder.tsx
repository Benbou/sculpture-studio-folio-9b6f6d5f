export function ImagePlaceholder({
  label,
  ratio = "4/5",
}: {
  label?: string;
  ratio?: string;
}) {
  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden bg-muted text-muted-foreground"
      style={{ aspectRatio: ratio }}
    >
      <span className="font-serif text-sm italic tracking-wide opacity-70">
        {label ?? "Image à venir"}
      </span>
    </div>
  );
}
