# Mars - Part [1]

# Story
The rover is given a command string which contains multiple commands. This string must then be 
broken into each individual command and that command then executed. The valid commands are: 
- F -> Move forward on current heading  
- B -> Move backwards on current heading 
- L -> Rotate left by 90 degrees 
- R -> Rotate right by 90 degrees 
*  An example command might be FLFFFRFLB 
*  Once the full command string has been followed, the rover reports it’s current coordinates 
and heading in the format `(6, 4) NORTH `
*  As Mars is a globe, there is no ‘Edge of the world’ to fall off, so negative coordinates are valid. 

# Logical Thinking
1. To Simulate real world, Clearly the co-ordinates and craft's heading direction will be random, that so I will determine it. So, first, I have make funcitons to generate random x, y co-ordinates

```
export function getRandomCoordiantes() {
    return Math.floor(Math.random() * 1001) - 500;
}
```

And other for generating random direction
```
export function getRandomDirecition() {
    return Math.floor(Math.random() * 3);
}
```

2. And then, used it in the main function to determine it and store it in variables, that is so to use them as a reference when moving the craft by remote order

```
let xCoordinate = getRandomCoordiantes();
let yCoordinate = getRandomCoordiantes();
```

3. Now I am stroring whole data in an object, as object can be mutated easily / passed by reference by default, so I can change it later and change the craft location reference, to order again later

```
let Location = {
        x: xCoordinate,
        y: yCoordinate,
        direction: directionPoint,
    };
```

4. In Real world, The fetching of craft location is done using an API, and it takes some time (usually some milli-seconds), So I used Promise to simulate this time and display the initial location of craft after landing, and use this function in the main function in sequence

```
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
```

```
    await DisplayCrafLocation(xCoordinate, yCoordinate, directionPoint);
```


5. I started a user input loop, that's to always send order to the craft for continous move, Refactor that order to get clear order by matching the input with only instructions letters, that's by using Regex Expression.

```
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
    
        const FinalOrder = OrderInput
            .toLowerCase()
            .match(/[fblr]/g)
        
        CraftMovingAsOrderd(FinalOrder, Location);
    
        console.log(`The spacecraft is located at ${Location.x}, ${Location.y} and is facing ${Location.direction}`);
        console.log(`( ${Location.x}, ${Location.y} ) ${Location.direction}`);
    }
}
```

6. Move the craft successfully by using the `CraftMovingAsOrderd` function

# How the movement logic works ?

1. The order string serialized and refactor according to rejex pattern for correct instructions.
2. These instructs looped over, and operate the order according to the letter
3. Each letter (instruction) initiate it's respective function to confirm the order

```
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
        console.log(`Current position: x=${location.x}, y=${location.y}, direction=${location.direction}`);
    });
}
```

4. Usage of switch case is that it's faster than if/else conditions, more readable, more tracable, and easier in debugging

5. We have 2 functions, one for forword/backword movement, and the other is for rotaional movement.

```
export function CraftRotation(rotation, location) {
    let directionIndex = directionsEnum.indexOf(location.direction);
    rotation === 'l' ?
        directionIndex = (directionIndex - 1 + 4) % 4
        : directionIndex = (directionIndex + 1) % 4;
    location.direction = directionsEnum[directionIndex];
}
```

```
export function CraftMovement(isForward, location) {
    const vector = directionVectors[location.direction];
    const multiplier = isForward ? 1 : -1;

    location.x += vector.x * multiplier;
    location.y += vector.y * multiplier;
}
```


### Note
Each function is completly documented

