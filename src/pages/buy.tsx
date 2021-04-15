import Listing from '../components/listing'
import listingProps from '../components/listing/listingProps'
import React, { useState, useEffect, ChangeEvent } from 'react';
import { IListing } from '../interfaces'
import ImageGallery from 'react-image-gallery';
import BuyPage from './buyPage'; 
import Pagination from './pagination'; 

const Buy = () => {
  const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;

  const [data, setdata] = useState<IListing[]>([]);
  const [state, setFilterState] = useState({
    data,
    city: "",
    hometype: "",
    bedroom: "",
    minPrice: 0,
    maxPrice: 9999999,
    minFloorSpace: 0,
    maxFloorSpace: 999999,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

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
 let currentdata = data.slice(indexOfFisrtPost,indexOfLastPost)
  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);
    

  const inputChange = (event:ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFilterState({ ...state, [name]: value });
}


  let filteredData = state.data.filter(data => {
    // SORT BY CITY
    if (state.city !== "") {
      return data.city === state.city;
    }
    // SORT BY HOMETYPE
    if (state.hometype !== "") {
      return data.estateType === state.hometype;
    }
    // SORT BY BEDROOMS
    if (state.bedroom !== "") {
      return data.bedrooms >= state.bedroom;
    }

    //SHOW LISTINGS IN RANGES FROM ...  TO ...
    return (
      data.price >= state.minPrice &&
      data.price <= state.maxPrice &&
      data.livingSpace >= state.minFloorSpace &&
      data.livingSpace <= state.maxFloorSpace
    );
  });


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
        <BuyPage data={currentdata} loading={loading} inputChange={inputChange} state={state}></BuyPage>
        <Pagination postsPerPage={postPerPage} totalPost = {data.length} paginate={paginate}></Pagination>
    </div>
  )}
  </>
  )
}



export default Buy;

