// const sq=function(x){
//     return x*x;
// }
// // const square=(x)=>{
// // return x*x;
// // };

// const square=(x)=>{
//     return x*x;
//        };

// console.log(square(9));

// const getFname = (x)=>{
//     //x='Mike Smith';
//     return (x.split(' ')[0]);
// };
// //const getFname=(x)=> x.split(' ')[0];

//  console.log(getFname('chuck Smith'));


const user={
    name:'Smith',
    cities:['dublin','NY','amsterdam'],
    printPlacesLived(){
       const city1= this.cities.map((city)=>{
           return city;
       });                
       return city1;
        //this.cities.forEach((city)=> {
            //console.log(this.name + ' has lived in ' + city);
//});
    }
};
console.log(user.printPlacesLived());