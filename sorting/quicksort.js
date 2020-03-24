function quickSort(arr,start,end){
    if(start>=end) {
        console.log(arr+" === arr");
        return arr;
    }
    let index = partition(arr,start,end);
    quickSort(arr,start,index-1);
    quickSort(arr,index+1,end);
}
function partition(arr,start,end){
   let pivotIndex = start;
   let pivotValue = arr[end];
   for(let i = start;i<end;i++){
      if(arr[i]<pivotValue){
          swap(arr,i,pivotIndex);
          pivotIndex++;
      }
   }
   swap(arr,pivotIndex,end);
   return pivotIndex;
}
function swap(arr,x,y){
  let temp = arr[x];
   arr[x] = arr[y];
   arr[y] = temp;  
}
let arr = [3,4,9,2,5,1];
console.log(quickSort(arr,0,arr.length-1));