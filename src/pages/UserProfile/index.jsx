import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import RepositoCard from '../../components/RepositoriesCard';
import './index.css'

function UserProfile() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([])
  const username = searchParams.get("username")
  const navigate = useNavigate()

  useEffect(() => {
    getData();
  }, [])
  
  const getData = () => {
    const api = `https://api.github.com/users/${username}/repos`
    axios.get(api)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
}

const goToRead = (name) => {
  navigate(`/readme?repo=${name}&username=${username}`)
}

const goBack = () => {
  window.history.back()
}

console.log(data)
  return (
    <div className="container-fluid userprofile">
      <div className="container">
        <div className="copywriting-userprofile">
          <h1>Hi! Welcome to {username} Profile</h1>
          <h5>Discover, collaborate, and innovate with our GitHub repositories. Explore a world of code, where ideas become reality. Start your journey today!</h5>
          <hr />
          <button onClick={goBack} type="button" className="btn btn-dark">Back to user search</button>
          <h4>List of Repositories</h4>
        </div>
        <div className="row">
          {data.map((item) => (
            <>
            <RepositoCard reponame={item.name} publicstatus={item.visibility} descriptionrepo={item.description} datecreated={item.created_at} gotoread={() => goToRead(item.name)} />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserProfile