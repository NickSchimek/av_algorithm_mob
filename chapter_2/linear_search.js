function linear_search(array, value) {
    
    for (let i = 0; i < array.length; i = i+1) {

        if (array[i] === value) {
            return value;
        }
        else if (array[i] > value) {

            break;
        }

    }

    return null;

}
//1+ n+ 2n +1
//3n +2
// O(n) <- linear search

// O(log n) <- binary search

var orderedArrayOfNumbers = [1, 2, 4, 5, 6];
var unorderedArrayOfNumbers = [4, 7, 3, 6, 9, 8];

console.log(linear_search(unorderedArrayOfNumbers, 8));

//js or ruby
// def linear_search(array, value)
// # We iterate through every element in the array:
//   array.each do |element|

// # If we find the value we're looking for, we return it:
// if element == value
//   return value

// # If we reach an element that is greater than the value
// # we're looking for, we can exit the loop early:
// elsif element > value
//   break
// end
// end
// # We return nil if we do not find the value within the array:
// return nil
//end
