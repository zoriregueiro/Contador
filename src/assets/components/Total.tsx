import MinusSvg from "./minusSvg";
import PlusSvg from "./PlusSvg";

const TotalPlus = ({ value, onClick, onClickDeduct }: any) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <button
        className="flex items-center rounded-md w-fit h-fit"
        onClick={onClickDeduct}>
        <MinusSvg />
      </button>
      <div className="flex flex-col items-center justify-center ">
        <p className="font-thin text-9xl">Total</p>
        <p className="font-thin text-9xl">{value}</p>
      </div>
      <button
        className="flex items-center rounded-md w-fit h-fit"
        onClick={onClick}>
        <PlusSvg />
      </button>
    </div>
  );
};

export default TotalPlus;
