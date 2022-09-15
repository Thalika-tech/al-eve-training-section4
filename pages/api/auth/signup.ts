import { NextApiRequest, NextApiResponse } from "next";
import { EMAIL, PASSWORD } from "constant/validations";
import { connectToUsers } from "utils/dbEmulator";
import { hashPassword } from "utils/encryption";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    //Your response is not meant to be in here its ment to be under Question 7.2 :)

    //Q7.2.1 - 2/2
    const email = req.body.email;
    const password = req.body.password;

    if (!EMAIL(email)) {
      res.status(422).json({ message: "Invalid Email" });
      return;
    }

    if (!PASSWORD(password)) {
      res.status(422).json({ message: "Invalid Password" });
    }

    //Q7.2.2 - 3/4 you did not open a connection
    const client = await connectToUsers();
    const connenction = client?.db();


    //Q7.2.3 & Q7.2.4 - 3/3 + 2/2
    if (connenction?.findOne(email)) {
      res.status(409).json({ message: "User already exists" });
    } else {
      const hashPass = await hashPassword(password);
      connenction?.insertOne({ email: email, password: hashPass });
    }

    connenction?.close();

    return;
  }

  // Question 7.2
}

export default handler;

/**
 * @EMAIL & @PASSWORD
 * Validation functions that returns ture if value is valid
 * @param {string} value - The value of the input field
 * @returns  {boolean}
 */

/**
 * @connectToUsers
 * It returns an object with a function that returns a new instance of the dbEmulator class.
 * @returns An object with a function called @db that returns a new instance of the @dbEmulator class.
 */

/**
 * @dbEmulator class
 * It's a class that emulates a database, it has a private array of users, and it has methods to add
 * users, get all users, and find a user by email.
 * Methods:
 * @insertOne : a @function that takes an object of { type=string ,password type=string} and adds the user to the database.
 * @findOne : a @function that takes a string and @returns an object of {email type=string ,password type=string} and @returns null if no user is found
 * @open : a @function that emulates opening a connection to the db. This is required to read and write data.
 * @close : a @function that emulates closing a connection to the db is required for syncing data.
 */

/**
 * @hashPassword
 * It takes a password, hashes it, and returns the hashed password.
 * @param {string} password - The password to hash
 * @returns {string} The password is being hashed and returned.
 */
