var myth = require('myth');

hexo.extend.renderer.register('css', 'css', function(data, options) {
	return myth(data.text);
}, true);