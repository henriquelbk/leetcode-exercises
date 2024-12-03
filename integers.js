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