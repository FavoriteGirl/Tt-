export const Button = ({ children, buttonType = "", onButtonClick }) => {
  const selectebuttonType = (selectedType) => {
    switch (selectedType) {
      case "outline":
        return "btn-outline hover:text-slate-100 p-3";
        break;
      default:
        return "text-slate-100 p-3";
    }
  };
  if (buttonType != "ghost") {
    return (
      <button
        className={`btn ${selectebuttonType(buttonType)} text-base btn-primary`}
        onClick={onButtonClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="text-primary text-base w-max flex items-center font-semibold"
        onClick={onButtonClick}
      >
        {children}
      </button>
    );
  }
};
