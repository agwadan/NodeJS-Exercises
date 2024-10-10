import crypto from "crypto";

const hash = crypto.createHash("sha256");
let password = "password123";
hash.update(password);

console.log("====================================");
console.log(password);
console.log(hash.digest("hex"));
console.log("====================================");

//==== Generating random bytes
crypto.randomBytes(5, (err, buf) => {
  if (err) throw err;
  console.log("====================================");
  console.log(buf.toString("hex"));
  console.log("====================================");
});
