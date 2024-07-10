import AmountedSvg from "./AmountedSvg";
import DeductedSvg from "./DecuctedSvg";

const OperadoresBox = ({
  value,
  onChange,
  onClick,
  handleSetDeducted,
  handleDeductValue,
  amountedMinus,
}: any) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center justify-center">
        <p>Cantidad a sumar</p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <input
            className="rounded-lg bg-slate-200 h-[60px] w-[60px] text-6xl text-center "
            type="text"
            value={value}
            onChange={onChange}
          />
          <button type="submit" onClick={onClick}>
            <AmountedSvg />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Cantidad a restar</p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <input
            className="rounded-lg bg-slate-200 h-[60px] w-[60px] text-6xl text-center "
            type="text"
            value={amountedMinus}
            onChange={handleSetDeducted}
          />
          <button type="submit" onClick={handleDeductValue}>
            <DeductedSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OperadoresBox;
