/**
create by fa_zhang 2016-02-04
***/
var detailServices = angular.module("detailServices",[]);

detailServices
.factory('detailInfoService',function($http){//使用factory方法创建service对象 还有.value .constant等方法	
	var detailData = {
		userId: 3,
		_class_name: 'cn.firstsoft.firstframe.plugins.dyn.bulletin.service.BulletinService',
		_bulletin_detail: {},
		_user_info: {},
		serverUrl: '../../..' + '/plugins/dyn/dyn.do',
		hostUrl: '../../..',
		getBulletinDetail: function(method,args){
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
			    self._bulletin_detail = data.result.data;
			  }).
			  error(function(data, status) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    alert("请求失败");
			  });
		}
	};
	return detailData;
})
