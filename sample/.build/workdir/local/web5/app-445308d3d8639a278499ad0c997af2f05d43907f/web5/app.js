let AppHomeWidgetScreen = function() {
	JkWidgetScreenForWidget.call(this);
};

AppHomeWidgetScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppHomeWidgetScreen.prototype.constructor = AppHomeWidgetScreen;
AppHomeWidgetScreen.prototype._t = {
	"AppHomeWidgetScreen" : true,
	"JkUiScreenWithContext" : true,
	"JkUiScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppHomeWidgetScreen.prototype._tobj = AppHomeWidgetScreen;

AppHomeWidgetScreen.NEW = function() {
	var v = new AppHomeWidgetScreen;
	return v.CTOR_AppHomeWidgetScreen();
};

AppHomeWidgetScreen.prototype.CTOR_AppHomeWidgetScreen = function() {
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppHomeWidgetScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.setWidget((AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
};

AppHomeWidgetScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = ["sample1.png", "sample.png"];
	context.prepareResources(resources, (function() {
		var main = AppHomeWidgetScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppHomeWidgetScreen.main();

AppHomeWidgetScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppHomeWidgetScreen"] === true;
};

let AppHomeWidget = function() {
	JkWidgetLayerWidget.call(this);
	this.menu = null;
	this.image = null;
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
	this.image = null;
	this.menu = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppHomeWidget.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var file = this.menu.addMenu("Menu", null);
	file.addEntry2("Login", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLogin.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	file.addEntry2("Save", (function() {
		console.log("Save");
	}.bind(this)));
	file.addEntry2("Exit", (function() {
		console.log("Exit");
	}.bind(this)));
	var edit = this.menu.addMenu("Edit", null);
	edit.addEntry2("Cut", (function() {
		console.log("Cut");
	}.bind(this)));
	edit.addEntry2("Copy", (function() {
		console.log("Copy");
	}.bind(this)));
	edit.addEntry2("Paste", (function() {
		console.log("Paste");
	}.bind(this)));
};

AppHomeWidget.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.forString("#FFFFFF")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetMargin(0);
	widget2.setWidgetSpacing(0);
	this.menu = JkWidgetCommonMenuBarWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.addWidget(this.menu);
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample1");
	this.image.setWidgetImageWidth((this.context.getHeightValue("950px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("720px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget2.addWidget(this.image);
	this.addWidget(widget2);
};

AppHomeWidget.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppHomeWidget"] === true;
};

let AppLogin = function() {
	JkWidgetLayerWidget.call(this);
	this.image = null;
	this.vbox = null;
	this.username = null;
	this.password = null;
};

AppLogin.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppLogin.prototype.constructor = AppLogin;
AppLogin.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"AppLogin" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppLogin.prototype._tobj = AppLogin;

AppLogin.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppLogin;
	return v.CTOR_AppLogin_JkUiGuiApplicationContext(context);
};

AppLogin.prototype.CTOR_AppLogin_JkUiGuiApplicationContext = function(context) {
	this.password = null;
	this.username = null;
	this.vbox = null;
	this.image = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppLogin.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var loginbtn = JkWidgetCommonButtonWidget.forText(this.context, "Login", (function() {
	}.bind(this)));
	loginbtn.setWidgetBackgroundColor((JkGfxColor.instance("#B6CAE3")));
	loginbtn.setWidgetTextColor((JkGfxColor.white()));
	loginbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(loginbtn);
};

AppLogin.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetSpacing((this.context.getHeightValue("20mm")));
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("sample");
	this.image.setWidgetImageWidth((this.context.getHeightValue("1000px")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("700px")));
	this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
	widget3.addWidget(this.image);
	widget2.addWidget(widget3);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("LOGIN FORM");
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

AppLogin.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppLogin"] === true;
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
