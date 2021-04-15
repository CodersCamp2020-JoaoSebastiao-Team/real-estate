import React from 'react';
import { IUser} from '../interfaces'

const AgentPage = ({data,loading}:any|IUser|boolean) =>{
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
                     <h2 style={{display:'flex',justifyContent:'center'}}>Agents : </h2>
                     {data.map((agent:any,index:any) =>{
                         return(
                            <div>
                                <ul key={index} style={{ backgroundColor:'white',border:' 1px solid grey', borderRadius: '25px', margin:'1%'}}>
                                    <h6  style={{fontSize:'x-large', display:'flex'}}>
                                        {agent.name} {agent.surname} {agent.modification_notes}
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

export default AgentPage
