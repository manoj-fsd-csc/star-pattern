function inverseRightAngledTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
        let stars = '*'.repeat(i);
        console.log(stars);
    }
}

inverseRightAngledTriangle(5);
