/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Fancybox } from '@fancyapps/ui';
import { __ } from '@wordpress/i18n';
import { Palette, Settings } from 'lucide-react';
import Notice from '../admin-components/Notice';
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
							<Palette aria-hidden="true" />
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
					{ outputCurrentTheme() }
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<Settings aria-hidden="true" />
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
				</div>
			</div>
		</>
	);
};

export default AdminHome;
