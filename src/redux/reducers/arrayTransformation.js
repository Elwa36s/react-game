function makeLines(array){
    let lines = [];
        arr.forEach((value, index) => {
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
  
function sum(array){
    const rowLength = arr[0].length,
        changedArr = [].concat(arr);
    for (let i = 0; i < rowLength - 1; i++){
        let currentRow = changedArr[i],
        nextRow = changedArr[i + 1];
        for(let j = 0; j< rowLength; j++){
            if(currentRow[j] === nextRow[j] || currentRow[j] === 0){
                currentRow[j] += nextRow[j];
                nextRow[j] = 0;
            }
        }
    }
    return changedArr;
}
  
function findEmpties(array){
    let emptyIndex = [];
    array.forEach((value, index) => {if(value === 0){emptyIndex.push(index)}})
    return emptyIndex;
}


function putRandomNumber(array){
    const possibleIndexes = findEmpties(array);
    console.log('possible - ' + possibleIndexes)
    const randomNumb = [2, 4, 2, 2, 2, 2, 2, 2, 4, 2];
    
    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));          
    }
    const insertIndex = getRandomInt(10),
    currentNumb = randomNumb[insertIndex],
    possiblePlace = getRandomInt(possibleIndexes.length);
    currentPlace = possibleIndexes[possiblePlace];
    array[currentPlace] = currentNumb;
    return array;
}

    export {sum, rotate, findEmpties, makeLines};