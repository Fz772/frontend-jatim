import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Navbar from "./composables/Navbar";
import api from "../api";

function Dashboard() {
    
    const navigate = useNavigate();
    const [validation, setValidation] = useState({});
    
    const username = localStorage.getItem('username');

    useEffect(() => {
       const token = localStorage.getItem('token');
        if(!token) {
            navigate('/')
        }
        api.get('validations')
        .then(res => {
            console.log('validation data: ', res.data.validation);
            setValidation(res.data.validation)
            
        })
        .catch(error => {

        })
    },[navigate])

    
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
                            <a href="" className="btn btn-primary btn-block">+ Request validation</a>
                        </div>
                    </div>
                </div>
                )}
                
                

                {validation && validation?.status && (
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
                                    <td><span className={`badge ${validation?.status === 'accepted' ? "badge-success" : "badge-info"}`}>{validation.status}</span></td>
                                </tr>
                                <tr>
                                    <th>Job Category</th>
                                    <td className="text-muted">sfhsdfhguvbshgfdb</td>
                                </tr>
                                <tr>
                                    <th>Job Position</th>
                                    <td className="text-muted">{validation.job_position}</td>
                                </tr>
                                <tr>
                                    <th>Reason Accepted</th>
                                    <td className="text-muted">-</td>
                                </tr>
                                <tr>
                                    <th>Validator</th>
                                    <td className="text-muted">-</td>
                                </tr>
                                <tr>
                                    <th>Validator Notes</th>
                                    <td className="text-muted">-</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                )}
                
                

                
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
                </div>
                

            </div>
        </section>
        

        
        <section className="validation-section mb-5">
            <div className="section-header mb-3">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="section-title text-muted">My Job Applications</h4>
                    </div>
                    <div className="col-md-4">
                        <a href="" className="btn btn-primary btn-lg btn-block">+ Add Job Applications</a>
                    </div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mb-4">

                    
                    <div className="col-md-12">
                        <div className="alert alert-warning">
                            Your validation must be approved by validator to applying job.
                        </div>
                    </div>
                    

                    
                    <div className="col-md-6">
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
                                                <li>Desain Grafis <span className="badge badge-info">Pending</span></li>
                                                <li>Programmer <span className="badge badge-info">Pending</span></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Apply Date</th>
                                        <td className="text-muted">September 12, 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Notes</th>
                                        <td className="text-muted">I was the better one</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-md-6">
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
                    </div>
                    

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