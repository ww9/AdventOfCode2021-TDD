export default class DiagnosticReportCalculator {
	private binaryNumbers: string[] = [];

	constructor(binaryNumbers: string[]) {
		this.binaryNumbers = binaryNumbers;
	}

	/* --- Day 3: Binary Diagnostic ---
	The submarine has been making some odd creaking noises, so you ask it to produce a diagnostic report just in case.

	The diagnostic report (your puzzle input) consists of a list of binary numbers which, when decoded properly, can tell you many useful things about the conditions of the submarine. The first parameter to check is the power consumption.

	You need to use the binary numbers in the diagnostic report to generate two new binary numbers (called the gamma rate and the epsilon rate). The power consumption can then be found by multiplying the gamma rate by the epsilon rate.

	Each bit in the gamma rate can be determined by finding the most common bit in the corresponding position of all numbers in the diagnostic report. For example, given the following diagnostic report:

	00100
	11110
	10110
	10111
	10101
	01111
	00111
	11100
	10000
	11001
	00010
	01010
	Considering only the first bit of each number, there are five 0 bits and seven 1 bits. Since the most common bit is 1, the first bit of the gamma rate is 1.

	The most common second bit of the numbers in the diagnostic report is 0, so the second bit of the gamma rate is 0.

	The most common value of the third, fourth, and fifth bits are 1, 1, and 0, respectively, and so the final three bits of the gamma rate are 110.

	So, the gamma rate is the binary number 10110, or 22 in decimal.

	The epsilon rate is calculated in a similar way; rather than use the most common bit, the least common bit from each position is used. So, the epsilon rate is 01001, or 9 in decimal. Multiplying the gamma rate (22) by the epsilon rate (9) produces the power consumption, 198.

	Use the binary numbers in your diagnostic report to calculate the gamma rate and epsilon rate, then multiply them together. What is the power consumption of the submarine? (Be sure to represent your answer in decimal, not binary.)
	*/
	computeEpsilonAndGamma(): [gamma: number, epsilon: number] {
		if (this.binaryNumbers.length <= 0) {
			throw new Error('Readings were empty');
		}
		const inputLength = this.binaryNumbers[0].length;
		let gammaBinary = '';
		let epsilonBinary = '';
		for (let i = 0; i < inputLength; i++) {
			let zeroesCount = 0;
			let onesCount = 0;
			for (const binaryNumber of this.binaryNumbers) {
				if (binaryNumber[i] === '0') {
					zeroesCount++;
				} else {
					onesCount++;
				}
			}
			if (zeroesCount == onesCount) {
				throw new Error('Unable to determine outcome because the number of 0 bits are equal to 1 bits for position ' + i);
			}
			gammaBinary += zeroesCount > onesCount ? '0' : '1';
			epsilonBinary += zeroesCount > onesCount ? '1' : '0';
		}
		return [parseInt(gammaBinary, 2), parseInt(epsilonBinary, 2)];
	}

	/* --- Part Two ---
	Next, you should verify the life support rating, which can be determined by multiplying the oxygen generator rating by the CO2 scrubber rating.

	Both the oxygen generator rating and the CO2 scrubber rating are values that can be found in your diagnostic report - finding them is the tricky part. Both values are located using a similar process that involves filtering out values until only one remains. Before searching for either rating value, start with the full list of binary numbers from your diagnostic report and consider just the first bit of those numbers. Then:

	Keep only numbers selected by the bit criteria for the type of rating value for which you are searching. Discard numbers which do not match the bit criteria.
	If you only have one number left, stop; this is the rating value for which you are searching.
	Otherwise, repeat the process, considering the next bit to the right.
	The bit criteria depends on which type of rating value you want to find:

	To find oxygen generator rating, determine the most common value (0 or 1) in the current bit position, and keep only numbers with that bit in that position. If 0 and 1 are equally common, keep values with a 1 in the position being considered.
	To find CO2 scrubber rating, determine the least common value (0 or 1) in the current bit position, and keep only numbers with that bit in that position. If 0 and 1 are equally common, keep values with a 0 in the position being considered.
	For example, to determine the oxygen generator rating value using the same example diagnostic report from above:

	Start with all 12 numbers and consider only the first bit of each number. There are more 1 bits (7) than 0 bits (5), so keep only the 7 numbers with a 1 in the first position: 11110, 10110, 10111, 10101, 11100, 10000, and 11001.
	Then, consider the second bit of the 7 remaining numbers: there are more 0 bits (4) than 1 bits (3), so keep only the 4 numbers with a 0 in the second position: 10110, 10111, 10101, and 10000.
	In the third position, three of the four numbers have a 1, so keep those three: 10110, 10111, and 10101.
	In the fourth position, two of the three numbers have a 1, so keep those two: 10110 and 10111.
	In the fifth position, there are an equal number of 0 bits and 1 bits (one each). So, to find the oxygen generator rating, keep the number with a 1 in that position: 10111.
	As there is only one number left, stop; the oxygen generator rating is 10111, or 23 in decimal.
	Then, to determine the CO2 scrubber rating value from the same example above:

	Start again with all 12 numbers and consider only the first bit of each number. There are fewer 0 bits (5) than 1 bits (7), so keep only the 5 numbers with a 0 in the first position: 00100, 01111, 00111, 00010, and 01010.
	Then, consider the second bit of the 5 remaining numbers: there are fewer 1 bits (2) than 0 bits (3), so keep only the 2 numbers with a 1 in the second position: 01111 and 01010.
	In the third position, there are an equal number of 0 bits and 1 bits (one each). So, to find the CO2 scrubber rating, keep the number with a 0 in that position: 01010.
	As there is only one number left, stop; the CO2 scrubber rating is 01010, or 10 in decimal.
	Finally, to find the life support rating, multiply the oxygen generator rating (23) by the CO2 scrubber rating (10) to get 230.

	Use the binary numbers in your diagnostic report to calculate the oxygen generator rating and CO2 scrubber rating, then multiply them together. What is the life support rating of the submarine? (Be sure to represent your answer in decimal, not binary.)
	*/

	filterForRating(binaryNumbers: string[], digitPositionToAnalyze: number, keepNumbersWithMostCommon: boolean, ifTiedThenPick: '0' | '1'): string[] {
		let zeroesCount = 0;
		let onesCount = 0;
		let numbersWithZero: string[] = [];
		let numbersWithOne: string[] = [];
		for (const binaryNumber of binaryNumbers) {
			switch (binaryNumber[digitPositionToAnalyze]) {
				case '0':
					zeroesCount++;
					numbersWithZero.push(binaryNumber);
					break;
				case '1':
					onesCount++;
					numbersWithOne.push(binaryNumber);
					break;
				default:
					throw new Error(binaryNumber[digitPositionToAnalyze] + ' is not a valid binary character. Exptected 0 or 1.');
			}
		}
		let keepNumbersWith: '0' | '1';
		if (zeroesCount == onesCount) {
			keepNumbersWith = ifTiedThenPick;
		} else if (keepNumbersWithMostCommon) {
			keepNumbersWith = zeroesCount > onesCount ? '0' : '1';
		} else {
			keepNumbersWith = zeroesCount > onesCount ? '1' : '0';
		}
		if (keepNumbersWith == '0') {
			return numbersWithZero;
		}
		return numbersWithOne;
	}

	computeLifeSupportRating(): number {
		const readingLength = this.binaryNumbers[0].length;

		let oxygenBinaryNumbers = [...this.binaryNumbers]; // most common, ties with 1
		for (let i = 0; i < readingLength && oxygenBinaryNumbers.length > 1; i++) {
			const currentLength = oxygenBinaryNumbers.length;
			oxygenBinaryNumbers = this.filterForRating(oxygenBinaryNumbers, i, true, '1');
			if (oxygenBinaryNumbers.length == currentLength) {
				throw new Error('Could not determines oxygen rating.');
			}
		}

		let co2ScrubberBinaryNumbers = [...this.binaryNumbers]; // least common, ties with 0
		for (let i = 0; i < readingLength && co2ScrubberBinaryNumbers.length > 1; i++) {
			const currentLength = co2ScrubberBinaryNumbers.length;
			co2ScrubberBinaryNumbers = this.filterForRating(co2ScrubberBinaryNumbers, i, false, '0');
			if (co2ScrubberBinaryNumbers.length == currentLength) {
				throw new Error('Could not determines CO2 Scrubber rating.');
			}
		}

		let oxygenGeneratorRating = parseInt(oxygenBinaryNumbers[0], 2);
		let co2ScrubberRating = parseInt(co2ScrubberBinaryNumbers[0], 2);
		return oxygenGeneratorRating * co2ScrubberRating;
	}
}
