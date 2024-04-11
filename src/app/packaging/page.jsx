import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Products = () => {
  return (
    <div className="mx-auto flex flex-wrap justify-center gap-6 mt-8">
      <Link
        href="/packaging/aluminum-barrier-foil"
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <Image
          className="rounded-t-lg"
          width="1000"
          height={1000}
          src="/aluminum-foil/img2.jpeg"
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Aluminum Barrier Foil
          </h5>
        </div>
      </Link>

      <Link
        href="/packaging/vci-poly-films"
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <Image
          className="rounded-t-lg"
          width="1000"
          height={1000}
          src="/vci-poly-films/img1.png"
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            VCI Poly Films
          </h5>
        </div>
      </Link>

      <Link
        href="/packaging/silica"
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <Image
          className="rounded-t-lg"
          width="1000"
          height={1000}
          src="/silica/img1.jpeg"
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Silica Gel and Desiccants
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Products;
