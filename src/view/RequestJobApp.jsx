import { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import Navbar from "./composables/Navbar";
function RequestJobApp() {
    const [jobData, setJobData] = useState({});
    const {id} = useParams();
    console.log(id)
    
    useEffect(() => {
        const fetchJobDetail = async (e) => {
            try {
                const res = await api.get('job_vacancies/' + id)
                console.log(res.data.vacancy)
                setJobData(res.data.vacancy)
            } catch (err) {
                console.log(err)
            }
        }
        fetchJobDetail();
    }, [id])


    return (
        <>
        <Navbar/>

<main>
    
    <header className="jumbotron">
        <div className="container text-center">
            <div>
                <h1 className="display-4">{jobData?.company}</h1>
                <span className="text-muted">{jobData?.address}</span>
            </div>
        </div>
    </header>
    

    <div className="container">

        <div className="row mb-3">
            <div className="col-md-12">
                <div className="form-group">
                    <h3>Description</h3>
                    {jobData?.description}
                </div>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-md-12">
                <div className="form-group">
                    <h3>Select position</h3>
                    <table className="table table-bordered table-hover table-striped"> 
                        <thead>


                        
                        <tr>
                            <th width="1">#</th>
                            <th>Position</th>
                            <th>Capacity</th>
                            <th>Application / Max</th>
                            <th rowSpan={jobData?.available_position?.length} style={{ verticalAlign: 'middle', whiteSpace: 'nowrap' }} width={1}>

                                <a href="" className="btn btn-primary btn-lg">Apply for this job</a>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {jobData?.available_position?.map((pos, idx) => (
                        <tr key={idx} className={pos.apply_capacity >= pos.capacity ? 'table-warning' : ''}>
                            <td><input type="checkbox" disabled={pos.apply_capacity >= pos.capacity}  checked={pos.selected || false} /></td>
                            <td>{pos.position}</td>
                            <td>{pos.capacity}</td>
                            <td>{pos.apply_capacity}/{pos.capacity}</td>
                        </tr>
                        ))}
                        </tbody>
                        
                        
                    </table>
                </div>
            </div>

            <div className="col-md-12">
                <div className="form-group">
                    <div className="d-flex align-items-center mb-3">
                        <label className="mr-3 mb-0">Notes for Company</label>
                    </div>
                    <textarea className="form-control" cols="30" rows="6" placeholder="Explain why you should be accepted"></textarea>
                </div>
            </div>
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

export default RequestJobApp;