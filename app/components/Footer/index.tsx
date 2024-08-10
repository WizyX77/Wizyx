import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto w-11/12 sm:w-9/12 justify-between flex text-[#858585] selection:text-[#ccc] pb-2 select-text">
      <span>Copyright © 2024 - Wizyx Code</span>
      <span> Design By, <Link href={"https://discord.gg/wizyx"} className="hover:underline hover:text-[#ccc] transition-all duration-200">discord.gg/wizyx </Link> </span>
    </footer>
  );
}