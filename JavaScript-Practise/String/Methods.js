// charAt

let str3 = "Hello World"

console.log( str3.charAt( str.length-1 ) );


// charCodeAt

let str1 = "JAvscript"

console.log( str1.charCodeAt(5) );

// concat

let newStr3 = str.concat(" ",str1)

console.log( newStr3 );


// includes
let str2 = "Single Threaded"

// console.log( str2.includes("i",1) );
console.log( str2.includes("j") );

// indexOf

let newStr2 = "Kesavan"

console.log( newStr2.indexOf("a", 4) );


// lastIndexOf

let newStr4 = "Kesavan"

console.log( newStr4.lastIndexOf("a", 5) );

// repeat

let newStr = "Javascript"

console.log( newStr.repeat(3) );

// replace / replaceAll

let str = "Js is a Script lang - Js"

console.log( str.replace("Js", "Javascript") );
console.log( str.replaceAll("Js", "Javascript") );

// slice

let newSt = "Single Thread"

console.log(  newSt.slice(3) );
console.log(  newSt.slice(3,8) );
console.log( newSt.slice(-3) );
console.log(  newSt.slice(-3,-1) ); // ( -3, -2 )

// substring & substr

let newStr1 = "Single Thread"

console.log( newStr1.substring(3) );
console.log( newStr1.substring(3,8) );
console.log( newStr1.substring(-3) );
console.log( newStr1.substring( 8,0  ) );

// Split

let word = "My Name is Iron-Man"

console.log( word.split(" " ) );
console.log( word.split(" ", 3 ) );
console.log( word.split("-") );
console.log( word.split("-", 1) );

// startsWith

let words = "  My Name is Iron-Man  "
console.log( words.startsWith("M") );
console.log( words.startsWith("N", 3) );
console.log( words.startsWith("N", 4) );
console.log( words.startsWith("Name", 3) );

// endsWith

console.log( words.endsWith( "n", words.length ) );
console.log( words.endsWith( "Iron",  15 ) );

// toLowerCase

console.log( words.toLowerCase() );

// toUpperCase
console.log( words.toUpperCase() );

// trim

console.log( words.trim()  );

// trimStart / trimLeft

console.log( words.trimLeft() );
console.log( words.trimStart() );

// trimEnd / trimRight

console.log( words.trimRight() );
console.log( words.trimEnd() );