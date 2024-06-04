// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/GeneralSettings.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTFieldContainer esriCTFullWidth"\x3e\r\n    \x3cdiv class\x3d"esriCTGeneralSettingsLabel esriCTEllipsis esriCTVerticalCenterAlignLabel" title\x3d"${nls.generalSettings.measurementUnitLabel}"\x3e${nls.generalSettings.measurementUnitLabel}:\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTDropDownContainer"\x3e\r\n      \x3cselect class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"measurementUnitInputNode"\x3e\r\n        \x3coption value\x3d"feet"\x3e${nls.units.feet.label}\x3c/option\x3e\r\n        \x3coption value\x3d"meters"\x3e${nls.units.meters.label}\x3c/option\x3e\r\n        \x3coption value\x3d"miles"\x3e${nls.units.miles.label}\x3c/option\x3e\r\n        \x3coption value\x3d"yards"\x3e${nls.units.yards.label}\x3c/option\x3e\r\n        \x3coption value\x3d"kilometers"\x3e${nls.units.kilometers.label}\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTFieldContainer esriCTFullWidth"\x3e\r\n    \x3cdiv class\x3d"esriCTGeneralSettingsLabel esriCTEllipsis esriCTVerticalCenterAlignLabel" title\x3d"${nls.generalSettings.currencyLabel}"\x3e${nls.generalSettings.currencyLabel}:\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTDropDownContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"maxLength:\'3\'" data-dojo-attach-point\x3d"currencyInputNode" trim\x3d"true"\r\n        required\x3d"true"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTFieldContainer esriCTFullWidth"\x3e\r\n    \x3cdiv class\x3d"esriCTGeneralSettingsLabel esriCTEllipsis esriCTVerticalCenterAlignLabel" title\x3d"${nls.generalSettings.roundCostLabel}"\x3e${nls.generalSettings.roundCostLabel}:\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTDropDownContainer"\x3e\r\n      \x3cselect class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"roundCostInputNode"\x3e\r\n        \x3coption value\x3d"twoDecimalPoint"\x3e${nls.generalSettings.roundCostValues.twoDecimalPoint}\x3c/option\x3e\r\n        \x3coption value\x3d"nearestWholeNumber"\x3e${nls.generalSettings.roundCostValues.nearestWholeNumber}\x3c/option\x3e\r\n        \x3coption value\x3d"nearestTen"\x3e${nls.generalSettings.roundCostValues.nearestTen}\x3c/option\x3e\r\n        \x3coption value\x3d"nearestHundred"\x3e${nls.generalSettings.roundCostValues.nearestHundred}\x3c/option\x3e\r\n        \x3coption value\x3d"nearestThousand"\x3e${nls.generalSettings.roundCostValues.nearestThousand}\x3c/option\x3e\r\n        \x3coption value\x3d"nearestTenThousands"\x3e${nls.generalSettings.roundCostValues.nearestTenThousands}\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cfieldset class\x3d"esriCTProjectOutputSettingsFieldset"\x3e\r\n    \x3clegend class\x3d"esriCTProjectOutputSettingsLegend" title\x3d"${nls.generalSettings.projectOutputSettings}"\x3e\r\n      ${nls.generalSettings.projectOutputSettings} \x3c/legend\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTFullHeight esriCTProjectSettingsContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTProjectSettingsOutputLeftContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTProjectAreaTypeContainer esriCTVerticalCenterAlignLabel esriCTEllipsis" title\x3d"${nls.generalSettings.typeOfProjectAreaLabel}"\x3e${nls.generalSettings.typeOfProjectAreaLabel}:\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTProjectAreaTypeInputContainer"\x3e\r\n          \x3cdiv class\x3d""\x3e\r\n            \x3cselect class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"projectAreaTypeInputNode"\x3e\r\n              \x3coption value\x3d"outline"\x3e${nls.generalSettings.projectAreaType.outline}\x3c/option\x3e\r\n              \x3coption value\x3d"buffer"\x3e${nls.generalSettings.projectAreaType.buffer}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/div\x3e\r\n\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTProjectSettingsOutputRightContainer esriCTHidden" data-dojo-attach-point\x3d"projectSettingsOutputRightContainerNode"\x3e\r\n        \x3cdiv class\x3d"esriCTBufferDistanceLabelContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTBufferDistanceLabel esriCTVerticalCenterAlignLabel esriCTEllipsis" title\x3d"${nls.generalSettings.bufferDistanceLabel}"\x3e${nls.generalSettings.bufferDistanceLabel}:\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTBufferDistanceInputContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/NumberTextBox" disabled\x3dtrue data-dojo-attach-point\x3d"bufferDistanceInputNode"\r\n            trim\x3d"true" required\x3d"true" data-dojo-props\x3d""\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTProjectMeasurementUnitContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTVerticalCenterAlignLabel esriCTEllipsis esriCTBufferDistanceUnit" data-dojo-attach-point\x3d"bufferDistanceUnit"\x3e${nls.units.feet.label}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/fieldset\x3e\r\n  \x3cdiv class\x3d"esriCTFieldContainer" style\x3d"padding-top: 20px"\x3e\r\n    \x3cinput data-dojo-attach-point\x3d"exportCSVCheckBox" data-dojo-type\x3d"dijit/form/CheckBox" type\x3d"checkbox" /\x3e\r\n    \x3cspan\x3e${nls.generalSettings.csvReportExportLabel}\x3c/span\x3e\r\n    \x3cdiv class\x3d"esriCTEditReportSettingsIconContainer"\x3e\r\n      \x3cdiv style\x3d"vertical-align: middle" title\x3d"${nls.generalSettings.editReportSettingsBtnTooltip}" data-dojo-attach-point\x3d"editReportSettings"\r\n        class\x3d"jimu-icon jimu-icon-edit"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!./GeneralSettings.html dojo/_base/lang dojo/_base/array dojo/on ../utils dojo/dom-attr dojo/dom-class ./ReportSettings dijit/form/CheckBox".split(" "),function(h,k,l,m,b,n,c,f,p,g,q){return h([k,l],{templateString:m,configuredReportSettings:null,baseClass:"jimu-widget-cost-analysis-general-settings",constructor:function(a){b.mixin(this,a)},postMixInProperties:function(){this.nls.common={};b.mixin(this.nls.common,window.jimuNls.common)},
postCreate:function(){this.inherited(arguments);this._init()},_init:function(){this._setConfig();this._attachNodeEvents();this.currencyInputNode.validator=b.hitch(this,this._currencyValidator);this.bufferDistanceInputNode.validator=b.hitch(this,this._bufferDistanceValidator);this.own(c(this.currencyInputNode,"change",b.hitch(this,function(){this.currencyInputNode.isValid()&&this._onUnitChange()})));this.own(c(this.editReportSettings,"click",b.hitch(this,function(){this._createReportSettingsDialog(!1)})));
this.configuredReportSettings||this._createReportSettingsDialog(!0)},_setConfig:function(){this.measurementUnitInputNode.set("value",this.config.generalSettings.measurementUnit);this.currencyInputNode.set("value",this.config.generalSettings.currency);this.roundCostInputNode.set("value",this.config.generalSettings.roundCostType);this.projectAreaTypeInputNode.set("value",this.config.generalSettings.projectAreaType);this.bufferDistanceInputNode.set("value",this.config.generalSettings.bufferDistance);
this.config.generalSettings.hasOwnProperty("canExportProject")&&this.exportCSVCheckBox.set("checked",this.config.generalSettings.canExportProject,!1);this.configuredReportSettings=this.config.generalSettings.CSVReportSettings},validate:function(){var a=this.projectAreaTypeInputNode.get("value");return this.currencyInputNode.validate()?"buffer"!==a||this.bufferDistanceInputNode.validate()?{isValid:!0}:{isValid:!1,errorMessage:this.nls.generalSettings.errorMessages.bufferDistance}:{isValid:!1,errorMessage:this.nls.generalSettings.errorMessages.currency}},
getConfig:function(){return{measurementUnit:this.measurementUnitInputNode.get("value"),currency:this.currencyInputNode.get("value"),roundCostType:this.roundCostInputNode.get("value"),projectAreaType:this.projectAreaTypeInputNode.get("value"),bufferDistance:this.bufferDistanceInputNode.get("value"),canExportProject:this.exportCSVCheckBox.checked,CSVReportSettings:this.configuredReportSettings}},_attachNodeEvents:function(){this.own(c(this.measurementUnitInputNode,"change",b.hitch(this,function(a){p.set(this.bufferDistanceUnit,
"innerHTML",this.nls.units[a].label);this._onUnitChange()})));this.own(c(this.projectAreaTypeInputNode,"change",b.hitch(this,function(a){"outline"===a?(this.bufferDistanceInputNode.textbox.value="5",this.bufferDistanceInputNode.set("disabled",!0),g.add(this.projectSettingsOutputRightContainerNode,"esriCTHidden")):(this.bufferDistanceInputNode.set("disabled",!1),g.remove(this.projectSettingsOutputRightContainerNode,"esriCTHidden"))})))},_onUnitChange:function(){var a;var d=this.measurementUnitInputNode.get("value");
this.configuredReportSettings&&n.forEach(this.configuredReportSettings.reportSettings,b.hitch(this,function(e){-1<e.columnTitle.indexOf("Length")?(a=f.units[d].lengthAbbr,e.columnTitle="Length ("+a+")"):-1<e.columnTitle.indexOf("Area")?(a=f.units[d].areaAbbr,e.columnTitle="Area ("+a+")"):-1<e.columnTitle.indexOf("Cost")&&(a=this.currencyInputNode.get("value"),e.columnTitle="Cost ("+a+")")}))},_currencyValidator:function(a){return a.match(/^([^0-9]+)$/)?!0:(this.currencyInputNode.invalidMessage=this.nls.generalSettings.errorMessages.currency,
!1)},_bufferDistanceValidator:function(a){return 0>a?(this.bufferDistanceInputNode.invalidMessage=this.nls.generalSettings.errorMessages.outOfRangebufferDistance,!1):a.match(/^([0-9]*[1-9][0-9]*([\.,][0-9]+)*([\.,][0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$/)?!0:(this.bufferDistanceInputNode.invalidMessage=this.nls.generalSettings.errorMessages.bufferDistance,!1)},_createReportSettingsDialog:function(a){this._reportSettings=new q({nls:this.nls,previousReportSettings:this.configuredReportSettings,isLoad:a,
config:this.config});c(this._reportSettings,"okButtonClicked",b.hitch(this,function(d){this.configuredReportSettings=d}));c(this._reportSettings,"onInitialLoad",b.hitch(this,function(d){this.configuredReportSettings=d}));this._reportSettings.startup()}})});