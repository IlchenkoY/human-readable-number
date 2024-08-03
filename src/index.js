module.exports = function toReadable(number) {
    const readableNumbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return "zero";
    }
    if (number < 100) {
        return checkNumber(number);
    }
    if (number >= 100 && number < 1000) {
        return `${readableNumbers[number.toString()[0]]} hundred ${checkNumber(
            Number(number.toString().slice(1))
        )}`.trim();
    }
    function checkNumber(number) {
        if (number < 20) {
            return readableNumbers[number];
        }
        if (number >= 20 && number < 100) {
            return `${tens[number.toString()[0]]} ${
                readableNumbers[number % 10]
            }`.trim();
        }
    }
};
