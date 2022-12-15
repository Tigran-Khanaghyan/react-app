import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const limit = 10;
  const [data, setData] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);

  const getData = () => {
    return fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${itemOffset}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, [itemOffset]);

  if (!data) return;
  console.log(data);

  const pageCount = Math.ceil(data.total / limit);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % data.total;
    setItemOffset(newOffset);
  };

  return (
    <div className="container">
      <div className="App">
        <Card data={data} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
      />
    </div>
  );
}

export default App;
