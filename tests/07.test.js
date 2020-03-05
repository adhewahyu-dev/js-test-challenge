const repeatLetter = require("../src/07")

test('hasil tesnya', () => {
    expect(repeatLetter('Hello world',2)).toEqual('HHeelllloo wwoorrlldd')
})