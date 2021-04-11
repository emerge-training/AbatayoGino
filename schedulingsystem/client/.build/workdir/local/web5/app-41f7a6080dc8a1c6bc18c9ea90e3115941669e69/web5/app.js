let AppUpdateDelete = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.id = null;
	this.fname = null;
	this.mname = null;
	this.lname = null;
	this.time = null;
	this.date = null;
};

AppUpdateDelete.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppUpdateDelete.prototype.constructor = AppUpdateDelete;
AppUpdateDelete.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"AppUpdateDelete" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppUpdateDelete.prototype._tobj = AppUpdateDelete;

AppUpdateDelete.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppUpdateDelete;
	return v.CTOR_AppUpdateDelete_JkUiGuiApplicationContext(context);
};

AppUpdateDelete.prototype.CTOR_AppUpdateDelete_JkUiGuiApplicationContext = function(context) {
	this.date = null;
	this.time = null;
	this.lname = null;
	this.mname = null;
	this.fname = null;
	this.id = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppUpdateDelete.prototype.initializeWidget = function() {
	var viewbtn = JkWidgetCommonButtonWidget.forText(this.context, "View", (function() {
	}.bind(this)));
	var updatebtn = JkWidgetCommonButtonWidget.forText(this.context, "Update", (function() {
	}.bind(this)));
	var deletebtn = JkWidgetCommonButtonWidget.forText(this.context, "Delete", (function() {
	}.bind(this)));
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	viewbtn.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	viewbtn.setWidgetTextColor((JkGfxColor.white()));
	viewbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	updatebtn.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	updatebtn.setWidgetTextColor((JkGfxColor.white()));
	updatebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	deletebtn.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	deletebtn.setWidgetTextColor((JkGfxColor.white()));
	deletebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(viewbtn);
	this.vbox.addWidget(updatebtn);
	this.vbox.addWidget(deletebtn);
	this.vbox.addWidget(backbtn);
};

AppUpdateDelete.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#e8e8e8")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Riders Schedule");
	widget4.setWidgetTextColor((JkGfxColor.instance("#2A9D8F")));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_LEFT);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("ID ");
	this.id.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.id.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.fname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.fname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.fname.setWidgetPlaceholder("First Name");
	this.fname.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.fname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.fname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.fname);
	this.mname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.mname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.mname.setWidgetPlaceholder("Middle Name");
	this.mname.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.mname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.mname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.mname);
	this.lname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.lname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.lname.setWidgetPlaceholder("Last Name");
	this.lname.setWidgetMaxLength(1);
	this.lname.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.lname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.lname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.lname);
	this.time = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.time.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.time.setWidgetPlaceholder("Time");
	this.time.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.time.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.time.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.time);
	this.date = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.date.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.date.setWidgetPlaceholder("Date");
	this.date.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.date.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.date.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.date);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppUpdateDelete.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateDelete"] === true;
};

let AppRidersSchedule = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
	this.id = null;
	this.firstname = null;
	this.middlename = null;
	this.lastname = null;
	this.time = null;
	this.checkinlbl = null;
	this.checkin = null;
};

AppRidersSchedule.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppRidersSchedule.prototype.constructor = AppRidersSchedule;
AppRidersSchedule.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppRidersSchedule" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppRidersSchedule.prototype._tobj = AppRidersSchedule;

AppRidersSchedule.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppRidersSchedule;
	return v.CTOR_AppRidersSchedule_JkUiGuiApplicationContext(context);
};

AppRidersSchedule.prototype.CTOR_AppRidersSchedule_JkUiGuiApplicationContext = function(context) {
	this.checkin = null;
	this.checkinlbl = null;
	this.time = null;
	this.lastname = null;
	this.middlename = null;
	this.firstname = null;
	this.id = null;
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppRidersSchedule.prototype.initializeWidget = function() {
	var savebtn = JkWidgetCommonButtonWidget.forText(this.context, "Schedule Now", (function() {
	}.bind(this)));
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back to Admin", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	savebtn.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	savebtn.setWidgetTextColor((JkGfxColor.white()));
	savebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(savebtn);
	this.vbox.addWidget(backbtn);
};

AppRidersSchedule.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#e8e8e8")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1150px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("820px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget2.addWidget(this.image);
	this.addWidget(widget2);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Riders schedule");
	widget4.setWidgetTextColor((JkGfxColor.instance("#2A9D8F")));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_LEFT);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("ID ");
	this.id.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.id.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.firstname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.firstname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.firstname.setWidgetPlaceholder("First Name");
	this.firstname.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.firstname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.firstname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.firstname);
	this.middlename = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.middlename.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.middlename.setWidgetPlaceholder("Middle Name");
	this.middlename.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.middlename.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.middlename.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.middlename);
	this.lastname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.lastname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.lastname.setWidgetPlaceholder("Last Name");
	this.lastname.setWidgetMaxLength(1);
	this.lastname.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.lastname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.lastname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.lastname);
	this.time = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.time.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.time.setWidgetPlaceholder("Time");
	this.time.setWidgetMaxLength(1);
	this.time.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.time.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.time.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.time);
	this.checkinlbl = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.checkinlbl.setWidgetText("Date");
	this.vbox.addWidget(this.checkinlbl);
	this.checkin = JkWidgetCommonDateSelectorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.addWidget(this.checkin);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	this.addWidget(widget3);
};

