import "./Tab.css";

interface ITab {
  label: string;
  value: string;
  onChange?: (param: unknown) => void;
}

const Tab = ({ label, value, onChange }: ITab) => {
  return (
    <>
      <button
        className="tab-button"
        id=""
        type="button"
        value={value}
        role="tab"
        onClick={onChange}
      >
        {label}
      </button>
    </>
  );
};

export default Tab;
