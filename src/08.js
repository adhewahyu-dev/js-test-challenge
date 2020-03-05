module.exports = (array=[]) => {
	const myMeong = array.concat(array.slice().reverse())
	return myMeong
}