AppRidersSchedule.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppRidersSchedule"] === true;
};

let AppFeedBackForm = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
	this.fullname = null;
};

AppFeedBackForm.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppFeedBackForm.prototype.constructor = AppFeedBackForm;
AppFeedBackForm.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetLayerWidget" : true,
	"AppFeedBackForm" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppFeedBackForm.prototype._tobj = AppFeedBackForm;

AppFeedBackForm.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppFeedBackForm;
	return v.CTOR_AppFeedBackForm_JkUiGuiApplicationContext(context);
};

AppFeedBackForm.prototype.CTOR_AppFeedBackForm_JkUiGuiApplicationContext = function(context) {
	this.fullname = null;
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppFeedBackForm.prototype.initializeWidget = function() {
	var message = JkWidgetCommonTextAreaWidget.NEW_JkUiGuiApplicationContext(this.context);
	message.setWidgetText("");
	message.setWidgetRows(5);
	message.setWidgetPadding1((this.context.getHeightValue("2500um")));
	message.setWidgetPlaceholder("Please enter your feedback.");
	message.setWidgetMaxLength(100);
	this.vbox.addWidget(message);
	var sendbtn = JkWidgetCommonButtonWidget.forText(this.context, "Send Message", (function() {
		this.vbox.addWidget((this.getMessage((message.getWidgetText()))));
	}.bind(this)));
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back To Riders Form", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRidersForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	sendbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	sendbtn.setWidgetTextColor((JkGfxColor.white()));
	sendbtn.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.vbox.addWidget(sendbtn);
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.vbox.addWidget(backbtn);
};

AppFeedBackForm.prototype.getMessage = function(str) {
	var msg = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	msg.setWidgetText(str);
	return msg;
};

AppFeedBackForm.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1150px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("820px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget2.addWidget(this.image);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("FEEDBACK");
	widget4.setWidgetTextColor((JkGfxColor.instance("#black")));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_LEFT);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.fullname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.fullname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.fullname.setWidgetPlaceholder("Full Name");
	this.fullname.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.fullname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.fullname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.fullname);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppFeedBackForm.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppFeedBackForm"] === true;
};

let AppRidersLogin = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
	this.username = null;
	this.password = null;
};

AppRidersLogin.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppRidersLogin.prototype.constructor = AppRidersLogin;
AppRidersLogin.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetWidgetWithLayout" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"AppRidersLogin" : true
};
AppRidersLogin.prototype._tobj = AppRidersLogin;

AppRidersLogin.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppRidersLogin;
	return v.CTOR_AppRidersLogin_JkUiGuiApplicationContext(context);
};

AppRidersLogin.prototype.CTOR_AppRidersLogin_JkUiGuiApplicationContext = function(context) {
	this.password = null;
	this.username = null;
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppRidersLogin.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var loginbtn = JkWidgetCommonButtonWidget.forText(this.context, "Login", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRidersForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back To Menu", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	loginbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	loginbtn.setWidgetTextColor((JkGfxColor.white()));
	loginbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(loginbtn);
	this.vbox.addWidget(backbtn);
};

AppRidersLogin.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1150px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("820px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget3.addWidget(this.image);
	widget2.addWidget(widget3);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("RIDERS LOGIN FORM");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	var widget5 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetText("Username");
	widget5.setWidgetTextColor((JkGfxColor.black()));
	widget5.setWidgetFontFamily("Raleway-Regular");
	widget5.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.vbox.addWidget(widget5);
	this.username = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	JkWidgetWidget.setWidgetId(this.username, "username");
	this.username.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NONASSISTED);
	this.username.setWidgetBackgroundColor((JkGfxColor.white()));
	this.username.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.username.setWidgetFontFamily("Raleway-Regular");
	this.username.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.username);
	var widget6 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget6.setWidgetText("Password");
	widget6.setWidgetTextColor((JkGfxColor.black()));
	widget6.setWidgetFontFamily("Times New Roman");
	widget6.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.vbox.addWidget(widget6);
	this.password = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	JkWidgetWidget.setWidgetId(this.password, "password");
	this.password.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_PASSWORD);
	this.password.setWidgetBackgroundColor((JkGfxColor.white()));
	this.password.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.password.setWidgetFontFamily("Times New Roman");
	this.password.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.password);
	widget2.addWidget(this.vbox);
	this.addWidget(widget2);
};

