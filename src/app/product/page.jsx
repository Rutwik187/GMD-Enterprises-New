import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 max-h-96">
        <div class="absolute inset-0">
          <img
            class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
            alt=""
          />
        </div>

        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Aluminum Barrier Foil
            </h2>

            <form action="#" method="POST" class="mt-8 lg:mt-12">
              <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                  <div className="flex flex-wrap gap-4 ">
                    <Button
                      onClick="/brosher.pdf"
                      className="bg-blue-600  hover:bg-blue-700 focus:bg-blue-700"
                    >
                      {" "}
                      <Download className="mr-2" /> Download Brochure
                    </Button>
                    <Button className="bg-blue-600  hover:bg-blue-700 focus:bg-blue-700">
                      <Mail className="mr-2" /> Request for MSDS
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section class="py-10  sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
              <div class="overflow-hidden aspect-w-3 aspect-h-4">
                <img
                  class="object-cover object-top origin-top scale-150"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                  alt=""
                />
              </div>

              <div class="relative">
                <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                  <img
                    class="object-cover scale-150 lg:origin-bottom-right"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div class="absolute -translate-x-1/2 left-1/2 -top-16">
                <img
                  class="w-32 h-32"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                  alt=""
                />
              </div>
            </div>

            <div class="flex flex-col items-start xl:px-16">
              <h2 class="text-xl font-bold leading-tight text-black sm:text-xl lg:text-2xl">
                Aluminium Barrier Foil
              </h2>
              <p class="mt-4 text-base leading-relaxed ">
                VCI (Vapor Corrosion Inhibitor) film boasts a unique composition
                infused with VCI additives, incorporated during the molten mass
                coextrusion process. This innovative method ensures the seamless
                integration of VCI molecules into the film, subsequently
                sublimating into the plastic and endowing it with essential
                corrosion protection properties. Widely adopted by leading
                automotive manufacturers and steel companies, VCI film presents
                a straightforward and cost-effective solution for safeguarding
                finished metal products.
              </p>
              <br />
              <p>
                Engineered with a three-layer coextrusion design, VCI film
                guarantees exceptional mechanical strength while orchestrating
                the alignment of VCI molecules in a singular direction,
                maximizing effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {" "}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Typical Properties
          </h3>{" "}
          <div className="overflow-x-auto">
            {" "}
            <table className="w-full table-auto">
              {" "}
              <thead>
                {" "}
                <tr className="bg-gray-200">
                  {" "}
                  <th className="px-4 py-2 text-left">Property</th>{" "}
                  <th className="px-4 py-2 text-left">LDPE</th>{" "}
                  <th className="px-4 py-2 text-left">LLDPE</th>{" "}
                </tr>{" "}
              </thead>{" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <td className="px-4 py-2 border-b">
                    Tensile Strength PSI
                  </td>{" "}
                  <td className="px-4 py-2 border-b">2450 - 3500</td>{" "}
                  <td className="px-4 py-2 border-b">4100 - 6200</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="px-4 py-2 border-b">Elongation %</td>{" "}
                  <td className="px-4 py-2 border-b">350 - 700</td>{" "}
                  <td className="px-4 py-2 border-b">570 - 900</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="px-4 py-2 border-b">Tear Resistance</td>{" "}
                  <td className="px-4 py-2 border-b">1200 - 1500</td>{" "}
                  <td className="px-4 py-2 border-b">2280 - 4000</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="px-4 py-2 border-b">Dart Impact (g)</td>{" "}
                  <td className="px-4 py-2 border-b">100 - 110</td>{" "}
                  <td className="px-4 py-2 border-b">570 - 1000</td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      <section class="py-10">
        <div class="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                <svg
                  class="text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Eliminate Corrosion
              </h3>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <svg
                  class="text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Outer packaging cleanliness
              </h3>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <svg
                  class="text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Allows for reusable containers
              </h3>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <svg
                  class="text-red-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Eliminate the need to re-dry products
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section class=" bg-white ">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
              <img
                class="w-full mx-auto sm:max-w-xs"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Benefits of using Barrier Foil
              </h2>

              <ul className="list-disc m-8">
                <li className="list-item ">Eliminate Corrosion</li>
                <li className="list-item">
                  {" "}
                  Protects Hydroscopic products from moisture ingress and
                  damage.
                </li>
                <li className="list-item"> U.V. Light</li>
                <li className="list-item">
                  {" "}
                  Protects Atmospherically sensitive products from the outside
                  environmet
                </li>
                <li className="list-item">
                  {" "}
                  Eliminates Odor transfer, into or out of the pack
                </li>
                <li className="list-item">
                  {" "}
                  Reduces the need to invest in modified atmosphere storage
                </li>{" "}
                <li className="list-item"> Outer packaging cleanliness</li>{" "}
                <li className="list-item">
                  {" "}
                  Suitable for Hot-fill applications
                </li>{" "}
                <li className="list-item">
                  {" "}
                  Suitable for Anti-Static Applications
                </li>{" "}
                <li className="list-item"> Allows for reusable containers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-8">
        <h1 className="text-2xl font-bold m-4 mx-auto text-center">
          Image Gallery
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl m-auto"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <Image
                  className="object-cover"
                  width={1000}
                  height={1000}
                  src="/aluminum-foil/img1.jpeg"
                  alt="aluminum foil"
                ></Image>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <Image
                  className="object-cover"
                  width={1000}
                  height={1000}
                  src="/aluminum-foil/img2.jpeg"
                  alt="aluminum foil"
                ></Image>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <Image
                  className="object-cover"
                  width={1000}
                  height={1000}
                  src="/aluminum-foil/img3.jpeg"
                  alt="aluminum foil"
                ></Image>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <Image
                  className="object-cover"
                  width={1000}
                  height={1000}
                  src="/aluminum-foil/img4.jpeg"
                  alt="aluminum foil"
                ></Image>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-2xl font-bold leading-tight text-black sm:text-2xl lg:text-2xl">
              Frequently Asked Questions
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>

          <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span class="flex text-lg font-semibold text-black">
                  {" "}
                  How to create an account?{" "}
                </span>

                <svg
                  class="w-6 h-6 text-gray-400 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div class="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span class="flex text-lg font-semibold text-black">
                  {" "}
                  How can I make payment using Paypal?{" "}
                </span>

                <svg
                  class="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <div class="">
                <button
                  type="button"
                  class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span class="flex text-lg font-semibold text-black">
                    {" "}
                    Can I cancel my plan?{" "}
                  </span>

                  <svg
                    class="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      class="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span class="flex text-lg font-semibold text-black">
                  {" "}
                  How can I reach to support?{" "}
                </span>

                <svg
                  class="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>

          <p class="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
