import React, { useState } from 'react';
import style from './Main.module.css';
import ReactPaginate from 'react-paginate';

function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }

const Main = () => {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 1;
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 , 15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(newOffset);
        setItemOffset(newOffset);
      };
    return (
        <div>
            Main
               <Items currentItems={currentItems} />
               <ReactPaginate 
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              forcePage={12}
            />
        </div>
    );
};

export default Main;