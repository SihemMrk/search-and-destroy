'use strict';

// Complete this algo
const minJumps = arr => {
    let firstEl = arr[0];
    if(firstEl >= arr.length - 1){
        return 1
    }else{

        let newArr = arr.slice(1, firstEl + 1);
        let max = Math.max(...newArr);
        let arr3 = arr.splice(arr.indexOf(max));
        return 1 + minJumps(arr3)
    }
};

module.exports = minJumps