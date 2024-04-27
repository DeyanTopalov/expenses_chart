import Footer from "./footer";
import BarChartComponent from "./barchart";

const Card = ({ className }: classNameProps) => {
  return (
    <div className={className}>
      <div className="border-clr-cream border-b-2 pb-6">
        <h2 className="text-2xl font-bold  md:text-3xl">
          Spending - Last 7 days
        </h2>
        <div className=" mt-[3.25rem] h-[11.125rem] w-full">
          <BarChartComponent />
        </div>
      </div>
      <Footer className="mt-6 flex items-end justify-between md:mt-8" />
    </div>
  );
};

export default Card;

// add desktop layout
