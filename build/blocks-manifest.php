<?php
// This file is generated. Do not modify it manually.
return array(
	'tweet-quotes' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'title' => 'QuotesDLX',
		'apiVersion' => 2,
		'name' => 'mediaron/quotes-dlx',
		'category' => 'text',
		'icon' => '<svg width=\'100%\' height=\'100%\' viewBox=\'0 0 4450 4450\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' xml:space=\'preserve\' xmlns:serif=\'http://www.serif.com/\' style=\'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\'\'><g transform=\'matrix(4.16667,0,0,4.16667,-1325.8,-2025.45)\'><path fill=\'#9932cc\' d=\'M852.07,1553.89C1146.14,1553.89 1385.98,1314.05 1385.98,1020.01C1385.98,725.948 1146.14,486.109 852.07,486.109C558.033,486.109 318.193,725.948 318.193,1020.01C318.193,1314.05 558.033,1553.89 852.07,1553.89Z\'/><path d=\'M645.766,833.41C718.162,813.992 792.571,856.965 811.989,929.362C838.72,1029.11 795.378,1186.69 610.36,1211.24C650.471,1170.11 675.614,1140.15 686.018,1100.12C624.08,1102.5 566.509,1062 549.813,999.605C530.396,927.208 573.368,852.798 645.766,833.41Z\' style=\'fill:white;\'/><path d=\'M988.445,833.41C1060.84,813.992 1135.28,856.965 1154.67,929.362C1181.4,1029.11 1138.09,1186.69 953.069,1211.24C993.151,1170.11 1018.29,1140.15 1028.7,1100.12C966.761,1102.5 909.188,1062 892.493,999.605C873.104,927.208 916.049,852.798 988.445,833.41Z\' style=\'fill:white;\'/></g></svg>',
		'description' => 'WordPress Twitter block that makes it dead simple for users to share your quotes.',
		'keywords' => array(
			'click',
			'tweet',
			'twitter',
			'share',
			'quote',
			'blockquote',
			'dlx',
			'quotes',
			'dlx',
			'quo'
		),
		'version' => '1.0.0',
		'textdomain' => 'quotes-dlx',
		'attributes' => array(
			'uniqueId' => array(
				'type' => 'string',
				'default' => ''
			),
			'show_permalink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'template' => array(
				'type' => 'string',
				'default' => 'light-branded'
			),
			'button_style' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'share_text' => array(
				'type' => 'string',
				'default' => ''
			),
			'share_text_override' => array(
				'type' => 'string',
				'default' => ''
			),
			'share_button_text' => array(
				'type' => 'string',
				'default' => 'Click to Tweet'
			),
			'facebook_share_button_text' => array(
				'type' => 'string',
				'default' => 'Share on Facebook'
			),
			'share_text_override_enabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'align' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'hashtags' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'twitter_username' => array(
				'type' => 'string',
				'default' => ''
			),
			'maximum_width' => array(
				'type' => 'number',
				'default' => 850
			),
			'maximum_width_unit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'rtl' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tweet_button_alignment' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'tweet_icon_alignment' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'tweet_button_enabled' => array(
				'type' => 'boolean',
				'default' => true
			),
			'facebook_button_enabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tweet_button_display' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'icon_appearance' => array(
				'type' => 'string',
				'default' => 'button'
			),
			'tweet_styles_disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'anchor' => array(
				'type' => 'string',
				'default' => ''
			),
			'anchor_prefix' => array(
				'type' => 'string',
				'default' => 'qdlx'
			),
			'has_anchor' => array(
				'type' => 'boolean',
				'default' => true
			),
			'url_shortener' => array(
				'type' => 'boolean',
				'default' => true
			),
			'url_shortening_service' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'permalink' => array(
				'type' => 'string',
				'default' => ''
			),
			'manual_permalink' => array(
				'type' => 'string',
				'default' => ''
			),
			'enable_links_in_tweet' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enable_contextual_menu' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enable_copy_text' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enable_copy_tweet' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enable_copy_link' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enable_tweet_this' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enable_email_text' => array(
				'type' => 'boolean',
				'default' => false
			),
			'enable_share_this' => array(
				'type' => 'boolean',
				'default' => false
			),
			'email_text_label' => array(
				'type' => 'string',
				'default' => 'Email Quote'
			),
			'copy_text_label' => array(
				'type' => 'string',
				'default' => 'Copy Quote'
			),
			'copy_tweet_label' => array(
				'type' => 'string',
				'default' => 'Copy Tweet'
			),
			'copy_link_label' => array(
				'type' => 'string',
				'default' => 'Copy Link'
			),
			'tweet_this_label' => array(
				'type' => 'string',
				'default' => 'Tweet This'
			),
			'share_this_label' => array(
				'type' => 'string',
				'default' => 'Share This'
			),
			'preview' => array(
				'type' => 'boolean',
				'default' => false
			),
			'blockOnly' => array(
				'type' => 'boolean',
				'default' => false
			),
			'defaultsApplied' => array(
				'type' => 'boolean',
				'default' => false
			),
			'transforming' => array(
				'type' => 'boolean',
				'default' => false
			),
			'themeColors' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'enable_citation' => array(
				'type' => 'boolean',
				'default' => false
			),
			'enable_citation_image' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enable_citation_author' => array(
				'type' => 'boolean',
				'default' => true
			),
			'citation_author' => array(
				'type' => 'string',
				'default' => ''
			),
			'enable_citation_title' => array(
				'type' => 'boolean',
				'default' => true
			),
			'citation_title' => array(
				'type' => 'string',
				'default' => ''
			),
			'enable_citation_source' => array(
				'type' => 'boolean',
				'default' => false
			),
			'citation_source' => array(
				'type' => 'string',
				'default' => ''
			),
			'citation_image_id' => array(
				'type' => 'number',
				'default' => 0
			),
			'citation_image_url' => array(
				'type' => 'string',
				'default' => ''
			),
			'citation_image_appearance' => array(
				'type' => 'string',
				'default' => 'round'
			),
			'citation_image_has_border' => array(
				'type' => 'boolean',
				'default' => true
			),
			'citation_alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'show_rating' => array(
				'type' => 'boolean',
				'default' => false
			),
			'rating_value' => array(
				'type' => 'string',
				'default' => '100'
			),
			'rating_alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'rating_position' => array(
				'type' => 'string',
				'default' => 'above_quote'
			),
			'rating_appearance' => array(
				'type' => 'string',
				'default' => 'stars'
			)
		),
		'example' => array(
			'attributes' => array(
				'preview' => true,
				'blockOnly' => true,
				'share_text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada dui id nisi vulputate semper. Nam sagittis ac nulla id pharetra. Maecenas congue, tellus a blandit cursus, lorem dolor hendrerit erat, sed luctus arcu velit eget ligula.',
				'template' => 'purple-bliss',
				'enable_contextual_menu' => true,
				'enable_copy_text' => true,
				'enable_copy_tweet' => true,
				'enable_copy_link' => true,
				'enable_tweet_this' => true,
				'maximum_width' => 800,
				'maximum_width_unit' => 'px'
			)
		),
		'supports' => array(
			'anchor' => true,
			'align' => true,
			'className' => true
		),
		'editorScript' => 'quotes-dlx-block',
		'editorStyle' => 'quotes-dlx-block-editor-styles',
		'style' => 'quotes-dlx-frontend',
		'viewScript' => 'quotes-dlx-actions'
	)
);
