
import React, { useState, useEffect  } from 'react';
import { IOffice} from '../interfaces'
import OfficePage from './officePage'; 
import Pagination from './pagination'; 
import Form from "react-bootstrap/Form";


const Offices = () => {
  const url = `https://real-estate-api-coders-camp.herokuapp.com/api/office`;

  const [data, setdata] = useState<IOffice[]>([]);
  const [city,setCity] = useState("");
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
          // console.log('Success:', data.DATA);
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
  let currentdata: IOffice [] = data.slice(indexOfFisrtPost,indexOfLastPost);
  let newData: IOffice [] = []

  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  function filterByCity() {
    if(city===""){
      currentdata = data.slice(indexOfFisrtPost,indexOfLastPost);
      newData = [...data];
    }
    else{
      newData =  data.filter((office:IOffice)=>{return office.city.toLocaleLowerCase().includes(city.toLocaleLowerCase())})
      currentdata = newData.slice(indexOfFisrtPost,indexOfLastPost);

    }
    
  }

  console.log(data)   
  return(
    <div style={{width:'70%'}}>
      <h1 style={{display:'flex',justifyContent:'center', fontSize:'x-large',fontWeight:'bold', fontFamily:'revert'}}>Filter by city:</h1>
      <Form.Control style={{ borderRadius: '25px', height: 'auto', fontSize: '2rem', margin: '1rem'}}
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
      {filterByCity()}
    
      <OfficePage data={currentdata} loading={loading}></OfficePage>
      <Pagination postsPerPage={postPerPage} totalPost = {newData.length} paginate={paginate}></Pagination>

    </div>
  );
};
export default Offices;
