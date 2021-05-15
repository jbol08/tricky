function curriedAdd(total) {
    //add all numbers passed in
    //if nothing passed in then return 0
    if (total === undefined || total === null) return 0;
    //return a function that adds numbers together
    return function addNums(nums) {
        if (nums === undefined || nums === null) return total;
        total = total + nums;
        return addNums;
    };
}

module.exports = { curriedAdd };
