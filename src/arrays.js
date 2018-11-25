
module.exports = {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    },

    remove : function(arr, item) {
        return arr.filter(i => i !== item);
    },

    removeWithoutCopy : function(arr, item) {
        const arrLength = arr.length;
        for (let i = arrLength - 1; i >= 0; i--) {
            if (arr[i] === item) {
              arr.splice(i, 1);
            }
        };

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);

        return arr;
    },

    truncate : function(arr) {
        arr.pop();

        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);

        return arr;
    },

    curtail : function(arr) {
        arr.shift();

        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);

        return arr;
    },

    count : function(arr, item) {
        return arr.reduce((acc, val) => val === item ? ++acc : acc, 0);
    },

    duplicates : function(arr) {
        const seen = [], dupes = {};

        for (const i in arr) {
            const el = arr[i];
            if (i != 0 && seen.indexOf(el) != -1) {
                dupes[el] = el;
            }
            seen.push(el);
        }

        return Object.values(dupes);
    },

    square : function(arr) {
        return arr.map((number) => number * number);
    },

    findAllOccurrences : function(arr, target) {
        const indicies = [];
        let i = arr.indexOf(target);
        while (i != -1) {
          indicies.push(i);
          i = arr.indexOf(arr[i], i + 1);
        }

        return indicies;
    }
};
