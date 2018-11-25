module.exports = {
    valueAtBit: function(num, bit) {
        let binary = num.toString(2);
        binary.padStart(8 - binary.length, '0');
        const bits = binary.split("").reverse();
        return Number(bits[bit - 1]);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        const binary = num.toString(2);
        return '0'.repeat(8 - binary.length) + binary;
    },

    multiply: function(a, b) {
        return ( a * 10) * (b * 10) / 100;
    }
};
