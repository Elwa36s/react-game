function makeLines(array){
    let lines = [];
    array.forEach((value, index) => {
        let lineIndex = Math.floor(index / 4);
        lines[lineIndex] = lines[lineIndex] || [];
        lines[lineIndex].push(value);
    });
    return lines;
}
  
function rotate(arr, times = 1){
    const check = times - 1;
    const rotatedArr = arr[0].map((item, idx) => arr.map((row) => row[idx]).reverse());
    return check === 0 ? rotatedArr : rotate(rotatedArr, check);
}
  
function sum(arr){
    const result = [];
    const summedArr = [];
    for(let i = 0; i < 4; i++){
    let row = arr[i];
    row = row.filter(val => (val !== 0));
        for(let j = row.length; j >= 0; j--){
            if(row[j] === row[j-1]){
                if(!isNaN(row[j-1])){
            row[j] += row[j-1] + 1;
            row[j-1] = 0
            row = row.filter(val => (val !== 0));
            }}
        }
        row = row.map((numb)=>(numb % 2 === 1) ? numb -= 1 : numb);
    summedArr.push(row);
    }
    for (let i = 0; i < 4; i++){
        let row = summedArr[i];
        result.push(unshiftZeros(row));
    }
    return result
}

function unshiftZeros(array){
    if (array.length < 4) array.unshift(0);
    return array.length === 4 ? array : unshiftZeros(array);
}

function findEmpties(array){
    let emptyIndex = [];
    array.forEach((value, index) => {if(value === 0){emptyIndex.push(index)}})
    return emptyIndex;
}


function putRandomNumber(array){
    const possibleIndexes = findEmpties(array);
    const randomNumb = [2, 4, 2, 2, 2, 2, 2, 2, 4, 2];
    
    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));          
    }
    const insertIndex = getRandomInt(10),
    currentNumb = randomNumb[insertIndex],
    possiblePlace = getRandomInt(possibleIndexes.length),
    currentPlace = possibleIndexes[possiblePlace];
    array[currentPlace] = currentNumb;
    return array;
}

function checkPossibleMove(defaultArray, changedArray){
    for (let i = 0; i < defaultArray.length; i++){
    if (defaultArray[i] !== changedArray[i]) return true
    }
}
    export {sum, rotate, findEmpties, makeLines, checkPossibleMove, putRandomNumber};