/**
 * @description Performs a forEach loop asynchronously
 * @export
 * @param {*} iterable Array/iterable object
 * @param {Function} callback Function to be called on each element of the iterable
 */
export async function asyncForEach(iterable: any, callback: Function) {
    for (let index = 0; index < iterable.length; index++) {
      await callback(iterable[index], index, iterable);
    }
  }