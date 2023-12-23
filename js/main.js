

var btn = document.getElementById('btn');
var quoteOutput = document.getElementById('quoteOutput');
 var authorOutput = document.getElementById('authorOutput');

var quotes = [
  '“Be yourself; everyone else is already taken.”',
  '“So many books, so little time.”',
  '“A room without books is like a body without a soul.”',
  '“You know you re in love when you cant fall asleep because reality is finally better than your dreams.”',
  '“You only live once, but if you do it right, once is enough.”'
];
var quotes2 =[
    'Oscar Wilde',
    'Frank Zappa',
    'Marcus Tullius Cicero',
    ' Dr. Seuss',
    ' Mae West',
];



btn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteOutput.innerText = randomQuote; // استخدم innerText لتحديد نص العنصر
});


btn.addEventListener('click', function(){
  var randomQuote = quotes2[Math.floor(Math.random() * quotes2.length)];
  authorOutput.innerText = randomQuote; // استخدم innerText لتحديد نص العنصر
});
