import React from "react";
import { formatCurrency, cardFinancials } from "@lib/utils";

const Footer = ({ className }: classNameProps) => {
  return (
    <div className={className}>
      <div className="grid gap-1 md:gap-0">
        <p className="text-clr-brown-600 text-sm font-medium md:text-lg">
          Total this month
        </p>
        <p>
          <span className="text-3xl font-bold md:text-5xl">
            {formatCurrency(cardFinancials.monthSpent)}
          </span>
        </p>
      </div>
      <div className="text-end">
        <p>
          <span className="font-bold">{cardFinancials.monthOverMonth}</span>
        </p>
        <p className="text-clr-brown-600 text-sm font-medium md:text-lg">
          from last month
        </p>
      </div>
    </div>
  );
};

export default Footer;
