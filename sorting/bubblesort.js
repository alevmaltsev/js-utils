export const bubblesort = array => {
    let length = array.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < length; i += 1 ) {
            if(array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swapped = true;
            }
        }
        length -= 1;
    } while (swapped);
    return array;
}