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


// Send Mail 
  const sendEmail = (emailAddress, name, deviceBrand, deviceType) => {

    const emailContent = `Dear ${name},<br><br>
    We're pleased to inform you that your ${deviceType} has been successfully repaired and is now ready for collection.<br><br>
    Details:<br>
    Item Name: ${deviceBrand}<br>
    Repair Status: Successfully Repaired<br>
    Ready for Pickup: Yes<br><br>
    Please visit our service center during our business hours to collect your repaired ${deviceType}. Our team will be happy to assist you !!<br>
    If you have any questions or concerns, feel free to reply to this email or contact our customer service at 119.<br><br>
    Thank you for choosing DigitX Solutions for your repair needs. We appreciate your business.<br><br>
    Best regards,`;

    requestService.sendMailRequest({
      to: emailAddress,
      subject: 'RG: Your Computer Item Repair Request',
      text: emailContent 
    })
    
    .then(() => {
      alert('The Email has been sent Successfully !!');
    })
    .catch((error) => {
      console.error('Error Sending Mail !!' + error);
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
                      <button className="btn btn-info" onClick={() => sendEmail(request.userEmail,request.userName,request.deviceBrandModel,request.deviceType)} style={{ marginLeft: '7px' }} >
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
