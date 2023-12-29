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

function fibs2(nr) {
    const sequence = [];
    for (let i = 0; i < nr; i++) {
        if (i === 0) sequence[i] = 0;
        else if (i === 1) sequence[i] = 1;
        else sequence[i] = sequence[i - 1] + sequence[i - 2];
    } return sequence;
}

function fibsRecusrcion2(nr) {
    if (nr === 0) return [0];
    if (nr === 1) return [0, 1];
    if (nr === 2) return [0, 1, 2];

    const sequence = fibsRecusrcion2(nr - 1);
    sequence[nr] = sequence[nr - 1] + sequence[nr - 2];
    return sequence;
}

function mergeSort2(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort2(left);
    const sortedRight = mergeSort2(right);
    return merge(sortedLeft, sortedRight);
}

function merge2(left, right) {
    const mergedArr = [];

    let i = 0;
    let j = i;

    while (i < left.length && j < right.length) {
        if (left[i] < right[i]) {
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


// budallik sa per perkujtim
const body = document.body;

const div_0 = document.createElement('div');
const input_0 = document.createElement('input')
const button_0 = document.createElement('button');
const result_0 = document.createElement('p');

input_0.placeholder = "Enter sentence";
button_0.textContent = 'Reverse';
button_0.onclick = () => {
    reverse(input_0.value);
};


div_0.appendChild(input_0);
div_0.appendChild(button_0);
div_0.appendChild(result_0);

body.appendChild(div_0);



function reverse(string) {
    if (!string.length) return;
    result_0.textContent = '';
    let reversedStr = '';

    for (let i = 0; i < string.length; i++) {
        reversedStr = string[i] + reversedStr;
    }

    letterByLetter(reversedStr);
}

function letterByLetter(string) {
    result_0.textContent += string[0];
    if (string.length > 1) {
        string = string.slice(1);
        setTimeout(() => letterByLetter(string), 65);
    }
}


// Linked List Assignment ---*---*----*---*----*---*---

class Node {
    constructor(value) {
        this.value = null;
        this.pointer = null;
    }
}

class LinkedList {
    counter = 0;

    append(value) {
        const newNode = new Node();

        newNode.value = value;
        if (this.counter >= 1) this[this.counter - 1].pointer = newNode;
        this[this.counter++] = newNode;
    }

    prepend(value) {
        const newNode = new Node();

        newNode.value = value;
        if (this.counter == 0) {
            return this[this.counter++] = newNode;
        }
        for (let i = this.counter++; i >= 0; i--) {
            if (i === 0) {
                this[i] = newNode;
                newNode.pointer = this[i + 1];
            }
            else {
                this[i] = this[i - 1];
            }
        }
    }

    get size() {
        return this.counter;
    }

    get head() {
        return this[0];
    }

    get tail() {
        return this[this.counter - 1];
    }

    at(index) {
        return this[index];
    }

    pop() {
        delete this[this.counter - 1];
        this[this.counter - 2].pointer = null;
        this.counter--;
    }

    contains(value) {
        let result = false;
        for (let i = 0; i < this.counter; i++) {
            if (value === this[i].value) result = true;
        } return result;
    }

    find(value) {
        for (let i = 0; i < this.counter; i++) {
            if (value === this[i].value) return i;
        } return null;
    }
}

const vGTAje = new LinkedList();
console.log(vGTAje);
vGTAje.append("Real GTA 3");
vGTAje.append("Vice City");
vGTAje.append("San Andreas");
console.log(vGTAje);
vGTAje.prepend("GTA 1");
console.log(vGTAje);
vGTAje.append("GTA IV");
vGTAje.append("GTA V");