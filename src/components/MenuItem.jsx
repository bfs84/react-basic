const MenuItem = ({ title, onClick }) => {
    return (
        <li>
            <a href="/" onClick={onClick} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                {title}
            </a>
        </li>
    );
};

export default MenuItem;