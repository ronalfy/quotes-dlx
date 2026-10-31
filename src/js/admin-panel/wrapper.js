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
	const [ advancedTabDirtyCount, setAdvancedTabDirtyCount ] = useState( 0 );
	const [ emailTabDirtyCount, setEmailTabDirtyCount ] = useState( 0 );
	const [ defaultTheme, setDefaultTheme ] = useState( '' );
	return (
		<>
			<Header />
			<TabsContext.Provider
				value={ {
					blockDefaultsDirtyCount,
					contextualMenuDefaultsDirtyCount,
					setBlockDefaultsDirtyCount,
					setContextualMenuDefaultsDirtyCount,
					emailTabDirtyCount,
					setEmailTabDirtyCount,
					themesDefaultsDirtyCount,
					setThemesDefaultsDirtyCount,
					advancedTabDirtyCount,
					setAdvancedTabDirtyCount,
					defaultTheme,
					setDefaultTheme,
				} }
			>
				<AdminTabs />
			</TabsContext.Provider>
		</>
	);
};

export default Wrapper;
