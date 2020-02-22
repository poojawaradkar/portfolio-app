const isInteger = (obj) => String(Math.floor(Number(obj))) === obj;

export function setIn(obj,path,value){
	let res = JSON.parse(JSON.stringify(obj)); // this keeps inheritance when obj is a class
  	let resVal = res;
  	let i = 0;
  	let pathArray = path.split(".");
	
  	for (; i < pathArray.length - 1; i++) {
		if(typeof resVal[pathArray[i]] == 'undefined'){
			const nextPath = pathArray[i + 1];
			resVal[pathArray[i]] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
		}
		resVal = resVal[pathArray[i]];
	}
	const finalPath = pathArray[pathArray.length - 1];
	if (resVal[finalPath] == value) {
    	return obj;
  	}
	resVal[finalPath] = value;
	return res;
}

export function getIn(obj,path){
	let resVal = obj;
  	let i = 0;
  	let pathArray = path.split(".");
	
  	for (; i < pathArray.length - 1; i++) {
		if(typeof resVal[pathArray[i]] == 'undefined'){
			const nextPath = pathArray[i + 1];
			resVal[pathArray[i]] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
		}
		resVal = resVal[pathArray[i]];
	}
	return resVal[pathArray[i]];
}