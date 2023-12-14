import path from 'path';
import fs from 'fs';

export function getFileContent(filename) {
  const absolutePath = path.join(process.cwd(), 'public', 'json', filename);
  const fileContent =  fs.readFileSync(absolutePath, 'utf8');
  return fileContent;
};

export default async (req, res) => {
  const fileContents = getFileContent('data.json');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}
