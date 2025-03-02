
import { getRandomCoordiantes, getRandomDirecition } from './functions/randoms.js';
import { DisplayCrafLocation } from './functions/DisplayLocation.js';
import { CraftMovingAsOrderd } from './functions/CraftMovingAsOrderd.js';
import { directionsEnum } from './data.js';
import promptSync from 'prompt-sync';

/**
 * Main function to initialize the spacecraft location and handle user input for movement orders.
 * 
 * The function performs the following steps:
 * 1. Generates random coordinates and direction for the spacecraft.
 * 2. Logs the initialization message.
 * 3. Waits for 3 seconds and displays the initial location of the spacecraft.
 * 4. Continuously prompts the user for movement orders and updates the spacecraft location accordingly.
 * 
 * @async
 * @function main
 * @returns {Promise<void>} A promise that resolves when the function completes.
 */
async function main() {
    const prompt = promptSync();
    let xCoordinate = getRandomCoordiantes();
    let yCoordinate = getRandomCoordiantes();
    // let xCoordinate = 4;
    // let yCoordinate = 2;
    let directionPoint = directionsEnum[getRandomDirecition()];
    // let directionPoint = 'EAST';
    let Location = {
        x: xCoordinate,
        y: yCoordinate,
        direction: directionPoint,
    };

    console.log(`Initializing...`);

    // Wait for 3 seconds
    await DisplayCrafLocation(xCoordinate, yCoordinate, directionPoint);

    // Take user input after the timeout
    while(1) {
        const OrderInput = prompt('Enter an Order: ');

        if (OrderInput === null) {
            console.log('\nProcess terminated by user (Ctrl + C)');
            process.exit(0); // Exit gracefully
        }

        const FinalOrder = OrderInput
            .toLowerCase()
            .match(/[fblr]/g)
        
        CraftMovingAsOrderd(FinalOrder, Location);

        console.log(`( ${Location.x}, ${Location.y} ) ${Location.direction}`);
    }
}

// Run the main function
main();