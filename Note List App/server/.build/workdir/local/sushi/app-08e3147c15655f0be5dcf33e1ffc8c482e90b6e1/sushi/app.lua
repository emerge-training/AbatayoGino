app = app or {}

app.NoteListAppApiServer = _g.jk.server.web.WebServer._create()
app.NoteListAppApiServer.__index = app.NoteListAppApiServer
_vm:set_metatable(app.NoteListAppApiServer, {
	__index = _g.jk.server.web.WebServer
})

function app.NoteListAppApiServer._create()
	local v = _vm:set_metatable({}, app.NoteListAppApiServer)
	return v
end

function app.NoteListAppApiServer:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NoteListAppApiServer'
	self['_isType.app.NoteListAppApiServer'] = true
end

function app.NoteListAppApiServer:_construct0()
	app.NoteListAppApiServer._init(self)
	do _g.jk.server.web.WebServer._construct0(self) end
	return self
end

function app.NoteListAppApiServer:initializeServer(server)
	if not _g.jk.server.web.WebServer.initializeServer(self, server) then
		do return false end
	end
	do server:setCreateOptionsResponseHandler(function(req)
		do return _g.app.NoteListAppConfig:getCorsUtil():handlePreflightRequest(req) end
	end) end
	do return true end
end

function app.NoteListAppApiServer:initializeApplication()
	if not _g.jk.server.web.WebServer.initializeApplication(self) then
		do return false end
	end
	do
		local db = _g.app.NoteListAppDatabase:forContext(self.ctx)
		do db:updateTables() end
		do db:close() end
		do return true end
	end
end

function app.NoteListAppApiServer:_main(args)
	do return _g.app.NoteListAppApiServer._construct0(_g.app.NoteListAppApiServer._create()):setWorker("class:app.NoteListAppApiHandler"):executeMain(args) end
end

app.NoteListAppApiHandler = _g.jk.http.worker.HTTPRPCRouter._create()
app.NoteListAppApiHandler.__index = app.NoteListAppApiHandler
_vm:set_metatable(app.NoteListAppApiHandler, {
	__index = _g.jk.http.worker.HTTPRPCRouter
})

function app.NoteListAppApiHandler._create()
	local v = _vm:set_metatable({}, app.NoteListAppApiHandler)
	return v
end

function app.NoteListAppApiHandler:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NoteListAppApiHandler'
	self['_isType.app.NoteListAppApiHandler'] = true
	self.db = nil
	self.cors = _g.app.NoteListAppConfig:getCorsUtil()
end

function app.NoteListAppApiHandler:_construct0()
	app.NoteListAppApiHandler._init(self)
	do _g.jk.http.worker.HTTPRPCRouter._construct0(self) end
	return self
end

