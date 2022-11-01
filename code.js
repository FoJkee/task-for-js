/*

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds

*/

function past(h, m, s) {
    let seconds = s * 1000;
    let minutes = m * 60 * 1000;
    let hours = h * 60 * 60 * 1000;

    return seconds + minutes + hours;
}
