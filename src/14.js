module.exports = (str) => {
	const isIsogram = str => str.split("").every((c, i) => str.indexOf(c) == i)
	return isIsogram(str)
 }

 //console.log(isIsogram('makan'))