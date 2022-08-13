import React from 'react';
import { createRoot } from 'react-dom/client';
import ThemePreview from '../../admin-components/ThemePreview/index';

const Preview = () => {
	console.log( qdlx_theme_preview );
	return (
		<>
			<ThemePreview
				activeTheme={ qdlx_theme_preview.theme }
				stylesheet={ qdlx_theme_preview.stylesheet }
				colors={ qdlx_theme_preview.colors }
				fontSize={ qdlx_theme_preview.font_size }
				lineHeight={ parseFloat( qdlx_theme_preview.line_height ) }
				buttonFontSize={ qdlx_theme_preview.button_font_size }
				screen={ qdlx_theme_preview.screen }
			/>
		</>
	);
};

const container = document.getElementById( 'qdlx-theme-preview' );
const root = createRoot( container );
root.render(
	<React.StrictMode>
		<Preview />
	</React.StrictMode>
);

export default Preview;
