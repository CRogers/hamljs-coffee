haml = require('hamljs')
coffee = require('coffee-script')
print = require('sys').print;

coffeeCompile = function (code) {
  var result = coffee.compile(code, { bare: true });
  return result.substr(0, result.length - 1);
}

haml.templates.code = (function(){
  return "";
}).toString();

haml.filters.javascript = function(str) {
  return '<script type="text/javascript">\n//<![CDATA[\n' + coffeeCompile(str) + '\n//]]></script>'
};

haml.templates.codeBlock = (function(){
  var buf = [];
  coffeeCompile('__code__');
  buf.push(__block__);
  return buf.join("")
}).toString();

haml.Parser.prototype.__defineGetter__('outputCode', function () {
  return coffeeCompile(this.advance.val);
});

haml.Parser.prototype.__defineGetter__('escapeCode', function () {
  return 'escape(' + coffeeCompile(this.advance.val) + ')'
});

module.exports = haml;
