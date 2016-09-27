const resourceHacker = require('node-resourcehacker');
const filepath = 'C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe';

resourceHacker({
	operation: 'addoverwrite',
	input: filepath,
	output: filepath,
	resource: 'main.ico',
	resourceType: 'ICONGROUP',
	resourceName: '1'
}, (e) => {
	if(e) return console.error(e);
	console.log('Resource Added');
});

resourceHacker({
	operation: 'addoverwrite',
	input: filepath,
	output: filepath,
	resource: 'page.ico',
	resourceType: 'ICONGROUP',
	resourceName: '2'
}, (e) => {
	if(e) return console.error(e);
	console.log('Resource Added');
});

resourceHacker({
	operation: 'addoverwrite',
	input: filepath,
	output: filepath,
	resource: 'main.ico',
	resourceType: 'ICONGROUP',
	resourceName: '32512'
}, (e) => {
	if(e) return console.error(e);
	console.log('Resource Added');
});