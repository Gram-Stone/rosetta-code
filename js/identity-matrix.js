function idMatrix(n) {
    var matrix = [];
    for (var i = 1; i <= n; i++) {
        var row = [];
        for (var j = 1; j <= n; j++) {
            (i == j) ? row.push(1) : row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}
