module.exports = (req, res) => {
    res.sendParse = (data) => {
        req.on('data', (chunk) => {
            data += chunk
        })
        req.on('end', () => {
            if (data) {
                req.body = JSON.parse(data)
            }
        })
    }
}
