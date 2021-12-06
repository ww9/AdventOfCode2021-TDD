import { projectLanternfishPopulation } from './day-06-lanternfish';
import { exampleInitialState } from './day-06-lanternfish.example';
import { initialState } from './day-06-lanternfish.input';

describe('Day 5 - Hydrothermal Venture', () => {
	test('should project lanterfish population after 18 days from example input', () => {
		let population = projectLanternfishPopulation(exampleInitialState, 18);
		expect(population).toEqual(26);
	});
	test('should project lanterfish population after 18 days from example input', () => {
		let population = projectLanternfishPopulation(exampleInitialState, 80);
		expect(population).toEqual(5934);
	});
	test('should project lanterfish population after 80 days from input', () => {
		let population = projectLanternfishPopulation(initialState, 80);
		expect(population).toEqual(346063);
	});
	test('should project lanterfish population after 256 days from input', () => {
		let population = projectLanternfishPopulation(initialState, 256);
		expect(population).toEqual(1572358335990);
	});
});
