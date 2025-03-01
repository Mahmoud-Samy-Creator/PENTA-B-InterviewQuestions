import { directionsEnum, directionVectors, ObstcalsCoordinates } from '../data.js';

/**
 * Rotates the craft's direction based on the given rotation command.
 *
 * @param {string} rotation - The rotation command, either 'l' for left or 'r' for right.
 * @param {Object} location - The current location object of the craft.
 * @param {string} location.direction - The current direction of the craft.
 */
export function CraftRotation(rotation, location) {
    let directionIndex = directionsEnum.indexOf(location.direction);
    rotation === 'l' ?
        directionIndex = (directionIndex - 1 + 4) % 4
        : directionIndex = (directionIndex + 1) % 4;
    location.direction = directionsEnum[directionIndex];
}


/**
 * Moves the craft in the specified direction.
 *
 * @param {boolean} isForward - Determines the direction of movement. If true, the craft moves forward; if false, it moves backward.
 * @param {Object} location - The current location of the craft.
 * @param {number} location.x - The current x-coordinate of the craft.
 * @param {number} location.y - The current y-coordinate of the craft.
 * @param {string} location.direction - The current direction of the craft (e.g., 'N', 'S', 'E', 'W').
 *
 * @returns {void}
 */
export function CraftMovement(isForward, location) {
    const vector = directionVectors[location.direction];
    const multiplier = isForward ? 1 : -1;

    const NewX = location.x + vector.x * multiplier;
    const NewY = location.y + vector.y * multiplier;

    if (ObstcalsCoordinates.some(coordinate => coordinate[0] === NewX && coordinate[1] === NewY)) {
        console.log(`Obstacle detected at position ( ${NewX}, ${NewY} )`);
        console.log(`( ${location.x}, ${location.y} ) ${location.direction} STOPPED`);
        return;
    }

    location.x = NewX;
    location.y = NewY;
}

/**
 * Processes a series of movement and rotation orders for a craft.
 *
 * @param {string[]} orders - An array of orders where 'f' means move forward, 'b' means move backward,
 *                            'l' means rotate left, and 'r' means rotate right.
 * @param {Object} location - The current location and direction of the craft.
 * @param {number} location.x - The x-coordinate of the craft's position.
 * @param {number} location.y - The y-coordinate of the craft's position.
 * @param {string} location.direction - The current direction the craft is facing (e.g., 'N', 'S', 'E', 'W').
 */
export function CraftMovingAsOrderd(orders, location) {
    if (!Array.isArray(orders) || orders.length === 0) {
        console.log('No valid orders to process');
        return;
    }

    orders.forEach((order) => {
        switch (order) {
            case 'f':
                CraftMovement(true, location);
                break;
            case 'b':
                CraftMovement(false, location);
                break;
            case 'l':
            case 'r':
                CraftRotation(order, location);
                break;
            default:
                console.log(`Invalid Order: ${order}`);
                break;
        }
        // const futureLocation = [x, y]
        // console.log(futureLocation);

    });
}