// Strings: Basically just friendship bracelets of characters.
let someVariable = "This is a variable.";
const someConst = "This value can't be changed ever.";

let someString = "Strings come in a number of types.";
let someOtherString = "Strings can use either single or double quotes.";
let someStrLiteral = `String literals can have any non-backtick character in them.
Including break returns (newline characters)
And other "type" of 'quotemarks.'`;

// You can even use emoji in HTML and JS:
let blackCat = "🐈‍⬛";
let catEmoticon = `╱|、
(˚ˎ 。7
|、˜〵
じしˍ,)ノ`;

let someStrFormatingLit = `You can interpolate string literals with:
${"${}"} a dollar sign followed by squiggly braces.

Anything in the curly braces is interpreted as JS, like so:

${blackCat}

${catEmoticon}
`;

/**
 * This is a block comment, which is way
 * to denote a larger comment.
 *
 * Used before a function, it becomes a JSDoc.
 * (I'll demonstrate that on Wednesday.)
 */

// Numbers - Notably *not* text.
let someNumber = 90210;
let someInteger = 1123581321;
let someFloat = 1123581321.5;
let someNaN = NaN;

// Booleans - The answer to all yes or no questions.
let someBool = true;
let theOtherBool = !someBool;

let someConditional = "is this string" === "this other string?";

// Nullish values - How do you represent nothing?
let someNull = null;
let someUndefined = undefined;
let someUninitializeVariable; // This is undefined.

/**
 * Truthiness:
 *
 * JS only has 6 falsy values (for now)!
 * (Everything else is truthy!)
 */

let falsy0 = null;
let falsy1 = undefined;
let falsy2 = false;
let falsy3 = NaN;
let falsy4 = 0;
let falsy5 = "";

// Objects - A way to represent things.
let someObj = {
  // key: value pairs separated by commas
  a: "Some random value.",
  b: 3.1415,
  c: null,
};

let book = {
  title: "A Conventional Boy",
  author: "Charles Stross",
  pages: 211,
  year_published: 2024,
};

let bookTalk = `We can access properties with dot notation!
so book.title will output "${book.title}"`;

// Arrays - A way to represent sets/groups of things.
let someArr = [
  "The Laundry Files", // someArr[0]
  "The Dresden Files", // someArr[1]
  "Rivers of London", // someArr[2]
  "The Culture", // someArr[3]
];

let laundryFiles = [
  {
    title: "A Conventional Boy",
    author: "Charles Stross",
    pages: 211,
    year_published: 2024,
  },
  {
    title: "Dead Not Dreaming",
    author: "Charles Stross",
    pages: 211,
    year_published: 2022,
  },
  {
    title: "The Fuller Memorandum",
    author: "Charles Stross",
    pages: 211,
    year_published: 2015,
  },
];
