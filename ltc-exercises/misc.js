// 2703. Return Length of Arguments Passed

var argumentsLength = function(...args) {
    const totalOfArguments = args.length;
    return totalOfArguments
};

// 2723. Add Two Promises

var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve and retrieve their values
    const [value1, value2] = await Promise.all([promise1, promise2]);
    
    // Return a new promise that resolves with the sum of the values
    return value1 + value2;
};