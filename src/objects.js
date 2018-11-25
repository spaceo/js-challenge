module.exports = {
    alterContext : function(fn, obj) {
        obj.func = fn;
        return obj.func();
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = "What's up";
    },

    iterate : function(obj) {
        const propNames = Object.getOwnPropertyNames(obj);
        const props = [];
        for (const i in propNames) {
            const name = propNames[i];
            const value = obj[name];
            props.push(`${name}: ${value}`);
        }

        return props;
    }
};
