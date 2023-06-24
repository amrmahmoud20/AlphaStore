import React from "react";

const loading = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const IsLoadingCard = () => {
  return (
    <>
      {loading.map((item) => (
        <div className="col" key={item.id}>
          <div className="card featured-card w-100" aria-hidden="true">
            <div className="d-flex justify-content-center">
              <div
                className="spinner-grow text-primary mt-3 mb-1"
                style={{ width: "1.5rem", height: "1.5rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

            <div className="card-body text-center">
              <h2 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h2>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default IsLoadingCard;
