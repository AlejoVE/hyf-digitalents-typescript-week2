function sumOfMultiple(numA: number, numB: number, limit: number): number {
    const arr: number[]= [];
    // Your code goes here
    for (let i:number = 1; i < limit; i++) {
        if(i % numA === 0 || i % numB === 0) {
            arr.push(i)
        }
    }

    return arr.reduce((a, b) => a + b);

}

const sum = sumOfMultiple(3, 5, 10)

console.log(sum)

module.exports = sumOfMultiple;