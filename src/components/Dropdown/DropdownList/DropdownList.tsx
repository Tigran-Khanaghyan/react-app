import { IData } from "components/PaginationList/PaginationList";
import { ReactElement } from "react";
import "./DropdownList.css";

const DropdownList: React.FC<{data: IData}> = ({ data }): ReactElement | null => {
  if (!data) return null;
  return (
    <div>
      <form id="autoform">
        <label htmlFor="shop">Shop</label>
        <input
          list="data"
          id="shop"
          name="technic"
          autoComplete="off"
        />
        <datalist id="data">
          {data.products?.map((elem) => {
            return <option value={elem.title} key={elem.title}></option>;
          })}
        </datalist>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default DropdownList;
