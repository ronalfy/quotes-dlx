import React from 'react';
import {createRoot} from 'react-dom/client';
import Wrapper from './Wrapper';

const container = document.getElementById('quotes-dlx-admin');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Wrapper />
	</React.StrictMode>
);
