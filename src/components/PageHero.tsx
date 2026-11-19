import Image from "next/image";
import { Container } from "@/components/Container";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export function PageHero({
  title,
  description,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-24 text-white md:pt-28">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-navy/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/35 to-transparent" />
      </div>

      <Container className="relative py-16 md:py-20 xl:py-24">
        <h1 className="max-w-3xl font-display text-fluid-3xl tracking-wide text-balance xl:max-w-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-fluid-base leading-relaxed text-white/85 xl:mt-6 xl:max-w-3xl">
          {description}
        </p>
      </Container>
    </section>
  );
}
