function move(position, roll) {
    if (roll <= 6) {
        return position + roll * 2;
    }
}
