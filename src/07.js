module.exports = (kata, times) => {
    let sps = '';
    for (let i=0;i<kata.length;i++){

        let sub = kata.substring(i, i+1);
        sps += (sub.trim()=='') ? sub : sub.repeat(times);
    }
    return times > 0 ? sps : ""
}