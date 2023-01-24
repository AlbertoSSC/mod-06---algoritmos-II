var arr = [];
var randomPick = (n, min, max) => {
    var range = (max - min) + 1;
    var pick = Math.floor(Math.random() * range) + min;
    arr.push(pick);

    // if (!arr.includes(pick)) arr.push(pick);

    for (numb of arr) {
        if (n > arr.length) {
            randomPick(n, min, max);
        } else {
            repeatDelete(arr);
        };
    };
};

var repeatDelete = array => {
    var minIndex;
    var size = array.length;

    for (var s = 0; s < size; s++) {
        minIndex = s;
        for (var i = s + 1; i < size; i++) {
            if (array[i] === array[minIndex]) {
                array.splice(i, 1);
                minIndex = i;
            };
        };
    };
};

randomPick(10, 1, 100);
console.log("Array final sin repetidos: [" + arr + "]");