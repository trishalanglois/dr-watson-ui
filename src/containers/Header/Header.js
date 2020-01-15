import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { clearMessages } from '../../actions';


export const Header = ({ user, signOut }) => {
  return (
    <header>
      <h1>Dr. Watson</h1>
      {user && <button onClick={signOut}>Sign Out</button>}
    </header>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

// Ideally, I would have all of the signOut functionality happening here, since it's where the event takes place.  However, because App currently holds all of the other signOut functionality, I'm going to put clearMessages from mapToDispatch there.  If I had more time to refactor, I would move all of the functionality into this component.

// export const mapDispatchToProps = dispatch => ({
//   clearMessages: () => dispatch(clearMessages())
// })

export default connect(mapStateToProps)(Header);
