import multiparty from 'multiparty';
import util from 'util';
import fs from 'fs';
import { Octokit, App } from "octokit";
import dotenv from 'dotenv';

dotenv.config();

const octokit = new Octokit({
  auth: process.env.Token
});

export default async (req, res) => {
    if (req.method === "POST") {
        let form = new multiparty.Form();
        form.parse(req, async (err, fields, files) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(`<p>Hello ${fields.username},</p>`);

            let html = '';

            for (const file of files.upload) {
                //console.log(file);

                if (file.size > 10000000) {
                    res.end('file is too big');
                    return;
                }

                const source = fs.readFileSync(file.path);
                const sourceBase64 = source.toString('base64');

                const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
                    owner: 'smohadjer',
                    repo: 's3',
                    path: file.originalFilename,
                    message: 'a new commit message',
                    committer: {
                      name: 'Monalisa Octocat',
                      email: 'octocat@github.com'
                    },
                    content: sourceBase64,
                    headers: {
                      'X-GitHub-Api-Version': '2022-11-28'
                    }
                });

                console.log(response.status);
                console.log(file.originalFilename + ' was uploaded');

                html += '<p><img src="https://raw.githubusercontent.com/smohadjer/s3/master/' + file.originalFilename + '" /></p>';
            }

            res.write('<p>Your files are now stored in this <a href="https://github.com/smohadjer/s3/tree/master">GitHub repository</a>:</p>');

            res.write(html);
            //res.write('received upload: \n\n');
            //res.end(util.inspect({ fields: fields, files: files }));
            res.end();
        });
        return;
    } else {
        res.end("Send a POST request.");
        return;
    }
}
