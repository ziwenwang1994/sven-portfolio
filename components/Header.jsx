import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-whit hover:bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image width="100" height="100" alt="logo" src="/assets/logo.png" className="rounded-full" />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact"><Button>Hire Me</Button></Link> */}
        </div>
        <div className="xl:hidden"><MobileNav /></div>
      </div>
    </header>
  );
};

export default Header;
