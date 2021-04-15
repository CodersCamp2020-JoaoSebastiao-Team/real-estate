import React from 'react';
import { IUser} from '../interfaces'
import AgentCard from "../components/agent"

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
                        return (
                          <AgentCard name={agent.name} surname={agent.surname} email={agent.email}></AgentCard>
                        )
           
                })}
            </div>
            </div>

           
        )}
        </>
    )
};

export default AgentPage
