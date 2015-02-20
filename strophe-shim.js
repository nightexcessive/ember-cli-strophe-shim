(function() {
/* globals define, Strophe, $build, $msg, $iq, $pres */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';

			return values;
		});
	}

	generateModule('strophe', {
		'default': Strophe,
		'$build': $build,
		'$msg': $msg,
		'$iq': $iq,
		'$pres': $pres
	});
})();
