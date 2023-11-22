import logo from "../../assets/logos/gr-logo2.png";

export const MarketingHeader = () => (
  <header className="relative z-10">
    {/* Top navigation */}

    {/* Main navigation */}
    <div className="bg-gray-500 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center justify-between">
            {/* Logo (large screen) */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center">
              <a href="/">
                <span className="sr-only">
                  Body and mind massage therapy logo
                </span>
                <img
                  className="mt-2"
                  src={logo.src}
                  alt="Body and Mind Massage Therapy - Thai Massage, Durham"
                />
              </a>
            </div>

            {/* Mobile logo (lg-) */}
            <div className="flex flex-1 justify-center items-center lg:hidden">
              {/* Logo (mobile) */}
              <a href="/" className="lg:hidden">
                <span className="sr-only">
                  Body and mind massage therapy logo
                </span>
                <img src={logo.src} 
                alt="Body and Mind Massage Therapy - Thai Massage, Durham" 
                />
                
              </a>
            </div>

            <div className="hidden lg:block">
              <div className="flex-shrink-0">
                <a href="tel:+34966780306">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md bg-gray-800 hover:bg-gray-300 px-4 py-2 text-sm lg:text-lg font-medium text-white shadow-sm focus:outline-none"
                  >
                    <svg
                      class="w-4 h-4 mr-2 md:w-6 md:h-6 md:mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        aria-hidden="true"
                      ></path>
                    </svg>
                    <span>Call Now +34 966 780 306</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white lg:hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div>
          <div className="flex h-12 items-center justify-between">
            {/* Logo (large screen) */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center">
              <a href="/">
                <span className="sr-only">
                  Body and mind massage therapy logo
                </span>
                <img
                  className="h-24"
                  src={logo.src}
                  alt="Body and Mind Massage Therapy - Thai Massage, Durham"
                />
              </a>
            </div>

            {/* Mobile Call Now DIV (lg-) */}
            <div className="flex flex-1 justify-center items-center lg:hidden">
              <a href="tel:+34966780306">
                <button
                  type="button"
                  className="relative w-full inline-flex items-center rounded-md bg-orange-400 hover:bg-orange-700 px-8 py-1 text-lg lg:text-xl font-medium text-white shadow-sm focus:outline-none"
                >
                  <svg
                    class="w-4 h-4 mr-2 md:w-6 md:h-6 md:mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      aria-hidden="true"
                    ></path>
                  </svg>
                  <span className="hidden lg:block"> +34 966 780 306</span>
                  <span className="lg:hidden">Call Now</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
