import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./index.css";
import { Row, Col, Table } from "react-bootstrap";
import {
  CricketBanner
} from '../../../../src/assets/images';


class ClientList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        <div className="content-outer">
          <div className="content-wrapper">
            <Row>
            <Col lg={3} md={3} sm={3}>
              <div className="leftside-bar">
                <div className="sidebar-header">
                  <h3>Cricket</h3>
                </div>
                <div className="sidebar-content">
                  <ul className="cricket-list">
                    <li><Link to="#">Antalya Challenger 2021</Link><Link to="#" className="right-icon"><i className="mdi mdi-chevron-right"></i></Link></li>
                    <li><Link to="#">Antalya Challenger 2021</Link><Link to="#" className="right-icon"><i className="mdi mdi-chevron-right"></i></Link></li>
                    <li><Link to="#">Antalya Challenger 2021</Link><Link to="#" className="right-icon"><i className="mdi mdi-chevron-right"></i></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} className="paddingnone">
              <div className="cricket-centerbox">
                <img src={CricketBanner} />
                <div className="whitebox highlight-box">
                  <div className="yellowbg">
                    <h4>Highlights</h4>
                  </div>
                  <div className="table-responsive">
                    <Table width="100%" className="table-style">
                      <thead>
                        <tr className="lightbg">
                          <th></th>
                          <th></th>
                          <th colSpan="2" className="text-center">1</th>
                          <th colSpan="2" className="text-center">x</th>
                          <th colSpan="2" className="text-center">2</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span className="active-status statusbox"></span></td>
                          <td className="inPlay-title">
                            <Link to="/cricket-list">India v England</Link>
                            <span className="green-text">14:30</span>
                          </td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="actionpin"><Link to="#"><i className="mdi mdi-pin-outline"></i></Link></td>
                        </tr>
                        <tr>
                          <td><span className="gray-status statusbox"></span></td>
                          <td className="inPlay-title">
                            <Link to="#">
                              Atletico De Kolkata v Chennaiy in FC
                            </Link>
                            <span className="green-text">In-Play</span>
                          </td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="actionpin"><Link to="#"><i className="mdi mdi-pin-outline"></i></Link></td>
                        </tr>
                        <tr>
                          <td><span className="gray-status statusbox"></span></td>
                          <td className="inPlay-title">
                            <Link to="#">
                              Atletico De Kolkata v Chennaiy in FC
                            </Link>
                            <span className="gray-text">2021-02-03 09:30</span>
                          </td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox blue-bg"><Link to="#">3.6</Link></td>
                          <td className="numberbox pink-bg"><Link to="#">3.6</Link></td>
                          <td className="actionpin"><Link to="#"><i className="mdi mdi-pin-outline"></i></Link></td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={3}>
              <div className="leftside-bar">
                <div className="sidebar-header">
                  <h3>Bet Slip</h3>
                </div>
                <div className="sidebar-content">
                <p>Click on the odds to add selections to the betslip.</p>
                </div>
              </div>
            </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClientList;
