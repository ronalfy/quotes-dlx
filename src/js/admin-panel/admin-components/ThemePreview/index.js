import React, { useEffect, useState, Suspense, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import TwitterIcon from '../../../components/icons/twitter';
import MeatballMenu from '../../../components/MeatballMenu';

const ThemePreview = ( props ) => {
	const { activeTheme, colors, stylesheet, fontSize, lineHeight, colorsOnly } =
		props;

	const getColorStyleVars = () => {
		let styles = '';
		colors.map( ( color, index ) => {
			styles += `--qdlx-${ activeTheme }-${ color.slug }: ${ color.color };`;
		} );
		styles = `:root { ${ styles } }`;
		return (
			<style>
				{ styles }
			</style>
		);
	};

	const getFontSize = () => {
		let styles = '';
		styles += `--qdlx-${ activeTheme }-font-size: ${ fontSize }px;`;
		styles = `:root { ${ styles } }`;
		return (
			<style>
				{ styles }
			</style>
		);
	};
	const getLineHeight = () => {
		let styles = '';
		styles += `--qdlx-${ activeTheme }-line-height: ${ lineHeight };`;
		styles = `:root { ${ styles } }`;
		return (
			<style>
				{ styles }
			</style>
		);
	};
	return (
		<>
			{ getColorStyleVars() }

			{ ! colorsOnly && (
				<>
					{ getFontSize() }
					{ getLineHeight() }
				</>

			) }

			<link rel="stylesheet" href={ stylesheet } />
			<div
				className={ classNames( 'quotes-dlx', {
					[ `quotes-dlx-block-theme-${ activeTheme }` ]: true,
					'quotes-dlx-context-menu-disabled': false,
					'quotes-dlx-has-no-tweet-button': false,
				} ) }
				style={ { maxWidth: '650px', margin: '0 auto', marginBottom: '40px' } }
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
	colors: [],
	stylesheet: '',
	fontSize: '16px',
	lineHeight: 1.65,
	colorsOnly: false,
};

ThemePreview.propTypes = {
	activeTheme: PropTypes.string.isRequired,
	colors: PropTypes.array.isRequired,
	stylesheet: PropTypes.string.isRequired,
	fontSize: PropTypes.string.isRequired,
	lineHeight: PropTypes.number.isRequired,
	colorsOnly: PropTypes.bool.isRequired,
};

export default ThemePreview;
