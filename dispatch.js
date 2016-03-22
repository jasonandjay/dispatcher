;(function (global, factory) {
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory(global);
	} else {
		factory(global);
	}
})(typeof window !== "undefined" ? window : this, function (window) {

	var Dispatcher = {
		store: {},
		/**
		 * 获取事件在列表中的位置
		 * @param context
		 * @param callback
		 * @private
		 */
		_evIndex: function (context, callback) {
			var index = -1;
			for (var i = 0; i <= event.length; i++) {
				if (event[i].context === contex && event[i].callback === callback) {
					index = i;
					break;
				}
			}
			return index;
		},
		/**
		 * 绑定事件
		 * @param eventType string 事件类型
		 * @param context Object callback的this作用域
		 * @param callback
		 */
		on: function (context, eventType, callback) {
			if(typeof eventType != 'string' || typeof callback != 'function'){
				return ;
			}
			var event = this.store[eventType];
			var eventObj = {
				context: context,
				callback: callback
			};
			if (!event || !Array.isArray(event)) {
				event = [eventObj];
			} else if (this._evIndex(context, callback) < 0) {
				event.push(eventObj);
			}
		},
		/**
		 * 解绑事件
		 * @param eventType string
		 * @param callback 回调
		 */
		off: function (context, eventType, callback) {
			if(typeof eventType != 'string' || typeof callback != 'function'){
				return ;
			}
			var event = this.store[eventType];
			var eventObj = {
				context: context,
				callback: callback
			};
			if (event && Array.isArray(event)) {
				var index = this._evIndex(context, callback);
				if (index >= 0) {
					event.splice(index, 1);
				}
			}
		},
		/**
		 * 广播某个事件
		 * @param eventType 时间类型
		 * @param data 数据
		 */
		emit: function (eventType, data) {
			if(typeof eventType != 'string'){
				return ;
			}
			var event = this.store[eventType];
			if (event && Array.isArray(event)) {
				for (var i = 0; i < event.length; i++) {
					event.callback.call(context, data, eventType);
				}
			}
		}
	};

	return window.Dispatcher = Dispatcher;
});
