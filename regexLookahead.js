let sampleWord = "astronaut";
let pwRegex = /(?=\w{3,}\d{2,})(?=\d*)/;
let result = pwRegex.test(sampleWord);

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