AppRidersLogin.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppRidersLogin"] === true;
};

let AppAPIClient = function() {
	JkWidgetWebJSONAPIClientWithGui.call(this);
	this.widgetDefaultErrorHandler = null;
};

AppAPIClient.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetWebJSONAPIClientWithGui.prototype);
AppAPIClient.prototype.constructor = AppAPIClient;
AppAPIClient.prototype._t = {
	"JkWebJsonJSONAPIClient" : true,
	"AppAPIClient" : true,
	"JkWidgetWebJSONAPIClientWithGui" : true
};
AppAPIClient.prototype._tobj = AppAPIClient;

AppAPIClient.NEW = function() {
	var v = new AppAPIClient;
	return v.CTOR_AppAPIClient();
};

AppAPIClient.prototype.CTOR_AppAPIClient = function() {
	this.widgetDefaultErrorHandler = null;
	if(JkWidgetWebJSONAPIClientWithGui.prototype.CTOR_JkWidgetWebJSONAPIClientWithGui.call(this) == null) {
		return null;
	}
	return this;
};

AppAPIClient.getInstance = function() {
	return AppAPIClient.instance;
};

AppAPIClient.create = function(context, parentWidget) {
	if(!(context != null)) {
		return null;
	}
	AppAPIClient.instance = AppAPIClient.NEW();
	AppAPIClient.instance.setApiUrl("http://ec2-13-250-31-192.ap-southeast-1.compute.amazonaws.com:30050");
	AppAPIClient.instance.setContext(context);
	if(parentWidget != null) {
		AppAPIClient.instance.setParentWidget(parentWidget);
	}
	return AppAPIClient.instance;
};

AppAPIClient.prototype.onError1 = function(error, callback) {
	if(!(callback != null)) {
		this.onDefaultErrorHandler(error);
		return;
	}
	JkWidgetWebJSONAPIClientWithGui.prototype.onError1.call(this, error, callback);
};

AppAPIClient.prototype.onDefaultErrorHandler = function(error) {
	var context = this.getContext();
	if(!(context != null)) {
		return;
	}
	if(!(error != null)) {
		return;
	}
	if(!(this.widgetDefaultErrorHandler != null)) {
		context.showErrorDialog((error.toString()), null);
		return;
	}
	this.widgetDefaultErrorHandler(error);
};

AppAPIClient.prototype.addRiderregistration = function(data, callback, errorCallback) {
	this.doPost("/riderregistration/", data, callback, errorCallback);
};

