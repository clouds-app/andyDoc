(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-080c0e9e"],{a9cc:function(t,e,o){},b3e7:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bodyContentBox"},[o("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[o("bodyContentDownItem",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[o("nvxe-grid",{ref:"mainTable",attrs:{isMainTable:!0,operationColumnShow:!0,loading:t.listLoading,height:t.windowOffsetHeight,columnsFormName:t.requstConfig.mainFormName,dataUrl:t.requstConfig.modulePreUrl+"/"+t.mainPageSearchType},scopedSlots:t._u([{key:"operate",fn:function(e){var n=e.row;return[o("div",{staticClass:"operationBox"},[o("div",{staticClass:"operationItem",on:{click:function(e){return t.operateBtnEmitRowEvent("flowInfoRowEvent",n)}}},[o("i",{staticClass:"el-icon-s-order"}),t._v(" "),o("span",[t._v("流程信息")])])])]}}])})]},proxy:!0}])})],1),o("nvxe-modal",{attrs:{title:"流程信息",subTitle:"",loading:!1,hideSubmitBtn:!0},model:{value:t.showFlowInfoBox,callback:function(e){t.showFlowInfoBox=e},expression:"showFlowInfoBox"}},[o("div",[o("vxe-radio-group",{model:{value:t.flowInfoType,callback:function(e){t.flowInfoType=e},expression:"flowInfoType"}},[o("vxe-radio-button",{attrs:{label:"1",content:"流程图"}}),o("vxe-radio-button",{attrs:{label:"2",content:"审批流程"}}),o("vxe-radio-button",{attrs:{label:"3",content:"申请详情"}})],1),o("div",{staticClass:"flowInfoTypeBox"},[o("div",{directives:[{name:"show",rawName:"v-show",value:"1"==t.flowInfoType,expression:"flowInfoType=='1'"}],staticClass:"flowInfoTypeItem",staticStyle:{height:"350px",overflow:"auto"}},[t.base64ImgStr?o("img",{attrs:{src:t.base64ImgStr,alt:"图片未上传"}}):t._e()]),o("div",{directives:[{name:"show",rawName:"v-show",value:"2"==t.flowInfoType,expression:"flowInfoType=='2'"}],staticClass:"flowInfoTypeItem"},[o("nvxe-grid",{ref:"applicationItems",attrs:{"sync-resize":t.flowInfoType,toolbarConfigShow:!1,height:350,columnsFormName:"actprochiinfoFm"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"3"==t.flowInfoType,expression:"flowInfoType=='3'"}],staticClass:"flowInfoTypeItem"},[o("flowInfoBox",{attrs:{dataList:t.resDataList,showFlowInfoBox:t.showFlowInfoBox}})],1)])],1)])],1)},i=[],a=(o("16ca"),o("c22d"),o("9b5f"),o("5213")),s=(o("6860"),o("1b62")),r=o("2ddf"),l=o("0e4a"),f={name:"workFinish",components:{bodyContentDownItem:l["a"],flowInfoBox:a["a"]},data:function(){return{resDataList:[],base64ImgStr:"",flowInfoType:"1",showFlowInfoBox:!1,centerBtnConfig:{iisEnable:!1,iisAdd:!1,iisEdit:!1,iisDisabled:!1,iisAudit:!1,iisNotAudit:!1,iisPrint:!1},tableDataConfig:{operationColumn:[{showOverflow:!0,fixed:"right",slots:{default:"operate"},visible:!0,title:"操作",headerAlign:"center",align:"center",width:80}]},requstConfig:{modulePreUrl:"/bpmn/hitask",mainFormName:"acthitaskFm"}}},computed:{tableColumnsInfo:function(){return this.$store.getters.tableColumnsInfo_getter}},mixins:[s["a"],r["a"]],methods:{operateBtnEmitRowEvent:function(t,e){switch(t){case"flowInfoRowEvent":this.flowInfoRowEvent(e);break;default:break}},flowInfoRowEvent:function(t){var e=this;this.showFlowInfoBox=!0;var o="/bpmn/rutask/getHandleData",n={procInstId:t.PROC_INST_ID_,fileName:t.DGRM_RESOURCE_NAME_};this.request.post(o,n).then((function(t){e.base64ImgStr=t.imgSrc;var o=e.$refs["applicationItems"].$refs["originListTalbe"];o&&o.reloadData(t.hitaskList),e.resDataList=t.varList}))},iisDelAction:function(){var t=this,e=this,o=this.currentSelectRowItem.row.DEPLOYMENT_ID_,n="".concat(this.requstConfig.modulePreUrl,"/delete?id=").concat(o),i={};this.$XModal.confirm({status:"warning",message:"确定要删除当前选中数据吗？"}).then((function(o){"confirm"===o&&t.request["update"](n,i).then((function(t){e.search()}))}))}}},c=f,w=(o("c165"),o("5d22")),d=Object(w["a"])(c,n,i,!1,null,"71cd86b2",null);e["default"]=d.exports},c165:function(t,e,o){"use strict";o("a9cc")}}]);