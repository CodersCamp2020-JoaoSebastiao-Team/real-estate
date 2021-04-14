import { useLocation } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';
import { IUser} from '../interfaces'
import Pagination from './pagination'; 
import Form from "react-bootstrap/Form";
import AgentPage from './agentPage';
import { FaInfoCircle } from 'react-icons/fa';

const Offices = () => {
  
  const url = `https://coderscamp-real-estate.herokuapp.com/api/agents`;

  const [data, setdata] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
 
  let [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (data.length === 0) {
  //     fetch(url, {
  //       method: 'GET',
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         // console.log('Success:', data.DATA);
  //         setdata(data.DATA);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //   }
  // }, []);



  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFisrtPost = indexOfLastPost - postPerPage;
  const currentdata: IUser [] = data.slice(indexOfFisrtPost,indexOfLastPost);

  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);


  return(
    <div>
      <AgentPage data={currentdata} loading={loading}></AgentPage>
      <Pagination postsPerPage={postPerPage} totalPost = {data.length} paginate={paginate}></Pagination>
    </div>
  );
};
export default Offices;
