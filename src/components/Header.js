import logo from '../assets/logo.png';

const Header = () => {
    return(
        <header>
            <img src={logo} alt="Logo" width='auto' height={100}/>
            <nav>
                <ul>
                    <li>
                        <a href="/">Book a table</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;