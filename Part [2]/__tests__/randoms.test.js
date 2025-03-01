import { getRandomCoordiantes, getRandomDirecition } from '../functions/randoms';

describe(`Test random craft location`, () => {
    test(`Rondome Craft Co-ordinates`, () => {
        const random = getRandomCoordiantes();
        expect(random).toBeGreaterThanOrEqual(-500);
        expect(random).toBeLessThanOrEqual(500);
    });

    test(`Random Craft Direction`, () => {
        const random = getRandomDirecition();
        expect(random).toBeGreaterThanOrEqual(0);
        expect(random).toBeLessThanOrEqual(2);
        expect(Number.isInteger(random)).toBe(true);
        expect(!Number.isInteger(random)).toBe(false);
    });
})