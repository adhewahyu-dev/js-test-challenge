module.exports = (inp) => {
	inp = String(inp)
	for(let i=0; i<inp.length; i+=1){
		if(inp[i] !== inp[inp.length -1-i]){
			return false
		}
	}
	return true
}

// module.exports = (mb) => {return mb * 1000}

//const hitung = (txt) => {return txt.length}
//module.exports = hitung;