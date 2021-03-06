const CreateGroupCommand = function (guid, userData) {

	Command.call(this);

	this.type = 'CreateGroupCommand';
	this.name = 'Create Group: ' + userData.name;
	this.guid = guid;

	if (userData === undefined) {
		Log(LOGLEVEL.DEBUG, "Missing spawn userData");
		return;
	}
	this.userData = userData;
};


CreateGroupCommand.prototype = {

	execute: function () {
		editor.vext.SendCommand(new VextCommand(this.guid, this.type, this.userData))
	},

	undo: function () {
		editor.vext.SendCommand(new VextCommand(this.guid, "DestroyGroupCommand", this.userData))
	},
};

