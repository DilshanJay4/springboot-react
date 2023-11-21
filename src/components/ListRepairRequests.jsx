import React, { useEffect, useState } from 'react';
import requestService from '../services/RequestService';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';



const ListRepairRequests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  const editRequest = (id) => {
    navigate(`/updaterequest/${id}`);
  };

  const deleteHandler = (id) => {
    requestService.deleteRequest(id)
      .then(() => {
        alert('The Request has been Deleted Successfully !!');
        // Remove the deleted request from the state
        setRequests(requests.filter(request => request.requestId !== id));
      })
      .catch((error) => {
        console.error('Error Deleting Request !!' + error);
      });
  }

  useEffect(() => {
    requestService.getRequests()
      .then((res) => {
        setRequests(res.data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center pt-5 pl-5">Repair Item requests</h2>
      <br />
      <div className="row justify-content-end">
        <div className="col-10">
          <table className="table table-striped table-bordered table-hover mb-1 custom-table">
            <thead className="table-dark">
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Device Type</th>
                <th>Device Brand</th>
                <th>Issue Description</th>
                <th>Request Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.requestId}>
                  <td>{request.userId}</td>
                  <td>{request.userName}</td>
                  <td>{request.userEmail}</td>
                  <td>{request.deviceType}</td>
                  <td>{request.deviceBrandModel}</td>
                  <td>{request.issueDescription}</td>
                  <td>{request.requestDate}</td>
                  <td>{request.status}</td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-success" onClick={() => editRequest(request.requestId)}>
                        <i className="fa fa-pencil"></i>
                      </button>
                      <button className="btn btn-danger" onClick={() => deleteHandler(request.requestId)} style={{ marginLeft: '7px' }} >
                        <i className="fa fa-trash"></i>
                      </button>
                      <button className="btn btn-info" onClick={{}} style={{ marginLeft: '7px' }} >
                        <i className="fa fa-envelope"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListRepairRequests;
