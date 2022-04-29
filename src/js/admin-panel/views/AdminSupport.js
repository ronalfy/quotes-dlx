/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


import { more } from '@wordpress/icons';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
} from '@wordpress/components';
import { faHandshakeAngle, faHeart, faBookSparkles, faStar } from "@fortawesome/pro-solid-svg-icons";
import { faWordpress, faGithub } from "@fortawesome/free-brands-svg-icons";
import CircularQuestionIcon from '../../components/icons/CircularQuestion';
const AdminSupport = () => {

	return (
		<>
			<div className='qdlx-admin__support-wrapper'>
				<div className="qdlx-admin__support--content-panel">
					<div className="qdlx-admin__support--content-heading">
						<h1>
							<CircularQuestionIcon width={ 48 } height={ 48 } aria-hidden="true" />
							<span className="qdlx-admin__heading--text">
								{ __( 'Support and Documentation', 'quotes-dlx' ) }
							</span>
						</h1>
						<p className="description">
							{ sprintf(
								__( 'On this screen you will find helpful support links and some pointers to some documentation.', 'quotes-dlx' ),
								<Link to="https://mediaron.com/contact/">,
								</Link>
							) }
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
									icon={ <FontAwesomeIcon size={'1x'} icon={faBookSparkles} /> }
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
								{ __( 'Get Support On the WordPress Plugin Directory', 'quotes-dlx' ) }
							</span>
						</h2>
						<p className="description">
							{ __( 'The WordPress Plugin Directory is a great place to leave bug reports and feature requests.' ) }
						</p>
						<div className="qdlx-button-primary">
								<Button
									className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
									icon={ <FontAwesomeIcon size={'1x'} icon={faWordpress} /> }
									size={ '1x' }
									iconSize="1x"
									iconPosition="left"
									href="https://wordpress.org/plugins/quotes-dlx"
								>
									{
										__( 'Visit the WordPress Plugin Directory', 'quotes-dlx' )
									}
								</Button>
						</div>
					</div>
				</div>
				<div className="qdlx-admin__support--content-panel">
					<div className="qdlx-admin__support--content-heading">
						<h2>
							<span className="qdlx-admin__heading--text">
								{ __( 'File a GitHub Issue', 'quotes-dlx' ) }
							</span>
						</h2>
						<p className="description">
							{ __( 'Leave a GitHub Issue or Feature Request' ) }
						</p>
						<div className="qdlx-button-primary">
								<Button
									className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
									icon={ <FontAwesomeIcon size={'1x'} icon={faGithub} /> }
									size={ '1x' }
									iconSize="1x"
									iconPosition="left"
									href="https://github.com/mediaron/quotes-dlx"
								>
									{
										__( 'Open a GitHub Issue', 'quotes-dlx' )
									}
								</Button>
						</div>
					</div>
				</div>
				<div className="qdlx-admin__support--content-panel">
					<div className="qdlx-admin__support--content-heading">
						<h2>
							<span className="qdlx-admin__heading--text">
								{ __( 'Sponsor This Plugin on GitHub', 'quotes-dlx' ) }
							</span>
						</h2>
						<p className="description">
							{ __( 'Every cent counts. Your sponsorship is much appreciated.' ) }
						</p>
						<div className="qdlx-button-primary">
								<Button
									className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
									icon={ <FontAwesomeIcon size={'1x'} icon={faHeart} style={{ color: 'pink' }} /> }
									size={ '1x' }
									iconSize="1x"
									iconPosition="left"
									href="https://github.com/mediaron/quotes-dlx"
								>
									{
										__( 'Sponsor on GitHub', 'quotes-dlx' )
									}
								</Button>
						</div>
					</div>
				</div>
				<div className="qdlx-admin__support--content-panel">
					<div className="qdlx-admin__support--content-heading">
						<h2>
							<span className="qdlx-admin__heading--text">
								{ __( 'Rate the Plugin', 'quotes-dlx' ) }
							</span>
						</h2>
						<p className="description">
							{ __( 'Please pretty please leave a rating if this plugin has helped you.' ) }
						</p>
						<div className="qdlx-button-primary">
								<Button
									className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-left"
									icon={ <FontAwesomeIcon size={'1x'} icon={faStar} style={{color: 'pink'}} /> }
									size={ '1x' }
									iconSize="1x"
									iconPosition="left"
									href="https://wordpress.org/support/plugin/quotes-dlx/reviews/"
								>
									{
										__( 'Please Leave a Review', 'quotes-dlx' )
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
									icon={ <FontAwesomeIcon size={'1x'} icon={faHandshakeAngle} /> }
									size={ '1x' }
									iconSize="1x"
									iconPosition="left"
									href="https://mediaron.com/contact"
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
