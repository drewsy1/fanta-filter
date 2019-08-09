import { asyncForEach } from '../../../src/ts/lib/util';
import * as should from 'should';

describe('asyncForEach', async function(){
    let testArray: string[];
    before('Populate testArray', async function(){
        testArray = ['a', 'b', 'c'];
    })
    it('Should perform a forEach operation asynchronously', async function(){
        new Promise(resolve => {
            asyncForEach(testArray, (value: string, index: number, iterable: string[]) => {
                iterable[index] = value.toUpperCase();
            });
        }).then((result: string[]) => should(result).containDeep(['A', 'B', 'C']));
    });
});
