
module.exports = {
    count : function (start, end) {
        let current = start;

        const counter =  {
            count: setInterval(() => {
                if (current <= end) {
                    console.log(current);
                    current++;
                }
            }, 100),
            cancel: () => {
                clearInterval(this.count);
            }
        };

        counter.count;
        return counter;


    }
};
