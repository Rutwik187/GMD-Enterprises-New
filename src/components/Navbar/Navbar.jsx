import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Icons } from "../Icons";
import NavItems from "./NavItems";
import { Button, buttonVariants } from "../ui/button";
import Image from 'next/image'
import MobileNav from "./MobileNav";

const Navbar = async () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Image src='/logo.svg' height={100} width={100} className="h-12 w-auto" />
                </Link>
              </div>
             

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Button variant={"ghost"}>Home</Button>
                   
                    <NavItems />
                    
                    <Button variant={"ghost"}>About Us</Button>
                    <Button variant={"ghost"}>Blogs</Button>
                    <Button variant={"ghost"}>Contact Us</Button>
               
                </div>
                <MobileNav />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
