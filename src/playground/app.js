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
const Header=(props)=>{
    return(
            <div>
                
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
                
            </div>
    );
};
Header.defaultProps={
    title:'Indecision App'
};
const Action=(props)=>{
    return(
        <div>
         <button onClick={props.handle}
         disabled={!props.hasOptions}>
         What to do?</button>
        </div>
    );
};

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
const Option=(props)=>{
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

class AddOptions extends React.Component{
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
// const User=(props)=>{
// return(
//     <div>
//         <p>Name:{props.name}</p>e
//         <p>Age:{props.age}</p>
//     </div>
// );
// };
ReactDOM.render(<IndecisionApp  />,document.getElementById('app'));