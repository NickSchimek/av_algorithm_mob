// Sets
    // insertion add()
    // searching has()
    // deletion delete()
    // reading
let read_from_set = (array, index) => {
    return array[index];
}

let my_christmas_list = new Set();

my_christmas_list.add("Puppy");
my_christmas_list.add("Puppy"); //Nick you already have a Puppy.
my_christmas_list.add("Nick's new puppy");
my_christmas_list.has("Nick's new puppy");
// console.log(my_christmas_list.has("Nick's new puppy"));
my_christmas_list.delete("Nick's new puppy");

let my_new_christmas_list = new Array();

add_to_set("new car", my_new_christmas_list);
add_to_set("new car", my_new_christmas_list);
add_to_set("other car", my_new_christmas_list);
let my_most_desired_gift = read_from_set(my_new_christmas_list, 0);
console.log(delete_from_set("new car", my_new_christmas_list));
let my_priority = search_set("new car", my_new_christmas_list);
 console.log(my_priority);
 console.log(my_new_christmas_list);

function add_to_set(value, array) {
    if (!array.includes(value)) {
        return array.push(value);
    }
}

function delete_from_set(value, array) {
    let pos = array.indexOf(value);
    if (pos) {
        array = array.splice(pos, 1);
        return array;
    }
}

function search_set(value, array) {
    return array.indexOf(value);
}
// console.log(my_christmas_list.has("Nick's new puppy"));