import Footer from "./footer";

const Card = ({ className }: classNameProps) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold">Spending - Last 7 days</h2>
      <div className="chart mt-[3.25rem] h-[177px] w-full bg-green-200"></div>
    </div>
  );
};

export default Card;
