import React from 'react';

const Pagination = ({postsPerPage,totalPost,paginate}:any) =>{
   
    const pageNumbers = []
    for(let i = 1; i<=Math.ceil(totalPost/postsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav style={{display:'flex',  justifyContent: 'center'}}>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      )
}

export default Pagination
