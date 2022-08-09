function firstLetterCapital(words) {
    let str = words.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
       str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    }
    return str.join(' ');
 }
 console.log(firstLetterCapital("india is my country."));