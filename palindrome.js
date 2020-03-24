// Java implementation of O(n^2) time and O(1) space method 
// to find the longest palindromic substring 
function LongestPalinSubstring() 
{ 
	// A utility function to print a substring str[low..high] 
	function printSubStr(str,low,high) { 
		console.log(str.substring(low, high + 1)); 
	} 

	// This function prints the longest palindrome substring 
	// (LPS) of str[]. It also returns the length of the 
	// longest palindrome 
	function longestPalSubstr(str) { 
		let maxLength = 1; // The result (length of LPS) 

		let start = 0; 
		let len = str.length;

		let low, high; 

		// One by one consider every character as center 
		// point of even and length palindromes 
		for (let i = 1; i < len; ++i) 
		{ 
			// Find the longest even length palindrome with 
			// center points as i-1 and i. 
			low = i - 1; 
			high = i; 
			console.log("low "+low+" high "+high);
			while (low >= 0 && high < len 
					&& str.charAt(low) == str.charAt(high)) { 
				if (high - low + 1 > maxLength) { 
					start = low; 
					maxLength = high - low + 1; 
				} 
				--low; 
				++high; 
			} 

			// Find the longest odd length palindrome with 
			// center point as i 
			low = i - 1; 
			high = i + 1; 
			while (low >= 0 && high < len 
					&& str.charAt(low) == str.charAt(high)) { 
				if (high - low + 1 > maxLength) { 
					start = low; 
					maxLength = high - low + 1; 
				} 
				--low; 
				++high; 
			} 
		} 

		console.log("Longest palindrome substring is: "); 
		printSubStr(str, start, start + maxLength - 1); 

		return maxLength; 
	} 

	// Driver program to test above function 
	console.log("Length is: " + longestPalSubstr("mamasam")); 

}
LongestPalinSubstring() 
// This code is contributed by Sumit Ghosh 
