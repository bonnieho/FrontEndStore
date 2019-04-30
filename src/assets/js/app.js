import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
	//console.log("The new size is:" + newSize);
	//console.log("The old size is:" + oldSize);
	if(newSize ==='small' && oldSize === 'medium') {
		$('main-menu ul').removeClass('expanded');
	}

	if(newSize ==='medium' && oldSize === 'small') {
		$('main-menu ul').addClass('expanded');
	}
});

var size = Foundation.MediaQuery.current;
//console.log(size);
if(size === 'small'){
	$('main-menu ul').removeClass('expanded');
}
