let arr = [2,3,6,5,7,4,2,9,8,2]
calculate(arr)
function calculate(arr){
    let n = arr.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue});
        let t =(n/arr.length)
        console.log(t)
}
