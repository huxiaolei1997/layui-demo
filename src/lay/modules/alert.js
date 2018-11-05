layui.define(['layer'], function(exports) {

	exports('alert', function(msg) {
		var layer = layui.layer;
		layer.msg(msg);
	});
});