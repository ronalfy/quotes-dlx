/* eslint-disable camelcase */
import React from 'react';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import MeatballMenuItem from '../MeatballMenuItem';
import QuoteIcon from '../icons/QuoteIcon';
import CopyIcon from '../icons/CopyIcon';
import LinkIcon from '../icons/LinkIcon';
import TwitterIcon from '../icons/twitter';
import FacebookIcon from '../icons/FacebookIcon';
import AtIcon from '../icons/AtIcon';
import './editor.scss';

const MeatballMenu = ( attributes ) => {
	const {
		enable_copy_text,
		enable_copy_tweet,
		enable_copy_link,
		enable_tweet_this,
		enable_share_this,
		enable_email_text,
		copy_text_label,
		copy_tweet_label,
		copy_link_label,
		tweet_this_label,
		share_this_label,
		email_text_label,
	} = attributes;

	const getIcon = ( Icon ) => {
		return <Icon width={ 16 } height={ 16 } fill="#6c757d" />;
	};

	const getButton = () => {
		return (
			<>
				<div className="quotes-dlx-meatball-menu">
					<div className="quotes-dlx-meatball-content">
						<input
							type="checkbox"
							aria-label={ __( 'Open menu options', 'quotes-dlx' ) }
						/>
						{ ( enable_copy_text ||
							enable_copy_tweet ||
							enable_copy_link ||
							enable_tweet_this ||
							enable_share_this ||
							enable_email_text ) && (
							<ul>
								{ enable_copy_text && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( QuoteIcon );
										} }
										text={ copy_text_label }
										onClick={ ( e ) => {} }
									/>
								) }
								{ enable_copy_tweet && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( CopyIcon );
										} }
										text={ copy_tweet_label }
										onClick={ ( e ) => {} }
									/>
								) }
								{ enable_copy_link && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( LinkIcon );
										} }
										text={ copy_link_label }
										onClick={ ( e ) => {} }
									/>
								) }
								{ enable_email_text && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( AtIcon );
										} }
										text={ email_text_label }
										onClick={ ( e ) => {} }
									/>
								) }
								{ enable_tweet_this && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( TwitterIcon );
										} }
										text={ tweet_this_label }
										onClick={ ( e ) => {} }
									/>
								) }
								{ enable_share_this && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( FacebookIcon );
										} }
										text={ share_this_label }
										onClick={ ( e ) => {} }
									/>
								) }
							</ul>
						) }

						<div
							className="quotes-dlx-meatball-icon-wrapper"
							aria-hidden="true"
						>
							<div className="quotes-dlx-meatball-icon">
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};
	return <>{ getButton() }</>;
};

MeatballMenu.defaultProps = {
	enable_copy_text: true,
	enable_copy_link: true,
	enable_copy_tweet: true,
	enable_tweet_this: true,
	enable_share_this: false,
	enable_email_text: false,
	email_text_label: __( 'Email Quote', 'quotes-dlx' ),
	copy_text_label: __( 'Copy Quote', 'quotes-dlx' ),
	copy_tweet_label: __( 'Copy Tweet', 'quotes-dlx' ),
	copy_link_label: __( 'Copy Link', 'quotes-dlx' ),
	tweet_this_label: __( 'Tweet This', 'quotes-dlx' ),
	share_this_label: __( 'Share This', 'quotes-dlx' ),
};

MeatballMenu.propTypes = {
	enable_copy_text: PropTypes.bool.isRequired,
	enable_copy_link: PropTypes.bool.isRequired,
	enable_copy_tweet: PropTypes.bool.isRequired,
	enable_tweet_this: PropTypes.bool.isRequired,
	enable_share_this: PropTypes.bool.isRequired,
	enable_email_text: PropTypes.bool.isRequired,
	email_text_label: PropTypes.string.isRequired,
	copy_text_label: PropTypes.string.isRequired,
	copy_tweet_label: PropTypes.string.isRequired,
	copy_link_label: PropTypes.string.isRequired,
	tweet_this_label: PropTypes.string.isRequired,
	share_this_label: PropTypes.string.isRequired,
};

export default MeatballMenu;
