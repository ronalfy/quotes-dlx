/* eslint-disable camelcase */
import { __ } from '@wordpress/i18n';
import MeatballMenuItem from '../MeatballMenuItem';
import QuoteIcon from '../icons/QuoteIcon';
import CopyIcon from '../icons/CopyIcon';
import LinkIcon from '../icons/LinkIcon';
import TwitterIcon from '../icons/twitter';
import './editor.scss';

const MeatballMenu = ( attributes ) => {
	const {
		enable_copy_text,
		enable_copy_tweet,
		enable_copy_link,
		enable_tweet_this,
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
							enable_tweet_this ) && (
							<ul>
								{ enable_copy_text && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( QuoteIcon );
										} }
										text={ __( 'Copy Quote', 'quotes-dlx' ) }
										onClick={ ( e ) => {
										} }
									/>
								) }
								{ enable_copy_tweet && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( CopyIcon );
										} }
										text={ __( 'Copy Tweet', 'quotes-dlx' ) }
										onClick={ ( e ) => {
										} }
									/>
								) }
								{ enable_copy_link && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( LinkIcon );
										} }
										text={ __( 'Copy Link', 'quotes-dlx' ) }
										onClick={ ( e ) => {
										} }
									/>
								) }
								{ enable_tweet_this && (
									<MeatballMenuItem
										Icon={ () => {
											return getIcon( TwitterIcon );
										} }
										text={ __( 'Tweet This', 'quotes-dlx' ) }
										onClick={ ( e ) => {
										} }
									/>
								) }
							</ul>
						) }

						<div className="quotes-dlx-meatball-icon-wrapper" aria-hidden="true">
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

export default MeatballMenu;
