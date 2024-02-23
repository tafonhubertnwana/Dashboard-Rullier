
import React, { useEffect } from 'react'
import { HashLink as Link} from 'react-router-hash-link';

import $ from "jquery";
import smartWizard from 'smartwizard';

const CreateOrder = () => {
  

  useEffect(() => {
    $(function() {
      $('#smartwizard').smartWizard();
  });
  }, []);

 
  return (
    
    <div className="content-body">
    <div className="container-fluid">
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Crée un nouveau project </h4>
            </div>
            <div className="card-body">
              <div id="smartwizard" className="form-wizard order-create">
                <ul className="nav nav-wizard">
                  <li>
                    < Link className="nav-link" to="#wizard_Service">
                      <span>1</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#wizard_Time">
                      <span>2</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#wizard_Details">
                      <span>3</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#wizard_Payment">
                      <span>4</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#wizard_Paymen">
                      <span>5</span>
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link" href="#wizard_recap">
                      <span>6</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="wizard_Service" className="tab-pane" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Choisisez le type de project
                          </label>
                          <form>
                            <select className="form-control wide mb-3">
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="wizard_Time" className="tab-pane" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Choisisez le type de sol{" "}
                          </label>
                          <form>
                            <select className="form-control wide mb-3">
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="wizard_Details" className="tab-pane" role="tabpanel">
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>Bois de nouvelles acquitaine</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Quantité
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Type de bois{" "}
                          </label>
                          <form>
                            <select className="form-control wide mb-3">
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>Bois Exotique</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Quantité
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Type e bois{" "}
                          </label>
                          <form>
                            <select className="form-control wide mb-3">
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>prix total</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label badge badge-primary">
                            prix
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="wizard_Payment" className="tab-pane" role="tabpanel">
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>Structure</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Quantité
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Type de structure{" "}
                          </label>
                          <form>
                            <select className="form-control wide mb-3">
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>Bois Exotique</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Quantité
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Type de fixation{" "}
                          </label>
                          <form>
                            <select className="form-control wide mb-3">
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>prix total</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label badge badge-primary">
                            prix
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="wizard_Paymen" className="tab-pane" role="tabpanel">
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>Accessoir</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Quantité
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Type d'accessoir{" "}
                          </label>
                          <form>
                            <select className="form-control wide mb-3">
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>Materiel de pose</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Quantité
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label">
                            Type de Matériel{" "}
                          </label>
                          <form>
                            <select className="form-control wide mb-3">
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-2">
                        <h4>prix total</h4>
                      </div>
                      <div className="col-6 col-sm-4 mb-2">
                        <div className="mb-3">
                          <label className="text-label form-label badge badge-primary">
                            prix
                          </label>
                          <input
                            className="form-control"
                            defaultValue={0}
                            type="number"
                            name="input1"
                            id="input1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default CreateOrder;