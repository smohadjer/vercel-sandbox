export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('blahblah');
    console.log(req.body);
    return res.send(`Hello ${req.body.username}! (request body)`);
  } else {
    res.writeHead(405, { 'content-type': 'text/plain' });
    res.end("Method not allowed. Send a POST request.");
    return;
  }
}
