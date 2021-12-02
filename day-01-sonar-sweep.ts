export default class DeeperMeasurementsCounter {
	private depthReadings: number[] = [];

	constructor(depthReadings: number[]) {
		this.depthReadings = depthReadings;
	}
	countDeeperMeasurements(): number {
		let deeperMeasurements = 0;
		for (let i = 1; i < this.depthReadings.length; i++) {
			if (this.depthReadings[i] > this.depthReadings[i - 1]) {
				deeperMeasurements++;
			}
		}
		return deeperMeasurements;
	}
	countSlidingWindowDeeperMeasurements(): number {
		let deeperMeasurements = 0;
		for (let i = 3; i < this.depthReadings.length; i++) {
			const window1Sum = this.depthReadings.slice(i - 3, i).reduce((sum, depth) => sum + depth, 0);
			const window2Sum = this.depthReadings.slice(i - 2, i + 1).reduce((sum, depth) => sum + depth, 0);
			if (window2Sum > window1Sum) {
				deeperMeasurements++;
			}
		}
		return deeperMeasurements;
	}
}
