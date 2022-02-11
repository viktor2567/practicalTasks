let arr =  [17, 17, 3, 17, 17, 17, 17]
function unical (arr){
    let n = arr[0];
           for (i=1;i<arr.length;i++){ 
              if (n==arr[0] && arr[1]==arr[2] ){
        console.log(arr[0]);
    break;}
               if(n != arr[i]) {
            console.log (arr[i]);
            break; 
    break;}}}
unical(arr);