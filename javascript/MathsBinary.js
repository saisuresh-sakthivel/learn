function toBinary(N,str){
	  var reminder = (N%2); 
	  var str = (!str)?"":str;  
	  var quotient = Math.floor(N/2);
	  if(quotient<=1){
		str =quotient+""+reminder+""+str;
		return str;
	  }
	  str =reminder+""+str;
	  return toBinary(quotient,str);
    
     }
	 function bigBinaryGap(N){
		var binaryOfN = toBinary(N),prevIndice,bigGap,gap;
		document.getElementById("binary").innerHTML = binaryOfN;
		for(var i=0;i<binaryOfN.length;i++){
			if(binaryOfN[i] == "1"){
				if(typeof prevIndice!="undefined"){
				  gap = i - prevIndice-1;
				  if(gap>0){
					  if(typeof bigGap!="undefined"){
						  bigGap = (gap>bigGap)?gap:bigGap;
					  } else{
						  bigGap = gap;
					  }
				  }
			    } 
				prevIndice = i;
				
			}			
		}
		return (!bigGap)?"No gaps found":bigGap;        
     }
	 function submit(){		 
		 document.getElementById("result").innerHTML = bigBinaryGap(document.getElementById('entry').value)
	 }