var humanYearsCatYearsDogYears = function (humanYears) {
    let dogYears = 0;
    let catYears = 0;

    if (humanYears == 1) {
        dogYears = 15;
        catYears = 15;
    } else if (humanYears == 2) {
        dogYears = 24;
        catYears = 24;
    } else {
        dogYears = 5 * (humanYears - 2) + 24;
        catYears = 4 * (humanYears - 2) + 24;
    }

    return [humanYears, catYears, dogYears];
};
