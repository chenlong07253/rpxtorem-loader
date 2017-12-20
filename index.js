var loaderUtils = require('loader-utils');

module.exports = function (source, map) {
    if (this.cacheable) this.cacheable();

    var config = {
        rem: 20, // 默认 1rem = 20rpx
        useRem: true, // true:使用rem  false:使用px 1px = 1rpx
    };
    var params = loaderUtils.parseQuery(this.query);
    if (params.rem) config.rem = parseInt(params.rem, 10) || config.rem;
    if (params.useRem === false) config.useRem = false;

    source = source.replace(/\:\s*([-\d\.]+)rpx/gi, function (a, b) {
        if (!params.useRem) return ': ' + b + 'px';

        b = parseFloat(b) / config.rem;
        return ': ' + b + 'rem';
    });

    this.callback(null, source, map);
};