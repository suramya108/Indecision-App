class Counter extends React.Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
        this.minus=this.minus.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            count:0
            
        };
    }
    componentDidMount(){
        const strCount=localStorage.getItem('count');
        const count= parseInt(strCount,10);

        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    componentWillUnmount(){

    }
    add(){
        this.setState((prevState)=>{
            return{
               count:prevState.count+1
            };
        });
    }
    minus(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            };
        });
    }
    reset(){
        this.setState(()=>{
            return{
                count:0
            };
        });
        
    }

        render(){
        return(
            <div>
                
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.minus}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
Counter.defaultProps={
    count:0
}
ReactDOM.render(<Counter />,document.getElementById('app'));



// let count=100;
// const minus=()=>{
//     count--;
//     renderCounterApp();
//    // console.log("-1");
// }
// const reset=()=>{
//     count=0;
//     renderCounterApp();//console.log("Reset");
// }

// //console.log(templatetwo);
 
//const appRoot=document.getElementById('app');

// const renderCounterApp=()=>{

//     const templatetwo= (
//     <div>
//     <h1>
//         Count:{count}</h1>
//         <button onClick={minus}>-1</button>
//         <button onClick={reset}>Reset</button>
// </div>
// );

//};
//renderCounterApp();