const env = process.env.NODE_ENV || process.argv.indexOf('--production') > -1 ? 'production' : '';

switch(env) {

    case "prod":
    case "production":
        module.exports = require('./config/webpack.prod')({env: 'production'});
        break;
    case "test":
    case "testing":
        module.exports = require('./config/webpack.test')({env: 'test'});
        break;

    default:
        module.exports = require('./config/webpack.dev')({env: 'development'});
}