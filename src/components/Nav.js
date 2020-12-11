import { Link } from 'react-router-dom'

function Nav() {
    return (
        <ul>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/contact'>Contact</Link></li>
            <li><Link to ='/games'>Games</Link></li>
        </ul>
    )
}

export default Nav