# Mars - Part [2]

# Story
Previous missions have had to be aborted due to obstacles that caused damage to the rover. Given a 
set of coordinates for all the known obstacles in the format: 
`[[1,4], [3,5], [7,4]]`
When the rover would enter a coordinate with an obstacle, instead stop at the coordinate 
immediately before and report position, heading and Stopped due to collision, e.g. `(3, 4) WEST 
STOPPED`

# Logical Thinking
1. To Simulate real world, Clearly the co-ordinates of the previous obstcals are already known, and sent with the rover software, so it will check for the co-ordinates if it's one of the obstcals' before moving and change the direction.
If it's, it will stop in the current co-ordinate
So the `CraftMovement` Is updated with a condition.

```
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
```


### Note
Each function is completly documented

