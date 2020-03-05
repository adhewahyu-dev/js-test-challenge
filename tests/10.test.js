const cencor = require("../src/10")

test('hasil tesnya ', () => {
    expect(cencor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toEqual('#### ingin makan #### goreng.')
})