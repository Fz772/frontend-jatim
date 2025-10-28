import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
function RequestJob() {

    const [jobData, setJobData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchJob = async (e) => {
            
            try{
                const res = await api.get('/job_vacancies')
                console.log(res.data.flat())
                setJobData(res.data.flat())
            } catch (err) {
                console.log('error fetching job: ', err)
            }
        }
        fetchJob();
    }, [])
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div className="container">
        <a className="navbar-brand" href="#">Job Seeker Platform</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Marsito Kusmawati</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<main>
    
    <header className="jumbotron">
        <div className="container">
            <h1 className="display-4">Job Vacancies</h1>
        </div>
    </header>
    

    <div className="container mb-5">

        <div className="section-header mb-4">
            <h4 className="section-title text-muted font-weight-normal">List of Job Vacancies</h4>
        </div>

        <div className="section-body">
        {jobData.map((job, index) => {
            return (
                <article className={`spot ${job.alreadyApplied ? 'unavailable' : ''}`}>

                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">{job.company}</h5>
                        <span className="text-muted">{job.address}</span>
                    </div>
                    <div className="col-4">
                        <h5>Available Position (Capacity)</h5>
                        {job.available_positions.map((pos, idx) => (
                            <span key={idx} className="text-muted">
                                {pos.position} ({pos.capacity - pos.apply_capacity} available)
                                {idx < job.available_positions.length - 1 ? ', ' : ''}
                            </span>
                            
                        ))}
                        
                    </div>
                    <div className="col-3">
                        {job.alreadyApplied ? (
  <div className="bg-success text-white p-2">
    Vacancies have been submitted
  </div>
) : (
  <button onClick={() => navigate(`/job-vacancies/${job.id}`)}className="btn btn-danger btn-lg btn-block">
    Detail / Apply
  </button>
)}

                    </div>
                </div>
            </article>
            )
            
        })}
            

            

            

        </div>

    </div>

</main>


<footer>
    <div className="container">
        <div className="text-center py-4 text-muted">
            Copyright &copy; 2023 - Web Tech ID
        </div>
    </div>
</footer>


        </>

    )
}
export default RequestJob;