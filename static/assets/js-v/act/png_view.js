
//var httpurl = httpurlActiviti;

var vm = new Vue({
	el: '#app',
	
	data:{
		DEPLOYMENT_ID_: '',	//部署ID
		FILENAME: '',		//图片名称
		imgSrc: ''			//图片地址 base64格式
    },
    
    methods: {
    	//初始执行
        init() {
        	this.DEPLOYMENT_ID_ = this.getUrlKey('depId');	//链接参数
        	this.FILENAME = this.getUrlKey('fileName');				//链接参数
        	this.getdata();
        },
		// JS 获取getLocalStorage的值
		getLocalStorage(name)
		{
			var val= localStorage.getItem(name);
			if(!!val)
				return val;
			else
			return null;
		},
        //获取数据
        getdata: function (){
			let token = this.getLocalStorage('token')
			if(this.FILENAME!=""){
				this.FILENAME = decodeURIComponent(this.FILENAME)// 解码码的具体内容
			}
        	$.ajax({
        		xhrFields: {
                    withCredentials: true
                },
				headers: {
					"token":token //此处放置请求到的用户token
				},
        		type: "POST",
        		url: '/bserp/bpmn/procdef/getViewPng',
            	data: JSON.stringify({depId:this.DEPLOYMENT_ID_,fileName:this.FILENAME}),
        		dataType:'json',
				contentType: "application/json;charset=UTF-8",
        		success: function(data){
					//debugger
        			if(data.success){
        			  $("#jiazai").hide();
        			 	vm.imgSrc = data.result.imgSrc;
        			 }
        		}
        	}).done().fail(function(){
                swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
            });
        },
        
    	//根据url参数名称获取参数值
        getUrlKey: function (name) {
            return decodeURIComponent(
                (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
        }
        
    },

	mounted(){
	    this.init();
	}
})