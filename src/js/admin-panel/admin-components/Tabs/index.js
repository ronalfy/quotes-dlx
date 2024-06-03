import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDefaultsLoader from '../Loaders/AdminDefaultsLoader';
import AdminThemeDefaultsLoader from '../Loaders/AdminThemeDefaultsLoader';
import AdminThemeColorsLoader from '../Loaders/AdminThemeColorsLoader';
import 'react-loading-skeleton/dist/skeleton.css';
import CircularQuestionIcon from '../../../components/icons/CircularQuestion';
import AtIcon from '../../../components/icons/AtIcon';
import HomeIcon from '../../../components/icons/Home';
import GearIcon from '../../../components/icons/Gear';
import MenuIcon from '../../../components/icons/MenuIcon';
import PaintbrushIcon from '../../../components/icons/paintbrush';
import ColorPaletteIcon from '../../../components/icons/ColorPalette';
import KeyIcon from '../../../components/icons/KeyIcon';
import FlaskIcon from '../../../components/icons/FlaskIcon';
import TabItem from '../TabItem';
import TabsContext from '../../contexts/TabsContext';
import ErrorBoundary from '../../admin-components/ErrorBoundary/index.js';

// Lazy load components.
const AdminHome = lazy( () =>
	import( /* webpackChunkName: "AdminHome0.0.7" */ '../../views/AdminHome' )
);
const AdminDefaults = lazy( () =>
	import( /* webpackChunkName: "AdminDefaults0.0.9" */ '../../views/AdminDefaults' )
);

const AdminAdvanced = lazy( () =>
	import( /* webpackChunkName: "AdminAdvanced0.0.11" */ '../../views/AdminAdvanced' )
);

const AdminContextualMenuDefaults = lazy( () =>
	import(
		/* webpackChunkName: "AdminMenuDefaults0.0.7" */ '../../views/AdminContextualMenu'
	)
);

const AdminThemesDefaults = lazy( () =>
	import(
		/* webpackChunkName: "AdminThemesDefaults0.0.8" */ '../../views/AdminThemesDefaults'
	)
);

const AdminThemeOptions = lazy( () =>
	import(
		/* webpackChunkName: "AdminThemeOptions0.0.10" */ '../../views/AdminThemeOptions'
	)
);

const AdminSupport = lazy( () =>
	import(
		/* webpackChunkName: "AdminSupport0.0.7" */ '../../views/AdminSupport'
	)
);

const AdminLicense = lazy( () =>
	import( /* webpackChunkName: "AdminLicense0.0.8" */ '../../views/AdminLicense' )
);

const AdminEmails = lazy( () =>
	import( /* webpackChunkName: "AdminEmails0.0.4" */ '../../views/AdminEmails' )
);

