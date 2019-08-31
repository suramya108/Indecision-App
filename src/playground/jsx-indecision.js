console.log('App.js Running');

const app={
    title:'Indecision App',
    subtitle:'Adventure sports',
    options:[]
    
};

const onFormSubmit=(e)=>{
e.preventDefault();
const option=e.target.elements.option.value;

if (option)
{
    app.options.push(option);
    e.target.elements.option.value='';
    render();
}
//console.log('form submitted');
};


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
 
const appRoot=document.getElementById('app');

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
const remove=()=>{
    app.options=[];
    render();
};
const decision=()=>{
    const randomnum=Math.floor(Math.random() * app.options.length);
    const option=app.options[randomnum];
    alert(option);
    
};
const render=()=>{
    const template = (
        <div> 
            <h1> {app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are ur options' : 'No options'}</p>
            <button disabled={app.options.length===0}onClick={decision}>What should I do?</button>
            <button onClick={remove}> Remove all</button>
            
            <ol>
                { 
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>

                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
};
render();