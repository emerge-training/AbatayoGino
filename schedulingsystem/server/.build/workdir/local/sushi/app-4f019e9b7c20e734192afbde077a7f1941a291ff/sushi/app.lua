app = app or {}

app.SchedulingSystemConfig = {}
app.SchedulingSystemConfig.__index = app.SchedulingSystemConfig
_vm:set_metatable(app.SchedulingSystemConfig, {})

function app.SchedulingSystemConfig._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemConfig)
	return v
end

function app.SchedulingSystemConfig:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemConfig'
	self['_isType.app.SchedulingSystemConfig'] = true
end

function app.SchedulingSystemConfig:_construct0()
	app.SchedulingSystemConfig._init(self)
	return self
end

function app.SchedulingSystemConfig:getAllowedOrigins()
	do return {
		"http://localhost:8080",
		"http://localhost:8081",
		"http://hostname dito:30121"
	} end
end

function app.SchedulingSystemConfig:getCorsUtil()
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

app.SchedulingSystemDatabase = {}
app.SchedulingSystemDatabase.__index = app.SchedulingSystemDatabase
_vm:set_metatable(app.SchedulingSystemDatabase, {})

app.SchedulingSystemDatabase.RIDERREGISTRATION = "riderregistration"
app.SchedulingSystemDatabase.RIDERSCHEDULE = "riderschedule"
app.SchedulingSystemDatabase.RIDERFEEDBACK = "riderfeedback"

function app.SchedulingSystemDatabase._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemDatabase)
	return v
end

function app.SchedulingSystemDatabase:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemDatabase'
	self['_isType.app.SchedulingSystemDatabase'] = true
	self.db = nil
end

function app.SchedulingSystemDatabase:_construct0()
	app.SchedulingSystemDatabase._init(self)
	return self
end

app.SchedulingSystemDatabase.Riderregistration = _g.jk.json.JSONObjectAdapter._create()
app.SchedulingSystemDatabase.Riderregistration.__index = app.SchedulingSystemDatabase.Riderregistration
_vm:set_metatable(app.SchedulingSystemDatabase.Riderregistration, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.SchedulingSystemDatabase.Riderregistration._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemDatabase.Riderregistration)
	return v
end

