const randomNumber = Math.random(); //Step 1//

const range = 33 - 3 + 1; //Step 2: This function resulting in a sum of 31 will give us the desired range of numbers for our secret shift value, between 3 and 33.//
//Question 1: We added 1 to the difference between 33 and 3 so that the range would include both endpoints, 3 and 33, thus resulting in 31 possible numbers where the numbers inside the range of 3 to 33 are inclusive.//

const randomInRange = randomNumber * range; //Step 3: This will result in a number that first within the desired range determined in Step 2.//
//Question 2: Multiplying randomNumber by range helps us gets a number within our desired range because the number will not be less than 0 nor will it be higher than the value of "range".

const randomInt = Math.floor(randomInRange); //Step 4: By including this decimal number converts to an integer for values between 0 and (range -1).//
//Question 3: Math.floor() always rounds down to the closest whole number, which fits between 0 and range-1. Math.round() can round a number up, the value of which could be so high as to fall outside of the range we're looking for.//

const shiftValue = randomInt + 3; //Step 5//
//Question 4: Adding 3 to randomInt ensures that our final shiftValue is between 3 and 33 because randomInt is a number that falls somewhere between 0 and range - 1 (resulting this time in 30), addition by 3 will shift the range by increasing it by 3, thus the numbers we get from this function will have an inclusive range between 3 and 33.//