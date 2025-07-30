module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  let result = '';
  let n = number;

  if (n >= 100) {
    result += `${ones[Math.floor(n / 100)]} hundred`;
    n %= 100;
    if (n > 0) result += ' ';
  }

  if (n < 20 && n > 0) {
    result += ones[n];
  } else if (n >= 20) {
    result += tens[Math.floor(n / 10)];
    if (n % 10 > 0) {
      result += ` ${ones[n % 10]}`;
    }
  }

  return result;
};
