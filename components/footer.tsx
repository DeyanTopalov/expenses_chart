import React from "react";
import { formatCurrency, cardFinancials } from "@lib/utils";

const Footer = ({ className }: classNameProps) => {
  return (
    <div className={className}>
      <div className="grid gap-3">
        <p className="text-clr-brown-600 font-medium">Total this month</p>
        <p>
          <span className="text-3xl font-bold">
            {formatCurrency(cardFinancials.monthSpent)}
          </span>
        </p>
      </div>
      <div className="text-end">
        <p>
          <span className="font-bold">{cardFinancials.monthOverMonth}</span>
        </p>
        <p className="text-clr-brown-600 font-medium">from last month</p>
      </div>
    </div>
  );
};

export default Footer;
