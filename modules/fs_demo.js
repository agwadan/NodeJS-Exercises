import fs from "fs/promises";

//==== Reading from a file =====
fs.readFile("./reference/hello.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//==== Reading from file (async await) =====
const readFromFile = async () => {
  try {
    const data = await fs.readFile("./reference/hello.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

//===== Write to file =====
const writeToFile = async () => {
  try {
    await fs.writeFile("./reference/hello.txt", "All the time");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

//==== Append file =====
const appendToFile = async () => {
  try {
    await fs.appendFile("./reference/hello.txt", "\nGod is Good");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

writeToFile();
readFromFile();
appendToFile();
