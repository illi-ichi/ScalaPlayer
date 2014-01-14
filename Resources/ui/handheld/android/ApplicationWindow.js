//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	//load component dependencies
	Ti.include('ui/common/scala-player-extdeps.js');
	Ti.include('ui/common/scala-player.js');
	//var FirstView = require('ui/common/FirstView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});

	//construct UI
	//var firstView = new FirstView();
	var firstView = new ScalaJS.modules.com_obsidian_player_PlayerView().init();
	self.add(firstView);

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
