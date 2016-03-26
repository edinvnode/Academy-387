/* # LEARN YOU THE NODE.JS FOR MUCH WIN!

## FILTERED LS (Exercise 5 of 13)

Create a program that prints a list of files in a given directory,
filtered by the extension of the files. You will be provided a directory
name as the first argument to your program (e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to
filter the list to only files that end with .txt. Note that the second
argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You
must use asynchronous I/O.*/

//koristimo fs modul

var fs = require('fs');

var path = require('path');

var filtered = [];

fs.readdir(process.argv[2], (err, list) => {
		if (err)
			throw err;
		console.log(list);

		for (var i = 0; i < list.length; i++) {
			if (path.extername(list[i] == "." + process.argv[3]) {

				filtered.push(list[i]);

			});
		}

	});
