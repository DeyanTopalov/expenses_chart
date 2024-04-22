import Footer from "./footer";

const Card = ({ className }: classNameProps) => {
  return (
    <div className={className}>
      <div className="border-clr-cream border-b-2 pb-6">
        <h2 className="text-2xl font-bold">Spending - Last 7 days</h2>
        <div className="chart mt-[3.25rem] h-[177px] w-full bg-green-200"></div>
      </div>
      <Footer className="mt-6 flex items-end justify-between" />
    </div>
  );
};

export default Card;

// add desktop layout
