const AmountedSvg = () => {
  return (
    <svg
      fill="#000000"
      width="60px"
      height="60px"
      viewBox="0 0 24 24"
      id="add-collection"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color">
      <path
        id="secondary"
        d="M7,10h6M10,7v6"
        fill="none"
        stroke="rgb(44, 169, 188)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"></path>
      <path
        id="primary"
        d="M7,21H20a1,1,0,0,0,1-1V5"
        fill="none"
        stroke="rgb(0, 0, 0) "
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"></path>
      <rect
        id="primary-2"
        data-name="primary"
        x="3"
        y="3"
        width="14"
        height="14"
        rx="1"
        fill="none"
        stroke=" rgb(0, 0, 0)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"></rect>
    </svg>
  );
};

export default AmountedSvg;
