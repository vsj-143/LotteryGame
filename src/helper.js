function generate(n){
    let arr = new Array(n);
    for ( let i = 0 ; i < n ; i++ ) {
        arr[i] = Math.floor(Math.random() * 10) ;
    }
    return arr;
}
function sum15(arr){
 return arr.reduce((arr,count)=>(arr+count));
}
export {generate,sum15};