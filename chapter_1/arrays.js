// Arrays and Sets
    // insertion
    // searching
    // deletion
    // reading

let halloween_costumes = ["zombies", "ex-presidents", "frankenstein", "Mary Poppins", "PowerRanger", "Teenage Mutant Ninja Turtle"] //6 elements in the original

// halloween_costumes.unshift("Leo");
halloween_costumes.push("Teenage Mutant Ninja Turtle");
halloween_costumes.splice(2,0,"Raphael");

//searching
let costume = "PowerRanger";
// let result = `No ${costume} found`;
for (let i = 0; i < halloween_costumes.length; i++) {
    if (halloween_costumes[i] == costume) {
        console.log(`found ${costume}`);
        break;
    } else
        console.log(`Your halloween costume of ${costume} was not found`);
}
// console.log(result);
//console.log(halloween_costumes);
