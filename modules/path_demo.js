import path from "path";
import url from "url";

// Test path: doesn't actually exist
const filePath = "./root/src/index.js";

//==== base name
console.log(path.basename(filePath));

//==== Directory name
console.log(path.dirname(filePath));

//==== File extension
console.log(path.extname(filePath));

//==== Path object
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("====================================");
console.log(__dirname);
console.log("====================================");

//=== Join
const filePath2 = path.join(__dirname, "root", "src", "server.js");
console.log(filePath2);
