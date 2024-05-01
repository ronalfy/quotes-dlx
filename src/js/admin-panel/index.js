import React from 'react';
import {createRoot} from 'react-dom/client';
import { Popover, SlotFillProvider } from '@wordpress/components';
import Wrapper from './wrapper';

const container = document.getElementById('quotes-dlx-admin');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<SlotFillProvider>
			<Wrapper />
			<Popover.Slot />
		</SlotFillProvider>
	</React.StrictMode>
);
