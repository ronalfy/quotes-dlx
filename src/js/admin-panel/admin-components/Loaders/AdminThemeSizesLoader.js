import React from 'react';
import Skeleton from 'react-loading-skeleton';

const AdminThemeSizesLoader = ( props ) => {
	const { showHeader } = props;
	return (
		<div className="qdlx-admin__tabs--content-wrap">
			<div className="qdlx-admin__tabs--content-panel">
				{ showHeader && (
					<div className="qdlx-admin__tabs--content-heading">
						<h1>
							<span className="qdlx-admin__heading--text">
								<Skeleton width="400px" height="1.8em" inline={ true } />
							</span>
						</h1>
						<p className="description">
							<Skeleton width="100%" height="0.9em" inline={ false } />
						</p>
					</div>
				) }
				<div className="qdlx-admin__tabs--content-inner">
					<Skeleton width="100%" height="45px" inline={ false } count={ 3 } />
				</div>
				<div className="qdlx-admin__tabs--content-inner">
					<Skeleton width="100%" height="45px" inline={ false } count={ 1 } />
				</div>
			</div>
		</div>
	);
};

export default AdminThemeSizesLoader;
