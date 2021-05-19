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
	AppAPIClient.instance.setApiUrl("http://ec2-54-255-198-53.ap-southeast-1.compute.amazonaws.com:30140");
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

AppAPIClient.prototype.addTask = function(data, callback, errorCallback) {
	this.doPost("/task/", data, callback, errorCallback);
};

AppAPIClient.prototype.updateTask = function(id, data, callback, errorCallback) {
	this.doPut("/task/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteTask = function(id, callback, errorCallback) {
	this.doDelete("/task/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getTasks = function(callback, errorCallback) {
	this.doGet("/task/", callback, errorCallback);
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

let AppTasklistAddTaskModel = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._id = null;
	this._name = null;
	this._description = null;
};

AppTasklistAddTaskModel.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppTasklistAddTaskModel.prototype.constructor = AppTasklistAddTaskModel;
AppTasklistAddTaskModel.prototype._t = {
	"JkLangStringObject" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"AppTasklistAddTaskModel" : true
};
AppTasklistAddTaskModel.prototype._tobj = AppTasklistAddTaskModel;

AppTasklistAddTaskModel.NEW = function() {
	var v = new AppTasklistAddTaskModel;
	return v.CTOR_AppTasklistAddTaskModel();
};

AppTasklistAddTaskModel.prototype.CTOR_AppTasklistAddTaskModel = function() {
	this._description = null;
	this._name = null;
	this._id = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppTasklistAddTaskModel.prototype.setId = function(value) {
	this._id = value;
	return this;
};

AppTasklistAddTaskModel.prototype.getId = function() {
	return this._id;
};

AppTasklistAddTaskModel.prototype.setName = function(value) {
	this._name = value;
	return this;
};

AppTasklistAddTaskModel.prototype.getName = function() {
	return this._name;
};

AppTasklistAddTaskModel.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppTasklistAddTaskModel.prototype.getDescription = function() {
	return this._description;
};

AppTasklistAddTaskModel.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._id != null) {
		v.setObject("id", (this.asJsonValue(this._id)));
	}
	if(this._name != null) {
		v.setObject("name", (this.asJsonValue(this._name)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppTasklistAddTaskModel.prototype.fromJsonObject = function(o1) {
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
	this._name = v.getString("name", null);
	this._description = v.getString("description", null);
	return true;
};

AppTasklistAddTaskModel.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppTasklistAddTaskModel.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppTasklistAddTaskModel.prototype.toString = function() {
	return this.toJsonString();
};

AppTasklistAddTaskModel.forJsonString = function(o) {
	var v = AppTasklistAddTaskModel.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppTasklistAddTaskModel.forJsonObject = function(o) {
	var v = AppTasklistAddTaskModel.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppTasklistAddTaskModel.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppTasklistAddTaskModel"] === true;
};

let AppTasklistAdd = function() {
	JkWidgetLayerWidget.call(this);
	this.container = null;
	this.form = null;
	this.submitMessage = null;
	this.idInput = null;
	this.nameInput = null;
	this.descInput = null;
	this.addTaskButton = null;
	this.list = null;
};

AppTasklistAdd.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppTasklistAdd.prototype.constructor = AppTasklistAdd;
AppTasklistAdd.prototype._t = {
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppTasklistAdd" : true,
	"JkWidgetTitledWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppTasklistAdd.prototype._tobj = AppTasklistAdd;

AppTasklistAdd.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppTasklistAdd;
	return v.CTOR_AppTasklistAdd_JkUiGuiApplicationContext(context);
};

AppTasklistAdd.prototype.CTOR_AppTasklistAdd_JkUiGuiApplicationContext = function(context) {
	this.list = null;
	this.addTaskButton = null;
	this.descInput = null;
	this.nameInput = null;
	this.idInput = null;
	this.submitMessage = null;
	this.form = null;
	this.container = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppTasklistAdd.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	AppAPIClient.getInstance().getTasks((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, (JkWidgetLabelWidget.forText(this.context, "Hello")), 0.5, 0.5, 0)), 1.0);
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						var task = (JkLangString.safeString((record.getString("name", null)))) + (" - ") + (JkLangString.safeString((record.getString("description", null))));
						var lblTask = JkWidgetLabelWidget.forText(this.context, task);
						var hbox = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, (this.context.getHeightValue("0.5mm")));
						hbox.addWidget(lblTask);
						this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, hbox, 0.5, 0.5, 0)), 1.0);
					}
				}
			}
		}
	}.bind(this)), null);
};

