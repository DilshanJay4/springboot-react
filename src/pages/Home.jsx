import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/anime.json'; 

const Home = () => {
  return (
    <div>
      <h1 className='display-3 fw-bold text-center pt-5 pl-5 pr-5 ml-5' style={{marginLeft: '210px'}}>Computer Item Repair System</h1>

        <div className="container p-5">
            <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: '1100px', marginLeft: '150px'}}/>
        </div>



        <div id="carouselExample" className="carousel slide">

  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <div className="card">
        <img src="../assets/pic.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div> */}
    </div>

    <div className="carousel-item">
      <div className="card">
        <img src="../assets/pic.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="card">
        <img src="../assets/pic.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>


    </div>
  );
}

export default Home;
