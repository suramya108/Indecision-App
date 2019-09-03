import React from 'react';
//import ReactDOM from 'react-dom';
export default class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.addOption=this.addOption.bind(this);
        this.state={
            err:undefined
        };
    }
       addOption(e) {
       e.preventDefault();
       const option = e.target.elements.option.value.trim();
       const err=this.props.addOption(option);
       this.setState(()=>( {err}));
       if(!err){
           e.target.elements.option.value ='';
       } 
       
    }  
       render(){
           return(
               <div>
                   {this.state.err && <p>{this.state.err}</p>}
                   <form onSubmit={this.addOption}>
                       <input type='text' name='option'/>
                       <button>Submit</button>
                   </form>
               </div>
           );
       }
   }
