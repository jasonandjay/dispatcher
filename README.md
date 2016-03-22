# ReactJS组件通信分发器
-------
参考了flux的思路，组件间通信的简单实现，无论是父子，子父，兄弟，或者是没有共同祖先的组件间通信都可以通过dispatcher实现，`Dispatcher`是全局单例。

## API参考

* `Dispatcher.on(context, eventType, callback);` //绑定事件
* `Dispatcher.off(context, eventType, callback);` //解绑事件
* `Dispatcher.emit(eventType, data);` //广播事件

## 参数说明
* `context` Object 绑定事件的上下文，`callback`中的`this`。一般情况下是当前组件，调用时传递`this`即可  
* `eventType` String 自定义事件类型，字符串类型。
* `callback` function 事件触发时执行的回调函数，函数一般有两个参数：`data`和`eventType`
* `data` mixed 任意数据类型，作为回调函数的第一个参数
