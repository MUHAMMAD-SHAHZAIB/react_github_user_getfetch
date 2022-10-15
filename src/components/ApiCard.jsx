import React from "react";

const ApiCard = ({gethubArray}) => {
  return (
    <>
      <h2 className="text-center bg-danger p-3">GitHub Api Fetching Data</h2>
      <div className="container-fluid">
        <div className="row text-center">
          {gethubArray.map(val => {
            const { id, login, avatar_url ,type} = val;
            return (
              <div className="col-md-4 col-10 mt-5" key={id}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={avatar_url}
                        className="img-fluid rounded-start h-75"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <p className="card-text">{type}</p>
                        <div className="div  d-flex justify-content-between">
                          <div className="text">
                            <span>articl</span>
                            <h4>74</h4>
                          </div>
                          <div className="text">
                            <span>articl</span>
                            <h4>34</h4>
                          </div>
                          <div className="text">
                            <span>articl</span>
                            <h4>84</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ApiCard;
