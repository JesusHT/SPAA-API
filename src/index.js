const app = require('./app');

app.listen(app.get('port'), () => {
    console.info("Server listening on PORT:", app.get("port"));
});