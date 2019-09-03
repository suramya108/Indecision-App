import React from 'react';

export default Action=(props)=>{
    return(
        <div>
         <button onClick={props.handle}
         disabled={!props.hasOptions}>
         What to do?</button>
        </div>
    );
};