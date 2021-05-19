let AppAddNoteNotelist = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._note = null;
	this._description = null;
};

AppAddNoteNotelist.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppAddNoteNotelist.prototype.constructor = AppAddNoteNotelist;
AppAddNoteNotelist.prototype._t = {
	"AppAddNoteNotelist" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"JkLangStringObject" : true
};
AppAddNoteNotelist.prototype._tobj = AppAddNoteNotelist;

AppAddNoteNotelist.NEW = function() {
	var v = new AppAddNoteNotelist;
	return v.CTOR_AppAddNoteNotelist();
};

AppAddNoteNotelist.prototype.CTOR_AppAddNoteNotelist = function() {
	this._description = null;
	this._note = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppAddNoteNotelist.prototype.setNote = function(value) {
	this._note = value;
	return this;
};

AppAddNoteNotelist.prototype.getNote = function() {
	return this._note;
};

AppAddNoteNotelist.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppAddNoteNotelist.prototype.getDescription = function() {
	return this._description;
};

AppAddNoteNotelist.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._note != null) {
		v.setObject("note", (this.asJsonValue(this._note)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppAddNoteNotelist.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._note = v.getString("note", null);
	this._description = v.getString("description", null);
	return true;
};

AppAddNoteNotelist.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppAddNoteNotelist.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppAddNoteNotelist.prototype.toString = function() {
	return this.toJsonString();
};

AppAddNoteNotelist.forJsonString = function(o) {
	var v = AppAddNoteNotelist.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppAddNoteNotelist.forJsonObject = function(o) {
	var v = AppAddNoteNotelist.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppAddNoteNotelist.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddNoteNotelist"] === true;
};

let AppAddNote = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.container = null;
	this.vbox = null;
	this.note = null;
	this.description = null;
};

AppAddNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppAddNote.prototype.constructor = AppAddNote;
AppAddNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"AppAddNote" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppAddNote.prototype._tobj = AppAddNote;

AppAddNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAddNote;
	return v.CTOR_AppAddNote_JkUiGuiApplicationContext(context);
};

AppAddNote.prototype.CTOR_AppAddNote_JkUiGuiApplicationContext = function(context) {
	this.description = null;
	this.note = null;
	this.vbox = null;
	this.container = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppAddNote.prototype.onViewClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppNoteListApp.NEW_JkUiGuiApplicationContext(this.context)));
};

AppAddNote.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	var savebtn = JkWidgetCommonButtonWidget.forText(this.context, "SAVE", (function() {
		var t = AppAddNoteNotelist.NEW();
		t.setNote((this.note.getWidgetText()));
		t.setDescription((this.description.getWidgetText()));
		AppAPIClient.getInstance().add((t.toDynamicMap()), (function(response1) {
			this.context.showMessageDialog("Notice", "Note Saved!", null);
			this.note.setWidgetText("");
			this.description.setWidgetText("");
		}.bind(this)), (function(error1) {
			this.context.showMessageDialog("Notice", "Failed to Save Note!", null);
		}.bind(this)));
	}.bind(this)));
	savebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(savebtn);
};

AppAddNote.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2500um")));
	this.setWidgetMarginTop(100);
	this.setWidgetMarginRight(500);
	this.setWidgetMarginLeft(500);
	var widget = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetSpacing((this.context.getHeightValue("50um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("VIEW NOTE");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("500um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onViewClicked();
	}.bind(this)));
	widget.addWidget1(this.btnHome, 1.0);
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#264653")));
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("ADD NOTE");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.note = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.note.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.note.setWidgetPlaceholder("List Your Note");
	this.note.setWidgetBackgroundColor((JkGfxColor.black()));
	this.note.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.note.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.note);
	this.description = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.description.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.description.setWidgetPlaceholder("YOUR DESCRIPTION");
	this.description.setWidgetBackgroundColor((JkGfxColor.black()));
	this.description.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.description.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.description);
	widget3.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget3);
	widget2.addWidget(this.container);
	this.addWidget(widget2);
};

AppAddNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddNote"] === true;
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
	AppAPIClient.instance.setApiUrl("http://ec2-54-255-218-178.ap-southeast-1.compute.amazonaws.com:30106");
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

AppAPIClient.prototype.add = function(data, callback, errorCallback) {
	this.doPost("/note", data, callback, errorCallback);
};

AppAPIClient.prototype.update = function(id, data, callback, errorCallback) {
	this.doPut("/note/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype._delete = function(id, callback, errorCallback) {
	this.doDelete("/note/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getNotelist = function(callback, errorCallback) {
	this.doGet("/note", callback, errorCallback);
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

let AppDeleteNote = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.container = null;
	this.vbox = null;
	this.id = null;
};

AppDeleteNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppDeleteNote.prototype.constructor = AppDeleteNote;
AppDeleteNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetContainerWidget" : true,
	"AppDeleteNote" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppDeleteNote.prototype._tobj = AppDeleteNote;

AppDeleteNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppDeleteNote;
	return v.CTOR_AppDeleteNote_JkUiGuiApplicationContext(context);
};

AppDeleteNote.prototype.CTOR_AppDeleteNote_JkUiGuiApplicationContext = function(context) {
	this.id = null;
	this.vbox = null;
	this.container = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppDeleteNote.prototype.onViewClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppNoteListApp.NEW_JkUiGuiApplicationContext(this.context)));
};

