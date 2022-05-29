import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDefaultsLoader from '../Loaders/AdminDefaultsLoader';
import AdminThemeDefaultsLoader from '../Loaders/AdminThemeDefaultsLoader';
import 'react-loading-skeleton/dist/skeleton.css';
import CircularQuestionIcon from '../../../components/icons/CircularQuestion';
import HomeIcon from '../../../components/icons/Home';
import GearIcon from '../../../components/icons/Gear';
import MenuIcon from '../../../components/icons/MenuIcon';
import PaintbrushIcon from '../../../components/icons/paintbrush';
import KeyIcon from '../../../components/icons/KeyIcon';
import TabItem from '../TabItem';
import TabsContext from '../../contexts/TabsContext';

// Lazy load components.
const AdminHome = lazy( () =>
	import( /* webpackChunkName: "AdminHome" */ '../../views/AdminHome' )
);
const AdminDefaults = lazy( () =>
	import( /* webpackChunkName: "AdminDefaults" */ '../../views/AdminDefaults' )
);

const AdminContextualMenuDefaults = lazy( () =>
	import(
		/* webpackChunkName: "AdminDefaults" */ '../../views/AdminContextualMenu'
	)
);

const AdminThemesDefaults = lazy( () =>
	import(
		/* webpackChunkName: "AdminThemesDefaults" */ '../../views/AdminThemesDefaults'
	)
);

const AdminSupport = lazy( () =>
	import(
		/* webpackChunkName: "AdminSupport" */ '../../views/AdminSupport'
	)
);

const AdminLicense = lazy( () =>
	import( /* webpackChunkName: "AdminLicense" */ '../../views/AdminLicense' )
);

const AdminTabs = ( props ) => {
	const onSelect = ( tabName ) => {};

	const { blockDefaultsDirtyCount, contextualMenuDefaultsDirtyCount, themesDefaultsDirtyCount } =
		useContext( TabsContext );

	const onTabClick = ( tab ) => {};

	useEffect( () => {}, [
		blockDefaultsDirtyCount,
		contextualMenuDefaultsDirtyCount,
		themesDefaultsDirtyCount,
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
			<Suspense fallback={ <AdminDefaultsLoader /> }>
				<AdminHome />
			</Suspense>
		</>
	);

	const getAdminDefaults = (
		<>
			<Suspense fallback={ <AdminDefaultsLoader /> }>
				<AdminDefaults />
			</Suspense>
		</>
	);

	const getAdminLicense = (
		<>
			<Suspense fallback={ <AdminDefaultsLoader /> }>
				<AdminLicense />
			</Suspense>
		</>
	);

	const getAdminContextualMenuDefaults = (
		<>
			<Suspense fallback={ <AdminDefaultsLoader /> }>
				<AdminContextualMenuDefaults />
			</Suspense>
		</>
	);

	const getAdminThemesDefaults = (
		<>
			<Suspense fallback={ <AdminThemeDefaultsLoader /> }>
				<AdminThemesDefaults />
			</Suspense>
		</>
	);

	const getAdminSupport = (
		<>
			<Suspense fallback={ <AdminDefaultsLoader /> }>
				<AdminSupport />
			</Suspense>
		</>
	);

	return (
		<div className="qdlx-admin-container__wrap">
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
					/>
					<TabItem
						icon={ GearIcon }
						slug="defaults"
						description={ __( 'Set block defaults', 'quotes-dlx' ) }
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
						icon={ KeyIcon }
						slug="licenses"
						description={ __( 'Set the license for support and updates.', 'quotes-dlx' ) }
						label={ __( 'License', 'quotes-dlx' ) }
						tabClicked={ ( tab ) => {
							onTabClick( tab );
						} }
						isActive={ isActive }
						dirtyCount={ 0 }
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
				<Router>
					<Routes>
						<Route path="/defaults" exact element={ getAdminDefaults } />
						<Route
							path="/menu"
							exact
							element={ getAdminContextualMenuDefaults }
						/>
						<Route
							path="/themes"
							exact
							element={ getAdminThemesDefaults }
						/>
						<Route
							path="/support"
							exact
							element={ getAdminSupport }
						/>
						<Route
							path="/licenses"
							exact
							element={ getAdminLicense }
						/>
						<Route path="/" exact element={ getAdminHome } />
						<Route path="*" element={ <Navigate to="/" /> } />
					</Routes>
				</Router>
			</>
		</div>
	);
};

export default AdminTabs;
