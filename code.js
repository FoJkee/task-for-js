function openOrSenior(data) {
    return data.map(([years, handicap]) =>
        years >= 55 && handicap > 7 ? 'Senior' : 'Open'
    );
}
