// function doubleValues(arr) {
//     let doubled = [];
//     for (let nums of arr) {
//         doubled.push(nums * 2);
//     }
//     return doubled;
// };

function doubleValues(arr) {
    let newArr = arr.map(function (val) {
        return val * 2;
    })
    return newArr;
}

// function onlyEvenValues(arr) {
//     let evenNums = [];
//     for (let nums of arr) {
//         if (nums % 2 === 0) {
//             evenNums.push(nums);
//         }
//     }
//     return evenNums;
// };

function onlyEvenValues(arr) {
    return arr.filter(function (val) {
        return val % 2 === 0;
    })
};

// function showFirstAndLast(arr) {
//     let firstNlast = [];
//     for (let strings of arr) {
//         let len = strings.length;

//         let firstChar = strings.split("").splice(0, 1).join('');
//         let lastChar = strings.split("").splice((len - 1), 1).join('');
//         firstNlast.push(firstChar + lastChar);

//     }
//     return firstNlast;
// }

function showFirstAndLast(arr) {
    let newArr = arr.map(function (val) {
        let len = val.length;
        let firstChar = val.split("").splice(0, 1).join('');
        let lastChar = val.split("").splice((len - 1), 1).join('');

        return (firstChar + lastChar);
    })
    return newArr;
}

// function addKeyAndValue(arr, key, value) {
//     for (let obj of arr) {
//         obj[key] = value;
//     }
//     return arr;
// }

function addKeyAndValue(arr, key, value) {
    arr.forEach(function (obj) {
        obj[key] = value;
    });
    return arr;
}

function vowelCount(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelTracker = {};

    str.toLowerCase().split("").forEach(function (e) {
        if (vowels.indexOf(e) >= 0) {
            if (!vowelTracker.hasOwnProperty(e)) {
                vowelTracker[e] = 1;
            } else if (vowelTracker.hasOwnProperty(e)) {
                vowelTracker[e]++;
            }
        }
    })
    return vowelTracker;
}

function doubleValuesWithMap(arr) {
    let newArr = arr.map(function (val) {
        return val * 2;
    });
    return newArr;
};

function valTimesIndex(arr) {
    let tempArr = arr.map(function (val) {
        return val * arr.indexOf(val);
    })
    return tempArr;
};


function extractKey(arr, key) {
    let temp = arr.map(function (val) {
        if ((val[key]) === "undefined") {
        } else {
            return (val[key]);
        }

    });
    return temp;
};


function extractFullName(arr) {
    let newArr = arr.map(function (val) {
        return `${val.first} ${val.last}`
    })
    return newArr;
};

function filterByValue(arr, key) {
    let newArr = arr.filter(function (val) {
        if (val[key]) {
            return val;
        }
    })
    return newArr;
};

function find(arr, value) {
    let newArr = arr.filter(function (x) {
        if (x === value) {
            return x;
        }
    })
    if (newArr.length === 0) {
        return undefined;
    }

    return newArr[0];
};

function findInObj(arr, key, value) {
    let newArr = arr.filter(function (val) {
        if (val[key] === value) {
            return val;
        }
    });
    return newArr[0];
};


function removeVowels(str) {
    let vowels = "aeiou"
    let newStr = str.toLowerCase().split("").filter(function (val) {
        if (!vowels.includes(val)) {
            return val;
        }
    })
    return newStr.join("");
};

function doubleOddNumbers(arr) {
    return arr.filter(function (val) { return val % 2 !== 0 }).map(function (val) { return val * 2 });
};