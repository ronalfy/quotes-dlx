module.exports = function( grunt ) {
	grunt.initConfig( {
		compress: {
			main: {
				options: {
					archive: 'quotes-dlx.zip',
				},
				files: [
					{ src: [ 'quotes-dlx.php' ], dest: '/', filter: 'isFile' }, // includes files in path
					{ src: [ 'readme.md' ], dest: '/', filter: 'isFile' }, // includes files in path
					{ src: [ 'readme.txt' ], dest: '/', filter: 'isFile' },
					{ src: [ 'php/**' ], dest: '/' }, // includes files in path and its subdirs
					{ src: [ 'templates/**' ], dest: '/' }, // includes files in path and its subdirs
					{ src: [ 'images/**' ], dest: '/' },
					{ src: [ 'lib/**' ], dest: '/' }, // includes files in path and its subdirs
					{ src: [ 'fancybox/**' ], dest: '/' }, // includes files in path and its subdirs
					{ src: [ 'dist/**' ], dest: '/' }, // includes files in path and its subdirs
					{ src: [ 'build/**' ], dest: '/' }, // includes files in path and its subdirs
				],
			},
		},
	} );
	grunt.registerTask( 'composer_guard', 'Add ABSPATH guards to Composer-generated files.', function() {
		const done = this.async();
		const { exec } = require( 'child_process' );
		exec( 'php bin/add-composer-guards.php', { cwd: process.cwd() }, function( error, stdout, stderr ) {
			if ( error ) {
				grunt.log.error( error );
				if ( stderr ) {
					grunt.log.error( stderr );
				}
				done( false );
				return;
			}
			grunt.log.write( stdout );
			done();
		} );
	} );

	grunt.registerTask( 'default', [ 'composer_guard', 'compress' ] );

	grunt.loadNpmTasks( 'grunt-contrib-compress' );
};
