import { computeOffsetFromCommands, computeOffsetFromCommandsWithAim } from './day-02-dive';
import { commands } from './day-02-dive.input';

describe('Day 2 - Dive', () => {
	test('should throw Error for unknown commands', () => {
		expect(() => {
			computeOffsetFromCommands([['unknown', 1]]);
		}).toThrowError();
	});
	test('should return [0, 0] for no commands', () => {
		expect(computeOffsetFromCommands([])).toEqual([0, 0]);
	});
	test('should return 1488669 for puzzle part 1 answer', () => {
		const offsets = computeOffsetFromCommands(commands);
		const answer = offsets[0] * offsets[1];
		expect(answer).toEqual(1488669);
	});
	test('should return 1176514794 for puzzle part 2 answer', () => {
		const offsets = computeOffsetFromCommandsWithAim(commands);
		const answer = offsets[0] * offsets[1];
		expect(answer).toEqual(1176514794);
	});
});
