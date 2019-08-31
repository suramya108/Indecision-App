class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state={
            vis: false
        };
    }
    toggle(){
        this.setState((prevState)=>{
            return{
                vis: !prevState.vis
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility</h1>                    
                <button onClick= {this.toggle}>
                {this.state.vis ?'hide':'show'}
                </button> 
                {this.state.vis && (
                <div>
                    <p>Hey there!!</p>
                </div>
                )}
                    </div>
                );
         }
}
ReactDOM.render(<Visibility />,document.getElementById('app'));

