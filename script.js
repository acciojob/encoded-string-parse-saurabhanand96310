const parseCode = (str) => {
  // your code here
	// let firstName="";
	// let lastName="";
	// let id="";
	// for(let i=0;i<str.length;i++){
	// 	if(firstName==="" &&  lastName==="" && id===""){
	// 		if(str.charAt(i)!=0){
	// 			firstName+=str.charAt(i);
	// 		}
	// 	}else if(firstName!="" &&lastName==="" && id===""){
	// 		if(str.charAt(i)!=0){
	// 			lastName+=str.charAt(i);
	// 		}
	// 	}else{
	// 		if(str.charAt(i)!=0){
	// 			id+=str.charAt(i);
	// 		}
	// 	}
	// }
	//  let obj={
	// 	 firstName:firstName,
	// 	 lastName:lastName,
	// 	 id:id
	//  }
	// return obj;

	let result = str.split("0").filter(Boolean);
	let obj={
		 firstName:result[0],
		 lastName:result[1],
		 id:result[2]
	 }
	return obj;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
