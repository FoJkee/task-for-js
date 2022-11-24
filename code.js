function howMuchILoveYou(nbPetals) {
    const num = [
        'not at all',
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
    ];
    return num[nbPetals % 6];
}
