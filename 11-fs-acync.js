const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
  }

  const first = result;

  readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
    }

    const second = result;

    writeFile(
      './content/result-async.txt',
      `WRITE+READ: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  });
});
