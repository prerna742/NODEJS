// var oneLinerJoke = require('one-liner-joke');


// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke)


// var getRandomJoke = oneLinerJoke.getRandomJoke({
//     'exclude_tags': ['dirty', 'racist', 'marriage']
//   });
// console.log(getRandomJoke)




// var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
// console.log(getRandomJokeWithTag)


// var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
//   'exclude_tags': ['dirty', 'racist', 'marriage']

// })






// console.log("welcome");
// console.log("Helloworld");





// var a = require('one-liner-joke');
// var b = a.getRandomJoke();
// console.log(b)
// var c = require('./prerna');
// console.log(c)








// var os = require('os');
// console.log("Plateform:" + os.platform());
// console.log("Architecture:" + os.arch());







var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end(); 
}).listen(8080);