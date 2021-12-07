import { alignCrabsEfficiently, geometricalMoveCost, linearMoveCost, NO_CRAB_POSITIONS_SUPPLIED } from './day-07-whale';
import { input, exampleInput } from './day-07-whale.input';

describe('Day 7 - The Treachery of Whales', () => {
	test('should throw error if no crab position supplied', () => {
		expect(() => {
			alignCrabsEfficiently([], linearMoveCost);
		}).toThrowError(NO_CRAB_POSITIONS_SUPPLIED);
	});
	test('should provide optimal target position from example input', () => {
		let targetPosition = alignCrabsEfficiently(exampleInput, linearMoveCost);
		expect(targetPosition.cost).toEqual(37);
	});
	test('should provide optimal target position from input and linear move cost', () => {
		let targetPosition = alignCrabsEfficiently(input, linearMoveCost);
		expect(targetPosition.cost).toEqual(336120);
	});
	test('should provide optimal target position from input and geometrical move cost', () => {
		let targetPosition = alignCrabsEfficiently(input, geometricalMoveCost);
		expect(targetPosition.cost).toEqual(96864235);
	});
});
