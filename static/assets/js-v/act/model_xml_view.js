
//var httpurl = httpurlActiviti;

var modelId = '';
var versionId = '';
var modelType = '';
var fileName = ''
window.onload=function (){
    versionId = this.getUrlKey('id');	//流程版本ID
	modelId = this.getUrlKey('modelId');	//链接参数
    modelType = this.getUrlKey('modelType');	//链接参数
    fileName = this.getUrlKey('fileName');	//链接参数
	getCodeFromView();
}

window.onresize=function(){  
	cmainFrame();
};

if(ie_error()){
       $('#editor').hide();
}else{
    $('#editorBox').hide();
    ace.require("ace/ext/language_tools");
    var editor = ace.edit("editor");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/java");
}
// JS 获取getLocalStorage的值
function getLocalStorage(name)
{
    var val= localStorage.getItem(name);
    if(!!val)
        return val;
    else
    return null;
}

//获取code
function getCodeFromView(){
    //debugger
    let requestUrl =`/bserp/bpmn/actmodel/getXmlView`
    if(modelType=='version'){
        requestUrl =`/bserp/bpmn/procdef/getViewXml`
    }
    let token = getLocalStorage('token')
    if(fileName!=""){
        fileName = decodeURIComponent(fileName)// 解码码的具体内容
    }
	$.ajax({
		xhrFields: {
            withCredentials: true
        },
        headers: {
            "token":token //此处放置请求到的用户token
        },
		type: "POST",
		url: requestUrl,
    	data:JSON.stringify( {
            modelId,
            id:versionId,
            fileName
        }),
		dataType:'json',
        contentType: "application/json;charset=UTF-8",
		success: function(data){
            //debugger
			 if(data.success){
                $("#jiazai").hide();
                setCodeTxt(data.result);
			 }
		}
	}).done().fail(function(){
        swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
    });
}

//设置代码内容
function setCodeTxt(value){
    if(typeof(editor) == "undefined"){
        $('#editorBox').val(value);
    }else{
        editor.setValue(value,-1);
    } 
}

//根据url参数名称获取参数值
function getUrlKey (name) {
    return decodeURIComponent(
        (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function cmainFrame(){
	var hmain = document.getElementById("editor");
	var bheight = document.documentElement.clientHeight;
	hmain .style.width = '100%';
	hmain .style.height = (bheight) + 'px';
}

cmainFrame();