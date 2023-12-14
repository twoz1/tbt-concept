import React, { useState, useEffect } from 'react';

const PageNation = ({ setPage, data, displayPageNo }) => {
  const [clickedPage, setClickedPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [spageNo, setSPageNo] = useState(1);
  const [epageNo, setEPageNo] = useState(1);
  const [lastPageNo, setLastPageNo] = useState(1);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      
      const calculatedTotalPages = Math.ceil(data.length / 8); 
      setTotalPages(calculatedTotalPages);

      const currPage = clickedPage; 

      const calculatedSPageNo = Math.ceil(currPage / displayPageNo) * displayPageNo;
      setSPageNo(calculatedSPageNo);
      
      const calculatedEPageNo = calculatedSPageNo - displayPageNo + 1;
      setEPageNo(calculatedEPageNo);

      
      const calculatedLastPageNo = Math.ceil(data.length / 8); 
      setLastPageNo(calculatedLastPageNo);

     
      setPrev(calculatedSPageNo > 1);
      setNext(calculatedEPageNo < calculatedLastPageNo);
    }
  }, [data, clickedPage, displayPageNo]);

  useEffect(() => {
    console.log("Data:", data);
    console.log("Total Pages:", totalPages);
    console.log("SPageNo:", spageNo);
    console.log("EPageNo:", epageNo);
    console.log("Last PageNo:", lastPageNo);
    console.log("Prev:", prev);
    console.log("Next:", next);
  }, [data, totalPages, spageNo, epageNo, lastPageNo, prev, next]);

  return (
    <div className="next_page">


    
         <button onClick={() => setClickedPage(spageNo - 1)} disabled={!prev}>
        Prev
      </button>

    
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <span
          key={pageNumber}
          style={{
            color: clickedPage === pageNumber ? 'orangered' : 'black',
            fontWeight: clickedPage === pageNumber ? 'bold' : 'normal',
          }}
          onClick={() => {
            setPage(pageNumber);
            setClickedPage(pageNumber);
          }}
        >
          {pageNumber}
        </span>
      ))}

   
      <button onClick={() => setClickedPage(epageNo + 1)} disabled={!next}>
        Next
      </button>
    </div>
  );
};

export default React.memo(PageNation);