function app.SchedulingSystemDatabase.Riderregistration:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemDatabase.Riderregistration'
	self['_isType.app.SchedulingSystemDatabase.Riderregistration'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._firstname = nil
	self._middlename = nil
	self._lastname = nil
	self._address = nil
	self._age = nil
	self._gender = nil
	self._contactnumber = nil
	self._timeStampAdded = nil
	self._timeStampLastUpdated = nil
end

function app.SchedulingSystemDatabase.Riderregistration:_construct0()
	app.SchedulingSystemDatabase.Riderregistration._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.SchedulingSystemDatabase.Riderregistration:setId(value)
	self._id = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getId()
	do return self._id end
end

function app.SchedulingSystemDatabase.Riderregistration:setFirstname(value)
	self._firstname = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getFirstname()
	do return self._firstname end
end

function app.SchedulingSystemDatabase.Riderregistration:setMiddlename(value)
	self._middlename = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getMiddlename()
	do return self._middlename end
end

function app.SchedulingSystemDatabase.Riderregistration:setLastname(value)
	self._lastname = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getLastname()
	do return self._lastname end
end

function app.SchedulingSystemDatabase.Riderregistration:setAddress(value)
	self._address = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getAddress()
	do return self._address end
end

function app.SchedulingSystemDatabase.Riderregistration:setAge(value)
	self._age = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getAge()
	do return self._age end
end

function app.SchedulingSystemDatabase.Riderregistration:setGender(value)
	self._gender = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getGender()
	do return self._gender end
end

function app.SchedulingSystemDatabase.Riderregistration:setContactnumber(value)
	self._contactnumber = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getContactnumber()
	do return self._contactnumber end
end

function app.SchedulingSystemDatabase.Riderregistration:setTimeStampAddedValue(value)
	do return self:setTimeStampAdded(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.SchedulingSystemDatabase.Riderregistration:getTimeStampAddedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampAdded) end
end

function app.SchedulingSystemDatabase.Riderregistration:setTimeStampAdded(value)
	self._timeStampAdded = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getTimeStampAdded()
	do return self._timeStampAdded end
end

function app.SchedulingSystemDatabase.Riderregistration:setTimeStampLastUpdatedValue(value)
	do return self:setTimeStampLastUpdated(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.SchedulingSystemDatabase.Riderregistration:getTimeStampLastUpdatedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampLastUpdated) end
end

function app.SchedulingSystemDatabase.Riderregistration:setTimeStampLastUpdated(value)
	self._timeStampLastUpdated = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderregistration:getTimeStampLastUpdated()
	do return self._timeStampLastUpdated end
end

function app.SchedulingSystemDatabase.Riderregistration:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._firstname ~= nil then
		do v:setObject("firstname", self:asJsonValue(self._firstname)) end
	end
	if self._middlename ~= nil then
		do v:setObject("middlename", self:asJsonValue(self._middlename)) end
	end
	if self._lastname ~= nil then
		do v:setObject("lastname", self:asJsonValue(self._lastname)) end
	end
	if self._address ~= nil then
		do v:setObject("address", self:asJsonValue(self._address)) end
	end
	if self._age ~= nil then
		do v:setObject("age", self:asJsonValue(self._age)) end
	end
	if self._gender ~= nil then
		do v:setObject("gender", self:asJsonValue(self._gender)) end
	end
	if self._contactnumber ~= nil then
		do v:setObject("contactnumber", self:asJsonValue(self._contactnumber)) end
	end
	if self._timeStampAdded ~= nil then
		do v:setObject("timeStampAdded", self:asJsonValue(self._timeStampAdded)) end
	end
	if self._timeStampLastUpdated ~= nil then
		do v:setObject("timeStampLastUpdated", self:asJsonValue(self._timeStampLastUpdated)) end
	end
	do return v end
end

function app.SchedulingSystemDatabase.Riderregistration:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._id = v:getString("id", nil)
	self._firstname = v:getString("firstname", nil)
	self._middlename = v:getString("middlename", nil)
	self._lastname = v:getString("lastname", nil)
	self._address = v:getString("address", nil)
	self._age = v:getString("age", nil)
	self._gender = v:getString("gender", nil)
	self._contactnumber = v:getString("contactnumber", nil)
	if v:get("timeStampAdded") ~= nil then
		self._timeStampAdded = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampAdded", 0))
	end
	if v:get("timeStampLastUpdated") ~= nil then
		self._timeStampLastUpdated = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampLastUpdated", 0))
	end
	do return true end
end

function app.SchedulingSystemDatabase.Riderregistration:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.SchedulingSystemDatabase.Riderregistration:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.SchedulingSystemDatabase.Riderregistration:toString()
	do return self:toJsonString() end
end

function app.SchedulingSystemDatabase.Riderregistration:forJsonString(o)
	local v = _g.app.SchedulingSystemDatabase.Riderregistration._construct0(_g.app.SchedulingSystemDatabase.Riderregistration._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.SchedulingSystemDatabase.Riderregistration:forJsonObject(o)
	local v = _g.app.SchedulingSystemDatabase.Riderregistration._construct0(_g.app.SchedulingSystemDatabase.Riderregistration._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

app.SchedulingSystemDatabase.Riderschedule = _g.jk.json.JSONObjectAdapter._create()
app.SchedulingSystemDatabase.Riderschedule.__index = app.SchedulingSystemDatabase.Riderschedule
_vm:set_metatable(app.SchedulingSystemDatabase.Riderschedule, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.SchedulingSystemDatabase.Riderschedule._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemDatabase.Riderschedule)
	return v
end

function app.SchedulingSystemDatabase.Riderschedule:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemDatabase.Riderschedule'
	self['_isType.app.SchedulingSystemDatabase.Riderschedule'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._fname = nil
	self._mname = nil
	self._lname = nil
	self._date = nil
	self._time = nil
	self._timeStampAdded = nil
	self._timeStampLastUpdated = nil
end

function app.SchedulingSystemDatabase.Riderschedule:_construct0()
	app.SchedulingSystemDatabase.Riderschedule._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.SchedulingSystemDatabase.Riderschedule:setId(value)
	self._id = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderschedule:getId()
	do return self._id end
end

function app.SchedulingSystemDatabase.Riderschedule:setFname(value)
	self._fname = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderschedule:getFname()
	do return self._fname end
end

function app.SchedulingSystemDatabase.Riderschedule:setMname(value)
	self._mname = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderschedule:getMname()
	do return self._mname end
end

function app.SchedulingSystemDatabase.Riderschedule:setLname(value)
	self._lname = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderschedule:getLname()
	do return self._lname end
end

function app.SchedulingSystemDatabase.Riderschedule:setDate(value)
	self._date = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderschedule:getDate()
	do return self._date end
end

function app.SchedulingSystemDatabase.Riderschedule:setTime(value)
	self._time = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderschedule:getTime()
	do return self._time end
end

function app.SchedulingSystemDatabase.Riderschedule:setTimeStampAddedValue(value)
	do return self:setTimeStampAdded(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.SchedulingSystemDatabase.Riderschedule:getTimeStampAddedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampAdded) end
end

function app.SchedulingSystemDatabase.Riderschedule:setTimeStampAdded(value)
	self._timeStampAdded = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderschedule:getTimeStampAdded()
	do return self._timeStampAdded end
end

function app.SchedulingSystemDatabase.Riderschedule:setTimeStampLastUpdatedValue(value)
	do return self:setTimeStampLastUpdated(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.SchedulingSystemDatabase.Riderschedule:getTimeStampLastUpdatedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampLastUpdated) end
end

function app.SchedulingSystemDatabase.Riderschedule:setTimeStampLastUpdated(value)
	self._timeStampLastUpdated = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderschedule:getTimeStampLastUpdated()
	do return self._timeStampLastUpdated end
end

function app.SchedulingSystemDatabase.Riderschedule:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._fname ~= nil then
		do v:setObject("fname", self:asJsonValue(self._fname)) end
	end
	if self._mname ~= nil then
		do v:setObject("mname", self:asJsonValue(self._mname)) end
	end
	if self._lname ~= nil then
		do v:setObject("lname", self:asJsonValue(self._lname)) end
	end
	if self._date ~= nil then
		do v:setObject("date", self:asJsonValue(self._date)) end
	end
	if self._time ~= nil then
		do v:setObject("time", self:asJsonValue(self._time)) end
	end
	if self._timeStampAdded ~= nil then
		do v:setObject("timeStampAdded", self:asJsonValue(self._timeStampAdded)) end
	end
	if self._timeStampLastUpdated ~= nil then
		do v:setObject("timeStampLastUpdated", self:asJsonValue(self._timeStampLastUpdated)) end
	end
	do return v end
end

function app.SchedulingSystemDatabase.Riderschedule:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._id = v:getString("id", nil)
	self._fname = v:getString("fname", nil)
	self._mname = v:getString("mname", nil)
	self._lname = v:getString("lname", nil)
	self._date = v:getString("date", nil)
	self._time = v:getString("time", nil)
	if v:get("timeStampAdded") ~= nil then
		self._timeStampAdded = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampAdded", 0))
	end
	if v:get("timeStampLastUpdated") ~= nil then
		self._timeStampLastUpdated = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampLastUpdated", 0))
	end
	do return true end
end

function app.SchedulingSystemDatabase.Riderschedule:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.SchedulingSystemDatabase.Riderschedule:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.SchedulingSystemDatabase.Riderschedule:toString()
	do return self:toJsonString() end
end

function app.SchedulingSystemDatabase.Riderschedule:forJsonString(o)
	local v = _g.app.SchedulingSystemDatabase.Riderschedule._construct0(_g.app.SchedulingSystemDatabase.Riderschedule._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.SchedulingSystemDatabase.Riderschedule:forJsonObject(o)
	local v = _g.app.SchedulingSystemDatabase.Riderschedule._construct0(_g.app.SchedulingSystemDatabase.Riderschedule._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

app.SchedulingSystemDatabase.Riderfeedback = _g.jk.json.JSONObjectAdapter._create()
app.SchedulingSystemDatabase.Riderfeedback.__index = app.SchedulingSystemDatabase.Riderfeedback
_vm:set_metatable(app.SchedulingSystemDatabase.Riderfeedback, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.SchedulingSystemDatabase.Riderfeedback._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemDatabase.Riderfeedback)
	return v
end

function app.SchedulingSystemDatabase.Riderfeedback:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemDatabase.Riderfeedback'
	self['_isType.app.SchedulingSystemDatabase.Riderfeedback'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._ridername = nil
	self._riderfback = nil
	self._timeStampAdded = nil
	self._timeStampLastUpdated = nil
end

function app.SchedulingSystemDatabase.Riderfeedback:_construct0()
	app.SchedulingSystemDatabase.Riderfeedback._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.SchedulingSystemDatabase.Riderfeedback:setId(value)
	self._id = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderfeedback:getId()
	do return self._id end
end

function app.SchedulingSystemDatabase.Riderfeedback:setRidername(value)
	self._ridername = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderfeedback:getRidername()
	do return self._ridername end
end

function app.SchedulingSystemDatabase.Riderfeedback:setRiderfback(value)
	self._riderfback = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderfeedback:getRiderfback()
	do return self._riderfback end
end

function app.SchedulingSystemDatabase.Riderfeedback:setTimeStampAddedValue(value)
	do return self:setTimeStampAdded(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.SchedulingSystemDatabase.Riderfeedback:getTimeStampAddedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampAdded) end
end

function app.SchedulingSystemDatabase.Riderfeedback:setTimeStampAdded(value)
	self._timeStampAdded = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderfeedback:getTimeStampAdded()
	do return self._timeStampAdded end
end

function app.SchedulingSystemDatabase.Riderfeedback:setTimeStampLastUpdatedValue(value)
	do return self:setTimeStampLastUpdated(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.SchedulingSystemDatabase.Riderfeedback:getTimeStampLastUpdatedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampLastUpdated) end
end

function app.SchedulingSystemDatabase.Riderfeedback:setTimeStampLastUpdated(value)
	self._timeStampLastUpdated = value
	do return self end
end

function app.SchedulingSystemDatabase.Riderfeedback:getTimeStampLastUpdated()
	do return self._timeStampLastUpdated end
end

function app.SchedulingSystemDatabase.Riderfeedback:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._ridername ~= nil then
		do v:setObject("ridername", self:asJsonValue(self._ridername)) end
	end
	if self._riderfback ~= nil then
		do v:setObject("riderfback", self:asJsonValue(self._riderfback)) end
	end
	if self._timeStampAdded ~= nil then
		do v:setObject("timeStampAdded", self:asJsonValue(self._timeStampAdded)) end
	end
	if self._timeStampLastUpdated ~= nil then
		do v:setObject("timeStampLastUpdated", self:asJsonValue(self._timeStampLastUpdated)) end
	end
	do return v end
end

function app.SchedulingSystemDatabase.Riderfeedback:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._id = v:getString("id", nil)
	self._ridername = v:getString("ridername", nil)
	self._riderfback = v:getString("riderfback", nil)
	if v:get("timeStampAdded") ~= nil then
		self._timeStampAdded = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampAdded", 0))
	end
	if v:get("timeStampLastUpdated") ~= nil then
		self._timeStampLastUpdated = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampLastUpdated", 0))
	end
	do return true end
end

function app.SchedulingSystemDatabase.Riderfeedback:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.SchedulingSystemDatabase.Riderfeedback:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.SchedulingSystemDatabase.Riderfeedback:toString()
	do return self:toJsonString() end
end

function app.SchedulingSystemDatabase.Riderfeedback:forJsonString(o)
	local v = _g.app.SchedulingSystemDatabase.Riderfeedback._construct0(_g.app.SchedulingSystemDatabase.Riderfeedback._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.SchedulingSystemDatabase.Riderfeedback:forJsonObject(o)
	local v = _g.app.SchedulingSystemDatabase.Riderfeedback._construct0(_g.app.SchedulingSystemDatabase.Riderfeedback._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.SchedulingSystemDatabase:forContext(ctx)
	local cstr = _g.jk.env.EnvironmentVariable:get("SCHEDULINGSYSM_DATABASE")
	do _g.jk.log.Log:debug(ctx, "Opening database connection: '" .. _g.jk.lang.String:safeString(cstr) .. "'") end
	self.db = _g.jk.mysql.MySQLDatabase:forConnectionStringSync(ctx, cstr)
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("failedToConnectToDatabase", cstr) end
	end
	do
		local v = _g.app.SchedulingSystemDatabase._construct0(_g.app.SchedulingSystemDatabase._create())
		do v:setDb(self.db) end
		do return v end
	end
end

function app.SchedulingSystemDatabase:updateTable(table)
	if not (table ~= nil) then
		do _g.jk.lang.Error:throw("nullTable", "updateTable") end
	end
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("nullDb", "updateTable") end
	end
	if not self.db:ensureTableExistsSync(table) then
		do _g.jk.lang.Error:throw("failedToUpdateTable", table:getName()) end
	end
end

function app.SchedulingSystemDatabase:updateRiderregistrationTables()
	local riderregistration = _g.jk.sql.SQLTableInfo:forName(_g.app.SchedulingSystemDatabase.RIDERREGISTRATION)
	do riderregistration:addStringKeyColumn("id") end
	do riderregistration:addStringColumn("firstname") end
	do riderregistration:addStringColumn("middlename") end
	do riderregistration:addStringColumn("lastname") end
	do riderregistration:addStringColumn("address") end
	do riderregistration:addStringColumn("age") end
	do riderregistration:addStringColumn("gender") end
	do riderregistration:addStringColumn("contactnumber") end
	do riderregistration:addLongColumn("timeStampAdded") end
	do riderregistration:addLongColumn("timeStampLastUpdated") end
	do self:updateTable(riderregistration) end
end

function app.SchedulingSystemDatabase:addRiderregistration(riderregistration)
	if not (riderregistration ~= nil) then
		do return nil end
	end
	do riderregistration:setTimeStampAddedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.SchedulingSystemDatabase.RIDERREGISTRATION, riderregistration:toDynamicMap())) then
		do return nil end
	end
	do return riderregistration end
end

function app.SchedulingSystemDatabase:updateRiderregistration(id, riderregistration)
	if not (riderregistration ~= nil) then
		do return false end
	end
	do riderregistration:setTimeStampLastUpdatedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	do
		local criteria = _g.app.SchedulingSystemDatabase.Riderregistration._construct0(_g.app.SchedulingSystemDatabase.Riderregistration._create())
		do criteria:setId(id) end
		do return self.db:executeSync(self.db:prepareUpdateStatementSync(_g.app.SchedulingSystemDatabase.RIDERREGISTRATION, criteria:toDynamicMap(), riderregistration:toDynamicMap())) end
	end
end

function app.SchedulingSystemDatabase:deleteRiderregistration(id)
	local criteria = _g.app.SchedulingSystemDatabase.Riderregistration._construct0(_g.app.SchedulingSystemDatabase.Riderregistration._create())
	do criteria:setId(id) end
	do return self.db:executeSync(self.db:prepareDeleteStatementSync(_g.app.SchedulingSystemDatabase.RIDERREGISTRATION, criteria:toDynamicMap())) end
end

function app.SchedulingSystemDatabase:getRiderregistrations()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.SchedulingSystemDatabase.RIDERREGISTRATION, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local riderregistration = _g.app.SchedulingSystemDatabase.Riderregistration:forJsonObject(o)
			if not (riderregistration ~= nil) then
				goto _continue1
			end
			do _g.jk.lang.Vector:append(v, riderregistration) end
		end
		::_continue1::
	end
	do
		local data = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
		do data:setObject("records", v) end
		do return data end
	end
end

function app.SchedulingSystemDatabase:updateRiderscheduleTables()
	local riderschedule = _g.jk.sql.SQLTableInfo:forName(_g.app.SchedulingSystemDatabase.RIDERSCHEDULE)
	do riderschedule:addStringKeyColumn("id") end
	do riderschedule:addStringColumn("fname") end
	do riderschedule:addStringColumn("mname") end
	do riderschedule:addStringColumn("lname") end
	do riderschedule:addStringColumn("date") end
	do riderschedule:addStringColumn("time") end
	do riderschedule:addLongColumn("timeStampAdded") end
	do riderschedule:addLongColumn("timeStampLastUpdated") end
	do self:updateTable(riderschedule) end
end

function app.SchedulingSystemDatabase:addRiderschedule(riderschedule)
	if not (riderschedule ~= nil) then
		do return nil end
	end
	do riderschedule:setTimeStampAddedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.SchedulingSystemDatabase.RIDERSCHEDULE, riderschedule:toDynamicMap())) then
		do return nil end
	end
	do return riderschedule end
end

function app.SchedulingSystemDatabase:updateRiderschedule(id, riderschedule)
	if not (riderschedule ~= nil) then
		do return false end
	end
	do riderschedule:setTimeStampLastUpdatedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	do
		local criteria = _g.app.SchedulingSystemDatabase.Riderschedule._construct0(_g.app.SchedulingSystemDatabase.Riderschedule._create())
		do criteria:setId(id) end
		do return self.db:executeSync(self.db:prepareUpdateStatementSync(_g.app.SchedulingSystemDatabase.RIDERSCHEDULE, criteria:toDynamicMap(), riderschedule:toDynamicMap())) end
	end
end

function app.SchedulingSystemDatabase:deleteRiderschedule(id)
	local criteria = _g.app.SchedulingSystemDatabase.Riderschedule._construct0(_g.app.SchedulingSystemDatabase.Riderschedule._create())
	do criteria:setId(id) end
	do return self.db:executeSync(self.db:prepareDeleteStatementSync(_g.app.SchedulingSystemDatabase.RIDERSCHEDULE, criteria:toDynamicMap())) end
end

function app.SchedulingSystemDatabase:getRiderschedules()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.SchedulingSystemDatabase.RIDERSCHEDULE, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local riderschedule = _g.app.SchedulingSystemDatabase.Riderschedule:forJsonObject(o)
			if not (riderschedule ~= nil) then
				goto _continue2
			end
			do _g.jk.lang.Vector:append(v, riderschedule) end
		end
		::_continue2::
	end
	do
		local data = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
		do data:setObject("records", v) end
		do return data end
	end
end

function app.SchedulingSystemDatabase:updateRiderfeedbackTables()
	local riderfeedback = _g.jk.sql.SQLTableInfo:forName(_g.app.SchedulingSystemDatabase.RIDERFEEDBACK)
	do riderfeedback:addStringKeyColumn("id") end
	do riderfeedback:addStringColumn("ridername") end
	do riderfeedback:addStringColumn("riderfback") end
	do riderfeedback:addLongColumn("timeStampAdded") end
	do riderfeedback:addLongColumn("timeStampLastUpdated") end
	do self:updateTable(riderfeedback) end
end

function app.SchedulingSystemDatabase:addRiderfeedback(riderfeedback)
	if not (riderfeedback ~= nil) then
		do return nil end
	end
	do riderfeedback:setTimeStampAddedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.SchedulingSystemDatabase.RIDERFEEDBACK, riderfeedback:toDynamicMap())) then
		do return nil end
	end
	do return riderfeedback end
end

function app.SchedulingSystemDatabase:deleteRiderfeedback(id)
	local criteria = _g.app.SchedulingSystemDatabase.Riderfeedback._construct0(_g.app.SchedulingSystemDatabase.Riderfeedback._create())
	do criteria:setId(id) end
	do return self.db:executeSync(self.db:prepareDeleteStatementSync(_g.app.SchedulingSystemDatabase.RIDERSCHEDULE, criteria:toDynamicMap())) end
end

function app.SchedulingSystemDatabase:updateRiderfeedback(id, riderfeedback)
	if not (riderfeedback ~= nil) then
		do return false end
	end
	do riderfeedback:setTimeStampLastUpdatedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	do
		local criteria = _g.app.SchedulingSystemDatabase.Riderfeedback._construct0(_g.app.SchedulingSystemDatabase.Riderfeedback._create())
		do criteria:setId(id) end
		do return self.db:executeSync(self.db:prepareUpdateStatementSync(_g.app.SchedulingSystemDatabase.RIDERFEEDBACK, criteria:toDynamicMap(), riderfeedback:toDynamicMap())) end
	end
end

function app.SchedulingSystemDatabase:getRiderfeedbacks()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.SchedulingSystemDatabase.RIDERFEEDBACK, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local riderfeedback = _g.app.SchedulingSystemDatabase.Riderfeedback:forJsonObject(o)
			if not (riderfeedback ~= nil) then
				goto _continue3
			end
			do _g.jk.lang.Vector:append(v, riderfeedback) end
		end
		::_continue3::
	end
	do
		local data = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
		do data:setObject("records", v) end
		do return data end
	end
end

function app.SchedulingSystemDatabase:close()
	if self.db ~= nil then
		do self.db:closeSync() end
	end
	self.db = nil
end

function app.SchedulingSystemDatabase:getDb()
	do return self.db end
end

function app.SchedulingSystemDatabase:setDb(v)
	self.db = v
	do return self end
end

app.SchedulingSystemApiServer = _g.jk.server.web.WebServer._create()
app.SchedulingSystemApiServer.__index = app.SchedulingSystemApiServer
_vm:set_metatable(app.SchedulingSystemApiServer, {
	__index = _g.jk.server.web.WebServer
})

function app.SchedulingSystemApiServer._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemApiServer)
	return v
end

function app.SchedulingSystemApiServer:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemApiServer'
	self['_isType.app.SchedulingSystemApiServer'] = true
end

function app.SchedulingSystemApiServer:_construct0()
	app.SchedulingSystemApiServer._init(self)
	do _g.jk.server.web.WebServer._construct0(self) end
	return self
end

function app.SchedulingSystemApiServer:initializeServer(server)
	if not _g.jk.server.web.WebServer.initializeServer(self, server) then
		do return false end
	end
	do server:setCreateOptionsResponseHandler(function(req)
		do return _g.app.SchedulingSystemConfig:getCorsUtil():handlePreflightRequest(req) end
	end) end
	do return true end
end

function app.SchedulingSystemApiServer:initializeApplication()
	if not _g.jk.server.web.WebServer.initializeApplication(self) then
		do return false end
	end
	do
		local db = _g.app.SchedulingSystemDatabase:forContext(self.ctx)
		do db:updateRiderregistrationTables() end
		do db:close() end
		do return true end
	end
end

function app.SchedulingSystemApiServer:_main(args)
	do return _g.app.SchedulingSystemApiServer._construct0(_g.app.SchedulingSystemApiServer._create()):setWorker("class:app.SchedulingSystemApiHandler"):executeMain(args) end
end

app.SchedulingSystemApiHandler = _g.jk.http.worker.HTTPRPCRouter._create()
app.SchedulingSystemApiHandler.__index = app.SchedulingSystemApiHandler
_vm:set_metatable(app.SchedulingSystemApiHandler, {
	__index = _g.jk.http.worker.HTTPRPCRouter
})

function app.SchedulingSystemApiHandler._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemApiHandler)
	return v
end

function app.SchedulingSystemApiHandler:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemApiHandler'
	self['_isType.app.SchedulingSystemApiHandler'] = true
	self.db = nil
	self.cors = _g.app.SchedulingSystemConfig:getCorsUtil()
end

function app.SchedulingSystemApiHandler:_construct0()
	app.SchedulingSystemApiHandler._init(self)
	do _g.jk.http.worker.HTTPRPCRouter._construct0(self) end
	return self
end

app.SchedulingSystemApiHandler.RiderregistrationRequest = _g.jk.json.JSONObjectAdapter._create()
app.SchedulingSystemApiHandler.RiderregistrationRequest.__index = app.SchedulingSystemApiHandler.RiderregistrationRequest
_vm:set_metatable(app.SchedulingSystemApiHandler.RiderregistrationRequest, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.SchedulingSystemApiHandler.RiderregistrationRequest._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemApiHandler.RiderregistrationRequest)
	return v
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemApiHandler.RiderregistrationRequest'
	self['_isType.app.SchedulingSystemApiHandler.RiderregistrationRequest'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._firstname = nil
	self._middlename = nil
	self._lastname = nil
	self._address = nil
	self._age = nil
	self._gender = nil
	self._contactnumber = nil
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:_construct0()
	app.SchedulingSystemApiHandler.RiderregistrationRequest._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:setFirstname(value)
	self._firstname = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:getFirstname()
	do return self._firstname end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:setMiddlename(value)
	self._middlename = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:getMiddlename()
	do return self._middlename end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:setLastname(value)
	self._lastname = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:getLastname()
	do return self._lastname end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:setAddress(value)
	self._address = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:getAddress()
	do return self._address end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:setAge(value)
	self._age = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:getAge()
	do return self._age end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:setGender(value)
	self._gender = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:getGender()
	do return self._gender end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:setContactnumber(value)
	self._contactnumber = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:getContactnumber()
	do return self._contactnumber end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._firstname ~= nil then
		do v:setObject("firstname", self:asJsonValue(self._firstname)) end
	end
	if self._middlename ~= nil then
		do v:setObject("middlename", self:asJsonValue(self._middlename)) end
	end
	if self._lastname ~= nil then
		do v:setObject("lastname", self:asJsonValue(self._lastname)) end
	end
	if self._address ~= nil then
		do v:setObject("address", self:asJsonValue(self._address)) end
	end
	if self._age ~= nil then
		do v:setObject("age", self:asJsonValue(self._age)) end
	end
	if self._gender ~= nil then
		do v:setObject("gender", self:asJsonValue(self._gender)) end
	end
	if self._contactnumber ~= nil then
		do v:setObject("contactnumber", self:asJsonValue(self._contactnumber)) end
	end
	do return v end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._firstname = v:getString("firstname", nil)
	self._middlename = v:getString("middlename", nil)
	self._lastname = v:getString("lastname", nil)
	self._address = v:getString("address", nil)
	self._age = v:getString("age", nil)
	self._gender = v:getString("gender", nil)
	self._contactnumber = v:getString("contactnumber", nil)
	do return true end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:toString()
	do return self:toJsonString() end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:forJsonString(o)
	local v = _g.app.SchedulingSystemApiHandler.RiderregistrationRequest._construct0(_g.app.SchedulingSystemApiHandler.RiderregistrationRequest._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.SchedulingSystemApiHandler.RiderregistrationRequest:forJsonObject(o)
	local v = _g.app.SchedulingSystemApiHandler.RiderregistrationRequest._construct0(_g.app.SchedulingSystemApiHandler.RiderregistrationRequest._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

app.SchedulingSystemApiHandler.RiderscheduleRequest = _g.jk.json.JSONObjectAdapter._create()
app.SchedulingSystemApiHandler.RiderscheduleRequest.__index = app.SchedulingSystemApiHandler.RiderscheduleRequest
_vm:set_metatable(app.SchedulingSystemApiHandler.RiderscheduleRequest, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.SchedulingSystemApiHandler.RiderscheduleRequest._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemApiHandler.RiderscheduleRequest)
	return v
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemApiHandler.RiderscheduleRequest'
	self['_isType.app.SchedulingSystemApiHandler.RiderscheduleRequest'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._fname = nil
	self._mname = nil
	self._lname = nil
	self._data = nil
	self._time = nil
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:_construct0()
	app.SchedulingSystemApiHandler.RiderscheduleRequest._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:setFname(value)
	self._fname = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:getFname()
	do return self._fname end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:setMname(value)
	self._mname = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:getMname()
	do return self._mname end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:setLname(value)
	self._lname = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:getLname()
	do return self._lname end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:setData(value)
	self._data = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:getData()
	do return self._data end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:setTime(value)
	self._time = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:getTime()
	do return self._time end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._fname ~= nil then
		do v:setObject("fname", self:asJsonValue(self._fname)) end
	end
	if self._mname ~= nil then
		do v:setObject("mname", self:asJsonValue(self._mname)) end
	end
	if self._lname ~= nil then
		do v:setObject("lname", self:asJsonValue(self._lname)) end
	end
	if self._data ~= nil then
		do v:setObject("data", self:asJsonValue(self._data)) end
	end
	if self._time ~= nil then
		do v:setObject("time", self:asJsonValue(self._time)) end
	end
	do return v end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._fname = v:getString("fname", nil)
	self._mname = v:getString("mname", nil)
	self._lname = v:getString("lname", nil)
	self._data = v:getString("data", nil)
	self._time = v:getString("time", nil)
	do return true end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:toString()
	do return self:toJsonString() end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:forJsonString(o)
	local v = _g.app.SchedulingSystemApiHandler.RiderscheduleRequest._construct0(_g.app.SchedulingSystemApiHandler.RiderscheduleRequest._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.SchedulingSystemApiHandler.RiderscheduleRequest:forJsonObject(o)
	local v = _g.app.SchedulingSystemApiHandler.RiderscheduleRequest._construct0(_g.app.SchedulingSystemApiHandler.RiderscheduleRequest._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

app.SchedulingSystemApiHandler.RiderfeedbackRequest = _g.jk.json.JSONObjectAdapter._create()
app.SchedulingSystemApiHandler.RiderfeedbackRequest.__index = app.SchedulingSystemApiHandler.RiderfeedbackRequest
_vm:set_metatable(app.SchedulingSystemApiHandler.RiderfeedbackRequest, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.SchedulingSystemApiHandler.RiderfeedbackRequest._create()
	local v = _vm:set_metatable({}, app.SchedulingSystemApiHandler.RiderfeedbackRequest)
	return v
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.SchedulingSystemApiHandler.RiderfeedbackRequest'
	self['_isType.app.SchedulingSystemApiHandler.RiderfeedbackRequest'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._ridername = nil
	self._riderfback = nil
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:_construct0()
	app.SchedulingSystemApiHandler.RiderfeedbackRequest._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:setRidername(value)
	self._ridername = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:getRidername()
	do return self._ridername end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:setRiderfback(value)
	self._riderfback = value
	do return self end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:getRiderfback()
	do return self._riderfback end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._ridername ~= nil then
		do v:setObject("ridername", self:asJsonValue(self._ridername)) end
	end
	if self._riderfback ~= nil then
		do v:setObject("riderfback", self:asJsonValue(self._riderfback)) end
	end
	do return v end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._ridername = v:getString("ridername", nil)
	self._riderfback = v:getString("riderfback", nil)
	do return true end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:toString()
	do return self:toJsonString() end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:forJsonString(o)
	local v = _g.app.SchedulingSystemApiHandler.RiderfeedbackRequest._construct0(_g.app.SchedulingSystemApiHandler.RiderfeedbackRequest._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.SchedulingSystemApiHandler.RiderfeedbackRequest:forJsonObject(o)
	local v = _g.app.SchedulingSystemApiHandler.RiderfeedbackRequest._construct0(_g.app.SchedulingSystemApiHandler.RiderfeedbackRequest._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.SchedulingSystemApiHandler:getRiderregistrationDatabase()
	if not (self.db ~= nil) then
		self.db = _g.app.SchedulingSystemDatabase:forContext(self:getCtx())
		do self.db:updateRiderregistrationTables() end
	end
	do return self.db end
end

function app.SchedulingSystemApiHandler:getRiderscheduleDatabase()
	if not (self.db ~= nil) then
		self.db = _g.app.SchedulingSystemDatabase:forContext(self:getCtx())
		do self.db:updateRiderscheduleTables() end
	end
	do return self.db end
end

function app.SchedulingSystemApiHandler:getRiderfeedbackDatabase()
	if not (self.db ~= nil) then
		self.db = _g.app.SchedulingSystemDatabase:forContext(self:getCtx())
		do self.db:updateRiderfeedbackTables() end
	end
	do return self.db end
end

function app.SchedulingSystemApiHandler:postProcess(req, resp)
	do self.cors:handleWorkerRequest(req, resp) end
end

function app.SchedulingSystemApiHandler:initRoutes()
	do _g.jk.http.worker.HTTPRPCRouter.initRoutes(self) end
	do self:addRoute("GET", "/riderregistrations", function(req, resp, vars)
		local riderregistrations = self:getRiderregistrationDatabase():getRiderregistrations()
		if not (riderregistrations ~= nil) then
			do return end
		end
		do self:setOkResponse(resp, riderregistrations) end
	end) end
	do self:addRoute("POST", "/riderregistration", function(req, resp, vars)
		local requestData = _g.app.SchedulingSystemApiHandler.RiderregistrationRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local riderregistration = _g.app.SchedulingSystemDatabase.Riderregistration._construct0(_g.app.SchedulingSystemDatabase.Riderregistration._create())
			do riderregistration:setFirstname(requestData:getFirstname()) end
			do riderregistration:setMiddlename(requestData:getMiddlename()) end
			do riderregistration:setLastname(requestData:getLastname()) end
			do riderregistration:setAddress(requestData:getAddress()) end
			do riderregistration:setAge(requestData:getAge()) end
			do riderregistration:setGender(requestData:getGender()) end
			do riderregistration:setContactnumber(requestData:getContactnumber()) end
			if not (self:getRiderregistrationDatabase():addRiderregistration(riderregistration) ~= nil) then
				do self:setErrorResponse(resp, "failedToSaveRiderregistration", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("PUT", "/riderregistration/:id", function(req, resp, vars)
		local requestData = _g.app.SchedulingSystemApiHandler.RiderregistrationRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local riderregistration = _g.app.SchedulingSystemDatabase.Riderregistration._construct0(_g.app.SchedulingSystemDatabase.Riderregistration._create())
			do riderregistration:setFirstname(requestData:getFirstname()) end
			do riderregistration:setMiddlename(requestData:getMiddlename()) end
			do riderregistration:setLastname(requestData:getLastname()) end
			do riderregistration:setAddress(requestData:getAddress()) end
			do riderregistration:setAge(requestData:getAge()) end
			do riderregistration:setGender(requestData:getGender()) end
			do riderregistration:setContactnumber(requestData:getContactnumber()) end
			if not self:getRiderregistrationDatabase():updateRiderregistration(vars:getString("id", nil), riderregistration) then
				do self:setErrorResponse(resp, "failedToUpdateRiderregistration", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("DELETE", "/riderregistration/:id", function(req, resp, vars)
		if not self:getRiderregistrationDatabase():deleteRiderregistration(vars:getString("id", nil)) then
			do self:setErrorResponse(resp, "failedToDeleteRiderregistration", "500") end
			do return end
		end
		do self:setOkResponse(resp, nil) end
	end) end
	do self:addRoute("GET", "/riderschedules", function(req, resp, vars)
		local riderschedules = self:getRiderscheduleDatabase():getRiderschedules()
		if not (riderschedules ~= nil) then
			do return end
		end
		do self:setOkResponse(resp, riderschedules) end
	end) end
	do self:addRoute("POST", "/riderschedule", function(req, resp, vars)
		local requestData = _g.app.SchedulingSystemApiHandler.RiderscheduleRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local riderschedule = _g.app.SchedulingSystemDatabase.Riderschedule._construct0(_g.app.SchedulingSystemDatabase.Riderschedule._create())
			do riderschedule:setFname(requestData:getFname()) end
			do riderschedule:setMname(requestData:getMname()) end
			do riderschedule:setLname(requestData:getLname()) end
			do riderschedule:setDate(requestData:getData()) end
			do riderschedule:setTime(requestData:getTime()) end
			if not (self:getRiderscheduleDatabase():addRiderschedule(riderschedule) ~= nil) then
				do self:setErrorResponse(resp, "failedToSaveRiderschedule", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("PUT", "/riderschedule/:id", function(req, resp, vars)
		local requestData = _g.app.SchedulingSystemApiHandler.RiderscheduleRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local riderschedule = _g.app.SchedulingSystemDatabase.Riderschedule._construct0(_g.app.SchedulingSystemDatabase.Riderschedule._create())
			do riderschedule:setFname(requestData:getFname()) end
			do riderschedule:setMname(requestData:getMname()) end
			do riderschedule:setLname(requestData:getLname()) end
			do riderschedule:setDate(requestData:getData()) end
			do riderschedule:setTime(requestData:getTime()) end
			if not self:getRiderscheduleDatabase():updateRiderschedule(vars:getString("id", nil), riderschedule) then
				do self:setErrorResponse(resp, "failedToUpdateRiderschedule", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("DELETE", "/riderschedule/:id", function(req, resp, vars)
		if not self:getRiderscheduleDatabase():deleteRiderschedule(vars:getString("id", nil)) then
			do self:setErrorResponse(resp, "failedToDeleteRiderschedule", "500") end
			do return end
		end
		do self:setOkResponse(resp, nil) end
	end) end
	do self:addRoute("GET", "/riderfeedbacks", function(req, resp, vars)
		local riderfeedbacks = self:getRiderfeedbackDatabase():getRiderfeedbacks()
		if not (riderfeedbacks ~= nil) then
			do return end
		end
		do self:setOkResponse(resp, riderfeedbacks) end
	end) end
	do self:addRoute("POST", "/riderfeedback", function(req, resp, vars)
		local requestData = _g.app.SchedulingSystemApiHandler.RiderfeedbackRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local riderfeedback = _g.app.SchedulingSystemDatabase.Riderfeedback._construct0(_g.app.SchedulingSystemDatabase.Riderfeedback._create())
			do riderfeedback:setRidername(requestData:getRidername()) end
			do riderfeedback:setRiderfback(requestData:getRiderfback()) end
			if not (self:getRiderfeedbackDatabase():addRiderfeedback(riderfeedback) ~= nil) then
				do self:setErrorResponse(resp, "failedToSaveRiderfeedback", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("PUT", "/riderfeedback/:id", function(req, resp, vars)
		local requestData = _g.app.SchedulingSystemApiHandler.RiderfeedbackRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local riderfeedback = _g.app.SchedulingSystemDatabase.Riderfeedback._construct0(_g.app.SchedulingSystemDatabase.Riderfeedback._create())
			do riderfeedback:setRidername(requestData:getRidername()) end
			do riderfeedback:setRiderfback(requestData:getRiderfback()) end
			if not self:getRiderfeedbackDatabase():updateRiderfeedback(vars:getString("id", nil), riderfeedback) then
				do self:setErrorResponse(resp, "failedToUpdateRiderfeedback", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("DELETE", "/riderfeedback/:id", function(req, resp, vars)
		if not self:getRiderfeedbackDatabase():deleteRiderfeedback(vars:getString("id", nil)) then
			do self:setErrorResponse(resp, "failedToDeleteRiderfeedback", "500") end
			do return end
		end
		do self:setOkResponse(resp, nil) end
	end) end
end

function _main(args)
	do return app.SchedulingSystemApiServer:_main(args) end
end
