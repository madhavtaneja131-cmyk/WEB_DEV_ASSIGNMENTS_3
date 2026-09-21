const fs = require("fs");

fs.writeFile("test.txt", "Hello Node.js", (err) => {
    if(err) console.log(err);
    else console.log("File Created");

    fs.readFile("test.txt", "utf-8", (err, data) => {
        if(err) console.log(err);
        else console.log("Reading File:", data);

        fs.appendFile("test.txt", "\nLearning FS Module", (err) => {
            if(err) console.log(err);
            else console.log("File Updated");

            fs.unlink("test.txt", (err) => {
                if(err) console.log(err);
                else console.log("File Deleted");
            });
        });
    });
});