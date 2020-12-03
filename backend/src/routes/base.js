module.exports = function(app, db) {
    app.get('/api', (req, res) => {

        res.json({str: 'Hello world'})
    })
}