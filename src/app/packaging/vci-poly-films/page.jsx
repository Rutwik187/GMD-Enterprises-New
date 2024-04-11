import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

const ProductDesc = () => {
  return (
    <div className="mx-auto p-20">
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
                src="/vci-poly-films/img1.png"
                alt="VCI poly films"
              ></Image>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <Image
                className="object-cover"
                width={1000}
                height={1000}
                src="/vci-poly-films/img2.jpg"
                alt="VCI poly films"
              ></Image>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <Image
                className="object-cover"
                width={1000}
                height={1000}
                src="/vci-poly-films/img3.png"
                alt="VCI poly films"
              ></Image>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <Image
                className="object-cover"
                width={1000}
                height={1000}
                src="/vci-poly-films/img4.png"
                alt="VCI poly films"
              ></Image>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <Image
                className="object-cover"
                width={1000}
                height={1000}
                src="/vci-poly-films/img5.jpg"
                alt="VCI poly films"
              ></Image>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <Image
                className="object-cover"
                width={1000}
                height={1000}
                src="/vci-poly-films/img6.jpg"
                alt="VCI poly films"
              ></Image>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <Image
                className="object-cover"
                width={1000}
                height={1000}
                src="/vci-poly-films/img7.jpg"
                alt="VCI poly films"
              ></Image>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="mt-10">
        <div className="my-4 flex gap-4 justify-between items-center flex-wrap">
          <h1 className="text-4xl font-bold underline ">
            VCI (Vapor Corrosion Inhibitor) film
          </h1>
          <div className="flex flex-wrap gap-4 ">
            <Button onClick="/brosher.pdf" className="bg-blue-600">
              {" "}
              <Download className="mr-2" /> Download Brochure
            </Button>
            <Button className="bg-blue-600">
              <Mail className="mr-2" /> Request for MSDS
            </Button>
          </div>
        </div>

        <div className="mt-8">
          {" "}
          <div className="max-w-7xl mx-auto">
            {" "}
            <div className="flex items-center mb-4"> </div>{" "}
            <p className="text-gray-600 mb-6">
              VCI (Vapor Corrosion Inhibitor) film boasts a unique composition
              infused with VCI additives, incorporated during the molten mass
              coextrusion process. This innovative method ensures the seamless
              integration of VCI molecules into the film, subsequently
              sublimating into the plastic and endowing it with essential
              corrosion protection properties. Widely adopted by leading
              automotive manufacturers and steel companies, VCI film presents a
              straightforward and cost-effective solution for safeguarding
              finished metal products.
            </p>{" "}
            <p className="text-gray-600 mb-6">
              Engineered with a three-layer coextrusion design, VCI film
              guarantees exceptional mechanical strength while orchestrating the
              alignment of VCI molecules in a singular direction, maximizing
              effectiveness.
            </p>{" "}
            <div className="mb-6">
              {" "}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                VCI POLY bags
              </h3>{" "}
              <p className="text-gray-600">
                VCI POLY bags, featuring VCI technology, offer comprehensive
                corrosion protection for a diverse range of metal types. Simply
                encase dry and clean metal components within a VCI POLY bag,
                fold or seal securely, and enjoy up to 2 - 5 years of
                corrosion-free storage. This protection extends to preventing
                rust, tarnish, stains, white rust, and corrosion without the
                need for messy oils, greasing, desiccants, solvents, or other
                potentially hazardous materials. Furthermore, no degreasing is
                necessary, simplifying maintenance processes.
              </p>{" "}
              <p className="text-gray-600 mt-4">
                Identifying protected parts is effortless with VCI POLY, as the
                bags, film, and sheets are available in transparent clear or
                tinted colors. Moreover, VCI POLY products are devoid of
                phosphates or heavy metals, ensuring non-toxicity and
                recyclability. Embracing environmentally safe practices, VCI
                POLY replaces traditional corrosion inhibitors, offering a
                sustainable solution for metal protection needs.
              </p>{" "}
            </div>{" "}
            <div className="mb-6">
              {" "}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Metals Protected
              </h3>{" "}
              <ul className="list-disc pl-6 text-gray-600">
                {" "}
                <li>Aluminum</li> <li>Galvanized Steel</li> <li>Cast Iron</li>{" "}
                <li>Carbon Steels</li> <li>Silicon Steel</li>{" "}
                <li>Stainless Steel</li> <li>Silver</li> <li>Copper</li>{" "}
                <li>Brass</li> <li>Solder</li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="mb-6">
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
                      <td className="px-4 py-2 border-b">
                        Tear Resistance
                      </td>{" "}
                      <td className="px-4 py-2 border-b">1200 - 1500</td>{" "}
                      <td className="px-4 py-2 border-b">2280 - 4000</td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <td className="px-4 py-2 border-b">
                        Dart Impact (g)
                      </td>{" "}
                      <td className="px-4 py-2 border-b">100 - 110</td>{" "}
                      <td className="px-4 py-2 border-b">570 - 1000</td>{" "}
                    </tr>{" "}
                  </tbody>{" "}
                </table>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mb-6">
              {" "}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                VCI POLY Physical Properties
              </h3>{" "}
              <p className="text-gray-600">
                VCI POLY meets or exceeds these specifications @ 4 Mils. (100
                microns)
              </p>{" "}
            </div>{" "}
            <div className="mb-6">
              {" "}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Sizes Available
              </h3>{" "}
              <p className="text-gray-600">
                VCI POLY is available in stock and custom size and thickness
                designed to meet your individual requirements including
                oversized VCI shrouds, heat seal-able bags, bags perforated-on-
                rolls, individual cut bags, sheets perforated-on-rolls, auto
                bags, VCI stretch wrap, VCI sheet on roll, tubing and other
                custom configurations.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
