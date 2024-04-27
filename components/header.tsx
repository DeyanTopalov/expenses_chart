import React from "react";
import Image from "next/image";
import { formatCurrency, cardFinancials } from "@lib/utils";

const Header = ({ className }: classNameProps) => {
  return (
    <header className={className}>
      <div className="flex items-center justify-between  px-5 py-5 md:px-9 md:py-7">
        <div className="grid gap-2 text-white">
          <h1>My balance</h1>
          <p>
            <span className="text-2xl font-bold md:text-3xl">
              {formatCurrency(cardFinancials.balance)}
            </span>
          </p>
        </div>
        <Image
          src="/logo.svg"
          width={60}
          height={40}
          alt="logo"
          className="block md:hidden"
        />
        <Image
          src="/logo.svg"
          width={72}
          height={48}
          alt="logo"
          className="hidden md:block"
        />
      </div>
    </header>
  );
};

export default Header;
