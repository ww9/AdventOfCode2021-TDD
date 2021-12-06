import { countDeeperMeasurements, countSlidingWindowDeeperMeasurements } from './day-01-sonar-sweep';
import { depthReadings } from './day-01-sonar-sweep.input';

describe('Day 1 - Sonar Sweep', () => {
	test('should return 0 for empty reading', () => {
		expect(countDeeperMeasurements([])).toBe(0);
	});
	test('should return 0 for one reading', () => {
		expect(countDeeperMeasurements([200])).toBe(0);
	});
	test('should return 1466 for puzzle part 1', () => {
		expect(countDeeperMeasurements(depthReadings)).toBe(1466);
	});
	test('should return 1491 for puzzle part 2', () => {
		expect(countSlidingWindowDeeperMeasurements(depthReadings)).toBe(1491);
	});
});
