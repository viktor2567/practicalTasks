let arr = [[1,23,7],[4,6,2],[5,11,2]];
let arr2=[];
let a = 0;
for (let i = 0; i<arr.length; i++){
    for (let j = 0; j<arr[i].length; j++){
    arr2[a]  = arr[i][j];
   a++;
    }};

    for (let i = 0; i<arr2.length-1; i++){
       for (let j = 0; j<arr2.length-1; j++){
      if (arr2[j]>arr2[j+1] ){
          let ret = arr2[j];
          arr2[j]=arr2[j+1];
          arr2[j+1]=ret;
      } 
       }}
   console.log(arr2)