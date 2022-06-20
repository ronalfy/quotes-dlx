/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import 'photoswipe/dist/photoswipe.css';
import { __, sprintf } from '@wordpress/i18n';

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
	const outputCurrentTheme = () => {
		// Get default theme from options or override with context.
		let selectedTemplate = defaults.template;
		if ( '' !== defaultTheme ) {
			selectedTemplate = defaultTheme;
		}
		const currentTheme = themes.find( ( { slug } ) => slug === selectedTemplate );
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
						<button
							className="button-reset show-cursor"
							data-fancybox
							data-src={ currentTheme.preview_image_url }
							data-caption={ currentTheme.name }
						>
							<figure>
								<Gallery
									withCaption
								>
									<Item
										original={ currentTheme.preview_image_url }
										thumbnail={ currentTheme.preview_image_url }
										width={ currentTheme.image_width }
										height={ currentTheme.image_height }
										caption={ currentTheme.name }
									>
										{ ( { ref, open } ) => (
											<img
												ref={ ref }
												onClick={ open }
												src={ currentTheme.preview_image_url }
												caption={ currentTheme.name }
												alt={ currentTheme.name }
												style={ { maxWidth: '100%', height: 'auto' } }
												width={ currentTheme.image_width }
												height={ currentTheme.image_height }
											/>
										) }
									</Item>
								</Gallery>
								<figcaption>{ currentTheme.name }</figcaption>
							</figure>
						</button>
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
									<iframe
										width="560"
										height="315"
										src="https://www.youtube.com/embed/kQxFr3Jt_ro"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
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
										href="https://mediaron.com/plugins/quotes-dlx/newsletter/"
									>
										{ __( 'Sign-up for Updates (external link)', 'quotes-dlx' ) }
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<a
						href="https://mediaron.com/highlight-and-share"
						target="_blank"
						rel="noreferrer"
					>
						<img
							style={ { maxWidth: '100%' } }
							src={ quotes_dlx_admin.image_dir + '/has-banner.jpg' }
							alt="Highlight and Share banner"
						/>
					</a>
				</div>
			</div>
		</>
	);
};

export default AdminHome;