AppAPIClient.prototype.updateRiderregistration = function(id, data, callback, errorCallback) {
	this.doPut("/riderresgistration/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteRiderregistration = function(id, callback, errorCallback) {
	this.doDelete("/riderregistration/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getRiderregistrations = function(callback, errorCallback) {
	this.doGet("/riderregistrations/", callback, errorCallback);
};

AppAPIClient.prototype.addRiderschedule = function(data, callback, errorCallback) {
	this.doPost("/riderschedule/", data, callback, errorCallback);
};

AppAPIClient.prototype.updateRiderschedule = function(id, data, callback, errorCallback) {
	this.doPut("/riderschedule/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteRiderschedule = function(id, callback, errorCallback) {
	this.doDelete("/riderschedule/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getRiderschedules = function(callback, errorCallback) {
	this.doGet("/riderschedules/", callback, errorCallback);
};

AppAPIClient.prototype.addRiderfeedback = function(data, callback, errorCallback) {
	this.doPost("/riderfeedback/", data, callback, errorCallback);
};

AppAPIClient.prototype.updateRiderfeedback = function(id, data, callback, errorCallback) {
	this.doPut("/riderfeedback/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteRiderfeedback = function(id, callback, errorCallback) {
	this.doDelete("/riderfeedback/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getRiderfeedbacks = function(callback, errorCallback) {
	this.doGet("/riderfeedbacks/", callback, errorCallback);
};

AppAPIClient.prototype.getWidgetDefaultErrorHandler = function() {
	return this.widgetDefaultErrorHandler;
};

AppAPIClient.prototype.setWidgetDefaultErrorHandler = function(v) {
	this.widgetDefaultErrorHandler = v;
	return this;
};

AppAPIClient.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAPIClient"] === true;
};

AppAPIClient.instance = null;

let AppAdminForm = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
};

AppAdminForm.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppAdminForm.prototype.constructor = AppAdminForm;
AppAdminForm.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"AppAdminForm" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppAdminForm.prototype._tobj = AppAdminForm;

AppAdminForm.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAdminForm;
	return v.CTOR_AppAdminForm_JkUiGuiApplicationContext(context);
};

AppAdminForm.prototype.CTOR_AppAdminForm_JkUiGuiApplicationContext = function(context) {
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppAdminForm.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var addschedulebtn = JkWidgetCommonButtonWidget.forText(this.context, "Riders Schedule", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRidersSchedule.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	var viewbtn = JkWidgetCommonButtonWidget.forText(this.context, "View FeedBack", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppViewFeedBack.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	var crudbtn = JkWidgetCommonButtonWidget.forText(this.context, "UpdateDelete", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUpdateDelete.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back To Menu", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	addschedulebtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	addschedulebtn.setWidgetTextColor((JkGfxColor.white()));
	addschedulebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	viewbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	viewbtn.setWidgetTextColor((JkGfxColor.white()));
	viewbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	crudbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	crudbtn.setWidgetTextColor((JkGfxColor.white()));
	crudbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(addschedulebtn);
	this.vbox.addWidget(viewbtn);
	this.vbox.addWidget(crudbtn);
	this.vbox.addWidget(backbtn);
};

AppAdminForm.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1150px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("820px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget3.addWidget(this.image);
	widget2.addWidget(widget3);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("ADMIN FORM");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	widget2.addWidget(this.vbox);
	this.addWidget(widget2);
};

AppAdminForm.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAdminForm"] === true;
};

let AppViewFeedBack = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
	this.id = null;
	this.name = null;
};

AppViewFeedBack.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppViewFeedBack.prototype.constructor = AppViewFeedBack;
AppViewFeedBack.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetLayerWidget" : true,
	"AppViewFeedBack" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppViewFeedBack.prototype._tobj = AppViewFeedBack;

AppViewFeedBack.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppViewFeedBack;
	return v.CTOR_AppViewFeedBack_JkUiGuiApplicationContext(context);
};

AppViewFeedBack.prototype.CTOR_AppViewFeedBack_JkUiGuiApplicationContext = function(context) {
	this.name = null;
	this.id = null;
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppViewFeedBack.prototype.initializeWidget = function() {
	var message = JkWidgetCommonTextAreaWidget.NEW_JkUiGuiApplicationContext(this.context);
	message.setWidgetText("");
	message.setWidgetRows(5);
	message.setWidgetPadding1((this.context.getHeightValue("2500um")));
	message.setWidgetPlaceholder(" ");
	message.setWidgetMaxLength(100);
	message.setWidgetBackgroundColor((JkGfxColor.instance("#FFC0CB")));
	this.vbox.addWidget(message);
	var viewbtn = JkWidgetCommonButtonWidget.forText(this.context, "View", (function() {
	}.bind(this)));
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back To Admin Form", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	viewbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	viewbtn.setWidgetTextColor((JkGfxColor.white()));
	viewbtn.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.vbox.addWidget(viewbtn);
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.vbox.addWidget(backbtn);
};

AppViewFeedBack.prototype.getMessage = function(str) {
	var msg = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	msg.setWidgetText(str);
	return msg;
};

AppViewFeedBack.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1150px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("820px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget2.addWidget(this.image);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("RIDER'S FEEDBACK");
	widget4.setWidgetTextColor((JkGfxColor.instance("#black")));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_LEFT);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("ID ");
	this.id.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.id.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.name = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.name.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.name.setWidgetPlaceholder("Name");
	this.name.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.name.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.name.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.name);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppViewFeedBack.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppViewFeedBack"] === true;
};

let AppRegistrationFormScreen = function() {
	JkWidgetScreenForWidget.call(this);
};

AppRegistrationFormScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppRegistrationFormScreen.prototype.constructor = AppRegistrationFormScreen;
AppRegistrationFormScreen.prototype._t = {
	"AppRegistrationFormScreen" : true,
	"JkUiScreenWithContext" : true,
	"JkUiScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppRegistrationFormScreen.prototype._tobj = AppRegistrationFormScreen;

AppRegistrationFormScreen.NEW = function() {
	var v = new AppRegistrationFormScreen;
	return v.CTOR_AppRegistrationFormScreen();
};

AppRegistrationFormScreen.prototype.CTOR_AppRegistrationFormScreen = function() {
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppRegistrationFormScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.setWidget((AppRegistrationForm.NEW_JkUiGuiApplicationContext(this.context)));
};

AppRegistrationFormScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = ["sample1.png", "sample.png"];
	context.prepareResources(resources, (function() {
		var main = AppRegistrationFormScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppRegistrationFormScreen.main();

AppRegistrationFormScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppRegistrationFormScreen"] === true;
};

let AppRegistrationFormRiderregistrationModel = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._id = null;
	this._firstname = null;
	this._middlename = null;
	this._lastname = null;
	this._address = null;
	this._age = null;
	this._gender = null;
	this._contactnumber = null;
	this._username = null;
	this._password = null;
};

AppRegistrationFormRiderregistrationModel.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppRegistrationFormRiderregistrationModel.prototype.constructor = AppRegistrationFormRiderregistrationModel;
AppRegistrationFormRiderregistrationModel.prototype._t = {
	"AppRegistrationFormRiderregistrationModel" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"JkLangStringObject" : true
};
AppRegistrationFormRiderregistrationModel.prototype._tobj = AppRegistrationFormRiderregistrationModel;

AppRegistrationFormRiderregistrationModel.NEW = function() {
	var v = new AppRegistrationFormRiderregistrationModel;
	return v.CTOR_AppRegistrationFormRiderregistrationModel();
};

AppRegistrationFormRiderregistrationModel.prototype.CTOR_AppRegistrationFormRiderregistrationModel = function() {
	this._password = null;
	this._username = null;
	this._contactnumber = null;
	this._gender = null;
	this._age = null;
	this._address = null;
	this._lastname = null;
	this._middlename = null;
	this._firstname = null;
	this._id = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.setId = function(value) {
	this._id = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getId = function() {
	return this._id;
};

AppRegistrationFormRiderregistrationModel.prototype.setFirstname = function(value) {
	this._firstname = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getFirstname = function() {
	return this._firstname;
};

AppRegistrationFormRiderregistrationModel.prototype.setMiddlename = function(value) {
	this._middlename = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getMiddlename = function() {
	return this._middlename;
};

AppRegistrationFormRiderregistrationModel.prototype.setLastname = function(value) {
	this._lastname = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getLastname = function() {
	return this._lastname;
};

AppRegistrationFormRiderregistrationModel.prototype.setAddress = function(value) {
	this._address = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getAddress = function() {
	return this._address;
};

AppRegistrationFormRiderregistrationModel.prototype.setAge = function(value) {
	this._age = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getAge = function() {
	return this._age;
};

AppRegistrationFormRiderregistrationModel.prototype.setGender = function(value) {
	this._gender = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getGender = function() {
	return this._gender;
};

AppRegistrationFormRiderregistrationModel.prototype.setContactnumber = function(value) {
	this._contactnumber = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getContactnumber = function() {
	return this._contactnumber;
};

AppRegistrationFormRiderregistrationModel.prototype.setUsername = function(value) {
	this._username = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getUsername = function() {
	return this._username;
};

AppRegistrationFormRiderregistrationModel.prototype.setPassword = function(value) {
	this._password = value;
	return this;
};

AppRegistrationFormRiderregistrationModel.prototype.getPassword = function() {
	return this._password;
};

AppRegistrationFormRiderregistrationModel.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._id != null) {
		v.setObject("id", (this.asJsonValue(this._id)));
	}
	if(this._firstname != null) {
		v.setObject("firstname", (this.asJsonValue(this._firstname)));
	}
	if(this._middlename != null) {
		v.setObject("middlename", (this.asJsonValue(this._middlename)));
	}
	if(this._lastname != null) {
		v.setObject("lastname", (this.asJsonValue(this._lastname)));
	}
	if(this._address != null) {
		v.setObject("address", (this.asJsonValue(this._address)));
	}
	if(this._age != null) {
		v.setObject("age", (this.asJsonValue(this._age)));
	}
	if(this._gender != null) {
		v.setObject("gender", (this.asJsonValue(this._gender)));
	}
	if(this._contactnumber != null) {
		v.setObject("contactnumber", (this.asJsonValue(this._contactnumber)));
	}
	if(this._username != null) {
		v.setObject("username", (this.asJsonValue(this._username)));
	}
	if(this._password != null) {
		v.setObject("password", (this.asJsonValue(this._password)));
	}
	return v;
};

AppRegistrationFormRiderregistrationModel.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._id = v.getString("id", null);
	this._firstname = v.getString("firstname", null);
	this._middlename = v.getString("middlename", null);
	this._lastname = v.getString("lastname", null);
	this._address = v.getString("address", null);
	this._age = v.getString("age", null);
	this._gender = v.getString("gender", null);
	this._contactnumber = v.getString("contactnumber", null);
	this._username = v.getString("username", null);
	this._password = v.getString("password", null);
	return true;
};

AppRegistrationFormRiderregistrationModel.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppRegistrationFormRiderregistrationModel.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppRegistrationFormRiderregistrationModel.prototype.toString = function() {
	return this.toJsonString();
};

AppRegistrationFormRiderregistrationModel.forJsonString = function(o) {
	var v = AppRegistrationFormRiderregistrationModel.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppRegistrationFormRiderregistrationModel.forJsonObject = function(o) {
	var v = AppRegistrationFormRiderregistrationModel.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppRegistrationFormRiderregistrationModel.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppRegistrationFormRiderregistrationModel"] === true;
};

let AppRegistrationForm = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
	this.id = null;
	this.firstname = null;
	this.middlename = null;
	this.lastname = null;
	this.address = null;
	this.age = null;
	this.gender = null;
	this.contactnumber = null;
	this.username = null;
	this.password = null;
};

AppRegistrationForm.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppRegistrationForm.prototype.constructor = AppRegistrationForm;
AppRegistrationForm.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppRegistrationForm" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppRegistrationForm.prototype._tobj = AppRegistrationForm;

AppRegistrationForm.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppRegistrationForm;
	return v.CTOR_AppRegistrationForm_JkUiGuiApplicationContext(context);
};

AppRegistrationForm.prototype.CTOR_AppRegistrationForm_JkUiGuiApplicationContext = function(context) {
	this.password = null;
	this.username = null;
	this.contactnumber = null;
	this.gender = null;
	this.age = null;
	this.address = null;
	this.lastname = null;
	this.middlename = null;
	this.firstname = null;
	this.id = null;
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppRegistrationForm.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var signupbtn = JkWidgetCommonButtonWidget.forText(this.context, "Sign Up", (function() {
		var riderregistration = AppRegistrationFormRiderregistrationModel.NEW();
		riderregistration.setId((this.id.getWidgetText()));
		riderregistration.setFirstname((this.firstname.getWidgetText()));
		riderregistration.setMiddlename((this.middlename.getWidgetText()));
		riderregistration.setLastname((this.lastname.getWidgetText()));
		riderregistration.setAddress((this.address.getWidgetText()));
		riderregistration.setAge((this.age.getWidgetText()));
		riderregistration.setGender((this.gender.getWidgetText()));
		riderregistration.setContactnumber((this.contactnumber.getWidgetText()));
		riderregistration.setUsername((this.username.getWidgetText()));
		riderregistration.setPassword((this.password.getWidgetText()));
		AppAPIClient.getInstance().addRiderregistration((riderregistration.toDynamicMap()), (function(res1) {
			this.context.showMessageDialog("Notice", "Rider Successfully Register", null);
			this.id.setWidgetText("");
			this.firstname.setWidgetText("");
			this.middlename.setWidgetText("");
			this.lastname.setWidgetText("");
			this.address.setWidgetText("");
			this.age.setWidgetText("");
			this.gender.setWidgetText("");
			this.contactnumber.setWidgetText("");
			this.username.setWidgetText("");
			this.password.setWidgetText("");
		}.bind(this)), (function(err1) {
			this.context.showMessageDialog("Notice", "Failed to Register", null);
		}.bind(this)));
	}.bind(this)));
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back To Menu", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	signupbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	signupbtn.setWidgetTextColor((JkGfxColor.white()));
	signupbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(signupbtn);
	this.vbox.addWidget(backbtn);
};

AppRegistrationForm.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1390px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("1500px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget3.addWidget(this.image);
	widget2.addWidget(widget3);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("35000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("800um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("REGISTRATIONs");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("ID");
	this.id.setWidgetBackgroundColor((JkGfxColor.white()));
	this.id.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.firstname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.firstname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.firstname.setWidgetPlaceholder("First Name");
	this.firstname.setWidgetBackgroundColor((JkGfxColor.white()));
	this.firstname.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.firstname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.firstname);
	this.middlename = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.middlename.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.middlename.setWidgetPlaceholder("Middle Name");
	this.middlename.setWidgetBackgroundColor((JkGfxColor.white()));
	this.middlename.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.middlename.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.middlename);
	this.lastname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.lastname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.lastname.setWidgetPlaceholder("Last Name");
	this.lastname.setWidgetBackgroundColor((JkGfxColor.white()));
	this.lastname.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.lastname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.lastname);
	this.address = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.address.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.address.setWidgetPlaceholder("Address");
	this.address.setWidgetBackgroundColor((JkGfxColor.white()));
	this.address.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.address.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.address);
	this.age = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.age.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.age.setWidgetPlaceholder("Age");
	this.age.setWidgetBackgroundColor((JkGfxColor.white()));
	this.age.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.age.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.age);
	this.gender = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.gender.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.gender.setWidgetPlaceholder("Gender");
	this.gender.setWidgetBackgroundColor((JkGfxColor.white()));
	this.gender.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.gender.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.gender);
	this.contactnumber = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.contactnumber.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.contactnumber.setWidgetPlaceholder("Contact Number");
	this.contactnumber.setWidgetBackgroundColor((JkGfxColor.white()));
	this.contactnumber.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.contactnumber.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.contactnumber);
	this.username = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.username.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.username.setWidgetPlaceholder("Username");
	this.username.setWidgetBackgroundColor((JkGfxColor.white()));
	this.username.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.username.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.username);
	this.password = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.password.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_PASSWORD);
	this.password.setWidgetPlaceholder("Password");
	this.password.setWidgetBackgroundColor((JkGfxColor.white()));
	this.password.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.password.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.password);
	widget2.addWidget(this.vbox);
	this.addWidget(widget2);
};

AppRegistrationForm.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppRegistrationForm"] === true;
};

