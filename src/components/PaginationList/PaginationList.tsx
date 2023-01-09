import React, { ReactElement, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import InputLabel from "../InputLabel/InputLabel";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IData {
  products: IProduct[];
  total: number;
  skip?: number;
  limit?: number;
}

const PaginationList: React.FC = (): ReactElement | null => {
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState<IData>();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, limit]);

  if (!data) return null;

  const pageCount = Math.ceil(data.total / limit);

  const handlePageClick = (event: {selected: number}) => {
    const newOffset = (event.selected * limit) % data.total;
    setItemOffset(newOffset);
  };
  return (
    <div className="container">
      <InputLabel setLimit={setLimit} />
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
        renderOnZeroPageCount={() => null}
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
};

export default PaginationList;
