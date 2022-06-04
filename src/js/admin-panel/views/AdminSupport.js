/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { more } from '@wordpress/icons';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
} from '@wordpress/components';
import { faHandshakeAngle, faHeart, faBookSparkles, faStar, faLink } from '@fortawesome/pro-solid-svg-icons';
import { faWordpress, faGithub } from '@fortawesome/free-brands-svg-icons';
import CircularQuestionIcon from '../../components/icons/CircularQuestion';
const AdminSupport = () => {
	return (
		<>
			<div className="qdlx-admin__support-wrapper">
				<div className="qdlx-admin__support--content-panel">
					<div className="qdlx-admin__support--content-heading">
						<h1>
							<CircularQuestionIcon width={ 48 } height={ 48 } aria-hidden="true" />
							<span className="qdlx-admin__heading--text">
								{ __( 'Support and Documentation', 'quotes-dlx' ) }
							</span>
						</h1>
						<p className="description">
							{
								__( 'On this screen you will find helpful support links and some pointers to some documentation.', 'quotes-dlx' )
							}
						</p>
					</div>
				</div>
				<div className="qdlx-admin__support--content-panel">
					<div className="qdlx-admin__support--content-heading">
						<h2>
							<span className="qdlx-admin__heading--text">
								{ __( 'View the Documentation', 'quotes-dlx' ) }
							</span>
						</h2>
						<p className="description">
							{ __( 'If you need help setting up the plugin, the docs are a great place to start.' ) }
						</p>
						<div className="qdlx-button-primary">
							<Button
								className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
								icon={ <FontAwesomeIcon size={ '1x' } icon={ faBookSparkles } /> }
								size={ '1x' }
								iconSize="1x"
								iconPosition="left"
								href="https://mediaron.com/quotes-dlx"
							>
								{
									__( 'Go to the Documentation', 'quotes-dlx' )
								}
							</Button>
						</div>
					</div>
				</div>
				<div className="qdlx-admin__support--content-panel">
					<div className="qdlx-admin__support--content-heading">
						<h2>
							<span className="qdlx-admin__heading--text">
								{ __( 'Visit the QuotesDLX Overview Page', 'quotes-dlx' ) }
							</span>
						</h2>
						<p className="description">
							{ __( 'Check out QuotesDLX.com' ) }
						</p>
						<div className="qdlx-button-primary">
							<Button
								className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
								icon={ <FontAwesomeIcon size={ '1x' } icon={ faLink } /> }
								size={ '1x' }
								iconSize="1x"
								iconPosition="left"
								href="https://dlxplugins.com/plugins/quotes/"
							>
								{
									__( 'View QuotesDLX', 'quotes-dlx' )
								}
							</Button>
						</div>
					</div>
				</div>
				<div className="qdlx-admin__support--content-panel">
					<div className="qdlx-admin__support--content-heading">
						<h2>
							<span className="qdlx-admin__heading--text">
								{ __( 'One-on-One Support', 'quotes-dlx' ) }
							</span>
						</h2>
						<p className="description">
							{ __( 'If you need one-on-one paid support, please get ahold of the plugin author (Ronald Huereca - MediaRon LLC).' ) }
						</p>
						<div className="qdlx-button-primary">
							<Button
								className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
								icon={ <FontAwesomeIcon size={ '1x' } icon={ faHandshakeAngle } /> }
								size={ '1x' }
								iconSize="1x"
								iconPosition="left"
								href="https://dlxpugins.com/contact/"
							>
								{
									__( 'Get Personalized Support', 'quotes-dlx' )
								}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminSupport;