let AppViewRidersSched = function() {
	JkWidgetLayerWidget.call(this);
	this.grid = null;
};

AppViewRidersSched.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppViewRidersSched.prototype.constructor = AppViewRidersSched;
AppViewRidersSched.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppViewRidersSched" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppViewRidersSched.prototype._tobj = AppViewRidersSched;

AppViewRidersSched.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppViewRidersSched;
	return v.CTOR_AppViewRidersSched_JkUiGuiApplicationContext(context);
};

AppViewRidersSched.prototype.CTOR_AppViewRidersSched_JkUiGuiApplicationContext = function(context) {
	this.grid = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppViewRidersSched.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("Firstname", "fname", 1.0, 0);
	this.grid.addColumn("MiddleName", "mname", 1.0, 0);
	this.grid.addColumn("LastName", "lname", 1.0, 0);
	this.grid.addColumn("Time", "time", 1.0, 0);
	this.grid.addColumn("Date", "date", 1.0, 0);
	this.grid.addWidgetHeaderRow();
	this.grid.addRow([" ", " ", " ", " ", " "], (function() {
		this.context.showMessageDialog("hello", "First one selected", null);
	}.bind(this)), (function() {
		this.context.showMessageDialog("hello", "First one double clicked", null);
	}.bind(this)));
	this.grid.addRow(["", "", "", "", ""], (function() {
		this.context.showMessageDialog("hello", "First one selected", null);
	}.bind(this)), (function() {
		this.context.showMessageDialog("hello", "First one double clicked", null);
	}.bind(this)));
	this.grid.addRow(["", "", "", "", ""], (function() {
		this.context.showMessageDialog("hello", "First one selected", null);
	}.bind(this)), (function() {
		this.context.showMessageDialog("hello", "First one double clicked", null);
	}.bind(this)));
};

