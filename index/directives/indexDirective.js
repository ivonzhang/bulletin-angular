/**
create by fa_zhang 2016-02-05
参看地址：http://blog.51yip.com/jsjquery/1607.html
***/

var indexPageDirectives = angular.module('indexPageDirectives', []);//创建指令模块indexPageDirectives 在app.js中的[]中引入使用

indexPageDirectives
.directive('bulletinItem',function(){//以大写字母为分割 指令替换为 <bulletin-item>
	return {
	    restrict: 'E',//A:属性<div my-directive=”exp”></div>、 E:元素标签<my-directive></my-directive>、 C:class属性<div class=”my-directive:exp;”></div>
	    templateUrl: 'index/directives/bulletin-item.html', //替换模板的路径
	    //template: '<div>123</div>', //templateUrl其实跟template功能是一样的，只不过templateUrl加载一个html文件，template里的是html文件的内容
	    replace: true, //是否在html中隐藏掉定义的指令标签
	    //controller: function($scope, $element){  }, //controller会在pre-linking步骤之前进行初始化，并允许其他directive通过指定名称的require进行共享（看下面的require属性）。这将允许directive之间相互沟通，增强相互之间的行为
	    link: function(scope, element, attrs, controllers) {//link函数 操作dom或调用controller
	    	
	    }
  	};
	
});