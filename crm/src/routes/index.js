export function route(app) {
    app.route('/contact')
    .get((req, res) => {
        res.send("GET request successful")
    })
    
    .post((req, res) => {
        res.send("POST request successful")
    })

    app.route('/contact/:contactId')
    .put((req, res) => {
        res.send("PUT request successful")
    })

    .delete((req, res) => {
        res.send("DELETE request successful")
    })
}