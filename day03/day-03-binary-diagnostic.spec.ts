import { DiagnosticReportCalculator } from './day-03-binary-diagnostic';
import { binaryNumbers } from './day-03-binary-diagnostic.input';

describe('Day 3 - Binary Diagnostic', () => {
	test('should throw Error for empty readings', () => {
		expect(() => {
			const calculator = new DiagnosticReportCalculator([]);
			calculator.computeEpsilonAndGamma();
		}).toThrowError();
	});
	test('should throw Error for inconsistent reading lengths', () => {
		expect(() => {
			const calculator = new DiagnosticReportCalculator(['1', '01']);
			calculator.computeEpsilonAndGamma();
		}).toThrowError();
	});
	test('should return 2743844 for puzzle part 1 answer', () => {
		const calculator = new DiagnosticReportCalculator(binaryNumbers);
		const [gamma, epsilon] = calculator.computeEpsilonAndGamma();
		const answer = gamma * epsilon;
		expect(answer).toEqual(2743844);
	});
	test('should return 6677951 for puzzle part 2: life support rating', () => {
		const calculator = new DiagnosticReportCalculator(binaryNumbers);
		const lifeSupportRating = calculator.computeLifeSupportRating();
		expect(lifeSupportRating).toEqual(6677951);
	});
});
