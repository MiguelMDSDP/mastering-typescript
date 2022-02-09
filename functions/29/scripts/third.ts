function calculateRevenue(...months: number[]): number {
    return months.reduce((totalRevenue, month) => totalRevenue + month, 0);
}

console.log(calculateRevenue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));