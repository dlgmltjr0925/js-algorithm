function solution(numbers) {
  function getBiggerNumber(number) {
    let binary = "0" + number.toString(2);
    const numbers = [];
    let i = binary.length;
    while (--i >= 0) {
      if (binary[i] === "0") {
        binary = binary.slice(0, i) + "1" + binary.slice(i + 1);
        if (i === binary.length - 1) {
          return Number("0b" + binary);
        } else {
          binary = binary.slice(0, i + 1) + "0" + binary.slice(i + 2);
          return Number("0b" + binary);
        }
      }
    }
  }

  return numbers.map((number) => getBiggerNumber(number));
}
