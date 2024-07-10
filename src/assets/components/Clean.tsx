import CleanSvg from "./CleanSvg";
import { Tooltip } from "@nextui-org/tooltip";

const CleanCalcule = ({ onClick }: any) => {
  return (
    <div className="flex justify-end">
      <Tooltip
        content="Limpiar la calculadora"
        key="danger"
        color="danger"
        offset={7}>
        <button onClick={onClick}>
          <CleanSvg />
        </button>
      </Tooltip>
    </div>
  );
};

export default CleanCalcule;
