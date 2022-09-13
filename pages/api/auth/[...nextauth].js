import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { connectToUsers } from "../../../utils/dbEmulator";
import { compareHashed } from "../../../utils/encryption";

let credentialsProvider = Credentials({
  async authorize({ email, password }) {
    // Question 7.3
    const userFound = connectToUsers.findOne(email);
    if (userFound === null) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const hashPass = compareHashed(password);

    if (userFound.password !== hashPass) {
      return res.status(401).json({ message: "Password is incorrect" });
    } else {
      return { email: userFound.email };
    }
  },
});

export default NextAuth({
  session: { jwt: true },
  providers: [credentialsProvider],
});

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
