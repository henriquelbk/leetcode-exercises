// 2235. Add Two Integers

var sum = function(num1, num2) {
    return num1 + num2;
};

// 128. Longest Consecutive Sequence

var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of nums) {
        if (!numSet.has(n - 1)) {
            let length = 1;

            while (numSet.has(n + length)) {
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;    
};

// 1. Two Sum

var twoSum = function(nums, target) {
    const pairIndex = {};

    for (let i = 0; i <nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIndex) {
            return [i, pairIndex[target - num]]
        }
        pairIndex[num] = i;
    }

    // a função deve iterar sobre o array e, em cada posição, somar o integer com os valores das outras posições e comparar o resultado da soma com o target. Caso o resultado da soma seja igual, deve-se criar um array com as posições que, somadas, deram o target.

    // outra forma de imaginar a resolução: subtraia o target do valor de cada posição, caso o resto seja um numero presente ne array, deve-se guardar a posição deste número no array de output.
};

// 268. Missing Number

var missingNumber = function(nums) {
    let n = nums.length;
    let v = new Array(n+1).fill(-1);
    
    for (let i = 0; i < v.length; i++) {
        v[nums[i]] = nums[i];
    }
    for (let i = 0; i < v.length; i++) {
        if(v[i] == -1) return i;
    }
    return 0;
    
    // a função deve verificar o tamanho do array de inteiros únicos e, a partir deste tamanho, deve verificar se há algum número faltante para chegar no total verificado.
};