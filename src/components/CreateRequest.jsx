import React, { useState } from 'react';
import RequestService from '../services/RequestService';
import { useNavigate } from 'react-router-dom'; 

const CreateRequest = () => {

    const navigate = useNavigate();
    const [state, setState] = useState({
        userId: '',
        userName: '',
        userEmail: '',
        deviceType: '',
        deviceBrandModel: '',
        issueDescription: '',
        requestDate: '',
        status: 'Pending' // Set an initial status
    });

    const saveRequest = (e) => {
        e.preventDefault();

        const request = {
            userId: state.userId,
            userName: state.userName,
            userEmail: state.userEmail,
            deviceType: state.deviceType,
            deviceBrandModel: state.deviceBrandModel,
            issueDescription: state.issueDescription,
            requestDate: state.requestDate,
            status: state.status
        };

        RequestService.createRequest(request)
            .then((res) => {
                alert('Request Successfully Addedd!!!');
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    const cancel = () => {
        navigate('/addrequest');
    };


    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 mt-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">Add Request</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="userID" className="form-label"> User ID </label>
                                    <input type="number" className="form-control" name="userId" id="userID" placeholder="Enter user Id" value={state.userId} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label"> User Name </label>
                                    <input type="text" className="form-control" name="userName" id="userName" placeholder="Enter usename" value={state.userName} onChange={handleInputChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="form-label"> User Email </label>
                                    <input type="email" className="form-control" name="userEmail" id="userEmail" placeholder="Enter email" value={state.userEmail} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="deviceType" className="form-label"> Device Type </label>
                                    <input type="text" className="form-control" name="deviceType" id="deviceType" placeholder="Enter device type" value={state.deviceType} onChange={handleInputChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="deviceBrand" className="form-label"> Device Brand </label>
                                    <input type="text" className="form-control" name="deviceBrandModel" id="deviceBrand" placeholder="Enter device brand" value={state.deviceBrandModel} onChange={handleInputChange}  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="issueDesc" className="form-label"> Issue Description </label>
                                    <textarea className="form-control" name="issueDescription" id="issueDesc" placeholder="Enter issue description" value={state.issueDescription} onChange={handleInputChange}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="reqDate" className="form-label"> Request Date </label>
                                    <input type="date" className="form-control" name="requestDate" id="reqDate" placeholder="Enter request date" value={state.requestDate} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label"> Status </label>
                                    <select className="form-select" name="status" id="status" value={state.status} onChange={handleInputChange} >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>

                                <button type="button" className="btn btn-primary" onClick={saveRequest}> Submit </button>
                                <button type="button" className="btn btn-danger" onClick={cancel} style={{ marginLeft: "17px" }}> Cancel </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRequest;
