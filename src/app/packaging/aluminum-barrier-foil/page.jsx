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

      <div className="mt-10">
        <div className="my-4 flex gap-4 justify-between items-center flex-wrap">
          <h1 className="text-4xl font-bold underline ">
            Aluminium Barrier Foil
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
        <p>
          Aluminum Barrier Foil comprises of 3 to 4 layers of different
          materials. These materials bond together with adhesive or extruded
          polyethylene and derive their properties from a strong construction as
          outlined in the below diagram
        </p>
        <p>
          The aluminum layer is extremely important in laminates. They are used
          in a wide variety of industries to provide both Dry Product Protection
          and Corrosion Prevention. Barrier Foil protects the integrity of any
          application where deterioration of the packaged product may take place
          due to:
        </p>
        <ul className="list-disc m-8">
          <li className="list-item ">Moisture</li>
          <li className="list-item">Oxygen Ingress</li>
          <li className="list-item"> U.V. Light</li>
          <li className="list-item"> Temperature Extremes</li>
          <li className="list-item"> Odors</li>
          <li className="list-item"> Chemicals</li>
          <li className="list-item">Mold & Fungi Growth</li>
          <li className="list-item"> Grease & Oils</li>
        </ul>

        <h2 className="text-2xl font-bold">Benefits of using Barrier Foil</h2>
        <ul className="list-disc m-8">
          <li className="list-item ">Eliminate Corrosion</li>
          <li className="list-item">
            {" "}
            Protects Hydroscopic products from moisture ingress and damage.
          </li>
          <li className="list-item"> U.V. Light</li>
          <li className="list-item">
            {" "}
            Protects Atmospherically sensitive products from the outside
            environmet
          </li>
          <li className="list-item">
            {" "}
            Reduce Desiccant Usage and thus overall shipping weight
          </li>
          <li className="list-item">
            {" "}
            Cut out preservation methods requiring cleaning
          </li>
          <li className="list-item">Eliminate the need to re-dry products</li>
          <li className="list-item">
            {" "}
            Eliminates Odor transfer, into or out of the pack
          </li>
          <li className="list-item">
            {" "}
            Reduces the need to invest in modified atmosphere storage
          </li>{" "}
          <li className="list-item"> Outer packaging cleanliness</li>{" "}
          <li className="list-item"> Suitable for Hot-fill applications</li>{" "}
          <li className="list-item"> Suitable for Anti-Static Applications</li>{" "}
          <li className="list-item"> Allows for reusable containers</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDesc;