app.NoteListAppApiHandler.NoteRequest = _g.jk.json.JSONObjectAdapter._create()
app.NoteListAppApiHandler.NoteRequest.__index = app.NoteListAppApiHandler.NoteRequest
_vm:set_metatable(app.NoteListAppApiHandler.NoteRequest, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.NoteListAppApiHandler.NoteRequest._create()
	local v = _vm:set_metatable({}, app.NoteListAppApiHandler.NoteRequest)
	return v
end

function app.NoteListAppApiHandler.NoteRequest:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NoteListAppApiHandler.NoteRequest'
	self['_isType.app.NoteListAppApiHandler.NoteRequest'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._note = nil
	self._description = nil
end

function app.NoteListAppApiHandler.NoteRequest:_construct0()
	app.NoteListAppApiHandler.NoteRequest._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.NoteListAppApiHandler.NoteRequest:setIdValue(value)
	do return self:setId(_g.jk.lang.Integer:asObject(value)) end
end

function app.NoteListAppApiHandler.NoteRequest:getIdValue()
	do return _g.jk.lang.Integer:asInteger(self._id) end
end

function app.NoteListAppApiHandler.NoteRequest:setId(value)
	self._id = value
	do return self end
end

function app.NoteListAppApiHandler.NoteRequest:getId()
	do return self._id end
end

function app.NoteListAppApiHandler.NoteRequest:setNote(value)
	self._note = value
	do return self end
end

function app.NoteListAppApiHandler.NoteRequest:getNote()
	do return self._note end
end

function app.NoteListAppApiHandler.NoteRequest:setDescription(value)
	self._description = value
	do return self end
end

function app.NoteListAppApiHandler.NoteRequest:getDescription()
	do return self._description end
end

function app.NoteListAppApiHandler.NoteRequest:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._note ~= nil then
		do v:setObject("note", self:asJsonValue(self._note)) end
	end
	if self._description ~= nil then
		do v:setObject("description", self:asJsonValue(self._description)) end
	end
	do return v end
end

function app.NoteListAppApiHandler.NoteRequest:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	if v:get("id") ~= nil then
		self._id = _g.jk.lang.Integer:asObject(v:getInteger("id", 0))
	end
	self._note = v:getString("note", nil)
	self._description = v:getString("description", nil)
	do return true end
end

function app.NoteListAppApiHandler.NoteRequest:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.NoteListAppApiHandler.NoteRequest:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.NoteListAppApiHandler.NoteRequest:toString()
	do return self:toJsonString() end
end

function app.NoteListAppApiHandler.NoteRequest:forJsonString(o)
	local v = _g.app.NoteListAppApiHandler.NoteRequest._construct0(_g.app.NoteListAppApiHandler.NoteRequest._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.NoteListAppApiHandler.NoteRequest:forJsonObject(o)
	local v = _g.app.NoteListAppApiHandler.NoteRequest._construct0(_g.app.NoteListAppApiHandler.NoteRequest._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.NoteListAppApiHandler:getDatabase()
	if not (self.db ~= nil) then
		self.db = _g.app.NoteListAppDatabase:forContext(self:getCtx())
		do self.db:updateTables() end
	end
	do return self.db end
end

function app.NoteListAppApiHandler:postProcess(req, resp)
	do self.cors:handleWorkerRequest(req, resp) end
end

function app.NoteListAppApiHandler:initRoutes()
	do _g.jk.http.worker.HTTPRPCRouter.initRoutes(self) end
	do self:addRoute("GET", "/note", function(req, resp, vars)
		local note = self:getDatabase():getNote()
		if not (note ~= nil) then
			do return end
		end
		do self:setOkResponse(resp, note) end
	end) end
	do self:addRoute("POST", "/note", function(req, resp, vars)
		local requestData = _g.app.NoteListAppApiHandler.NoteRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local note = _g.app.NoteListAppDatabase.Notelist._construct0(_g.app.NoteListAppDatabase.Notelist._create())
			do note:setNote(requestData:getNote()) end
			do note:setDescription(requestData:getDescription()) end
			if not (self:getDatabase():addNote(note) ~= nil) then
				do self:setErrorResponse(resp, "failedToSaveNote", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("PUT", "/note/:id", function(req, resp, vars)
		local requestData = _g.app.NoteListAppApiHandler.NoteRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local note = _g.app.NoteListAppDatabase.Notelist._construct0(_g.app.NoteListAppDatabase.Notelist._create())
			do note:setNote(requestData:getNote()) end
			do note:setDescription(requestData:getDescription()) end
			if not self:getDatabase():updateNote(vars:getString("id", nil), note) then
				do self:setErrorResponse(resp, "failedToUpdateNote", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("DELETE", "/note/:id", function(req, resp, vars)
		if not self:getDatabase():deleteNote(vars:getString("id", nil)) then
			do self:setErrorResponse(resp, "failedToDeleteNote", "500") end
			do return end
		end
		do self:setOkResponse(resp, nil) end
	end) end
end

app.NoteListAppDatabase = {}
app.NoteListAppDatabase.__index = app.NoteListAppDatabase
_vm:set_metatable(app.NoteListAppDatabase, {})

app.NoteListAppDatabase.NOTELIST = "notelist"

function app.NoteListAppDatabase._create()
	local v = _vm:set_metatable({}, app.NoteListAppDatabase)
	return v
end

function app.NoteListAppDatabase:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NoteListAppDatabase'
	self['_isType.app.NoteListAppDatabase'] = true
	self.db = nil
end

function app.NoteListAppDatabase:_construct0()
	app.NoteListAppDatabase._init(self)
	return self
end

app.NoteListAppDatabase.Notelist = _g.jk.json.JSONObjectAdapter._create()
app.NoteListAppDatabase.Notelist.__index = app.NoteListAppDatabase.Notelist
_vm:set_metatable(app.NoteListAppDatabase.Notelist, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.NoteListAppDatabase.Notelist._create()
	local v = _vm:set_metatable({}, app.NoteListAppDatabase.Notelist)
	return v
end

function app.NoteListAppDatabase.Notelist:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NoteListAppDatabase.Notelist'
	self['_isType.app.NoteListAppDatabase.Notelist'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._note = nil
	self._description = nil
end

function app.NoteListAppDatabase.Notelist:_construct0()
	app.NoteListAppDatabase.Notelist._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.NoteListAppDatabase.Notelist:setIdValue(value)
	do return self:setId(_g.jk.lang.Integer:asObject(value)) end
end

function app.NoteListAppDatabase.Notelist:getIdValue()
	do return _g.jk.lang.Integer:asInteger(self._id) end
end

function app.NoteListAppDatabase.Notelist:setId(value)
	self._id = value
	do return self end
end

function app.NoteListAppDatabase.Notelist:getId()
	do return self._id end
end

function app.NoteListAppDatabase.Notelist:setNote(value)
	self._note = value
	do return self end
end

function app.NoteListAppDatabase.Notelist:getNote()
	do return self._note end
end

function app.NoteListAppDatabase.Notelist:setDescription(value)
	self._description = value
	do return self end
end

function app.NoteListAppDatabase.Notelist:getDescription()
	do return self._description end
end

function app.NoteListAppDatabase.Notelist:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._note ~= nil then
		do v:setObject("note", self:asJsonValue(self._note)) end
	end
	if self._description ~= nil then
		do v:setObject("description", self:asJsonValue(self._description)) end
	end
	do return v end
end

function app.NoteListAppDatabase.Notelist:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	if v:get("id") ~= nil then
		self._id = _g.jk.lang.Integer:asObject(v:getInteger("id", 0))
	end
	self._note = v:getString("note", nil)
	self._description = v:getString("description", nil)
	do return true end
end

function app.NoteListAppDatabase.Notelist:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.NoteListAppDatabase.Notelist:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.NoteListAppDatabase.Notelist:toString()
	do return self:toJsonString() end
end

function app.NoteListAppDatabase.Notelist:forJsonString(o)
	local v = _g.app.NoteListAppDatabase.Notelist._construct0(_g.app.NoteListAppDatabase.Notelist._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.NoteListAppDatabase.Notelist:forJsonObject(o)
	local v = _g.app.NoteListAppDatabase.Notelist._construct0(_g.app.NoteListAppDatabase.Notelist._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.NoteListAppDatabase:forContext(ctx)
	local cstr = _g.jk.env.EnvironmentVariable:get("TASK_DATABASE")
	do _g.jk.log.Log:debug(ctx, "Opening database connection: '" .. _g.jk.lang.String:safeString(cstr) .. "'") end
	self.db = _g.jk.mysql.MySQLDatabase:forConnectionStringSync(ctx, cstr)
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("failedToConnectToDatabase", cstr) end
	end
	do
		local v = _g.app.NoteListAppDatabase._construct0(_g.app.NoteListAppDatabase._create())
		do v:setDb(self.db) end
		do return v end
	end
end

function app.NoteListAppDatabase:updateTable(table)
	if not (table ~= nil) then
		do _g.jk.lang.Error:throw("nullTabel", "updateTable") end
	end
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("nullTable", "updateTable") end
	end
	if not self.db:ensureTableExistsSync(table) then
		do _g.jk.lang.Error:throw("failedToUpdateTable", table:getName()) end
	end
end

function app.NoteListAppDatabase:updateTables()
	local notelist = _g.jk.sql.SQLTableInfo:forName(_g.app.NoteListAppDatabase.NOTELIST)
	do notelist:addIntegerKeyColumn("id") end
	do notelist:addStringColumn("note") end
	do notelist:addStringColumn("description") end
	do self:updateTable(notelist) end
end

function app.NoteListAppDatabase:addNote(notelist)
	if not (notelist ~= nil) then
		do return nil end
	end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.NoteListAppDatabase.NOTELIST, notelist:toDynamicMap())) then
		do return nil end
	end
	do return notelist end
end

function app.NoteListAppDatabase:updateNote(id, notelist)
	if not (notelist ~= nil) then
		do return false end
	end
	do
		local criteria = _g.app.NoteListAppDatabase.Notelist._construct0(_g.app.NoteListAppDatabase.Notelist._create())
		do criteria:setIdValue(_g.jk.lang.String:toInteger(id)) end
		do return self.db:executeSync(self.db:prepareUpdateStatementSync(_g.app.NoteListAppDatabase.NOTELIST, criteria:toDynamicMap(), notelist:toDynamicMap())) end
	end
end

function app.NoteListAppDatabase:getNote()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.NoteListAppDatabase.NOTELIST, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local notelist = _g.app.NoteListAppDatabase.Notelist:forJsonObject(o)
			if not (notelist ~= nil) then
				goto _continue1
			end
			do _g.jk.lang.Vector:append(v, notelist) end
		end
		::_continue1::
	end
	do
		local data = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
		do data:setObject("records", v) end
		do return data end
	end
end

function app.NoteListAppDatabase:deleteNote(id)
	local criteria = _g.app.NoteListAppDatabase.Notelist._construct0(_g.app.NoteListAppDatabase.Notelist._create())
	do criteria:setIdValue(_g.jk.lang.String:toInteger(id)) end
	do return self.db:executeSync(self.db:prepareDeleteStatementSync(_g.app.NoteListAppDatabase.NOTELIST, criteria:toDynamicMap())) end
end

function app.NoteListAppDatabase:close()
	if self.db ~= nil then
		do self.db:closeSync() end
	end
	self.db = nil
end

function app.NoteListAppDatabase:getDb()
	do return self.db end
end

function app.NoteListAppDatabase:setDb(v)
	self.db = v
	do return self end
end

app.NoteListAppConfig = {}
app.NoteListAppConfig.__index = app.NoteListAppConfig
_vm:set_metatable(app.NoteListAppConfig, {})

function app.NoteListAppConfig._create()
	local v = _vm:set_metatable({}, app.NoteListAppConfig)
	return v
end

function app.NoteListAppConfig:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NoteListAppConfig'
	self['_isType.app.NoteListAppConfig'] = true
end

function app.NoteListAppConfig:_construct0()
	app.NoteListAppConfig._init(self)
	return self
end

function app.NoteListAppConfig:getAllowedOrigins()
	do return {
		"http://localhost:8080",
		"http://localhost:8081",
		"http://ec2-54-255-218-178.ap-southeast-1.compute.amazonaws.com:30021"
	} end
end

function app.NoteListAppConfig:getCorsUtil()
	local allowed = {}
	local array = self:getAllowedOrigins()
	if array ~= nil then
		local n = 0
		local m = #array
		do
			n = 0
			while n < m do
				local origin = array[n + 1]
				if origin ~= nil then
					do _g.jk.lang.Vector:append(allowed, _g.jk.lang.String:asString(origin)) end
				end
				do n = n + 1 end
			end
		end
	end
	do return _g.jk.http.server.cors.HTTPServerCORSUtil:forWhitelist(allowed) end
end

function _main(args)
	do return app.NoteListAppApiServer:_main(args) end
end
