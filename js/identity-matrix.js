function idMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            (i == j) ? row.push(1) : row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}
