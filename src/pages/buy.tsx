import Listing from '../components/listing'
import listingProps from '../components/listing/listingProps'
import React, { useState, useEffect, useRef } from 'react';
import { IListing } from '../interfaces'
import ImageGallery from 'react-image-gallery';
import BuyPage from './buyPage'; 
import Pagination from './pagination'; 

const Buy = () => {
  const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;

  const [data, setdata] = useState<IListing[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  let [loading, setLoading] = useState(true);
 

  useEffect(() => {
    if (data.length === 0) {
      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data.DATA);
          setdata(data.DATA);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);

  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFisrtPost = indexOfLastPost - postPerPage;
  const currentdata = data.slice(indexOfFisrtPost,indexOfLastPost)

  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  return (
    <>
      {loading && (
        <div id="page-loading" className="fa-5x">

          <i
            className="fa fa-refresh fa-spin"
            style={{ marginRight: "5px", color: 'var(--dark-beige)' }}
          />
        </div>
      )}

      {!loading && (
    <div className='container'>
        <BuyPage data={currentdata} loading={loading}></BuyPage>
        <Pagination postsPerPage={postPerPage} totalPost = {data.length} paginate={paginate}></Pagination>
    </div>
  )}
  </>
  )
}



export default Buy;

