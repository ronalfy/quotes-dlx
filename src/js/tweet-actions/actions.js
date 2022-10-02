/* eslint-disable no-undef */
/**
 * Main QuotesDLX front-end JS.
 */

( function() {
	const { __ } = wp.i18n;

	// Gather all wrappers.
	const wrappers = document.querySelectorAll( '.quotes-dlx-wrapper' );

	wrappers.forEach( ( wrapper ) => {
		// Click to copy quote.
		const copyQuoteWrapper = wrapper.querySelector(
			'.quotes-dlx-meatball-menu-item-copy-quote'
		);
		if ( null !== copyQuoteWrapper ) {
			copyQuoteWrapper.querySelector( 'button' ).addEventListener( 'click', ( e ) => {
				copyQuoteCallback( e, copyQuoteWrapper, wrapper );
			} );
		}
		

		// Click to copy Tweet.
		const copyTweetWrapper = wrapper.querySelector(
			'.quotes-dlx-meatball-menu-item-copy-tweet'
		);
		if ( null !== copyTweetWrapper ) {
			copyTweetWrapper.querySelector( 'button' ).addEventListener( 'click', ( e ) => {
				copyTweetCallback( e, copyTweetWrapper, wrapper );
			} );
		}

		// Click to copy link.
		const copyLinkWrapper = wrapper.querySelector(
			'.quotes-dlx-meatball-menu-item-copy-link'
		);
		if ( null !== copyLinkWrapper ) {
			copyLinkWrapper.querySelector( 'button' ).addEventListener( 'click', ( e ) => {
				copyLinkCallback( e, copyLinkWrapper, wrapper );
			} );
		}

		// Click to Tweet.
		const dlxTweetButton = wrapper.querySelector( 'button.quotes-dlx-button' );
		if ( null !== dlxTweetButton ) {
			dlxTweetButton.addEventListener( 'click', ( e ) => {
				tweet( e );
			} );
		}

		const tweetButtonWrapper = wrapper.querySelector( '.quotes-dlx-meatball-menu-item-tweet-this > button' );
		if ( null !== tweetButtonWrapper ) {
			tweetButtonWrapper.addEventListener( 'click', ( e ) => {
				tweet( e );
			} );
		}

		// Click to Tweet.
		const dlxFacebookButton = wrapper.querySelector( 'button.qdlx-facebook-button' );
		if ( null !== dlxFacebookButton ) {
			dlxFacebookButton.addEventListener( 'click', ( e ) => {
				facebook( e );
			} );
		}

		const facebookButtonWrapper = wrapper.querySelector( '.quotes-dlx-meatball-menu-item-share-facebook > button' );
		if ( null !== facebookButtonWrapper ) {
			facebookButtonWrapper.addEventListener( 'click', ( e ) => {
				facebook( e );
			} );
		}
	} );

	/**
	 * Do some behavior when the Copy Quote button is clicked.
	 *
	 * @param {Object}  event           Event object.
	 * @param {element} listItemElement Wrapper Element.
	 * @param {element} parentElement   Wrapper Element.
	 */
	const copyQuoteCallback = ( event, listItemElement, parentElement ) => {
		const text = listItemElement.getAttribute( 'data-text-full' );
		const copyBlog = new Blob( [ text ], { type: 'text/plain' } );
		const data = [ new ClipboardItem( { [ copyBlog.type ]: copyBlog } ) ];

		const successMessage = __(
			'The Quote has been copied to your clipboard.',
			'quotes-dlx'
		);
		const failMessage = __(
			'The Quote text could not be copied.',
			'quotes-dlx'
		);
		copyText(
			data,
			successMessage,
			failMessage,
			listItemElement,
			parentElement,
			copyQuoteCallback
		);
	};
	/**
	 * Do some behavior when the Copy Quote button is clicked.
	 *
	 * @param {Object}  event           Event object.
	 * @param {element} listItemElement Wrapper Element.
	 * @param {element} parentElement   Wrapper Element.
	 */
	const copyTweetCallback = ( event, listItemElement, parentElement ) => {
		const text = listItemElement
			.querySelector( '.quotes-dlx-copy-tweet-textarea textarea' )
			.textContent.trim();
		const copyBlog = new Blob( [ text ], { type: 'text/plain' } );
		const data = [ new ClipboardItem( { [ copyBlog.type ]: copyBlog } ) ];

		const successMessage = __(
			'The Tweet has been copied to your clipboard.',
			'quotes-dlx'
		);
		const failMessage = __(
			'The Tweet text could not be copied.',
			'quotes-dlx'
		);
		copyText(
			data,
			successMessage,
			failMessage,
			listItemElement,
			parentElement,
			copyTweetCallback
		);
	};
	/**
	 * Do some behavior when the Copy Link button is clicked.
	 *
	 * @param {Object}  event           Event object.
	 * @param {element} listItemElement Wrapper Element.
	 * @param {element} parentElement   Wrapper Element.
	 */
	const copyLinkCallback = ( event, listItemElement, parentElement ) => {
		const text = listItemElement.getAttribute( 'data-url' );
		const copyBlog = new Blob( [ text ], { type: 'text/plain' } );
		const data = [ new ClipboardItem( { [ copyBlog.type ]: copyBlog } ) ];

		const successMessage = __(
			'The Link to this Quote has been copied to your clipboard.',
			'quotes-dlx'
		);
		const failMessage = __(
			'The Link could not be copied.',
			'quotes-dlx'
		);
		copyText(
			data,
			successMessage,
			failMessage,
			listItemElement,
			parentElement,
			copyQuoteCallback
		);
	};

	/**
	 * Copy text to clipboard.
	 *
	 * @param {ClipboardItem} data            Data to copy.
	 * @param {string}        successMessage  Success message for a11y.
	 * @param {string}        failMessage     Fail message for a11y.
	 * @param {element}       listItemElement List item element.
	 * @param {element}       parentElement   Parent element (wrapper).
	 * @param {Function}      callback        Callback function.
	 */
	const copyText = (
		data,
		successMessage,
		failMessage,
		listItemElement,
		parentElement,
		callback
	) => {
		navigator.clipboard.write( data ).then(
			() => {
				// Change the styling of the LI.
				const copyDiv = document.createElement( 'div' );

				// Get a copy of the button.
				const buttonClone = listItemElement
					.querySelector( 'button' )
					.cloneNode( true );

				copyDiv.style.cssText =
					'background-color: green; color: #FFF; text-align: center; padding: 10px 20px;';
				copyDiv.textContent = __( 'Copied!', 'quotes-dlx' );
				listItemElement.querySelector( 'button' ).replaceWith( copyDiv );
				wp.a11y.speak( successMessage, 'assertive' );

				setTimeout( () => {
					copyDiv.replaceWith( buttonClone );
					buttonClone.addEventListener( 'click', ( e ) => {
						callback( e, listItemElement, parentElement );
					} );
				}, 1500 );
			},
			() => {
				wp.a11y.speak( failMessage, 'assertive' );
			}
		);
	};

	const tweet = ( e ) => {
		let tweetButton = e.target;
		const element = e.target.nodeName.toLowerCase();

		// Check element type.
		if ( 'span' === element ) {
			tweetButton = tweetButton.parentElement;
		}
		if ( 'use' === element ) {
			tweetButton = tweetButton.parentElement.parentElement.parentElement;
		}
		const hashtags = tweetButton.getAttribute( 'data-hashtags' );
		const tweetText = tweetButton.getAttribute( 'data-tweet' );
		const username = tweetButton.getAttribute( 'data-username' );
		const permalink = tweetButton.getAttribute( 'data-url' );

		let newTweet = '';
		if ( username !== '' && username !== null ) {
			newTweet += '&via=' + username;
		}
		if ( permalink !== '' && permalink !== null ) {
			newTweet += '&url=' + permalink.trim();
		}
		if ( hashtags !== '' && hashtags !== null ) {
			newTweet += '&hashtags=' + hashtags;
		}
		if ( tweetText !== '' && tweetText !== null ) {
			newTweet += '&text=' + tweetText + "\n\r";
		}

		if ( newTweet !== '' ) {
			newTweet = 'https://twitter.com/intent/tweet?' + newTweet;
		}

		// Replace case if first item has an ampsersand.
		newTweet = newTweet.replace( '?&', '?' );
		window.open( newTweet, '_blank' );
	};
	const facebook = ( e ) => {
		let facebookButton = e.target;
		const element = e.target.nodeName.toLowerCase();

		// Check element type.
		if ( 'span' === element ) {
			facebookButton = facebookButton.parentElement;
		}
		if ( 'use' === element ) {
			facebookButton = facebookButton.parentElement.parentElement.parentElement;
		}
		const shareText = facebookButton.getAttribute( 'data-facebook-text' );
		const shareAppId = facebookButton.getAttribute( 'data-app-id' );
		const permalink = facebookButton.getAttribute( 'data-url' );
		let fbShare = `https://www.facebook.com/dialog/share?app_id=${ shareAppId }&display=popup&quote=${ shareText }&href=${ permalink }`;
		fbShare = fbShare.replace( '?&', '?' );
		window.open( fbShare, '_blank' );
	};
}() );
