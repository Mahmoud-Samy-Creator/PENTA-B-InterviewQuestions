/**
 * Displays the current location and direction of the spacecraft.
 * 
 * @param {number} xCoordinate - The x-coordinate of the spacecraft's location.
 * @param {number} yCoordinate - The y-coordinate of the spacecraft's location.
 * @param {string} directionPoint - The direction the spacecraft is facing.
 * @returns {Promise<void>} A promise that resolves after displaying the location and instructions.
 */
export async function DisplayCrafLocation(xCoordinate, yCoordinate, directionPoint) {
    return new Promise((resolve) => setTimeout(() => {
        console.log(`(${xCoordinate}, ${yCoordinate}, ${directionPoint})`);
        console.log(`The spacecraft is located at ${xCoordinate}, ${yCoordinate} and is facing ${directionPoint}`);
        console.log(`------------------------------------------------------------------`);
        console.log(`Please enter your order:
            F -> Move forward on current heading  
            B -> Move backwards on current heading 
            L -> Rotate left by 90 degrees 
            R -> Rotate right by 90 degrees

            => Every forword or backward movement will be of 1 unit.
            => To Exit control, exit the terminal.
            `);
        resolve();
    }, 100));
}