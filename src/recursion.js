module.exports = {
    listFiles: function(data, dirName) {
        const files = [];
        const iterator = (branch, level, subDir) => {
            if (level == 1) {
                subDir = branch.dir;
            }

            for(const i in branch.files) {
                if (typeof branch.files[i] == 'string') {
                    if (! dirName || subDir == dirName) {
                        files.push(branch.files[i]);
                    }
                }
                else {
                    iterator(branch.files[i], ++level, subDir);
                }
            }
        };

        iterator(data, 0, 'app');

        return files;
    },

    permute: function(arr) {

    },

    fibonacci: function(n) {

    },

    validParentheses: function(n) {

    }
};
