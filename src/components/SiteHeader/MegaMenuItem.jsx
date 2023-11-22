export const MegaMenuItem = ({ item }) => (
  <div key={item.name} className="group relative">
    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
      <img
        src={item.imageSrc.src}
        alt={item.imageAlt}
        className="object-cover object-center"
      />
    </div>
    <a href={item.href} className="mt-4 block font-medium text-gray-900">
      <span className="absolute inset-0 z-10" aria-hidden="true" />
      {item.name}
    </a>
    {item.cta && (
      <p aria-hidden="true" className="mt-1">
        {item.cta}
      </p>
    )}
  </div>
);
