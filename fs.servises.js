const fs = require('node:fs/promises');
const path = require('node:path');
const userPath = path.resolve(__dirname, 'db','users.json');
module.exports = {
    read: async () => {
        try{
            const json = await fs.readFile(userPath, 'utf8');
            return json ? JSON.parse(json) : [];
        }catch (e){
            console.error(e.message);
        }
    },
    write: async (users) => {
        try{
           await fs.writeFile(userPath, JSON.stringify(users));
        }catch (e){
            console.error(e.message);
        }
    }
}