import './index.css'

function RepositoCard({reponame, publicstatus, descriptionrepo, datecreated, gotoread}) {
  return (
    <>
    <div className="card repo">
        <div className="info-wrapper">
            <div className="namepublicwrapper">
                <h5>{reponame}</h5>
            </div>
            <p className='descriptionrepo'>{descriptionrepo}</p>
            <p className='daterepo'>{datecreated}</p>
        </div>
        <div className="buttonpublicwrapper">
                <div className="card-little">
                    <p>{publicstatus}</p>
                </div>
                <button onClick={gotoread} type="button" className="btn btn-dark">See README.md</button>
        </div>
    </div>
    </>
  )
}

export default RepositoCard