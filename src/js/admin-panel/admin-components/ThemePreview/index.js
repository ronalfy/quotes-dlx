import React, { useEffect, useState, Suspense, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import TwitterIcon from '../../../components/icons/twitter';
import MeatballMenu from '../../../components/MeatballMenu';

const ThemePreview = ( props ) => {
	const { activeTheme, colorPrimary, colorSecondary, colorAccent, stylesheet } =
		props;
	return (
		<>
			<style>
				{ `:root {
					--qdlx-${ activeTheme }-primary: ${ colorPrimary };
					--qdlx-${ activeTheme }-secondary: ${ colorSecondary };
					--qdlx-${ activeTheme }-accent: ${ colorAccent };
				}` }
			</style>
			<link rel="stylesheet" href={ stylesheet } />
			<div
				className={ classNames( 'quotes-dlx', {
					[ `quotes-dlx-block-theme-${ activeTheme }` ]: true,
					'quotes-dlx-context-menu-disabled': false,
					'quotes-dlx-has-no-tweet-button': false,
				} ) }
				style={ { maxWidth: '650px', margin: '0 auto' } }
			>
				<div className="quotes-dlx-wrapper">
					<figure>
						<blockquote className="quotes-dlx-text-wrapper">
							<div className="quotes-dlx-text">
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Mauris imperdiet leo sed tellus ultrices, eget lobortis eros
									molestie.
								</div>
								<br />
								<div>
									<strong>By</strong>: <a>Maximus</a>
								</div>
							</div>
						</blockquote>
					</figure>
					<div className={ `quotes-dlx-button-wrapper right` }>
						<button
							className={ `quotes-dlx-button full quotes-dlx-button-icon-right` }
							onClick={ ( e ) => {
								e.preventDefault();
							} }
						>
							<>
								<span className="quotes-dlx-button-text">
									{ __( 'Click to Tweet', 'quotes-dlx' ) }
								</span>
								<span className="quotes-dlx-button-icon">
									<TwitterIcon />
								</span>
							</>
						</button>
					</div>
					<MeatballMenu
						enable_copy_text={ true }
						enable_copy_tweet={ true }
						enable_copy_link={ true }
						enable_tweet_this={ true }
					/>
				</div>
			</div>
		</>
	);
};

ThemePreview.defaultProps = {
	activeTheme: '',
	colorPrimary: '',
	colorSecondary: '',
	colorAccent: '',
	stylesheet: '',
};

ThemePreview.propTypes = {
	activeTheme: PropTypes.string.isRequired,
	colorPrimary: PropTypes.string.isRequired,
	colorSecondary: PropTypes.string.isRequired,
	colorAccent: PropTypes.string.isRequired,
	stylesheet: PropTypes.string.isRequired,
};

export default ThemePreview;
