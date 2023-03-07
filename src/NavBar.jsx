import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>
      <Link to='/one' className='NavBar-link'>
        one
      </Link>
      <Link to='/two' className='NavBar-link'>
        two
      </Link>
      <Link to='/three' className='NavBar-link'>
        three
      </Link>
    </div>
  );
}

export default NavBar;
