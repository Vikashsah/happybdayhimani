// This is the main configuration file for your build process


// ===========================
// Index
// ---------------------------
/*
	1. Test
	2. Host
	3. Port
	4. Sass
	5. Concat
*/

module.exports = {

	// 1. Test -> this is the welcome message when you run "test"
	// --------------------
	cool: "It's working fine, cool! 👍",


	// 2. Hostname -> Change to 0,0,0,0 to access over LAN
	// --------------------
	host: '0.0.0.0',


	// 3. Port -> where you want to start the server
	// --------------------
	port: 3000,


	// 4. Sass -> for SASS file compilation
	// --------------------
	// default value: ['src/scss/**']
	sass: ['src/css/**'],
	cssStyle: 'nested',


	// 5. Concat -> murge file
	// --------------------

	// JS
	// default value: ['src/js/**.js']
	jsConcatSrc: ['src/js/plugins.js', 'src/js/main.js'],
	// default value: 
	jsConcatDest: 'src/build/js/main.js',

	// CSS
	// default: 'src/build/css/main.css'
	cssConcatSrc: 'src/css/**.css',
	// default: 'src/build/css/main.css'
	cssConcatDest: 'src/build/css/main.css',

	// default '', put 'css' for css only and 'js' or js only
	concatOnly: '',



	// Build -> Folders to move to Distribution
	// --------------------
	// default value: ['build/**', 'html/**', 'img/**']
	distFiles: ['build/**', 'html/**', 'img/**']
	
}