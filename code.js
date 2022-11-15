function bmi(weight, height) {
    let p = weight / Math.pow(height, 2);
    switch (true) {
        case p <= 18.5:
            return 'Underweight';
            break;
        case p > 18.5 && p <= 25:
            return 'Normal';
            break;
        case p > 25 && p <= 30:
            return 'Overweight';
            break;
        case p > 30:
            return 'Obese';
            break;
    }
}
//
