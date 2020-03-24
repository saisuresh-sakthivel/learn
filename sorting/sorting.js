// This function will make sure that the numbers are sorted starting from position 0. If any two elements are not in incresing order then sort them and repeat the process from the start index.
function insertionSort(arr){
  for(var i = 1;i<arr.length;i++){
     if(arr[i]<arr[i-1]){
	    var temp = arr[i];
		arr[i] = arr[i-1];
		arr[i-1] = temp;
		return insertionSort(arr);
	 }
  }
  return arr;
}
//console.log(insertionSort([3,2,1,4])); //O(n2);

// This function will swap two elements if they are not in increasing order. Algorithm stops only if all of them are in increasing order.
function bubbleSort(arr){
   let increasingOrder = true;
   for(i=1;i<arr.length;i++){
	  increasingOrder = false;
      if(arr[i] < arr[i-1]){
	     var temp = arr[i];
		 arr[i] = arr[i-1];
		 arr[i-1] = temp;
	  }
   }
   return (!increasingOrder)?bubbleSort(arr):arr;
}
//console.log(bubbleSort([3,2,1,4])); //O(n2);


function mergesort(a){
   var n = a.length;
   if ( n == 1 ) return a

   var l1 = a.slice(0,Math.round(a.length/2));
   var l2 = a.slice(Math.round(a.length/2),n);

   l1 = mergesort( l1 )
   l2 = mergesort( l2 )

   return merge( l1, l2 )
}

function merge(a,b){

   var c = [];
   while (a.length>0&&b.length>0){
      if (a[0]>b[0]){
         c.push(b[0]);
         b.shift();
	  }else{
         c.push(a[0]);
         a.shift();
      }
   }
   
   while ( a.length>0){
      c.push(a[0]);
      a.shift();
   }
   
   while ( b.length>0){
      c.push(b[0]);
      b.shift();
   }
   
   return c;
}
console.log(mergesort([3,2,1,4])); o(n logn);



