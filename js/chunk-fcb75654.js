(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fcb75654"],{"0e4a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"column"===t.flexDirection?"bodyContentDownBox-V":"bodyContentDownBox-H"},[t.$slots.part1?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part1",[t._v("part1")])],2):t._e(),t.$slots.part2?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part2",[t._v("part2")])],2):t._e(),t.$slots.part3?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part3",[t._v("part3")])],2):t._e()])},s=[],o={name:"bodyContentDownItem",props:{flexDirection:{type:String,default:"column"},config:{type:Object,default:function(){return{windowOffsetHeight:0,windowOffsetWidth:0}}}},data:function(){return{}},methods:{}},r=o,n=(a("33bc"),a("5d22")),l=Object(n["a"])(r,i,s,!1,null,"550d1612",null);e["a"]=l.exports},"0ee7":function(t,e,a){},"33bc":function(t,e,a){"use strict";a("c294")},"35b2":function(t,e,a){"use strict";a("cdb0")},7816:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bodyContentBox"},[a("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[a("bodyContentDownItem",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[a("nvxe-grid",{ref:"mainTable",attrs:{isMainTable:!0,loading:t.listLoading,height:.6*t.windowOffsetHeight,columnsFormName:t.requstConfig.mainFormName,dataUrl:t.requstConfig.modulePreUrl+"/"+t.mainPageSearchType}})]},proxy:!0},{key:"part2",fn:function(){return[a("div",{directives:[{name:"show",rawName:"v-show",value:"tab1"===t.selectTab,expression:"selectTab==='tab1'"}]},[a("nvxe-grid",{ref:"firstTable",attrs:{dataUrl:"/sPaper/back/item/list",params:{pid:t.currentSelectRowItem.row.id,updateFlag:t.updateFlag},height:.4*t.windowOffsetHeight,columnsFormName:t.requstConfig.tab1FormName}},[a("template",{slot:"toolbar_buttons"},[a("tabsTool",{attrs:{currentTab:t.selectTab},on:{tabsChange:t.tabsChange}})],1)],2)],1)]},proxy:!0}])})],1),a("editBox",{ref:"editBox",on:{submitSuccess:t.submitSuccess}})],1)},s=[],o=a("79dc"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nvxe-modal",{attrs:{remember:"",fullscreen:"",title:t.title,subTitle:t.subTitle,loading:t.vxeModalLoading},on:{confirm:function(e){return t.submitEvent()}},model:{value:t.showEditBox,callback:function(e){t.showEditBox=e},expression:"showEditBox"}},[a("div",{ref:"editBoxBodyContent",staticClass:"editBoxBodyContentDefaultHW"},[a("editBoxContentPartition",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[a("div",{staticStyle:{overflow:"auto"},style:{height:t.editBoxFormHeight+"px"}},[a("formItemRender",{ref:"renderForm",attrs:{showEditBox:t.showEditBox,formValueChangeRes:t.formValueChangeRes,firstFormRules:t.requiredRule[t.requstConfig.mainFormName],firstFormData:t.firstFormDataMaster,mainFormName:t.requstConfig.mainFormName,formItemList:t.formItemList},on:{formItemValueEvent:t.formItemValueEvent}})],1)]},proxy:!0},{key:"part2",fn:function(){return[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:t.selectTab,callback:function(e){t.selectTab=e},expression:"selectTab"}},[a("tabsTool",{attrs:{currentTab:t.selectTab},on:{tabsChange:t.tabsChange}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"tab1"==t.selectTab,expression:"selectTab == 'tab1'"}]},[a("nvxe-edit-grid",{ref:"firstTable",attrs:{isMainTable:!0,"edit-rules":t.requiredRule[t.requstConfig.tab1FormName],height:t.windowOffsetHeight-t.defaultBorderHeight-t.editBoxFormHeight-t.tabHeight,columnsFormName:t.requstConfig.tab1FormName,data:t.firstTableData},on:{"edit-closed":t.editClosedEvent,"cell-click":t.cellClickEvent}})],1)]},proxy:!0}])})],1)])},n=[],l=(a("1d43"),a("3bae"),a("cb39")),f=a("5180"),u=a.n(f),c=a("bf8c"),d=void 0,m={mapList:{items:"firstTable"}},b={name:"sPaperBack",mixins:[c["a"]],components:{formItemRender:l["a"],tabsTool:o["a"]},provide:function(){var t=this;return{getPopupModalConfig:function(){return t.popupModalConfig}}},getPopupConfig:function(){return d.popupConfig},data:function(){return{editBoxFormHeight:86,requstConfig:{modulePreUrl:"/sPaper/back",mainFormName:"spaperbackFm",tab1FormName:"spaperbackitemFm"},popupConfig:{stationInfo:{whType:"0"}},popupModalConfig:{firstTable:{title:"原纸卷号",mainFormName:"sPaperBackPopFm",fieldName:"coilCode",editDisabled:!0,requstTab1Config:{isStoredProcedure:!0,modulePreUrl:"/proc/prod/page/spSpaperBackPop",filterName:"coilCode",params:{},subformName:"sPaperBackPopItemFm"}}}}},methods:{iisDelActionEvent:function(){var t=this.$refs.firstTable.$refs.originEditTalbe.getTableData().fullData;this.firstFormDataMaster["sumCoilQty"]=t.length},rewriteInsertEvent:function(){var t=this.$refs.firstTable.$refs.originEditTalbe.getTableData().fullData;this.firstFormDataMaster["sumCoilQty"]=t.length},editClosedEvent:function(t){var e=t.column,a=(t.$rowIndex,this.$refs.firstTable.$refs.originEditTalbe.getTableData().fullData),i=this;switch(e.property){case"backWt":i.getMasterField("backWt",a,"sumWt");break;default:break}},closeWindowAction:function(){this.firstFormDataMaster=u()(this.formDefaultDataObj),this.setTableDefaultData(m,[])},setDefaultValue:function(t){var e=this.$store.getters.loginUserInfo_getter.sysParams.POToInWithSPaper,a=this.$refs.firstTable.$refs.originEditTalbe.getColumnByField("coilCode");a.disabled="1"!=e,t.master?(this.firstFormData=Object.assign({},m),this.firstFormDataMaster=u()(t.master),this.setTableDefaultData(m,t)):(this.firstFormData=Object.assign({},m),this.firstFormDataMaster=u()(t),this.setTableDefaultData(m,[]))},cellClickEvent:function(t){t.column.editRender&&"popupModal"==t.column.editRender.name&&this.setFirstTableFilterList()},setFirstTableFilterList:function(){try{var t=this.$refs["firstTable"].$refs["originEditTalbe"],e=this.$refs["renderForm"].$refs["firstForm"].data;if(t){var a=t.getTableData().tableData,i="",s=this.popupModalConfig.firstTable.requstTab1Config.filterName;a.forEach((function(t){t[s]&&(""==i?i=t[s]:i+=","+t[s])})),this.popupModalConfig.firstTable.requstTab1Config.params.filterList=i,this.popupModalConfig.firstTable.requstTab1Config.params["vendCode"]=e["vendCode"]}}catch(o){console.warn("====setFirstTableFilterList=====")}}}},p=b,h=(a("8955"),a("5d22")),g=Object(h["a"])(p,r,n,!1,null,"4a47c346",null),w=g.exports,v=a("1b62"),C=a("2ddf"),T=a("0e4a"),x={name:"sPaperBack",components:{editBox:w,tabsTool:o["a"],bodyContentDownItem:T["a"]},data:function(){return{requstConfig:{modulePreUrl:"/sPaper/back",mainFormName:"spaperbackFm",tab1FormName:"spaperbackitemFm"}}},mixins:[v["a"],C["a"]],methods:{}},F=x,y=(a("35b2"),Object(h["a"])(F,i,s,!1,null,"7b72fe57",null));e["default"]=y.exports},"79dc":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabsButtonListBox"},[a("div",{staticClass:"tabsButtonListItem leftItem"},[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[t._l(t.tabList,(function(e,i){return[a("vxe-radio-button",{key:i,staticClass:"borderRadio",attrs:{label:e.key,status:"my-purple",content:e.value},nativeOn:{click:function(a){return t.selectTabClick(e.key)}}})]}))],2)],1),a("div",{staticClass:"tabsButtonListItem rightItem"})])},s=[],o={props:{currentTab:{type:String,default:"tab1"}},data:function(){return{selectTab:"tab1"}},methods:{selectTabClick:function(t){this.selectTab=t,this.$emit("tabsChange",this.selectTab)}}},r=(a("5180"),{name:"tabs-formList",mixins:[o],props:{defaulttabList:{type:Array,default:function(){return[]}}},data:function(){return{tabList:[]}},mounted:function(){this.gettabList()},methods:{gettabList:function(){var t=this;if(0==this.defaulttabList.length){var e=[],a=this.$store.state.app.currentRouterName;if("sysFrom"!=a&&""!=a){var i=this.$store.state.app.tableColumnsInfo;if(i[a]){for(var s in i[a].listView)if("2"===i[a].listView[s].tableType){var o=i[a].listView[s].tableDesc,r=i[a].listView[s].formSort,n=i[a].listView[s].formSort;e.push({key:"tab"+r,value:o,formSort:n})}this.tabList=e.sort((function(t,e){return t.formSort-e.formSort}))}else setTimeout((function(){t.gettabList()}),300)}}else this.tabList=this.defaulttabList}}}),n=r,l=(a("e551"),a("5d22")),f=Object(l["a"])(n,i,s,!1,null,"19af0b3a",null);e["a"]=f.exports},8955:function(t,e,a){"use strict";a("b2e0")},b2e0:function(t,e,a){},c294:function(t,e,a){},cdb0:function(t,e,a){},e551:function(t,e,a){"use strict";a("0ee7")}}]);