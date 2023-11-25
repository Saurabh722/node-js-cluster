function fibonacci( num ) {
    if ( num < 1 ) {
        return 0
    }

    if ( num < 3) {
        return 1;
    }

    return fibonacci( num - 1 ) + fibonacci( num - 2 );
};

function initFib(num) {
    const start = Date.now();
    const result = fibonacci(num);
    const delay = Date.now() - start;
    return `<h1>${ result } - time taken: ${delay/1000} seconds</h1>`;
}

module.exports = initFib;
