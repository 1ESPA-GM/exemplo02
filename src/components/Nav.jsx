import {Link} from 'react-router-dom'

const Nav = () => {
    return(

        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/*">Error</Link></li>
                    <li><Link to="/login">login</Link></li>
                </ul>
            </nav>
        </header>
    )
}