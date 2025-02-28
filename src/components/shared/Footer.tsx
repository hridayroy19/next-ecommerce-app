import { Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/products", label: "App Products" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Instagram },
    { href: "#", icon: X },
  ];
  return (
    <footer className="bg-[#e2e0e0] border-t border-gray-200 py-14">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-black flex items-center">
              <Image
                src="/assert/logo.png"
                alt="logo"
                width={200}
                height={200}
              />
            </h1>
          </div>
          <p className="text-gray-600 mt-3 w-1/2">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials, fashion, and more! Limited stock.
          </p>
        </div>

        <hr />
        <ul className="flex justify-center space-x-6 text-sm text-gray-800 font-medium my-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-purple-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              href={href}
              key={index}
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
