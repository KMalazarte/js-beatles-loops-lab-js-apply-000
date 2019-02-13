// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [];

for (let i = 0; i < musicians.length; i++) {
  empty.push(`${musicians[i]} plays ${instruments[i]}`);
}

return empty;
}

function johnLennonFacts(facts) {
  var Lennon = [];
  let i = 0;
  
   while (i < facts.length) {
   Lennon.push(`${facts[i]}!!!`);
   i++;
   }
   return Lennon;
}

function iLoveTheBeatles(number) {
  var Love = [];

do {
  Love.push("I love the Beatles!");
  number++;
} while (number < 15);
return Love;
}


