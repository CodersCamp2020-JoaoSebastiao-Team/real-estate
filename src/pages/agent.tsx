import { useLocation } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';
import { IUser} from '../interfaces'
import Pagination from './pagination'; 
import Form from "react-bootstrap/Form";
import AgentPage from './agentPage';
import { FaInfoCircle } from 'react-icons/fa';
import { Left } from 'react-bootstrap/lib/Media';

const Agents = () => {
  
  const url = `https://real-estate-api-coders-camp.herokuapp.com/api/agents`;
  // const url =  `http://localhost:8082/api/agents`;

  const [data, setdata] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [name,setName] = useState("");
  const [surname, setSurname] = useState("");
 
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
  let currentdata: any [] = data.slice(indexOfFisrtPost,indexOfLastPost);
  let newData: any [] = [];
  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

 

  function filterByNameAndSurname(){
    if(name=="" && surname==""){
      currentdata = data.slice(indexOfFisrtPost,indexOfLastPost);
      newData = [...data]
    }
    if(name==""){
      newData = data.filter((agent:any)=>{return agent.surname.toLocaleLowerCase().includes(surname.toLocaleLowerCase())})
      currentdata = newData.slice(indexOfFisrtPost,indexOfLastPost);
    }
    if(surname==""){
      newData = data.filter((agent:any)=>{return agent.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())})
      currentdata = newData.slice(indexOfFisrtPost,indexOfLastPost);
    }
    else{
      newData = data.filter((agent:any)=>{return agent.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())})
      newData = newData.filter((agent:any)=>{return agent.surname.toLocaleLowerCase().includes(surname.toLocaleLowerCase())})
      currentdata = newData.slice(indexOfFisrtPost,indexOfLastPost);
    }

  }

  return(
    <div>
     
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <h1 style={{display:'flex',justifyContent:'center', fontSize:'x-large',fontWeight:'bold', fontFamily:'revert'}}>Filter by name:</h1>
        <Form.Control style={{ borderRadius: '25px', height: 'auto', fontSize: '2rem', margin: '1rem'}}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            <h1 style={{display:'flex',justifyContent:'center', fontSize:'x-large',fontWeight:'bold', fontFamily:'revert'}}>Filter by surname:</h1>
            <Form.Control style={{ borderRadius: '25px', height: 'auto', fontSize: '2rem', margin: '1rem'}}
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
        </div>
      </div>
      {filterByNameAndSurname()}
      <AgentPage data={currentdata} loading={loading}></AgentPage>
      <Pagination postsPerPage={postPerPage} totalPost = {newData.length} paginate={paginate}></Pagination>
    </div>
  );
};
export default Agents;
