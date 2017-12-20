var loaderUtils = require('loader-utils');

module.exports = function (source, map) {
    if (this.cacheable) this.cacheable();

    var config = {
        remBase: 20, // 默认rem基数 1rem = 20rpx 
        useRem: true, // true:使用rem  false:使用px 1px = 1rpx
    };
    var params = loaderUtils.parseQuery(this.query);
    if (params.remBase) config.remBase = parseInt(params.remBase, 10) || config.remBase;
    if (params.useRem === false) config.useRem = false;

    source = source.replace(/\:\s*([-\d\.]+)rpx/gi, function (a, b) {

        if (!config.useRem) return ': ' + b + 'px';

        b = parseFloat(b) / config.remBase;
        return ': ' + b + 'rem';
    });

    this.callback(null, source, map);
};