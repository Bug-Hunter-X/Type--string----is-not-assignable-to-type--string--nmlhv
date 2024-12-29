function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Array destructuring
console.log(greeter(user[0])); // Access the first element of the array

// Solution 2: Looping through the array
for (const name of user) {
  console.log(greeter(name));
}

// Solution 3: Type assertion (use with caution)
console.log(greeter(user.join(' ') as string)); // Join array elements into a single string
// Note: This assumes that the array elements are always strings, otherwise a runtime error is still possible