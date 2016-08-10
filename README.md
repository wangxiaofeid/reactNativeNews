# reactNativeNews

react-native项目
[中文文档](http://reactnative.cn/docs/0.31/getting-started.html)

## 问题

* [第三方组件库](https://js.coach/react-native#content)
* [An App ID with Identifier '' is not available. Please ente](http://blog.csdn.net/soindy/article/details/47184933)
* [react-native flex布局](http://www.tuicool.com/articles/a6Rjmi2)
* [能用到的样式](http://www.cnblogs.com/suxun/p/5222175.html)
* [真机测试](http://www.open-open.com/lib/view/open1456707122859.html)
* 0.31版本真机测试`localhost`改`ip`设置，跨域接口设置
```html
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
		<key>NSExceptionDomains</key>
		<dict>
			<key>10.57.2.255</key>
			<dict>
				<key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
				<true/>
			</dict>
		</dict>
	</dict>
```
