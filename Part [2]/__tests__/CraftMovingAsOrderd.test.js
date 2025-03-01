import { CraftRotation, CraftMovement } from "../functions/CraftMovingAsOrderd";

// Testing Single Rotation
describe(`Craft Single Rotation`, () => {
    test(`Rotate left from north to west`, () => {
        const location = {direction: 'NORTH'}
        CraftRotation('l', location);
        expect(location.direction).toBe('WEST');
    });
    test(`Rotate right from north to east`, () => {
        const location = {direction: 'NORTH'}
        CraftRotation('r', location);
        expect(location.direction).toBe('EAST');
    });
    test(`Rotate right from SOUTH to EAST`, () => {
        const location = {direction: 'SOUTH'}
        CraftRotation('r', location);
        expect(location.direction).toBe('WEST');
    });
    test(`Rotate left from east to north`, () => {
        const location = {direction: 'EAST'}
        CraftRotation('l', location);
        expect(location.direction).toBe('NORTH');
    });
});

// Testing Multible Rotation
describe(`Craft Multible Rotation`, () => {
    test(`Rotate 360deg left from NORTH`, () => {
        const location = {direction: 'NORTH'}
        CraftRotation('l', location);
        CraftRotation('l', location);
        CraftRotation('l', location);
        CraftRotation('l', location);
        expect(location.direction).toBe('NORTH');
    });
    test(`Rotate 180deg right from east`, () => {
        const location = {direction: 'EAST'}
        CraftRotation('r', location);
        CraftRotation('r', location);
        expect(location.direction).toBe('WEST');
    });
    test(`Rotate 270deg left from WEST`, () => {
        const location = {direction: 'WEST'}
        CraftRotation('r', location);
        CraftRotation('r', location);
        CraftRotation('r', location);
        expect(location.direction).toBe('SOUTH');
    });
    test(`Rotate Mixed rotation from NORTH`, () => {
        const location = {direction: 'NORTH'}
        CraftRotation('r', location);
        CraftRotation('l', location);
        CraftRotation('l', location);
        CraftRotation('r', location);
        expect(location.direction).toBe('NORTH');
    });
    test(`Rotate Mixed rotation from SOUTH`, () => {
        const location = {direction: 'SOUTH'}
        CraftRotation('l', location);
        CraftRotation('l', location);
        CraftRotation('l', location);
        CraftRotation('r', location);
        CraftRotation('l', location);
        CraftRotation('r', location);
        expect(location.direction).toBe('NORTH');
    });
});

describe(`Craft Movement`, () => {
    test(`Move 1 step forward from NORTH`, () => {
        const location = {direction: 'NORTH', x: 0, y: 0}
        CraftMovement(true, location);
        expect(location.x).toBe(0);
        expect(location.y).toBe(1);
    });
    test(`Move 1 step backward from SOUTH`, () => {
        const location = {direction: 'SOUTH', x: 0, y: 0}
        CraftMovement(false, location);
        expect(location.x).toBe(0);
        expect(location.y).toBe(1);
    });
    test(`Move 1 step forward from EAST`, () => {
        const location = {direction: 'EAST', x: 0, y: 0}
        CraftMovement(true, location);
        expect(location.x).toBe(1);
        expect(location.y).toBe(0);
    });
    test(`Move 1 step backward from WEST`, () => {
        const location = {direction: 'WEST', x: 0, y: 0}
        CraftMovement(false, location);
        expect(location.x).toBe(1);
        expect(location.y).toBe(0);
    });
    test(`Move 2 steps forward from NORTH`, () => {
        const location = {direction: 'NORTH', x: 0, y: 0}
        CraftMovement(true, location);
        CraftMovement(true, location);
        expect(location.x).toBe(0);
        expect(location.y).toBe(2);
    });
    test(`Move 2 steps backward from SOUTH`, () => {
        const location = {direction: 'SOUTH', x: 0, y: 0}
        CraftMovement(false, location);
        CraftMovement(false, location);
        expect(location.x).toBe(0);
        expect(location.y).toBe(2);
    });
    test(`Move 1 step forward and 1 step backward from EAST`, () => {
        const location = {direction: 'EAST', x: 0, y: 0}
        CraftMovement(true, location);
        CraftMovement(false, location);
        expect(location.x).toBe(0);
        expect(location.y).toBe(0);
    });
    test(`Move 1 step backward and 1 step forward from WEST`, () => {
        const location = {direction: 'WEST', x: 0, y: 0}
        CraftMovement(false, location);
        CraftMovement(true, location);
        expect(location.x).toBe(0);
        expect(location.y).toBe(0);
    });
    test(`Move to an obstacle`, () => {
        const location = {direction: 'EAST', x: 4, y: 2}
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftRotation('l', location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        expect(location.x).toBe(7);
        expect(location.y).toBe(3);
    })
});

describe(`Craft Movement and Rotation`, () => {
    const location = {direction: 'EAST', x: 4, y: 2}
    test(`Move pattern mixed compination from EAST`, () => {
        CraftMovement(true, location);
        CraftRotation('l', location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftRotation('r', location);
        CraftMovement(true, location);
        CraftRotation('l', location);
        CraftMovement(false, location);
        expect(location.x).toBe(6);
        expect(location.y).toBe(4);
        expect(location.direction).toBe('NORTH');
    });
});

describe(`Craft Movement and Rotation`, () => {
    const location = {direction: 'SOUTH', x: 3, y: 6}
    test(`Move pattern mixed compination from SOUTH`, () => {
        CraftMovement(true, location);
        CraftRotation('l', location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftRotation('r', location);
        CraftMovement(true, location);
        CraftRotation('l', location);
        CraftMovement(false, location);
        CraftMovement(true, location);
        CraftRotation('l', location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftMovement(true, location);
        CraftRotation('r', location);
        CraftMovement(true, location);
        CraftRotation('l', location);
        CraftMovement(false, location);
        expect(location.x).toBe(7);
        expect(location.y).toBe(7);
        expect(location.direction).toBe('NORTH');
    });
});
