import profile from '../img/bg-2.jpg'
import './index.css'

function UserCard({login, avatar, gotouser}) {
  return (
    <>
    <div className="card user">
        <div className="user-wrapper">
            <img src={avatar} alt="Profile" />
            <h5>{login}</h5>
        </div>
        <button type="button" onClick={gotouser} className="btn btn-dark">Go to user page</button>
    </div>
    </>
  )
}

export default UserCard