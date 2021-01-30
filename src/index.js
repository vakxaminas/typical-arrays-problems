exports.min = function min(array) {
    if (array !== undefined && array.length) return Math.min.apply(null, array);
    else return 0;
};

exports.max = function max(array) {
    if (array !== undefined && array.length) return Math.max.apply(null, array);
    else return 0;
};

exports.avg = function avg(array) {
    if (array !== undefined && array.length)
        return array.reduce((sum, current) => sum + current, 0) / array.length;
    else return 0;
};
