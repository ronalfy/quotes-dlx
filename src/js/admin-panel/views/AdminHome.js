/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { more } from '@wordpress/icons';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
} from '@wordpress/components';
import { faHandWave, faLightbulbExclamationOn } from '@fortawesome/pro-solid-svg-icons';
import { faWordpress, faGithub } from '@fortawesome/free-brands-svg-icons';
import CircularQuestionIcon from '../../components/icons/CircularQuestion';

const { defaults, themes } = quotes_dlx_admin;
const AdminHome = () => {
	const outputDefaultTheme = () => {
		const { template } = defaults;
		const defaultTheme = themes.find( ( { slug } ) => slug === template );
		return (
			<div>hi</div>
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
									<iframe width="560" height="315" src="https://www.youtube.com/embed/kQxFr3Jt_ro" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								</div>
							</div>
						</div>
					</div>
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FontAwesomeIcon size={ '1x' } icon={ faLightbulbExclamationOn } />
									<span className="qdlx-admin__heading--text">
										{ __( 'Current Default Theme', 'quotes-dlx' ) }
									</span>
									{ outputDefaultTheme() }
								</h1>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<p>The current defalt theme is x.</p>
								<div className="qdlx-button-primary">
									>
									<Button
										className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
									><Link to="/themes">
										{
												__( 'Select a New Default Theme', 'quotes-dlx' )
											}
									</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FontAwesomeIcon size={ '1x' } icon={ faLightbulbExclamationOn } />
									<span className="qdlx-admin__heading--text">
										{ __( 'Twitter Username', 'quotes-dlx' ) }
									</span>
								</h1>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<p>The current Twitter Username is ronaldhuereca. (edit|save).</p>
								<div className="qdlx-button-primary">
									>
									<Button
										className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
									><Link to="/themes">
										{
												__( 'Change the default Twitter username.', 'quotes-dlx' )
											}
									</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FontAwesomeIcon size={ '1x' } icon={ faLightbulbExclamationOn } />
									<span className="qdlx-admin__heading--text">
										{ __( 'Share Button Text Defaults', 'quotes-dlx' ) }
									</span>
								</h1>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<p>The current share button text is: Click to Tweet (edit|save).</p>
								<div className="qdlx-button-primary">
									>
									<Button
										className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
									><Link to="/themes">
										{
												__( 'Change the default Twitter username.', 'quotes-dlx' )
											}
									</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FontAwesomeIcon size={ '1x' } icon={ faLightbulbExclamationOn } />
									<span className="qdlx-admin__heading--text">
										{ __( 'Contextual Menu Defaults', 'quotes-dlx' ) }
									</span>
								</h1>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<p>Contextual Menu is (Enabled|disabled)</p>
								<p>This is what the contextual menu looks like (animated gif)</p>
								<div className="qdlx-button-primary">
									>
									<Button
										className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
									><Link to="/themes">
										{
												__( 'Toggle Switch for contextual menus.', 'quotes-dlx' )
											}
									</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FontAwesomeIcon size={ '1x' } icon={ faLightbulbExclamationOn } />
									<span className="qdlx-admin__heading--text">
										{ __( 'What\'s New?', 'quotes-dlx' ) }
									</span>
								</h1>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<ul>
									<li>Feature 1</li>
									<li>Feature 2</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div>
					<a href="https://mediaron.com/highlight-and-share" target="_blank" rel="noreferrer">
						<img style={ { maxWidth: '100%' } } src={ quotes_dlx_admin.image_dir + '/has-banner.jpg' } alt="Highlight and Share banner" />
					</a>
				</div>
			</div>
		</>
	);
};

export default AdminHome;
