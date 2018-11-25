module.exports = {
    fizzBuzz : function(num) {
        if (typeof num === undefined || typeof num != 'number') {
            return false;
        }

        const dividableA = {
            rule: num % 3 == 0,
            result: 'fizz'
        };
        const dividableB = {
            rule: num % 5 == 0,
            result: 'buzz'
        };

        if (dividableA.rule && dividableB.rule) {
            return dividableA.result + dividableB.result;
        }

        if (dividableA.rule) {
            return dividableA.result;
        }

        if (dividableB.rule) {
            return dividableB.result;
        }

        return num;

        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        //
        // otherwise the function should return the number, or false if no number
        // was provided or the value provided is not a number
    }
};
