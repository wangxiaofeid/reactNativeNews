# reactNativeNews

react-native项目
[中文文档](http://reactnative.cn/docs/0.31/getting-started.html)

## 问题

* [第三方组件库](https://js.coach/react-native#content)
* [react-native flex布局](http://www.tuicool.com/articles/a6Rjmi2)
* [能用到的样式](http://www.cnblogs.com/suxun/p/5222175.html)
* [真机测试](http://www.open-open.com/lib/view/open1456707122859.html)
* 0.31版本真机测试`localhost`改`ip`设置，跨域接口设置

```
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

##内部结构

```
redux --> Navigator(主层级) -->  weblcome 
							-->  一级页(TabBarIOS) -->  其他一级
										          --> 新闻 -->  Natigator 
			--> news
			--> 新闻详情

``` 
* [An App ID with Identifier '' is not available. Please ente](http://blog.csdn.net/soindy/article/details/47184933)
* [react-native-maps ExceptionsManager.js:76 Warning: Native component for "AIRMapMarker" does not exist](https://github.com/lelandrichardson/react-native-maps/blob/master/docs/installation.md#android)[rnpm](http://reactnative.cn/docs/0.31/linking-libraries-ios.html#content)
