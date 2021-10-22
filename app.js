/*const name = require("./module-1");

const sayhi = (name) => {
  console.log(`Hey,I am ${name}`);
};

sayhi(name.name1);
sayhi(name.name2);
sayhi(name.name3);
const a = (name) =>
  setInterval(() => {
    console.log(`Your result is ready ${name}`);
  }, 1000);
a(name.name1);
*/

/*const os = require("os");

const info = os.userInfo();

console.log(info);
*/
//reading and writting in file synchroniously.

/*const { readFileSync, writeFileSync } = require("fs");
//for reading file

const first = readFileSync("./content/read-write.txt", "utf8");
const second = readFileSync("./content/read-write2.txt", "utf8");

//for writing in a file
writeFileSync(
  "./content/writeMe1.txt",
  `here are results fetched by our server : ${first}, ${second}`,
  { flag: "a" }
);
*/

//-------------Reading and writing file async;
/*
const { readFile, writeFile } = require("fs");

readFile("./content/read-write.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  readFile("./content/read-write2.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
  writeFile(
    "./content/async-write.txt",
    "i am done with  y task hero ",
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
});
*/
//----------creating first server
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello this is your home page ");
  }
  if (req.url == "/about") {
    res.end("we are working to get live please wait ");
  }
  res.end(`
  <h>Opps!!</h>
  <p>you are at wrong place </p>
  <a href="/"> go back on home page </a>
  `);
});

server.listen(5001);

console.log(`server is live at http://localhost:${5001}`);
