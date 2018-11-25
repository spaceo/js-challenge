module.exports = {
    async : function(value) {
        return new Promise((resolve, reject) => {
            resolve(value);
        });

    },

    manipulateRemoteData : function(url) {
        return new Promise((resolve, reject) => {
            return fetch(url).then(response => {
                response.json().then(json => {
                    const people = json.people;
                    const sortedPeople  = people.sort(function(a, b){
                        if (a.name < b.name) { return -1; }
                        if (a.name > b.name) { return 1; }
                        return 0;
                    })

                    resolve(sortedPeople.map(person => person.name));
                });
            });
        });
    }
};
