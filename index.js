const asciify = require('asciify-image')

module.exports = async (req, res) => {
  if (!req.query.username) {
    return res.status(400).send('missing username')
  }

  const avatarUrl = `https://github.com/${req.query.username}.png`

  const opts = { fit: 'box', width: 40, height: 40 }
  const asciified = await asciify(avatarUrl, opts)

  return res.status(200).send(asciified)
}
