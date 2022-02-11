let arr = [[22, -1, 0, 43, 57],
 [-33, 10, 5, 4, 8],
 [3, -1, -44, 44, 87],
 [4, -331, 0, 18, 4], 
 [6, -31, 9, 77, 4]];
    
  
    function lett (arr2){
    for (let i=0;i<arr2.length;i++){
        for (let j=0;j<arr2.length;j++){
           
            if (i==j){
                if(arr2[i][j]<0){
                    arr2[i][j]=0
                }
                else{
                    arr2[i][j]=1

                }
            }
        }
  }return arr2
}
console .log(arr)
    
  console.log(lett(arr))