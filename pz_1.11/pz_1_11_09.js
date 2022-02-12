let arr  = [2,4,5,6,"asf",5,6,6];
function revers(arr){
    arr = arr.reverse();
for(let i = 0 ; arr[i]<arr.length;i++){
    if(typeof arr[i] == 'number'){
   arr[i] = Math.pow(arr[i],2);
    }
}
console.log(arr);
}
revers(arr);

  