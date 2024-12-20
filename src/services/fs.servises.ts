import fs from "node:fs/promises";
import path from "node:path";

import { IUser } from "../interfaces/user.interface";

const userPath = path.resolve(process.cwd(), "db", "users.json");
const read = async (): Promise<IUser[]> => {
  try {
    const json = await fs.readFile(userPath, "utf8");
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error(e.message);
  }
};
const write = async (users: IUser[]): Promise<void> => {
  try {
    await fs.writeFile(userPath, JSON.stringify(users));
  } catch (e) {
    console.error(e.message);
  }
};
export { read, write };
