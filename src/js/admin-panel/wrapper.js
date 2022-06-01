import React, { useState } from 'react';
import Header from './admin-components/Header/Header';
import AdminTabs from './admin-components/Tabs';
import TabsContext from './contexts/TabsContext';

const Wrapper = () => {
	const [ blockDefaultsDirtyCount, setBlockDefaultsDirtyCount ] = useState( 0 );
	const [
		contextualMenuDefaultsDirtyCount,
		setContextualMenuDefaultsDirtyCount,
	] = useState( 0 );
	const [ themesDefaultsDirtyCount, setThemesDefaultsDirtyCount ] = useState( 0 );
	const [ licensesDirtyCount, setLicensesDirtyCount ] = useState( 0 );
	return (
		<>
			<Header />
			<TabsContext.Provider
				value={ {
					blockDefaultsDirtyCount,
					contextualMenuDefaultsDirtyCount,
					setBlockDefaultsDirtyCount,
					setContextualMenuDefaultsDirtyCount,
					themesDefaultsDirtyCount,
					setThemesDefaultsDirtyCount,
					licensesDirtyCount,
					setLicensesDirtyCount,
				} }
			>
				<AdminTabs />
			</TabsContext.Provider>
		</>
	);
};

export default Wrapper;
