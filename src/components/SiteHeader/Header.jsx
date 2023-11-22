import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline/index.js";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logos/mbam-logo.svg";
import { MegaMenuItem } from "./MegaMenuItem";
import { Button } from "../Buttons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = ({ navigation, setMobileMenuOpen }) => (
  <header className="relative z-10">
    <nav aria-label="Top">
      {/* Top navigation */}
      <div className="bg-gray-900">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white">
            Our opening hours today are 10:00 – 20:00
          </p>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {/* <a
              href="#"
              className="text-sm font-medium text-white hover:text-gray-100"
            >
              Create an account
            </a>
            <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-gray-100"
            >
              Sign in
            </a> */}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div>
            <div className="flex h-32 items-center justify-between">
              {/* Logo (large screen) */}
              <div className="hidden lg:flex lg:flex-1 lg:items-center">
                <a
                  href="/"
                  className="focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <span className="sr-only">
                    Body and mind massage therapy logo
                  </span>
                  <img className="h-24" src={logo.src} alt="Body and Mind Massage Durham" />
                </a>
              </div>

              <div className="hidden h-full lg:flex">
                {/* Flyout menus */}
                <Popover.Group className="inset-x-0 bottom-0 px-4">
                  <div className="flex h-full justify-center space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button className="relative z-10 border-b-transparent border-b flex items-center justify-center text-sm font-medium text-grey-900 transition-colors duration-200 ease-out focus:outline-none focus:border-b focus:border-orange-500">
                                <div className="flex items-center">
                                  <span className="mr-1">{category.name}</span>
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "rotate-180" : "",
                                      "h-4 w-4"
                                    )}
                                  />
                                  <span
                                    className={classNames(
                                      open ? "bg-white" : "",
                                      "absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out"
                                    )}
                                    aria-hidden="true"
                                  />
                                </div>
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                  aria-hidden="true"
                                />
                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                      {category.featured.map((item, idx) => (
                                        <MegaMenuItem
                                          key={item.name + idx}
                                          item={item}
                                        />
                                      ))}
                                      {category.name === "Treatments" && (
                                        <Button
                                          href="/treatments"
                                          classes="mt-1 w-full"
                                        >
                                          See our full treatment list
                                          <ArrowRightIcon className="h-4 w-4 ml-2" />
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}   

                    {navigation.pages.map((page) => (  
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-900 focus:outline-none focus:border-b focus:border-orange-500 "
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>
                </Popover.Group>
              </div>

              {/* Mobile menu and search (lg-) */}
              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 p-2 text-gray-900"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Logo (mobile) */}
              <a href="/" className="lg:hidden">
                <span className="sr-only">
                  Body and mind massage therapy logo
                </span>
                <img src={logo.src} alt="Body and Mind Massage Durham" className="h-24" />
              </a>

              <div className="flex flex-1 items-center justify-end">
                <div className="flex items-center lg:ml-8">
                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-8">
                    <a
                      href="/checkout"
                      className="group -m-2 flex items-center p-2"
                    >
                      <ShoppingCartIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-900"
                        aria-hidden="true"
                      />
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
