let age = 21;

if (age < 6) {
    console.log("Free")
} else if (age > 5 && age < 18) {
    console.log("Child Discount")
} else if (age > 17 && age < 27) {
    console.log("Student Discount")
} else if (age > 26 && age <= 66) {
    console.log("Full Price")
} else (age > 66); {
    console.log("Senior Discount")
}