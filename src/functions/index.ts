import fs from 'fs';

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const fileExists = (path: string) => (file: string) =>
  fs.existsSync(`${path}/${file}`);

const writeToPath = (path: string) => (file: string, content: string) => {
  const filePath = `${path}/${file}`;

  fs.writeFile(filePath, content, (error) => {
    if (error) throw error;
    console.log(`File was created to ${filePath} 🥵`);
    return true;
  });
};


const createFiles = (path: string, moduleName: string) => {
  // Define files to create
  const files = {
    index: "index.ts"
  }

  if (moduleName ) {}
}
