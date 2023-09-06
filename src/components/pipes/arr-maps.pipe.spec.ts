import { ArrayMapsPipe } from './arr-maps.pipe';

describe('ArrayMapsPipe', () => {
    it('map array item property', () => {
        const pipe = new ArrayMapsPipe();
        const value = [
            {
                a: 1,
                b: true,
                c: 'name',
            },
            {
                a: 2,
                b: false,
                c: 'name-1',
            },
        ];
        expect(pipe.transform(value, 'a', 'b', 'c')).toEqual([
            [1, true, 'name'],
            [2, false, 'name-1'],
        ]);
    });
});
