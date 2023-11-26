import React from 'react'
import Product from './Product';
import { useState } from 'react';



    const PageNation = ({ setPage }) => {
        const [clickedPage, setClickedPage] = useState(1);
      
  return (
    <div className="next_page">
      {[1, 2].map((pageNumber) => (
        <span
          key={pageNumber}
          style={{
            color : clickedPage === pageNumber ? 'orangered' : 'black',
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

</div>

  )
}


  
  export default React.memo(PageNation);