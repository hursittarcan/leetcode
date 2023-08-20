createCounter = function(init) {
    let num = init;
    return {
        increment: () => num = num + 1,
        reset: () => num = init,
        decrement: () => num = num - 1
    };
};