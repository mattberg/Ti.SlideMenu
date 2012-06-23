function createRow(text) {

	var row = Ti.UI.createTableViewRow({
		height: 40,
		selectedBackgroundColor: '#262c3a'
	});

	var rowLabel = Ti.UI.createLabel({
		left: 10,
		text: text,
		color: '#ddd',
		font: {
			fontSize: 15,
			fontWeight: 'bold'
		}
	});

	row.add(rowLabel);

	return row;
}

function createHeader(text) {

	var headerView = Ti.UI.createView({
		width: Ti.UI.FILL,
			height: 24,
			backgroundColor: '#3e4357'
	});

	var headerLabel = Ti.UI.createLabel({
		left: 10,
		text: text,
		color: '#fff',
		font: {
			fontSize: 14,
			fontWeight: 'bold'
		},
		shadowColor: "#000",
		shadowOffset: { x: 0, y: 1 }
	});

	headerView.add(headerLabel);

	return headerView;

}

function Menu() {

	var self = Titanium.UI.createWindow({
		left: 0,
	    width: 258,
	    backgroundColor: '#323848',
	    visible: false,
	    zIndex: 1
	});

	var tableView = Ti.UI.createTableView({
		backgroundColor: '#323848',
		separatorColor: '#2a3040'
	});

	self.add(tableView);

	var section1 = Ti.UI.createTableViewSection();
	section1.headerView = createHeader('Menu Group 1');
	section1.add(createRow('Menu Item 1'));
	section1.add(createRow('Menu Item 2'));

	var section2 = Ti.UI.createTableViewSection();
	section2.headerView = createHeader('Menu Group 2');
	section2.add(createRow('Menu Item 3'));
	section2.add(createRow('Menu Item 4'));
	section2.add(createRow('Menu Item 5'));

	var section3 = Ti.UI.createTableViewSection();
	section3.headerView = createHeader('Menu Group 3');
	section3.add(createRow('Menu Item 6'));
	section3.add(createRow('Menu Item 7'));
	section3.add(createRow('Menu Item 8'));
	section3.add(createRow('Menu Item 9'));
	section3.add(createRow('Menu Item 10'));

	var section4 = Ti.UI.createTableViewSection();
	section4.headerView = createHeader('Menu Group 4');
	section4.add(createRow('Menu Item 11'));
	section4.add(createRow('Menu Item 12'));
	section4.add(createRow('Menu Item 13'));

	tableView.setData([section1, section2, section3, section4]);

	return self;

}

module.exports = Menu;