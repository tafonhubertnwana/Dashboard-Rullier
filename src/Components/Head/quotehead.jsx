const Quotehead
 = () => {
  
  return (
    <div>
    <div>
      {/***********************************
      Header start************************************/}
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">Devis sur la periode</div> 
              </div>
              <div className="header-right d-flex align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item ps-3">
                    <div className="dropdown header-profile2">
                      <a
                        className="nav-link"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        <div className="header-info2 d-flex align-items-center">
                          <div className="header-media">
                            <img src="images/user.jpg" alt="" />
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end" style={{}}>
                        <div className="card border-0 mb-0">
                          <div className="card-header py-2">
                            <div className="products">
                              <img
                                src="images/user.jpg"
                                className="avatar avatar-md"
                                alt=""
                              />
                              <div>
                                <h6>Fofack clinton</h6>
                                <span>Web Designer</span>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer px-0 py-2">
                            <a
                              href="page-login.html"
                              className="dropdown-item ai-icon"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--primary)"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1={21} y1={12} x2={9} y2={12} />
                              </svg>
                              <span className="ms-2">Logout </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/***********************************
      Header end************************************/}
      </div>

    </div>
  )
}

export default Quotehead
