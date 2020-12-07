function idMatrix(n) {
    var matrix = [];
    for (var i = 1; i <= n; i++) {
        var arr = [];
        for (var j = 1; j <= n; j++) {
            (i == j) ? arr.push(1) : arr.push(0);
        }
        matrix.push(arr);
    }
    return matrix;
}
