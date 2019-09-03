import React from 'react';
import Option from './Option';

const Options=(props)=>{
    return(
            <div>
                <button onClick={props.delete}>Remove All</button>
                {props.options.length === 0 && <p>Add an option to get started!</p>}
                {
                    props.options.map((option) => (
                    <Option key={option} 
                    optionText={option}
                    delIndividual={props.delIndividual}/>
                    ))
                }
            </div>
    );
};
export default Options;