/**
create by fa_zhang 2016-02-04
***/
var indexServices = angular.module("indexServices",[]);

indexServices
.factory('authService',function($http){//使用factory方法创建service对象 还有.value .constant等方法	
	var authData = {
		userId: 3,
		_class_name: 'cn.firstsoft.firstframe.plugins.dyn.bulletin.service.BulletinService',
		_page_size: 20,
		_bulletin_info: {},
		_user_info: {},
		serverUrl: '../../..' + '/plugins/dyn/dyn.do',
		hostUrl: '../../..',
		initBulletins: function(method,args){
			var self = this;
			var url = this.serverUrl;
			var req = {
					method: 'ajax',
					className: this._class_name,
					methodName: method,
					params: angular.isArray(args) ? args.join(',') : args
			};
			
			$http.post(url, req).
			  success(function(data, status) {
			    // this callback will be called asynchronously
			    // when the response is available
			    //alert(data)
			    self._bulletin_info = data.result;
			  }).
			  error(function(data, status) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    alert("请求失败")
			  });
		}
	};
	return authData;
})
.factory('goDetailService',function($window,authService){
	return {
		goDetail: function(id){
			//alert(id);
			$window.location.href = authService.hostUrl + '/plugins/dyn/angularjsTest/bulletins_detail.jsp?bulletin=' + id;
		}
	}
})