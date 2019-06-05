import React from "react";
const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://www.commonspace.scot/sites/default/files/se-images/PeopleMakeGlasgow.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.visitmanchester.com/imageresizer/?image=%2fdbimgs%2fOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
