import React from 'react';
export default Option=(props)=>{
    return(
        <div>
            {props.optionText}
            <button 
            onClick={(e)=>{
                props.delIndividual(props.optionText);
            }}>
                Remove</button>
        </div>
    );
};