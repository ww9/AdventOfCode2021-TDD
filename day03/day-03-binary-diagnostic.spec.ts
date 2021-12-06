import { computeEpsilonAndGamma, computeLifeSupportRating } from './day-03-binary-diagnostic';
import { binaryNumbers } from './day-03-binary-diagnostic.input';

describe('Day 3 - Binary Diagnostic', () => {
	test('should throw Error for empty readings', () => {
		expect(() => {
			computeEpsilonAndGamma([]);
		}).toThrowError();
	});
	test('should throw Error for inconsistent reading lengths', () => {
		expect(() => {
			computeEpsilonAndGamma(['1', '01']);
		}).toThrowError();
	});
	test('should return 2743844 for puzzle part 1 answer', () => {
		const [gamma, epsilon] = computeEpsilonAndGamma(binaryNumbers);
		const answer = gamma * epsilon;
		expect(answer).toEqual(2743844);
	});
	test('should return 6677951 for puzzle part 2: life support rating', () => {
		const lifeSupportRating = computeLifeSupportRating(binaryNumbers);
		expect(lifeSupportRating).toEqual(6677951);
	});
});
