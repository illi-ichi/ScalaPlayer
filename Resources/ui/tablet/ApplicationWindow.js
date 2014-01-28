//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	Ti.include('ui/common/global.js');
	//Ti.include('ui/common/scala-player-extdeps.js');
	//Ti.include('ui/common/scala-player.js');
	Ti.include('ui/common/scala-player-opt.js');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var mainView = ScalaPlayerMainView();
	self.add(mainView);
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
