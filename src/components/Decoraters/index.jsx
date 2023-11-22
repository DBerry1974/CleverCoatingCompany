export default function HeroDecorator(props) {
  const { town, title, sub } = props;

  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{title}</span>{" "}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {sub}
            </p>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDzLPx8Ta6nsd-2MHugd2Hmzsg6pCi4g40&q=${town}`}
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}

//https://www.google.com/maps/embed/v1/directions
//  ?key = YOUR_API_KEY
//  & origin=Oslo + Norway
//    & destination=Telemark + Norway
//      & avoid=tolls | highways
