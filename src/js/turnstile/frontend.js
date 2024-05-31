/**
 * Turnstile JS functionality.
 */

/**
 * This is the main callback for Cloudflare.
 */
window.qdlxInitiateTurnstile = () => {
	// Check that turnstile is present.
	if ( typeof turnstile === 'undefined' ) {
		return;
	}

	/**
	 * This is the callback for when the user has filled out the textarea.
	 * We wait until the textarea is filled out to load turnstile to avoid the 300 second timeout of the token.
	 */
	const turnstileBeginRender = () => {
		// Now init turnstile.
		const widgetId = turnstile.render( '#qdlx-turnstile', {
			sitekey: qdlx_email.turnstile_site_key,
			callback: ( token ) => {
				setTimeout( () => {
					// Reset the widget.
					turnstile.reset( widgetId );
				}, 300000 ); // 300 seconds (5 mins).
			},
			size: qdlx_email.turnstile_size,
			theme: qdlx_email.turnstile_theme,
			language: qdlx_email.turnstile_language,
		} );
	};
	turnstileBeginRender();
};

