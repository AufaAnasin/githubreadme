import axios from 'axios';
import { marked } from 'marked';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import './index.css'

function ReadmeViewer() {

  const [searchParams] = useSearchParams();
  const [readme, setReadme] = useState('')
  const owner = searchParams.get("username")
  const repo = searchParams.get("repo")


  const getData = () => {
    const api = `https://api.github.com/repos/${owner}/${repo}/contents/README.md`
    axios.get(api)
    .then((res) => {
      const content = atob(res.data.content)
      setReadme(content);
    })
    .catch((err) => console.log(err))
  }
  // console.log(data?.content)
  useEffect(() => {
    getData()
  }, [])

  const goBack = () => {
    window.history.back()
  }

  const htmlContent = marked(readme)

  return (
    <div className="container-fluid readme">
      <div className="container">
        <div className="row">
        <div className="card content">
          <button type="button" onClick={goBack} className="btn btn-dark">Back</button>
            <div className="card-header">
              {owner}/{repo}
            </div>
            <div className="card-body">
              <div dangerouslySetInnerHTML={{__html: htmlContent}}
              //  style={{whiteSpace: 'pre-wrap'}} 
               />
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ReadmeViewer