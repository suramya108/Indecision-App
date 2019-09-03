import React from 'react';
import ReactDOM from 'react-dom';
import AddOptions from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';
import options from './components/options';
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this);
        this.addOption=this.addOption.bind(this);
        this.handle=this.handle.bind(this);
        this.delIndividual=this.delIndividual.bind(this);
        this.state={
            options:props.options
        };
    }
    componentDidMount(){
        try{
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
            }
        }
        catch(e){

        }
    }
    componentDidUpdate(prevProps ,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            
        }
        
    }
    componentWillUnmount(){

    }
    handle(){
        const rand=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[rand];
        alert(option);
    }
    delete(){
        
        this.setState(()=>({options:[]})); 
    } 
    delIndividual(optionRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionRemove !==option)
        }));
    }
    addOption(option){
       if(!option){
        return 'Enter a valid value';
       }
       else if(this.state.options.indexOf(option)>-1){
           return 'already exists '
       }
       this.setState((prevState)=>({options: prevState.options.concat(option)})); 
        
    }
    render(){
        //const title='Indecision App';
        const subtitle='Put your life in hands of computer!!';
        
        return(
            <div>
                <Header   subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length>0}
                handle={this.handle}/>
                 <Options options={this.state.options}
                 delete={this.delete}
                 delIndividual={this.delIndividual} />
                
                <AddOptions  addOption={this.addOption}/>
            </div>
        );
    }
}
IndecisionApp.defaultProps={
    options:[]
};


ReactDOM.render(<IndecisionApp  />,document.getElementById('app'));