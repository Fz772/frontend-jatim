import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Navbar from "./composables/Navbar";
import api from "../api";

function Dashboard() {
    
    const navigate = useNavigate();
    const [validation, setValidation] = useState(null);
    const [jobVacancy, setJobVacancy] = useState(null);
    const [jobApplication, setJobApplicationData] = useState([]);
    
    const username = localStorage.getItem('username');

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                navigate('/')
                return
            }
            try {
                const resVal = await api.get('/validations')
                const validationData = resVal.data.validation
                console.log(resVal)
                const jobId = validationData?.job_category_id

                let JobVacancyData = null;
                if(jobId) {
                    const resJob = await api.get(`job_vacancies/${jobId}`)
                    JobVacancyData = resJob.data ?? null;
                }
                const resJobApp = await api.get('/applications')
                console.log('job applications:', resJobApp.data);
                setJobApplicationData(resJobApp.data.vacancies ?? []);


                setJobVacancy(JobVacancyData);
                // setJobVacancy(JobVacancyData?.vacancy?.category?.job_category);
                setValidation(validationData);
                console.log('validationdata: ', validationData)
                console.log('JobvacancyData: ', JobVacancyData)
                
            } catch (err) {
                console.error("Fetch error:", err);
            }
        }
        fetchData();
       },[navigate])
        console.log('JobvacancyDatasdsada: ', jobVacancy)

        //OJO DI DELETE Y
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const token = localStorage.getItem('token');
    //         if(!token) {
    //             navigate('/')
    //             return
    //         }
    //         try {
    //             const resVal = await api.get('/validations')
    //             const validationData = resVal.data.validation
    //             console.log(resVal)
    //             const jobId = validationData?.job_category_id

    //             let JobVacancyData = null;
    //             if(jobId) {
    //                 const resJob = await api.get(`job_vacancies/${jobId}`)
    //                 JobVacancyData = resJob.data ?? null;
    //             }
    //             setJobVacancy(JobVacancyData);
    //             // setJobVacancy(JobVacancyData?.vacancy?.category?.job_category);
    //             setValidation(validationData);
    //             console.log('validationdata: ', validationData)
    //             console.log('JobvacancyData: ', JobVacancyData)
                
    //         } catch (err) {
    //             console.error("Fetch error:", err);
    //         }
    //     }
    //     fetchData();
    //    },[navigate])
    //     console.log('JobvacancyDatasdsada: ', jobVacancy)
    
    return (
        <>
        
        <Navbar />

<main>
    
    <header className="jumbotron">
        <div className="container">
            <h1 className="display-4">Dashboard</h1>
        </div>
    </header>
    

    <div className="container">

        
        <section className="validation-section mb-5">
            <div className="section-header mb-3">
                <h4 className="section-title text-muted">My Data Validation</h4>
            </div>
            <div className="row">

                {!validation && (
                    <div className="col-md-4">
                    <div className="card card-default">
                        <div className="card-header">
                            <h5 className="mb-0">Data Validation</h5>
                        </div>
                        <div className="card-body">
                            <a href="/validation/request" className="btn btn-primary btn-block">+ Request validation</a>
                        </div>
                    </div>
                </div>
                )}
                
                

                {validation && ( 
                    <div className="col-md-4">
                    <div className="card card-default">
                        <div className="card-header border-0">
                            <h5 className="mb-0">Data Validation</h5>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped mb-0">
                                <tbody>
                                <tr>
                                    <th>Status</th>
                                    <td><span className={`badge ${validation?.status === 'accepted' ? "badge-success" : "badge-info"}`}>{validation?.status}</span></td>
                                </tr>
                                <tr>
                                    <th>Job Category</th>
                                    <td className="text-muted">{jobVacancy?.vacancy?.category?.job_category}</td>
                                </tr>
                                <tr>
                                    <th>Job Position</th>
                                    <td className="text-muted">{validation?.job_position}</td>
                                </tr>
                                <tr>
                                    <th>Reason Accepted</th>
                                    <td className="text-muted">{validation?.reason_accepted}</td>
                                </tr>
                                <tr>
                                    <th>Validator</th>
                                    <td className="text-muted">{validation?.validator?.name}</td>
                                </tr>
                                <tr>
                                    <th>Validator Notes</th>
                                    <td className="text-muted">{validation?.validator_notes}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                )}
                    
                
                
                

                
                {/* <div className="col-md-4">
                    <div className="card card-default">
                        <div className="card-header border-0">
                            <h5 className="mb-0">Data Validation</h5>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped mb-0">
                                <tbody>
                                <tr>
                                    <th>Status</th>
                                    <td><span className="badge badge-success">Accepted</span></td>
                                </tr>
                                <tr>
                                    <th>Job Category</th>
                                    <td className="text-muted">Computing and ICT</td>
                                </tr>
                                <tr>
                                    <th>Job Position</th>
                                    <td className="text-muted">Programmer</td>
                                </tr>
                                <tr>
                                    <th>Reason Accepted</th>
                                    <td className="text-muted">I can work hard</td>
                                </tr>
                                <tr>
                                    <th>Validator</th>
                                    <td className="text-muted">Usman M.Ti</td>
                                </tr>
                                <tr>
                                    <th>Validator Notes</th>
                                    <td className="text-muted">siap kerja</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
                

            </div>
        </section>
        

        
        <section className="validation-section mb-5">
            <div className="section-header mb-3">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="section-title text-muted">My Job Applications</h4>
                    </div>
                    {!jobApplication && (
                        <div className="col-md-4">
                        <a href="/job-vacancies" className="btn btn-primary btn-lg btn-block">+ Add Job Applications</a>
                    </div>
                    )}
                    
                </div>
            </div>
            <div className="section-body">
                <div className="row mb-4">

                    {!validation || validation?.status !== "accepted" ? (
  <div className="col-md-12">
    <div className="alert alert-warning">
      Your validation must be approved by validator to applying job.
    </div>
  </div>
) : (
  <>
    {jobApplication.length === 0 ? (
      <div className="col-md-12">
        <div className="alert alert-info">
          You haven’t applied for any jobs yet.
        </div>
      </div>
    ) : (
      jobApplication.map((app, index) => (
        <div key={index} className="col-md-6">
          <div className="card card-default">
            <div className="card-header border-0">
              <h5 className="mb-0">{app.job_vacancy?.company}</h5>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped mb-0">
                <tbody>
                  <tr>
                    <th>Address</th>
                    <td className="text-muted">{app.job_vacancy?.address}</td>
                  </tr>
                  <tr>
                    <th>Position</th>
                    <td className="text-muted">
                      <ul>
                        {app.job_apply_positions?.map((pos, idx) => (
                          <li key={idx}>
                            {pos.position?.position}{" "}
                            <span
                              className={`badge ${
                                pos.status === "accepted"
                                  ? "badge-success"
                                  : pos.status === "rejected"
                                  ? "badge-danger"
                                  : "badge-secondary"
                              }`}
                            >
                              {pos.status}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Apply Date</th>
                    <td className="text-muted">{app.date}</td>
                  </tr>
                  <tr>
                    <th>Notes</th>
                    <td className="text-muted">{app.notes ?? "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))
    )}
  </>
)}

                    
                    

                    
                    
                    

                    
                    {/* <div className="col-md-6">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">PT. Maju Mundur Sejahtera</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Address</th>
                                        <td className="text-muted">Jln. HOS. Cjokroaminoto (Pasirkaliki) No. 900, DKI Jakarta</td>
                                    </tr>
                                    <tr>
                                        <th>Position</th>
                                        <td className="text-muted">
                                            <ul>
                                                <li>Desain Grafis <span className="badge badge-success">Accepted </span></li>
                                                <li>Programmer <span className="badge badge-danger">Rejected</span></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Apply Date</th>
                                        <td className="text-muted">September 12, 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Notes</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> */}
                    

                </div>
                </div>

            
        </section>
        

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

export default Dashboard;