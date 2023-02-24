import './Header.css';

const Header = props => {
    return(
        <div className="header">
             <h1>Expense Tracker</h1>
                <nav className='navbar'> 
                    <a>Home</a>
                    &emsp;|&emsp;
                    <a>Data</a>
                    &emsp;|&emsp;
                    <a>Feedback</a>
                    &emsp;|&emsp;
                    <a>Logout</a>
                    
                </nav>
        </div>
    )
}

export default Header; 