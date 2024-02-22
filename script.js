function stringChop(str, size) {
  // your code here
	const result = [];

	if(str==null || str.length==0) return result;
	
	size = size - 0;

	let start = 0;

	while(start < str.length){
		console.log(start+" "+(start+size));
		if(start+size < str.length){
			result.push(str.slice(start,start+size));
		}else{
			result.push(str.slice(start, str.length));
		}
		start += (size);
	}
	return result;

}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
