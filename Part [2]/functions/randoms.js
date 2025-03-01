/**
 * Generates a random coordinate value between -500 and 500.
 *
 * @returns {number} A random integer between -500 and 500.
 */
export function getRandomCoordiantes() {
    return Math.floor(Math.random() * 1001) - 500;
}

/**
 * Generates a random direction.
 *
 * @returns {number} A random integer between 0 and 2 (inclusive).
 */
export function getRandomDirecition() {
    return Math.floor(Math.random() * 3);
}