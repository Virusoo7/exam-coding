var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssImport = require('postcss-import'),
	autoprefixer = require('autoprefixer'),
	cssVars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	mixins = require('postcss-mixins'),
	hexrgpa = require('postcss-hexrgba');



	gulp.task('styles', function() {
	return	gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssVars, mixins, nested, hexrgpa, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
	});

