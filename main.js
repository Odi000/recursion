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
    sequence[sequence.length] = sequence[sequence.length-1] + sequence[sequence.length-2];
    return sequence;
}