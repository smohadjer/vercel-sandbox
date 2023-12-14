import { getFileContent } from './../staticdata.js';

export default async (req, res) => {
    console.log(req.query.id)

    const json = getFileContent('json/data.json');
    const data = JSON.parse(json);
    const post = data.find(item => item.id === req.query.id);
    const markup = `<h1>Hello ${post.title}</h1>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(markup);
}
