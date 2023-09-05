import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
// import bg from '../../components/img/bg-1.jpg'
 
function Home() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const onQuery = () => {
        navigate(`/result?q=${query}`)
    }
  return (
    <>
    <div className="container-fluid home">
        <div className="container">
            <div className="row logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" alt="Github Logo" />
            </div>
            <div className="row">
                <div className="col">
                    <div className="maincopywriting">
                        <h1>Lets build from here.</h1>
                        <p>The AI-powered developer platform to build, scale, and deliver secure software</p>
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" onChange={(e) => setQuery(e.target.value)} placeholder="Search or jump to" aria-label="Search or jump to" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" onClick={onQuery} type="submit" id="button-addon2">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home