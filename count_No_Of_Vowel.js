const vowels = str => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;

console.log(vowels('The quick brown fox')); 
