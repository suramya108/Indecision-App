import React from 'react';

export default Header=(props)=>{
    return(
            <div>
                
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
                
            </div>
    );
};
Header.defaultProps={
    title:'Indecision Apppppp'
};