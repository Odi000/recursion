function fibs(nr) {
    let sequence = [];
    for (let i = 0; i < nr; i++) {
        if (i === 0) sequence[i] = 0;
        else if (i === 1) sequence[i] = 1;
        else {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
    } return sequence;
}

function fibsRecusrcion(nr) {
    if (nr === 1) return [0];
    if (nr === 2) return [0, 1]
    const sequence = fibsRecusrcion(nr - 1);
    sequence[sequence.length] = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    return sequence;
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const leftSide = array.slice(0, mid);
    const rightSide = array.slice(mid);

    const sortedLeft = mergeSort(leftSide);
    const sortedRight = mergeSort(rightSide);
    return merge(sortedLeft, sortedRight);

}

function merge(left, right) {
    const mergedArr = [];

    let i = 0;
    let j = i;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArr.push(left[i++]);
        } else {
            mergedArr.push(right[j++]);
        }
    } for (i; i < left.length; i++) {
        mergedArr.push(left[i]);
    } for (j; j < right.length; j++) {
        mergedArr.push(right[j]);
    } return mergedArr;
}