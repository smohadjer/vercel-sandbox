export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('testing');
    console.log(req.body);
    return res.send(`Hello ${req.body.username}!`);
  } else {
    res.writeHead(405, { 'content-type': 'text/plain' });
    res.end("Method not allowed. Send a POST request.");
    return;
  }

  /*
  const contentType = req.get('Content-Type');
  console.log(contentType);
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
  */
}