AppTasklistAdd.prototype.getWidgetTitle = function() {
	return "Task list";
};

AppTasklistAdd.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetScrollBarDisabled(false);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.white()));
	var widget2 = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.form = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMargin((~(~1.0)));
	this.submitMessage = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.submitMessage.setWidgetText("test");
	widget3.addWidget(this.submitMessage);
	this.form.addWidget(widget3);
	this.idInput = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.idInput.setWidgetPlaceholder("ID");
	this.form.addWidget(this.idInput);
	this.nameInput = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.nameInput.setWidgetPlaceholder("Name");
	this.form.addWidget(this.nameInput);
	this.descInput = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.descInput.setWidgetPlaceholder("Description");
	this.form.addWidget(this.descInput);
	this.addTaskButton = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.addTaskButton.setWidgetText("Add Task");
	this.addTaskButton.setWidgetClickHandler((function() {
		var task = AppTasklistAddTaskModel.NEW();
		task.setId((this.idInput.getWidgetText()));
		task.setName((this.nameInput.getWidgetText()));
		task.setDescription((this.descInput.getWidgetText()));
		AppAPIClient.getInstance().addTask((task.toDynamicMap()), (function(res1) {
			this.submitMessage.setWidgetText("Successfully Added Task");
			var task1 = (JkLangString.safeString((this.nameInput.getWidgetText()))) + (" - ") + (JkLangString.safeString((this.descInput.getWidgetText())));
			var lblTask = JkWidgetLabelWidget.forText(this.context, task1);
			var hbox = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, (this.context.getHeightValue("0.5mm")));
			hbox.addWidget(lblTask);
			this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, hbox, 0.5, 0.5, 0)), 1.0);
			this.idInput.setWidgetText("");
			this.nameInput.setWidgetText("");
			this.descInput.setWidgetText("");
		}.bind(this)), (function(err1) {
			this.submitMessage.setWidgetText("Failed to save task");
		}.bind(this)));
	}.bind(this)));
	this.form.addWidget(this.addTaskButton);
	widget2.addWidget(this.form);
	this.list = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.list.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.list.setWidgetSpacing((this.context.getHeightValue("5mm")));
	widget2.addWidget(this.list);
	this.container.addWidget(widget2);
	widget.addWidget(this.container);
	this.addWidget(widget);
};

AppTasklistAdd.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppTasklistAdd"] === true;
};

let AppTasklist = function() {
	JkWidgetLayerWidget.call(this);
	this.container = null;
	this.list = null;
};

AppTasklist.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppTasklist.prototype.constructor = AppTasklist;
AppTasklist.prototype._t = {
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppTasklist" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetTitledWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppTasklist.prototype._tobj = AppTasklist;

AppTasklist.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppTasklist;
	return v.CTOR_AppTasklist_JkUiGuiApplicationContext(context);
};

AppTasklist.prototype.CTOR_AppTasklist_JkUiGuiApplicationContext = function(context) {
	this.list = null;
	this.container = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppTasklist.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	AppAPIClient.getInstance().getTasks((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, (JkWidgetLabelWidget.forText(this.context, "hmmmm")), 0.5, 0.5, 0)), 1.0);
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						var task = (JkLangString.safeString((record.getString("name", null)))) + (" - ") + (JkLangString.safeString((record.getString("description", null))));
						var lblTask = JkWidgetLabelWidget.forText(this.context, task);
						var hbox = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, (this.context.getHeightValue("0.5mm")));
						hbox.addWidget(lblTask);
						this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, hbox, 0.5, 0.5, 0)), 1.0);
					}
				}
			}
		}
	}.bind(this)), null);
};

AppTasklist.prototype.getWidgetTitle = function() {
	return "Task list";
};

AppTasklist.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.white()));
	this.list = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.list.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.list.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.container.addWidget(this.list);
	widget.addWidget(this.container);
	this.addWidget(widget);
};

AppTasklist.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppTasklist"] === true;
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
	AppAPIClient.create(this.context, this.navi);
	this.navi.pushWidget((AppTasklistAdd.NEW_JkUiGuiApplicationContext(this.context)));
};

AppMainScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = [];
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
