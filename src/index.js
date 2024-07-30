
  module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
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
    const hundreds = "hundred";

    if (number < 10) {
        return ones[number];
    } else if (number < 20) {
        return teens[number - 10];
    } else if (number < 100) {
        const ten = Math.floor(number / 10);
        const remainder = number % 10;
        return tens[ten] + (remainder ? " " + ones[remainder] : "");
    } else if (number < 1000) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        return (
            ones[hundred] +
            " " +
            hundreds +
            (remainder ? " " + toReadable(remainder) : "")
        );
    }
};

