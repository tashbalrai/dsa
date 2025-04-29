process.stdout.write("\n-------------\nFibonnaci series using loop\n-------------\n");
function first_n_fib(n) {
    let a =0, b=1, i=0;
    process.stdout.write(`${a}, ${b}, `);
    while(i<n) {
        process.stdout.write(`${a+b},`);
        c=a+b;
        a=b;
        b=c;
        i++;
    }
}

first_n_fib(10);

process.stdout.write("\n-------------\nFibonnaci series using recursion\n-------------\n");
function first_n_fib_rec(n) {
    if (n <= 0) return n;
    if (n === 1) return n;

    return first_n_fib_rec(n-1) + first_n_fib_rec(n-2);
}

process.stdout.write("Fib: " + first_n_fib_rec(7));

process.stdout.write("\n-------------\nFibonnaci series using accumulator\n-------------\n");
function first_n_fib_acc(n, a=0, b=1) {
    if (n <= 0) return n;
    if (n === 1) return n;

    process.stdout.write(`${a}, `);
    return first_n_fib_acc(n-1, b, a+b);
}

first_n_fib_acc(7);