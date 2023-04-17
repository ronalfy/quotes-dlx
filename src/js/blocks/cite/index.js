import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './edit';

const Icon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={ 24 }
		height={ 24 }
		fillRule="evenodd"
		clipRule="evenodd"
		viewBox="0 0 24 24"
	>
		<path fill="currentColor" d="M22.75 5.5c0-.729-.29-1.429-.805-1.945A2.755 2.755 0 0 0 20 2.75H4c-.729 0-1.429.29-1.945.805A2.755 2.755 0 0 0 1.25 5.5v10A2.75 2.75 0 0 0 4 18.25h1a.25.25 0 0 1 .25.25v.919a1.75 1.75 0 0 0 2.843 1.367l3.102-2.481a.245.245 0 0 1 .156-.055H20c.729 0 1.429-.29 1.945-.805a2.755 2.755 0 0 0 .805-1.945zm-9.676 7.357c-.339-.412-.667-1.132-.564-2.39.166-2.04 2.38-3 2.38-3l.407.62s-1.246.673-1.134 2.223a1.62 1.62 0 1 1-.443 3.078c-.003 0-.486-.268-.646-.531zm-4.5 0c-.339-.412-.667-1.132-.564-2.39.166-2.04 2.38-3 2.38-3l.407.62s-1.246.673-1.134 2.223a1.62 1.62 0 1 1-.443 3.078c-.003 0-.486-.268-.646-.531z" />
	</svg>
);

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: Icon,
} );
