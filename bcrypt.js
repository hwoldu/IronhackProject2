const bcrypt = require("bcrypt");

const encryptedEmpty = bcrypt.hashSync("", 10);
console.log(encryptedEmpty);