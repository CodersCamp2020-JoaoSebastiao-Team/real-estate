import React from 'react';
import { IOffice} from '../interfaces'
import  OfficeCard from '../components/office'

const OfficePage = ({data,loading}:any|IOffice|boolean) =>{
    return (
        <>
        {loading && (
            <div id="page-loading" className="fa-5x" >
            <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px", color: 'var(--dark-beige)',display:'flex',  justifyContent: 'center' }}
            />
            </div>
        )}
        {!loading && (
            <div >
                <div  >
                     <h2 style={{display:'flex',justifyContent:'center'}}>Offices : </h2>
                     {data.map((office:IOffice,index:any) =>{
                         return(
                            <OfficeCard 
                                country={office.country}
                                city = {office.city}
                                street = {office.street}

                            ></OfficeCard>
                         )
                             
                })}
            </div>
            </div>

           
        )}
        </>
    )
};

export default OfficePage