import { BingoSolver, NO_WINNING_BOARDS_ERROR } from './day-04-bingo-squid';
import { boards, drawnNumbers } from './day-04-bingo-squid.input';
import { exampleBoards, exampleDrawnNumbers } from './day-04-bingo-squid.example';

describe('Day 4 - Bingo Squid', () => {
	test('should throw NO_WINNING_BOARDS_ERROR for empty boards', () => {
		const solver = new BingoSolver([], []);
		expect(() => solver.computeWinningBoard()).toThrowError(NO_WINNING_BOARDS_ERROR);
	});
	test('should be able to compute winning board score from example input', () => {
		const solver = new BingoSolver(exampleBoards, exampleDrawnNumbers);
		let result = solver.computeWinningBoard();
		const sumOfUnmarked = result.unmarkedNumbers.reduce((sum: number, num: number) => sum + num, 0);
		const score = result.lastDrawnNumber * sumOfUnmarked;
		expect(score).toEqual(4512);
	});
	test('should be able to compute winning board score from input', () => {
		const solver = new BingoSolver(boards, drawnNumbers);
		let result = solver.computeWinningBoard();
		const sumOfUnmarked = result.unmarkedNumbers.reduce((sum: number, num: number) => sum + num, 0);
		const score = result.lastDrawnNumber * sumOfUnmarked;
		expect(score).toEqual(44736);
	});
	test('should be able to compute last wining board score from example input', () => {
		const solver = new BingoSolver(exampleBoards, exampleDrawnNumbers);
		let result = solver.computeLastWinningBoard();
		const sumOfUnmarked = result.unmarkedNumbers.reduce((sum: number, num: number) => sum + num, 0);
		const score = result.lastDrawnNumber * sumOfUnmarked;
		expect(score).toEqual(1924);
	});
	test('should be able to compute last wining board score from input', () => {
		const solver = new BingoSolver(boards, drawnNumbers);
		let result = solver.computeLastWinningBoard();
		const sumOfUnmarked = result.unmarkedNumbers.reduce((sum: number, num: number) => sum + num, 0);
		const score = result.lastDrawnNumber * sumOfUnmarked;
		expect(score).toEqual(1924);
	});
});
