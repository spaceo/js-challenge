module.exports = {
    createModule : function(str1, str2) {
        const module = (function () {
            const m = {
                greeting: str1,
                name: str2,
                sayIt: () => {
                    return `${m.greeting}, ${m.name}`
                }
            };

            return m;
      })();

      return module;
    }
};
