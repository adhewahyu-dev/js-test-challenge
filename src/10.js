module.exports = (str,a=[],sensor='#') => {
    a.forEach(function(word) {
        let find = new RegExp("\\b" + word + "\\b", "gi");
        let repl = Array(word.length+1).join(sensor);
        str = str.replace(find, repl);
    });
    return str;
}