import DiverCommandsInterpreter from './day-02-dive';
import { commands } from './day-02-dive.input';

describe('Day 2 - Dive', () => {
	test('should throw Error for unknown commands', () => {
		expect(() => {
			const measurer = new DiverCommandsInterpreter([['unknown', 1]]);
			measurer.computeOffsetFromCommands();
		}).toThrowError();
	});
	test('should return [0, 0] for no commands', () => {
		const measurer = new DiverCommandsInterpreter([]);
		expect(measurer.computeOffsetFromCommands()).toEqual([0, 0]);
	});
	test('should return 1488669 for puzzle part 1 answer', () => {
		const measurer = new DiverCommandsInterpreter(commands);
		const offsets = measurer.computeOffsetFromCommands();
		const answer = offsets[0] * offsets[1];
		expect(answer).toEqual(1488669);
	});
	test('should return 1176514794 for puzzle part 2 answer', () => {
		const measurer = new DiverCommandsInterpreter(commands);
		const offsets = measurer.computeOffsetFromCommandsWithAim();
		const answer = offsets[0] * offsets[1];
		expect(answer).toEqual(1176514794);
	});
});