AppDeleteNote.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	var deletebtn = JkWidgetCommonButtonWidget.forText(this.context, "SUBMIT", (function() {
		AppAPIClient.getInstance().getNotelist((function(response1) {
			var data = response1.getDynamicMap("data");
			if(!(data != null)) {
				return;
			}
			var records = data.getDynamicVector("records");
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
						if(record.getString("id", null) == this.id.getWidgetText()) {
							var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
							popup.showConfirmDialog("Confirmation", "Continue to delete this Note?", (function() {
								AppAPIClient.getInstance()._delete((this.id.getWidgetText()), (function(res1) {
									this.context.showMessageDialog("Notice", "Successfully deleted!", null);
									this.id.setWidgetText("");
								}.bind(this)), (function(err1) {
									this.context.showMessageDialog("Notice", "Failed!", null);
								}.bind(this)));
							}.bind(this)), (function() {
								;
							}.bind(this)));
						}
					}
				}
			}
		}.bind(this)), null);
	}.bind(this)));
	deletebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(deletebtn);
};

AppDeleteNote.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2500um")));
	this.setWidgetMarginTop(100);
	this.setWidgetMarginRight(500);
	this.setWidgetMarginLeft(500);
	var widget = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("VIEW NOTE LIST");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onViewClicked();
	}.bind(this)));
	widget.addWidget1(this.btnHome, 1.0);
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#264653")));
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("DELETE NOTE");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("PLEASE INPUT THE ID YOU WANT TO DELETE");
	this.id.setWidgetBackgroundColor((JkGfxColor.black()));
	this.id.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	widget3.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget3);
	widget2.addWidget(this.container);
	this.addWidget(widget2);
};

AppDeleteNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppDeleteNote"] === true;
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
	file.addEntry2("NoteListApp", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppNoteListApp.NEW_JkUiGuiApplicationContext(this.context)));
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

let AppNoteListApp = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnAdd = null;
	this.btnUpdate = null;
	this.btnDelete = null;
	this.container = null;
	this.vbox = null;
	this.grid = null;
};

AppNoteListApp.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppNoteListApp.prototype.constructor = AppNoteListApp;
AppNoteListApp.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetWidgetWithLayout" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"AppNoteListApp" : true
};
AppNoteListApp.prototype._tobj = AppNoteListApp;

AppNoteListApp.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppNoteListApp;
	return v.CTOR_AppNoteListApp_JkUiGuiApplicationContext(context);
};

AppNoteListApp.prototype.CTOR_AppNoteListApp_JkUiGuiApplicationContext = function(context) {
	this.grid = null;
	this.vbox = null;
	this.container = null;
	this.btnDelete = null;
	this.btnUpdate = null;
	this.btnAdd = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppNoteListApp.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("ID", "id", 3.0, 0);
	this.grid.addColumn("Note", "note", 3.0, 0);
	this.grid.addColumn("Description", "description", 3.0, 0);
	this.grid.addWidgetHeaderRow();
	AppAPIClient.getInstance().getNotelist((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.grid.addRow(["No NOte!"], null, null);
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
						this.grid.addRow([record.getString("id", null), record.getString("note", null), record.getString("description", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), (function(err1) {
		this.grid.addRow(["Error"], null, null);
	}.bind(this)));
};

AppNoteListApp.prototype.onViewClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddNote.NEW_JkUiGuiApplicationContext(this.context)));
};

AppNoteListApp.prototype.onUpdateClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUpdateNote.NEW_JkUiGuiApplicationContext(this.context)));
};

AppNoteListApp.prototype.onDeleteClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppDeleteNote.NEW_JkUiGuiApplicationContext(this.context)));
};

AppNoteListApp.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2500um")));
	this.setWidgetMarginTop(100);
	this.setWidgetMarginRight(500);
	this.setWidgetMarginLeft(500);
	var widget = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnAdd = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnAdd.setWidgetText("ADD NOTE");
	this.btnAdd.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnAdd.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	this.btnAdd.setWidgetClickHandler((function() {
		this.onViewClicked();
	}.bind(this)));
	widget.addWidget1(this.btnAdd, 1.0);
	this.btnUpdate = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnUpdate.setWidgetText("UPDATE NOTE");
	this.btnUpdate.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnUpdate.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	this.btnUpdate.setWidgetClickHandler((function() {
		this.onUpdateClicked();
	}.bind(this)));
	widget.addWidget1(this.btnUpdate, 1.0);
	this.btnDelete = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnDelete.setWidgetText("DELETE NOTE");
	this.btnDelete.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnDelete.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	this.btnDelete.setWidgetClickHandler((function() {
		this.onDeleteClicked();
	}.bind(this)));
	widget.addWidget1(this.btnDelete, 1.0);
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#264653")));
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("20000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("NOTE LIST");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	widget3.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget3);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.grid.setWidgetCellPadding(1);
	this.container.addWidget(this.grid);
	widget2.addWidget(this.container);
	this.addWidget(widget2);
};

