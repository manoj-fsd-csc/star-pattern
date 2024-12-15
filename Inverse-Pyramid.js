function inversePyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let spaces = ' '.repeat(rows - i);
        let stars = '* '.repeat(i).trim();
        console.log(spaces + stars);
    }
}

inversePyramid(5);
