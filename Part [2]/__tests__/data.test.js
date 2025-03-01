// That is for static data testing
import { directionsEnum, directionVectors } from '../data';

describe('Crafts Direction', () => {
    test('directionsEnum contains the main 4 directions', () => {
        expect(directionsEnum).toEqual(['EAST', 'SOUTH', 'WEST', 'NORTH']);
        expect(directionsEnum.length).toBe(4);
    });

    test('directionVectors contains correct co-ordinated values for each direction', () => {
        expect(directionVectors.EAST).toEqual({ x: 1, y: 0 });
        expect(directionVectors.SOUTH).toEqual({ x: 0, y: -1 });
        expect(directionVectors.WEST).toEqual({ x: -1, y: 0 });
        expect(directionVectors.NORTH).toEqual({ x: 0, y: 1 });
    })
});

