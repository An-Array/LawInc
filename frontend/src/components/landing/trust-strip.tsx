import { Landmark, LockKeyhole, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: LockKeyhole,
    title: "Secure & Private",
    description: "Your research stays protected.",
  },
  {
    icon: Landmark,
    title: "Built for India",
    description: "Indian laws. Indian context.",
  },
  {
    icon: ShieldCheck,
    title: "Traceable Citations",
    description: "For Students, professionals, institutions.",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-16 sm:py-20">
      <div className="lawinc-container-wide">
        <div className="grid border-y border-border sm:grid-cols-3">
          {trustItems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                flex items-start gap-4
                border-border py-7
                sm:px-8
                sm:first:pl-0
                sm:last:pr-0
                sm:not-last:border-r
              "
            >
              <Icon
                size={30}
                strokeWidth={1.5}
                className="h-10 w-10  text-primary"
              />

              <div>
                <p className="text-sm font-semibold text-foreground">
                  {title}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}