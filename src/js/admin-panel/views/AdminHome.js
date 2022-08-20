/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';
import '@fancyapps/ui/dist/fancybox.css';
import { __, sprintf } from '@wordpress/i18n';
import Notice from '../admin-components/Notice';

import {
	faHandWave,
	faLightbulbExclamationOn,
	faPalette,
	faGears,
	faPuzzle,
} from '@fortawesome/pro-solid-svg-icons';
import TabsContext from '../contexts/TabsContext';
const { defaults, themes } = quotes_dlx_admin;
const AdminHome = () => {
	const { defaultTheme, setCurrentTheme } = useContext( TabsContext );

	const getPreviewLink = ( selectedTemplate ) => {
		return `${ ajaxurl }?action=quotes_dlx_theme_preview&nonce=${
			quotes_dlx_admin.options_retrieve_nonce
		}&template=${ selectedTemplate }&screen=desktop`;
	};

	const outputCurrentTheme = () => {
		// Get default theme from options or override with context.
		let selectedTemplate = defaults.template;
		if ( '' !== defaultTheme ) {
			selectedTemplate = defaultTheme;
		}
		const currentTheme = themes.find( ( { slug } ) => slug === selectedTemplate );
		if ( null === currentTheme || undefined === currentTheme ) {
			return (
				<>
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-inner">
								<Notice
									message={ __( 'No default theme could be found.', 'quotes-dlx' ) }
									status="error"
									politeness="polite"
								/>
							</div>
						</div>
					</div>
				</>
			);
		}
		return (
			<div className="qdlx-admin__tabs--content-wrap">
				<div className="qdlx-admin__tabs--content-panel">
					<div className="qdlx-admin__tabs--content-heading">
						<h1>
							<FontAwesomeIcon size={ '1x' } icon={ faPalette } />
							<span className="qdlx-admin__heading--text">
								{ __( 'Default Theme', 'quotes-dlx' ) }
							</span>
						</h1>
					</div>
					<div className="qdlx-admin__tabs--content-inner">
						<a href={ getPreviewLink( currentTheme.slug ) }
							onClick={ ( e ) => {
								e.preventDefault();
								new Fancybox(
									[
										{
											src: getPreviewLink( currentTheme.slug ),
											type: 'iframe',
										},
									],
									{
										mainClass: 'qdlx-theme-preview-mobile',
										caption: __( 'Default Theme', 'quotes-dlx' ),
									}
								);
							} }
						>
							<img
								src={ currentTheme.preview_image_url }
								caption={ currentTheme.name }
								alt={ currentTheme.name }
								style={ { maxWidth: '100%', height: 'auto' } }
								width={ currentTheme.image_width }
								height={ currentTheme.image_height }
							/>
						</a>
						<hr />
						<div className="qdlx-button-primary">
							<a
								className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
								href={ `#/themes` }
							>
								{ __( 'Change the Default Theme', 'quotes-dlx' ) }
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="qdlx-admin__tabs--home-grid">
				<div className="qdlx-admin__tabs--home-grid-wrap">
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FontAwesomeIcon size={ '1x' } icon={ faHandWave } />
									<span className="qdlx-admin__heading--text">
										{ __( 'Welcome to Quotes Deluxe!', 'quotes-dlx' ) }
									</span>
								</h1>
								<p className="description">
									{ __(
										'For a quick overview, please check out the video below.',
										'quotes-dlx'
									) }
								</p>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<div className="qdlx-admin__themes--wrapper">
									<a href="https://www.youtube.com/embed/kQxFr3Jt_ro?rel=0&amp;controls=0&amp;showinfo=0" className="qdlx-admin__themes--video" onClick={ ( e ) => {
										e.preventDefault();
										new Fancybox(
											[
												{
													src: 'https://www.youtube.com/embed/kQxFr3Jt_ro?rel=0&amp;controls=0&amp;showinfo=0',
													type: 'iframe',
												},
											],
											{
												mainClass: 'qdlx-theme-preview-mobile',
												caption: __( 'QuotesDLX Overview Video', 'quotes-dlx' ),
											}
										);
									} }>
										<img 
											src={ `${ quotes_dlx_admin.image_dir }/quotes-dlx-video.jpg` }
											width="1600"
											height="900"
											alt="Quotes Deluxe Video"
											style={{ maxWidth: '100%', height: 'auto' }}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
					{ outputCurrentTheme() }
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FontAwesomeIcon size={ '1x' } icon={ faGears } />
									<span className="qdlx-admin__heading--text">
										{ __( 'Block Defaults', 'quotes-dlx' ) }
									</span>
								</h1>
								<p className="description">
									{ __(
										'Set block defaults to save you time when inserting the QuotesDLX block',
										'quotes-dlx'
									) }
								</p>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<div className="qdlx-button-primary">
									<a
										className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
										href={ `#/defaults` }
									>
										{ __( 'Change the Block Defaults', 'quotes-dlx' ) }
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FontAwesomeIcon size={ '1x' } icon={ faPuzzle } />
									<span className="qdlx-admin__heading--text">
										{ __( 'Planning for…', 'quotes-dlx' ) }
									</span>
								</h1>
								<p className="description">
									{ __(
										'Several add-ons are planned should this plugin take off. Here are a few items that are in the planning stage.',
										'quotes-dlx'
									) }
									.
								</p>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<ul>
									<li>
										<strong>Presets</strong>: Similar to block patterns and
										reusable blocks, these will allow you to save and re-use
										presets depending on what type of quote you are creating.
									</li>
									<li>
										<strong>Overrides</strong>: Globally override the block
										settings regardless of what was set when the block was.
									</li>
									<li>
										<strong>Themes</strong>: More DLX themes are planned.
									</li>
								</ul>
								<div className="qdlx-button-primary">
									<a
										className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
										href="https://dlxplugins.com/announcements/"
									>
										{ __( 'Read more (Announcements)', 'quotes-dlx' ) }
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminHome;
