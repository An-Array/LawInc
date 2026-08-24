type SectionLabelProps = {
  children: React.ReactNode;
};

export default function SectionLabel({
  children,
}: SectionLabelProps) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
      {children}
    </p>
  );
}