import DeeperMeasurementsCounter from './day-01-sonar-sweep';
import { depthReadings } from './day-01-sonar-sweep.input';

describe('Calc', () => {
	test('should return 0 for empty reading', () => {
		const measurer = new DeeperMeasurementsCounter([]);
		expect(measurer.countDeeperMeasurements()).toBe(0);
	});
	test('should return 0 for one reading', () => {
		const measurer = new DeeperMeasurementsCounter([200]);
		expect(measurer.countDeeperMeasurements()).toBe(0);
	});
	test('should return 1466 for puzzle part 1', () => {
		const measurer = new DeeperMeasurementsCounter(depthReadings);
		expect(measurer.countDeeperMeasurements()).toBe(1466);
	});
	test('should return 1491 for puzzle part 2', () => {
		const measurer = new DeeperMeasurementsCounter(depthReadings);
		expect(measurer.countSlidingWindowDeeperMeasurements()).toBe(1491);
	});
});
