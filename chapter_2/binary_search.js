function binary_search(array, value) {

	let lower_bound = 0;
	let upper_bound = array.length - 1;
	let times_run = 0;

	while (lower_bound <= upper_bound) {
		times_run++;
		var midpoint = Math.floor(upper_bound + lower_bound / 2);
		console.log(midpoint);
		var value_at_midpoint = array[midpoint];

		if (value < value_at_midpoint) {
			upper_bound = midpoint - 1;

		}
		else if (value > value_at_midpoint) {
			lower_bound = midpoint + 1;

		}
		else if (value === value_at_midpoint) {
			return midpoint;
		}

	
	}
	console.log("times_run: ",times_run);
	return null;
}

// var time1 = performance.now();
var orderedArrayOfNumbers = [1, 2, 4, 5, 6];
var unorderedArrayOfNumbers = [4, 7, 3, 6, 9, 8];

console.log(binary_search([1, 2, 4, 5, 6], 8));
// var time2 = performance.now();
console.log(`Time to run: $(time2 - time1/1000) seconds`)

// def binary_search(array, value)
// # First, we establish the lower and upper bounds of where the value
// # we're searching for can be. To start, the lower bound is the first
// # value in the array, while the upper bound is the last value:
// lower_bound = 0
// upper_bound = array.length - 1
// # We begin a loop in which we keep inspecting the middlemost value
// # between the upper and lower bounds:
// while lower_bound <= upper_bound do
// # We find the midpoint between the upper and lower bounds:
// # (We don't have to worry about the result being a non-integer
// # since in Ruby, the result of division of integers will always
// # be rounded down to the nearest integer.)
// midpoint = (upper_bound + lower_bound) / 2
// # We inspect the value at the midpoint:
// value_at_midpoint = array[midpoint]
// # If the value at the midpoint is the one we're looking for, we're done.
// # If not, we change the lower or upper bound based on whether we need
// # to guess higher or lower:
// if value < value_at_midpoint
// upper_bound = midpoint - 1
// elsif value > value_at_midpoint
// lower_bound = midpoint + 1
// elsif value == value_at_midpoint
// return midpoint
// end
// end
// # If we've narrowed the bounds until they've reached each other, that
// # means that the value we're searching for is not contained within
// # this array:
// return nil
// end
