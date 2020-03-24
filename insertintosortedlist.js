var arr = [100,100,90,88,65];
let element = 101;
function getPivot(start,end){3,5
    debugger;
    if(element>arr[0]) return 0;
    if(element<arr[arr.length-1]) return arr.length-1;
    let pivot = start+parseInt((end-start)/2);   
    if(element<=arr[pivot] && element>=arr[pivot+1]) return pivot+1;
    if(element==arr[pivot]) return pivot;
    if(element==arr[pivot+1]) return pivot+1;
    if(element>arr[pivot] && start==pivot) return pivot;
    if(element<arr[pivot]) return getPivot(pivot+1,end);
    if(element>arr[pivot]) return getPivot(start,pivot+1);
}
console.log(getPivot(0,arr.length))