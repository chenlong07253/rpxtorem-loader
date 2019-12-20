var loaderUtils = require('loader-utils');

module.exports = function (source, map) {
    if (this.cacheable) this.cacheable();

    var config = {
        remBase: 20, // 默认rem基数 1rem = 20rpx 
        useRem: true, // true:使用rem  false:使用px 1px = 1rpx
    };
    var params = {}
    try {
      if (loaderUtils.getOptions) params = loaderUtils.getOptions(this) || {}
      else if (loaderUtils.parseQuery) params = loaderUtils.parseQuery(this.query) || {}
    } catch (error) { }
    if (params.remBase) config.remBase = parseInt(params.remBase, 10) || config.remBase;
    if (params.useRem === false) config.useRem = false;

    source = source.replace(/([:\s\(]\s*)([-\d\.\s]+)rpx/gi, function (a, b, c) {

        if (!config.useRem) return b + c + 'px';

        c = parseFloat(c) / config.remBase || 0;
        return b + c + 'rem';
    });

    this.callback(null, source, map);
};