/**
 * Enum for directions.
 * @readonly
 * @enum {string}
 */
export const directionsEnum = ['EAST', 'SOUTH', 'WEST', 'NORTH'];

/**
 * An object representing direction vectors for cardinal directions.
 * Each direction is associated with an object containing x and y coordinates.
 * 
 * @constant
 * @type {Object.<string, {x: number, y: number}>}
 * @property {Object} EAST - The vector for the east direction.
 * @property {number} EAST.x - The x coordinate for the east direction (1).
 * @property {number} EAST.y - The y coordinate for the east direction (0).
 * @property {Object} SOUTH - The vector for the south direction.
 * @property {number} SOUTH.x - The x coordinate for the south direction (0).
 * @property {number} SOUTH.y - The y coordinate for the south direction (-1).
 * @property {Object} WEST - The vector for the west direction.
 * @property {number} WEST.x - The x coordinate for the west direction (-1).
 * @property {number} WEST.y - The y coordinate for the west direction (0).
 * @property {Object} NORTH - The vector for the north direction.
 * @property {number} NORTH.x - The x coordinate for the north direction (0).
 * @property {number} NORTH.y - The y coordinate for the north direction (1).
 */
export const directionVectors = {
    'EAST': { x: 1, y: 0 },
    'SOUTH': { x: 0, y: -1 },
    'WEST': { x: -1, y: 0 },
    'NORTH': { x: 0, y: 1 }
};