AppNoteListApp.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppNoteListApp"] === true;
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
	this.navi.pushWidget((AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
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

let AppUpdateNoteNote = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._note = null;
	this._description = null;
};

AppUpdateNoteNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppUpdateNoteNote.prototype.constructor = AppUpdateNoteNote;
AppUpdateNoteNote.prototype._t = {
	"JkLangStringObject" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"AppUpdateNoteNote" : true
};
AppUpdateNoteNote.prototype._tobj = AppUpdateNoteNote;

AppUpdateNoteNote.NEW = function() {
	var v = new AppUpdateNoteNote;
	return v.CTOR_AppUpdateNoteNote();
};

AppUpdateNoteNote.prototype.CTOR_AppUpdateNoteNote = function() {
	this._description = null;
	this._note = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppUpdateNoteNote.prototype.setNote = function(value) {
	this._note = value;
	return this;
};

AppUpdateNoteNote.prototype.getNote = function() {
	return this._note;
};

AppUpdateNoteNote.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppUpdateNoteNote.prototype.getDescription = function() {
	return this._description;
};

AppUpdateNoteNote.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._note != null) {
		v.setObject("note", (this.asJsonValue(this._note)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppUpdateNoteNote.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._note = v.getString("note", null);
	this._description = v.getString("description", null);
	return true;
};

AppUpdateNoteNote.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppUpdateNoteNote.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppUpdateNoteNote.prototype.toString = function() {
	return this.toJsonString();
};

AppUpdateNoteNote.forJsonString = function(o) {
	var v = AppUpdateNoteNote.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppUpdateNoteNote.forJsonObject = function(o) {
	var v = AppUpdateNoteNote.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppUpdateNoteNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateNoteNote"] === true;
};

let AppUpdateNote = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.container = null;
	this.vbox = null;
	this.id = null;
	this.note = null;
	this.description = null;
};

AppUpdateNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppUpdateNote.prototype.constructor = AppUpdateNote;
AppUpdateNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidget" : true,
	"AppUpdateNote" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppUpdateNote.prototype._tobj = AppUpdateNote;

AppUpdateNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppUpdateNote;
	return v.CTOR_AppUpdateNote_JkUiGuiApplicationContext(context);
};

AppUpdateNote.prototype.CTOR_AppUpdateNote_JkUiGuiApplicationContext = function(context) {
	this.description = null;
	this.note = null;
	this.id = null;
	this.vbox = null;
	this.container = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppUpdateNote.prototype.onViewClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppNoteListApp.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUpdateNote.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	var updatebtn = JkWidgetCommonButtonWidget.forText(this.context, "SUBMIT", (function() {
		AppAPIClient.getInstance().getNotelist((function(response1) {
			var data = response1.getDynamicMap("data");
			if(!(data != null)) {
				return;
			}
			var records = data.getDynamicVector("records");
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
						if(record.getString("id", null) == this.id.getWidgetText()) {
							var notelist = AppUpdateNoteNote.NEW();
							var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
							popup.showConfirmDialog("Confirmation", "Continue to Update Note?", (function() {
								notelist.setNote((this.note.getWidgetText()));
								notelist.setDescription((this.description.getWidgetText()));
								AppAPIClient.getInstance().update((this.id.getWidgetText()), (notelist.toDynamicMap()), (function(res1) {
									this.context.showMessageDialog("Notice", "Successfully updated!", null);
									this.id.setWidgetText("");
									this.note.setWidgetText("");
									this.description.setWidgetText("");
								}.bind(this)), (function(err1) {
									this.context.showMessageDialog("Notice", "Failed!", null);
								}.bind(this)));
							}.bind(this)), (function() {
								;
							}.bind(this)));
						}
					}
				}
			}
		}.bind(this)), null);
	}.bind(this)));
	updatebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(updatebtn);
};

AppUpdateNote.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2500um")));
	this.setWidgetMarginTop(100);
	this.setWidgetMarginRight(500);
	this.setWidgetMarginLeft(500);
	var widget = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("VIEW NOTE LIST");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#264653")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onViewClicked();
	}.bind(this)));
	widget.addWidget1(this.btnHome, 1.0);
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#264653")));
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("UPDATE NOTE");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("PLEASE INPUT THE ID YOU WANT TO UPDATE");
	this.id.setWidgetBackgroundColor((JkGfxColor.black()));
	this.id.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.note = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.note.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.note.setWidgetPlaceholder("Note");
	this.note.setWidgetBackgroundColor((JkGfxColor.black()));
	this.note.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.note.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.note);
	this.description = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.description.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.description.setWidgetPlaceholder("DESCRIPTION");
	this.description.setWidgetBackgroundColor((JkGfxColor.black()));
	this.description.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.description.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.description);
	widget3.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget3);
	widget2.addWidget(this.container);
	this.addWidget(widget2);
};

AppUpdateNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateNote"] === true;
};
