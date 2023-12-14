import path from 'path';
import fs from 'fs';

export function getFileContent(filePath) {
  const absolutePath = path.join(process.cwd(), 'public', filePath);
  console.log(absolutePath);
  const fileContent =  fs.readFileSync(absolutePath, 'utf8');
  return fileContent;
};

export default async (req, res) => {
  const fileContents = getFileContent('json/data.json');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}
