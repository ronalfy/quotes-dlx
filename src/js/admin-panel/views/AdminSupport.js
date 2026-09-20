/* eslint-disable no-unused-vars */
import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
} from '@wordpress/components';
import { BookOpen, HeartHandshake, Link } from 'lucide-react';
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
								icon={ <BookOpen size={ 20 } /> }
								iconSize={ 20 }
								iconPosition="left"
								href="https://qdlx.dlxplugins.com/"
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
								icon={ <Link size={ 20 } /> }
								iconSize={ 20 }
								iconPosition="left"
								href="https://dlxplugins.com/plugins/quotesdlx/"
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
								icon={ <HeartHandshake size={ 20 } /> }
								iconSize={ 20 }
								iconPosition="left"
								href="https://dlxplugins.com/support/"
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
