var Menu = require('Menu');

var winMenu = new Menu();

winMenu.open();

var menuOpen = false;

var win = Titanium.UI.createWindow({
	left: 0,
	width: '100%',
	zIndex: 2
});

var win1 = Titanium.UI.createWindow({
    title: 'Master Window',
    backgroundColor: '#fff',
    barColor: '#4a649d'
});

var nav = Titanium.UI.iPhone.createNavigationGroup({
   window: win1
});

var menuButton = Ti.UI.createButton({
	title: 'Menu',
	style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var winAnimIn = Ti.UI.createAnimation({
	left: 0,
	curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
	duration: 300
});

var winAnimOut = Ti.UI.createAnimation({
	left: 258,
	curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
	duration: 300
});

menuButton.addEventListener('click', function(e) {
	if (menuOpen) {
		win.animate(winAnimIn);
		winCover.hide();
	} else {
		win.animate(winAnimOut);
		winCover.show();
	}
	menuOpen = !menuOpen;
});

win1.setLeftNavButton(menuButton);

var tableView = Ti.UI.createTableView({
	zIndex: 1
});

tableView.addEventListener('click', function(e) {
	nav.open(win2);
});

var row = Ti.UI.createTableViewRow({
	title: 'Open Detail Window',
	height: 44
});

tableView.setData([row]);

win1.add(tableView);

var winCover = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	visible: false,
	zIndex: 2
});

winCover.addEventListener('click', function(e) {
	if (menuOpen) {
		win.animate(winAnimIn);
		winCover.hide();
		menuOpen = !menuOpen;
	}
});

win1.add(winCover);

var win2 = Titanium.UI.createWindow({
    title: 'Detail Window',
    backgroundColor: '#fff',
    barColor: '#4a649d',
    backButtonTitle: 'Back'
});

win.add(nav);

win.addEventListener('open', function(e) {
	winMenu.show();
});

win.open();