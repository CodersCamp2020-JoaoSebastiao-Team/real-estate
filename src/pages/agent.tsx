import { useLocation } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';
import { IUser} from '../interfaces'
import Pagination from './pagination'; 
import Form from "react-bootstrap/Form";
import AgentPage from './agentPage';
import { FaInfoCircle } from 'react-icons/fa';

const Agents = () => {
  
  const url = `https://coderscamp-real-estate.herokuapp.com/api/agents`;
  // const url =  `http://localhost:8082/api/agents`;

  const [data, setdata] = useState<any[]>([]);
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
          console.log('Success:', data);
          setdata(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);



  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFisrtPost = indexOfLastPost - postPerPage;
  const currentdata: any [] = data.slice(indexOfFisrtPost,indexOfLastPost);

  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  // console.log(data)
  return(
    <div>
      <AgentPage data={currentdata} loading={loading}></AgentPage>
      <Pagination postsPerPage={postPerPage} totalPost = {data.length} paginate={paginate}></Pagination>
    </div>
  );
};
export default Agents;
