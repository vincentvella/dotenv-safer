var envOptions = [
    // from dotenv
    ['DOTENV_CONFIG_ENCODING', 'encoding'],
    ['DOTENV_CONFIG_PATH', 'path'],
    ['DOTENV_CONFIG_DEBUG', 'debug'],
    ['DOTENV_CONFIG_OVERRIDE', 'override'],
    // added for dotenv-safer
    ['DOTENV_CONFIG_EXAMPLE', 'example'],
    ['DOTENV_CONFIG_ALLOW_EMPTY_VALUES', 'allowEmptyValues']
];

(function () {
    var options = {};
    envOptions.forEach(function (pair) {
        if (process.env[pair[0]] != null) {
            options[pair[1]] = process.env[pair[0]];
        }
    });
    process.argv.forEach(function (val) {
        var matches = val.match(/^dotenv_config_(.+)=(.+)/);
        if (matches) {
            options[matches[1]] = matches[2];
        }
    });
    require('.').config(options);
})();
