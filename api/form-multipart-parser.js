import multiparty from 'multiparty';
import util from 'util';

export default (req, res) => {
    if (req.method === "POST") {
        let form = new multiparty.Form();
        form.parse(req, (err, fields, files) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('received upload: \n\n');
            const path = files.upload[0].path
            //console.log(files);
            console.log(files.upload[0].path);

            //res.write('<img src="' + path + '" />');
            res.end(util.inspect({ fields: fields, files: files }));
        });
        return;
    } else {
        res.end("Send a POST request.");
        return;
    }
}
