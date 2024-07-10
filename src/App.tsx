import "./App.css";
import { useAppDispatch, useAppSelector } from "../src/assets/hooks/useCounter";
import {
  incremented,
  deduct,
  amountAdded,
  deductValue,
  setAumented,
  setDeducted,
  reset,
} from "./pages/slices/counter-slice";
import LogoSvg from "./assets/components/LogoSvg";
import OperadoresBox from "./assets/components/OperadoresBox";
import TotalPlus from "./assets/components/Total";
import CleanCalcule from "./assets/components/Clean";

function App() {
  const amounted = useAppSelector((state) => state.counterState.aumented);
  const amountedMinus = useAppSelector((state) => state.counterState.deducted);
  const count = useAppSelector((state) => state.counterState.value);
  const dispatch = useAppDispatch();

  const handleAmount = (e: any) => {
    e.preventDefault();

    dispatch(amountAdded(amounted));
    dispatch(setAumented(0));
  };

  const handleDeductValue = (e: any) => {
    e.preventDefault();

    dispatch(deductValue(amountedMinus));
    dispatch(setDeducted(0));
  };

  const handleSetAunment = (e: any) => {
    dispatch(setAumented(+e.target.value));
  };

  const handleSetDeducted = (e: any) => {
    dispatch(setDeducted(+e.target.value));
  };

  const handleSum = () => {
    dispatch(incremented());
  };

  const handleDeduct = () => {
    dispatch(deduct());
  };

  const handleClear = () => {
    dispatch(reset());
  };
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-center">
        <LogoSvg />
        <h1>La cálculadora mágica de Zori</h1>
      </header>
      <div className="flex flex-col flex-wrap items-center justify-around h-screen-minus-100">
        <OperadoresBox
          value={amounted}
          onChange={handleSetAunment}
          onClick={handleAmount}
          handleSetDeducted={handleSetDeducted}
          handleDeductValue={handleDeductValue}
          amountedMinus={amountedMinus}
        />
        <TotalPlus
          value={count}
          onClick={handleSum}
          onClickDeduct={handleDeduct}
        />
        <CleanCalcule onClick={handleClear} />
      </div>
    </div>
  );
}

export default App;
