const text1 = 'Hello ';
const text2 = 'World!';

const temp = [];
for (let i = 0; i < text1.length; i++) temp.push(text1[i]);
for (let i = 0; i < text2.length; i++) temp.push(text2[i]);
console.log(temp.join(''));
