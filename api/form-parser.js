export default function handler(req, res) {
  if (req.body) {
    return res.send(`Hello ${req.body.username}!`);
  } else {
    return res.send(`Hello ${req.query.username}!`);
  }
}
