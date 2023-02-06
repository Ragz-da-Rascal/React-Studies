import './Header.css';

const Header = props => {
    return(
        <div className="header">
             <h1>Expense Tracker</h1>
             <div className='navbar'>
                <nav> 
                    <a>Home</a> |
                    <a> Data</a> | 
                    <a> Feedback</a> |  
                    <a> Logout</a>
                </nav>
             </div>
        </div>
    )
}

export default Header; 