AppViewRidersSched.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.forString("#CCCCCC")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetMargin((this.context.getHeightValue("1mm")));
	widget2.setWidgetSpacing((this.context.getHeightValue("1mm")));
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.addWidget1(this.grid, 1.0);
	var widget3 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetText("RIDERS SCHEDULE");
	widget3.setWidgetTextColor((JkGfxColor.black()));
	widget3.setWidgetFontSize((this.context.getHeightValue("10mm")));
	widget3.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget3.setWidgetFontBold(true);
	widget2.addWidget(widget3);
	var widget4 = JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("View");
	widget4.setWidgetClickHandler((function() {
		console.log("CLICKED!");
	}.bind(this)));
	widget2.addWidget(widget4);
	var widget5 = JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetText("Back To Riders Form");
	widget5.setWidgetClickHandler((function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRidersForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	widget2.addWidget(widget5);
	this.addWidget(widget2);
};

AppViewRidersSched.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppViewRidersSched"] === true;
};

let AppHomeWidget = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.menu = null;
};

AppHomeWidget.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppHomeWidget.prototype.constructor = AppHomeWidget;
AppHomeWidget.prototype._t = {
	"AppHomeWidget" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppHomeWidget.prototype._tobj = AppHomeWidget;

AppHomeWidget.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppHomeWidget;
	return v.CTOR_AppHomeWidget_JkUiGuiApplicationContext(context);
};

