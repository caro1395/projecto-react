import { config } from "dotenv";
config();
export default{
//PORT: process.env.PORT || 4000,
dbUser: process.env.DB_USER || "",
bdPassword: process.env.DB_PASSWORD || "",
dbServer: process.env.DB_SERVER || "",
dbDatabase: process.env.DB_DATABASE || ""
}
//export const PORT = 4000;
