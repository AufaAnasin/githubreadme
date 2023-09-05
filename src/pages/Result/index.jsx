import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import UserCard from '../../components/UserCard';
import './index.css'

function Result() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const username = searchParams.get("q")
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        console.log("This is from the getData", username)
        const api = `https://api.github.com/search/users?q=${username}&1,30,repositories,asc`
        axios.get(api)
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err))
    }
    console.log(data)

    const goToUser = (login, avatar) => {
        navigate(`/user-profile?username=${login}`)
    }

    const goBack = () => {
        window.history.back()
      }
  return (
    <>
    <div className="container-fluid result">
        <div className="container">
            <div className="row result">
                <div className="col item">
                <button onClick={goBack} type="button" style={{width: "70px", height: "40px"}} className="btn btn-dark">Back</button>
                    {data.map((item) => (
                        <>
                            <UserCard login={item.login} avatar={item.avatar_url} gotouser={() => goToUser(item.login)} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Result