AppHomeWidget.prototype.CTOR_AppHomeWidget_JkUiGuiApplicationContext = function(context) {
	this.menu = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppHomeWidget.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var file = this.menu.addMenu("Main Menu", null);
	file.addEntry2("ADMIN LOGIN", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminLogin.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	file.addEntry2("RIDERS LOGIN", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRidersLogin.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	file.addEntry2("RIGESTRATION FORM", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRegistrationForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
};

AppHomeWidget.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.forString("#FFFFFF")));
	this.addWidget(widget);
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1390px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("1500px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	this.addWidget(this.image);
	var widget2 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetMargin(0);
	widget2.setWidgetSpacing(0);
	this.menu = JkWidgetCommonMenuBarWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.addWidget(this.menu);
	this.addWidget(widget2);
};

AppHomeWidget.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppHomeWidget"] === true;
};

let AppRidersForm = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
};

AppRidersForm.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppRidersForm.prototype.constructor = AppRidersForm;
AppRidersForm.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppRidersForm" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppRidersForm.prototype._tobj = AppRidersForm;

AppRidersForm.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppRidersForm;
	return v.CTOR_AppRidersForm_JkUiGuiApplicationContext(context);
};

AppRidersForm.prototype.CTOR_AppRidersForm_JkUiGuiApplicationContext = function(context) {
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppRidersForm.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var addfeedbackbtn = JkWidgetCommonButtonWidget.forText(this.context, "FeedBack", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppFeedBackForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	var viewbtn = JkWidgetCommonButtonWidget.forText(this.context, "View Schedule", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppViewRidersSched.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back To Menu", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	addfeedbackbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	addfeedbackbtn.setWidgetTextColor((JkGfxColor.white()));
	addfeedbackbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	viewbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	viewbtn.setWidgetTextColor((JkGfxColor.white()));
	viewbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(viewbtn);
	this.vbox.addWidget(addfeedbackbtn);
	this.vbox.addWidget(backbtn);
};

AppRidersForm.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1150px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("820px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget3.addWidget(this.image);
	widget2.addWidget(widget3);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("RIDERS FORM");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	widget2.addWidget(this.vbox);
	this.addWidget(widget2);
};

AppRidersForm.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppRidersForm"] === true;
};

let AppAdminLogin = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
	this.username = null;
	this.password = null;
};

AppAdminLogin.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppAdminLogin.prototype.constructor = AppAdminLogin;
AppAdminLogin.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppAdminLogin" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppAdminLogin.prototype._tobj = AppAdminLogin;

AppAdminLogin.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAdminLogin;
	return v.CTOR_AppAdminLogin_JkUiGuiApplicationContext(context);
};

AppAdminLogin.prototype.CTOR_AppAdminLogin_JkUiGuiApplicationContext = function(context) {
	this.password = null;
	this.username = null;
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppAdminLogin.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var loginbtn = JkWidgetCommonButtonWidget.forText(this.context, "Login", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminForm.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back To Menu", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	loginbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	loginbtn.setWidgetTextColor((JkGfxColor.white()));
	loginbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(loginbtn);
	this.vbox.addWidget(backbtn);
};

AppAdminLogin.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1150px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("820px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget3.addWidget(this.image);
	widget2.addWidget(widget3);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("ADMIN FORM");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	var widget5 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetText("Username");
	widget5.setWidgetTextColor((JkGfxColor.black()));
	widget5.setWidgetFontFamily("Raleway-Regular");
	widget5.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.vbox.addWidget(widget5);
	this.username = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	JkWidgetWidget.setWidgetId(this.username, "username");
	this.username.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NONASSISTED);
	this.username.setWidgetBackgroundColor((JkGfxColor.white()));
	this.username.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.username.setWidgetFontFamily("Raleway-Regular");
	this.username.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.username);
	var widget6 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget6.setWidgetText("Password");
	widget6.setWidgetTextColor((JkGfxColor.black()));
	widget6.setWidgetFontFamily("Times New Roman");
	widget6.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.vbox.addWidget(widget6);
	this.password = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	JkWidgetWidget.setWidgetId(this.password, "password");
	this.password.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_PASSWORD);
	this.password.setWidgetBackgroundColor((JkGfxColor.white()));
	this.password.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.password.setWidgetFontFamily("Times New Roman");
	this.password.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.password);
	widget2.addWidget(this.vbox);
	this.addWidget(widget2);
};

AppAdminLogin.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAdminLogin"] === true;
};

let AppMainScreen = function() {
	JkWidgetScreenForWidget.call(this);
	this.navi = null;
};

AppMainScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppMainScreen.prototype.constructor = AppMainScreen;
AppMainScreen.prototype._t = {
	"JkUiScreen" : true,
	"JkUiScreenWithContext" : true,
	"AppMainScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppMainScreen.prototype._tobj = AppMainScreen;

AppMainScreen.NEW = function() {
	var v = new AppMainScreen;
	return v.CTOR_AppMainScreen();
};

AppMainScreen.prototype.CTOR_AppMainScreen = function() {
	this.navi = null;
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppMainScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.navi = JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.navi.setWidgetEnableActionBar(false);
	this.setWidget(this.navi);
	this.navi.pushWidget((AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
};

AppMainScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = ["sample1.png", "sample.png"];
	context.prepareResources(resources, (function() {
		var main = AppMainScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppMainScreen.main();

AppMainScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppMainScreen"] === true;
};
