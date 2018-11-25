module.exports = {
    argsAsArray : function(fn, arr) {
        return fn(...arr);
    },

    speak : function(fn, obj) {
        obj[fn] = fn;
        return obj[fn]();
    },

    functionFunction : function(str) {
        return (word) => {
            return `${str}, ${word}`;
        };
    },

    makeClosures : function(arr, fn) {
        const funcs = [];
        for (const i in arr) {
            const result = fn(arr[i]);
            funcs.push(() => result);
        }

        return funcs;
    },

    partial : function(fn, str1, str2) {
        return (punctuation) => fn(str1, str2, punctuation);
    },

    useArguments : function() {
        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
    		total += arguments[i];
    	}

        return total;
    },

    callIt : function(fn) {
        let args = Object.values(arguments);
        args.shift();
        fn(...args);
    },

    partialUsingArguments : function(fn) {
        let argsA = Object.values(arguments);
        argsA.shift();

        return (...argsB) => {
            const args = [...argsA, ...argsB];
            return fn(...args);
        };
    },

    curryIt : function(fn) {
        return (a) => (b) => (c) => fn(a, b, c);
    }
};
