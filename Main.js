const path = require('node:path');
const fs = require('node:fs/promises');
const directoryMaker = async () => {
    const pathFile = path.join(__dirname, 'baseFolder');
    await fs.mkdir(pathFile, { recursive: true });
    const stat = await fs.stat(path.join(process.cwd(), 'baseFolder'));
    if (stat.isDirectory()) {
        console.log(`${__dirname} Is a directory`);
    }else {
        console.log(`${__dirname} is not a directory`);
    }
    const dirs = ['oneDir','twoDir','threeDir','fourDir','fiveDir'];
    for (const dirName of dirs) {
        const dirPath = path.join(pathFile, dirName);
        await fs.mkdir(dirPath, { recursive: true });
        const directoryTrue = async (dirPath) => {
            const stat = await fs.stat(dirPath);
            if (stat.isDirectory()) {
                console.log(`${dirPath} Is a directory!`);
            } else {
                console.log(`${dirPath} Is not a directory!`);
            }
        };
        await directoryTrue(dirPath);
        const files = ['File1.txt', 'File2.txt', 'File3.txt', 'File4.txt', 'File5.txt'];
        for (const file of files) {
            const filePath = path.join(dirPath,file);
            await fs.writeFile(filePath, `${file}`);
            const fileTrue = async (filePath) => {
                const stat = await fs.stat(filePath);
                if (stat.isFile()) {
                    console.log(`${filePath} Is a file!`);
                } else {
                    console.log(`${filePath} Is not a file!`);
                }
            };
            await fileTrue(filePath);
        }
        }

}
void directoryMaker();