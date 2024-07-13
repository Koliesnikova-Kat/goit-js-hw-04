function calcAverageCalories(days) {
    let total = 0;
    if (days.length === 0) {
        return 0;
    }
    for (const day of days) {
        total += day.calories;
    }
    return total / days.length;
}

console.log(
    calcAverageCalories([
        { day: "monday", calories: 3010 },
        { day: "tuesday", calories: 3200 },
        { day: "wednesday", calories: 3120 },
        { day: "thursday", calories: 2900 },
        { day: "friday", calories: 3450 },
        { day: "saturday", calories: 3280 },
        { day: "sunday", calories: 3300 }
    ])
); // 3180

console.log(
    calcAverageCalories([
        { day: "monday", calories: 2040 },
        { day: "tuesday", calories: 2270 },
        { day: "wednesday", calories: 2420 },
        { day: "thursday", calories: 1900 },
        { day: "friday", calories: 2370 },
        { day: "saturday", calories: 2280 },
        { day: "sunday", calories: 2610 }
    ])
); // 2270

console.log(calcAverageCalories([])); // 0