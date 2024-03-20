import MenuItem from './MenuItem';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'blue', color: 'white', padding: '0px' }}>
            <div style={{ marginLeft: '20px' }}>
                <a href="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '24px' }}>テストページ</a>
            </div>
            <div style={{ marginRight: '20px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
                    <MenuItem title="メニュー" href="/menu" />
                    <MenuItem title="問い合わせ" href="/contact" />
                </ul>
            </div>
        </header>
    );
};

export default Header;