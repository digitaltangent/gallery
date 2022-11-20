var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://aleeda:<password>@cluster0.4is5duk.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://aleeda:<password>@cluster0.4is5duk.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://aleeda:<password>@cluster0.4is5duk.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
