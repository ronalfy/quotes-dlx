import Logo from '../Logo/Logo';

const Header = () => {
	return (
		<header className="header">
			<div className="qdlx-admin-container__wrap">
				<div className="header__logo-wrap">
					<Logo id="svg--logo" />
				</div>
			</div>
		</header>
	);
};

export default Header;
