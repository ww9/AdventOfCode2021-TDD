import { countOverlapingHydrothermals } from './day-05-hydrothermal-venture';
import { exampleLines } from './day-05-hydrothermal-venture.example';
import { lines } from './day-05-hydrothermal-venture.input';

describe('Day 5 - Hydrothermal Venture', () => {
	test('should be able to count intersections from example input', () => {
		let overlaps = countOverlapingHydrothermals(exampleLines);
		expect(overlaps).toEqual(5);
	});
	test('should be able to count intersections from input', () => {
		let overlaps = countOverlapingHydrothermals(lines, true);
		expect(overlaps).toEqual(21698);
	});
});
