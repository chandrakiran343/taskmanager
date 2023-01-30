import React from 'react';


const ViewTask = () => {
    
    const id = window.location.pathname.split("/")[2];
    
    const task = null;
    
    return (
        <div>
            {/* <h1>{task.task}</h1> */}
            {/* <h2>{task.id}</h2> */}
            you are on {id}
        </div>
    );
}
 
export default ViewTask;