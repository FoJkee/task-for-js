function finalGrade(exam, projects) {
    return 90 < exam || projects > 10
        ? 100
        : 75 < exam && projects >= 5
        ? 90
        : 50 < exam && projects >= 2
        ? 75
        : 0;
}
