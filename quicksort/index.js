export const quicksort = (arr) => {
    if(!arr.length) return [];
    const middle = arr[Math.floor(arr.length - 1 / 2)];
    const sameMiddle = [];
    const lessMiddle = [];
    const greaterMiddle = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === middle) sameMiddle.push(arr[i]);
        if(arr[i] < middle) lessMiddle.push(arr[i]);
        if(arr[i] > middle) greaterMiddle.push(arr[i]); 
    }
    return quicksort(lessMiddle).concat(sameMiddle,quicksort(greaterMiddle));
}
