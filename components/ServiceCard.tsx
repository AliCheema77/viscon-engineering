import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  categorySlug: string;
  title: string;
  image: string;
};

export default function ServiceCard({
  categorySlug,
  title,
  image,
}: ServiceCardProps) {
  return (
    <Link
      href={`/projects?category=${categorySlug}`}
      className="group relative block aspect-4/3 overflow-hidden rounded-2xl"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/0 opacity-0 transition-all duration-300 group-hover:bg-brand-primary/90 group-hover:opacity-100">
        <span className="flex flex-col items-center gap-2 font-sans text-lg font-semibold text-white">
          {title}
          <span aria-hidden="true" className="text-2xl">
            &rarr;
          </span>
        </span>
      </div>

      <span className="absolute bottom-4 left-4 font-sans text-base font-semibold text-white drop-shadow transition-opacity duration-300 group-hover:opacity-0">
        {title}
      </span>
    </Link>
  );
}