const AdminTabs = ( props ) => {
	const onSelect = ( tabName ) => {};

	const { blockDefaultsDirtyCount, contextualMenuDefaultsDirtyCount, themesDefaultsDirtyCount, licensesDirtyCount, advancedTabDirtyCount, emailTabDirtyCount } = useContext( TabsContext );

	const onTabClick = ( tab ) => {};

	useEffect( () => {}, [
		blockDefaultsDirtyCount,
		contextualMenuDefaultsDirtyCount,
		themesDefaultsDirtyCount,
		licensesDirtyCount,
		advancedTabDirtyCount,
		emailTabDirtyCount,
	] );

	/**
	 *
	 * @param {string} pathname Browser location.
	 * @param {string} slug     Tab slug.
	 * @return {boolean}         True or false.
	 */
	const isActive = ( pathname, slug ) => {
		if ( '/' === pathname && 'home' === slug ) {
			return true;
		}
		if ( '/' + slug === pathname ) {
			return true;
		}
		return false;
	};

	const getAdminHome = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the Home screen for QuotesDLX. Please try refreshing and contact support at dlxplugins.com/support/ if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminDefaultsLoader /> }>
					<AdminHome />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	const getAdminDefaults = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the Defaults screen for QuotesDLX. Please try refreshing and contact support if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminDefaultsLoader /> }>
					<AdminDefaults />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	const getAdminLicense = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the License screen for QuotesDLX. Please try refreshing and contact support if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminDefaultsLoader /> }>
					<AdminLicense />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	const getAdminContextualMenuDefaults = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the Contextual Menu screen for QuotesDLX. Please try refreshing and contact support if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminDefaultsLoader /> }>
					<AdminContextualMenuDefaults />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	const getAdminThemesDefaults = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the Theme Defaults screen for QuotesDLX. Please try refreshing and contact support if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminThemeDefaultsLoader /> }>
					<AdminThemesDefaults />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	const getAdminThemeOptions = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the Theme Colors and Font Sizes screen for QuotesDLX. Please try refreshing and contact support if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminThemeColorsLoader showHeader={ true } /> }>
					<AdminThemeOptions />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	const getAdminSupport = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the Admin Support screen for QuotesDLX. Please try refreshing and contact support if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminDefaultsLoader /> }>
					<AdminSupport />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	const getAdminAdvanced = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the Advanced screen for QuotesDLX. Please try refreshing and contact support at if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminDefaultsLoader /> }>
					<AdminAdvanced />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	const getAdminEmails = (
		<>
			<ErrorBoundary
				fallback={
					<p>
						{ __(
							'Unable to load the Email screen for QuotesDLX. Please try refreshing and contact support at if the error persists.',
							'quotes-dlx'
						) }
						<br />
						<a
							href="https://dlxplugins.com/support/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DLX Plugins Support
						</a>
					</p>
				}
			>
				<Suspense fallback={ <AdminDefaultsLoader /> }>
					<AdminEmails />
				</Suspense>
			</ErrorBoundary>
		</>
	);

	// Set browser unload event if dirtycounts are not zero.
	window.onbeforeunload = function() {
		if ( blockDefaultsDirtyCount || contextualMenuDefaultsDirtyCount || licensesDirtyCount || advancedTabDirtyCount ) {
			return true;
		}
	};

	return (
		<div className="qdlx-admin-container__wrap" id="qdlx-admin-container">
			<nav className="qdlx-admin__tabs--nav">
				<Router>
					<TabItem
						icon={ HomeIcon }
						slug="home"
						description={ __( 'Main screen options', 'quotes-dlx' ) }
						label={ __( 'Home', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ 0 }
					/>
					<TabItem
						icon={ GearIcon }
						slug="defaults"
						description={ __( 'Set block and shortcode defaults', 'quotes-dlx' ) }
						label={ __( 'Defaults', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ blockDefaultsDirtyCount }
					/>
					<TabItem
						icon={ MenuIcon }
						slug="menu"
						description={ __( 'Set the Tweet menu defaults', 'quotes-dlx' ) }
						label={ __( 'Contextual Menu', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ contextualMenuDefaultsDirtyCount }
					/>
					<TabItem
						icon={ AtIcon }
						slug="emails"
						description={ __( 'Set the email settings.', 'quotes-dlx' ) }
						label={ __( 'Emails', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ emailTabDirtyCount }
					/>
					<TabItem
						icon={ PaintbrushIcon }
						slug="themes"
						description={ __( 'Set the default theme for the plugin.', 'quotes-dlx' ) }
						label={ __( 'Default Theme', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ themesDefaultsDirtyCount }
					/>
					<TabItem
						icon={ ColorPaletteIcon }
						slug="theme-options"
						description={ __( 'Set the theme color, line-height, and font sizes', 'quotes-dlx' ) }
						label={ __( 'Theme Options', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ 0 }
					/>
					{ ! quotes_dlx_admin.should_disable_licensing && (
						<>
							<TabItem
								icon={ KeyIcon }
								slug="licenses"
								description={ __( 'Set the license for support and updates.', 'quotes-dlx' ) }
								label={ __( 'License', 'quotes-dlx' ) }
								tabClicked={ ( tab ) => {
									onTabClick( tab );
								} }
								isActive={ isActive }
								dirtyCount={ licensesDirtyCount }
							/>
						</>
					) }
					<TabItem
						icon={ FlaskIcon }
						slug="advanced"
						description={ __( 'Reset options and set global theme fonts.', 'quotes-dlx' ) }
						label={ __( 'Advanced', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ advancedTabDirtyCount }
					/>
					<TabItem
						icon={ CircularQuestionIcon }
						slug="support"
						description={ __( 'Quick links for docs and support.', 'quotes-dlx' ) }
						label={ __( 'Support & Docs', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ 0 }
					/>
				</Router>
			</nav>
			<span aria-hidden="true"></span>
			<>
				<div id="qdlx-tab-content">
					<Router>
						<Routes>
							<Route path="/defaults" exact element={ getAdminDefaults } />
							<Route
								path="/menu"
								exact
								element={ getAdminContextualMenuDefaults }
							/>
							<Route
								path="/emails"
								exact
								element={ getAdminEmails }
							/>
							<Route
								path="/themes"
								exact
								element={ getAdminThemesDefaults }
							/>
							<Route
								path="/theme-options"
								exact
								element={ getAdminThemeOptions }
							/>
							<Route
								path="/advanced"
								exact
								element={ getAdminAdvanced }
							/>
							<Route
								path="/support"
								exact
								element={ getAdminSupport }
							/>
							{ ! quotes_dlx_admin.should_disable_licensing && (
								<>
									<Route
										path="/licenses"
										exact
										element={ getAdminLicense }
									/>
								</>
							) }
							<Route path="/" exact element={ getAdminHome } />
							<Route path="*" element={ <Navigate to="/" /> } />
						</Routes>
					</Router>
				</div>
			</>
		</div>
	);
};

export default AdminTabs;
