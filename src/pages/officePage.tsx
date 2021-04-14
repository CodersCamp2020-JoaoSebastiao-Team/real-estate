import React from 'react';
import { IOffice} from '../interfaces'

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
                <div >
                     <h2 style={{display:'flex',justifyContent:'center'}}>Offices : </h2>
                     {data.map((office:IOffice,index:any) =>{
                         return(
                            <div>
                                <ul style={{ backgroundColor:'white',border:' 1px solid grey', borderRadius: '25px', margin:'1%'}}>
                                    <h6 style={{fontSize:'x-large', display:'flex'}}>
                                        {office.country }  { office.city }   {office.street}   { office.zipCode}
                                    </h6>
                                </ul>      
                           </div>
                         )
                             
                })}
            </div>
            </div>

           
        )}
        </>
    )
};

export default OfficePage