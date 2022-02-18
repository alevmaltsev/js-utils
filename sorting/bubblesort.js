export const bubblesort = array => {
    const shallowCopiedArray = [...array];
    let length = shallowCopiedArray.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < length; i += 1 ) {
            if(shallowCopiedArray[i] > shallowCopiedArray[i+1]) {
                [shallowCopiedArray[i], shallowCopiedArray[i+1]] = [shallowCopiedArray[i+1], shallowCopiedArray[i]];
                swapped = true;
            }
        }
        length -= 1;
    } while (swapped);
    return shallowCopiedArray;
}