/* 
Следующая функция предназначена для создания двумерного массива со mстроками и nстолбцами нулей. К сожалению, он не дает ожидаемого результата, потому что rowпеременная не инициализируется повторно (не устанавливается обратно в пустой массив) во внешнем цикле. Исправьте код, чтобы он возвращал правильный массив нулей 3x2, который выглядит как [[0, 0], [0, 0], [0, 0]].

 */

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];

    for (let i = 0; i < m; i++) {
        let row = [];

        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
