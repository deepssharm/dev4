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
                  <div className="imageouter">
                    <div className="event-counter">
                      <h4>Event will start in</h4>
                      <ul>
                        <li><span className="counter-head">D</span> <span className="counter-number">00</span></li>
                        <li><span className="counter-head">HH</span> <span className="counter-number">02</span></li>
                        <li><span className="counter-head">MM</span> <span className="counter-number">35</span></li>
                        <li><span className="counter-head">SS</span> <span className="counter-number">05</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="whitebox highlight-box">
                    <div className="table-responsive">
                      <Table width="100%" className="table-style">
                        <thead>
                          <tr className="bodybg">
                            <th></th>
                            <th>3 Selections</th>
                            <th colspan="2">100.5%</th>
                            <th class="text-center lightblue-bg btn-shape"><span>Back</span></th>
                            <th class="text-center pink-bg btn-shape"><span>Lay</span></th>
                            <th colspan="2" class="text-right">99.2% </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><span className="statusbox"></span></td>
                            <td className="inPlay-title">India</td>
                            <td className="numberbox blue-bg"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg"><Link to="#">1.59 <small>729</small></Link></td>
                            <td className="numberbox blue-bg blinkbtn"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg blinkbtn"><Link to="#">1.59 <small>729</small></Link></td>
                            <td className="numberbox blue-bg"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg"><Link to="#">1.59 <small>729</small></Link></td>
                          </tr>
                          <tr>
                            <td><span className="statusbox"></span></td>
                            <td className="inPlay-title">India</td>
                            <td className="numberbox blue-bg"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg"><Link to="#">1.59 <small>729</small></Link></td>
                            <td className="numberbox blue-bg blinkbtn"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg blinkbtn"><Link to="#">1.59 <small>729</small></Link></td>
                            <td className="numberbox blue-bg"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg"><Link to="#">1.59 <small>729</small></Link></td>
                          </tr>
                          <tr>
                            <td><span className="statusbox"></span></td>
                            <td className="inPlay-title">India</td>
                            <td className="numberbox blue-bg"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg"><Link to="#">1.59 <small>729</small></Link></td>
                            <td className="numberbox blue-bg blinkbtn"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg blinkbtn"><Link to="#">1.59 <small>729</small></Link></td>
                            <td className="numberbox blue-bg"><Link to="#">1.55 <small>2,158</small></Link></td>
                            <td className="numberbox pink-bg"><Link to="#">1.59 <small>729</small></Link></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>

                  <div className="whitebox highlight-box">
                    <div className="yellowbg">
                      <h4>Pre Fancy Bet</h4>
                    </div>
                    <div className="table-responsive">
                      <Table width="100%" className="table-style">
                        <thead>
                          <tr className="lightbg">
                            <th></th>
                            <th></th>
                            <th className="text-center">No</th>
                            <th className="text-center">Yes</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><span className="active-status statusbox"></span></td>
                            <td className="inPlay-title">
                              <Link to="#">WHO WINS THE TOSS (INDIA)|ADV  </Link>
                              <span className="gray-text">14:30</span>
                            </td>
                            <td className="numberbox pink-bg"><Link to="#">2 <small>115</small></Link></td>
                            <td className="numberbox blue-bg"><Link to="#">2 <small>85</small></Link></td>
                            <td class="minmax-column"><span>Min/Max <small>1.00 / 1,000,000.00</small></span></td>
                          </tr>
                          <tr>
                            <td><span className="active-status statusbox"></span></td>
                            <td className="inPlay-title">
                              <Link to="#">WHO WINS THE TOSS (INDIA)|ADV  </Link>
                              <span className="gray-text">14:30</span>
                            </td>
                            <td className="numberbox pink-bg"><Link to="#">2 <small>115</small></Link></td>
                            <td className="numberbox blue-bg"><Link to="#">2 <small>85</small></Link></td>
                            <td class="minmax-column"><span>Min/Max <small>1.00 / 1,000,000.00</small></span></td>
                          </tr>
                          <tr>
                            <td><span className="active-status statusbox"></span></td>
                            <td className="inPlay-title">
                              <Link to="#">WHO WINS THE TOSS (INDIA)|ADV  </Link>
                              <span className="gray-text">14:30</span>
                            </td>
                            <td className="numberbox pink-bg"><Link to="#">2 <small>115</small></Link></td>
                            <td className="numberbox blue-bg"><Link to="#">2 <small>85</small></Link></td>
                            <td class="minmax-column"><span>Min/Max <small>1.00 / 1,000,000.00</small></span></td>
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

                    <div className="betslip-rightlist">
                      <div className="back-section">
                        <div className="table-responsive">
                          <Table width="100%" className="table backright-table">
                          <thead>
                          <tr className="lightbg">
                              <th>Back (Bet For)</th>
                                <th>Odds</th>
                                <th>Stake</th>
                                <th>Profit</th>
                            <th></th>
                          </tr>
                        </thead>
                            <tbody>
                               <tr>
                                <td colspan="4">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" value="" id="freeChips" />
                                    <label className="form-check-label" for="freeChips">
                                      India v England
                                    </label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="matchteam-column">
                                  <i className="mdi mdi-close"></i>
                                  <h4>India <small>Match Odds</small></h4>
                                </td>
                                <td>
                                  <input type="number" value="1.58" />
                                </td>
                                <td>
                                  <input type="text" />
                                </td>
                                <td> 0.00</td>
                              </tr>
                              <tr className="numbertab">
                                <td colspan="4">
                                  <a href="javascript:void(0);">5</a>
                                  <a href="javascript:void(0);">10</a>
                                  <a href="javascript:void(0);">50</a>
                                  <a href="javascript:void(0);">200</a>
                                  <a href="javascript:void(0);">500</a>
                                  <a href="javascript:void(0);">1000</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="matchteam-column">
                                  <i className="fa fa-close"></i>
                                  <h4>England <small>Match Odds</small></h4>
                                </td>
                                <td>
                                  <input type="number" value="1.58" />
                                </td>
                                <td>
                                  <input type="text" />
                                </td>
                                <td> 0.00</td>
                              </tr>
                              <tr className="numbertab">
                                <td colspan="4">
                                  <a href="javascript:void(0);">5</a>
                                  <a href="javascript:void(0);">10</a>
                                  <a href="javascript:void(0);">50</a>
                                  <a href="javascript:void(0);">200</a>
                                  <a href="javascript:void(0);">500</a>
                                  <a href="javascript:void(0);">1000</a>
                                </td>
                              </tr>
                              <tr className="liability-row">
                                <td colspan="4">Liability <span className="red-text">0.00</span></td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>

                      </div>
                      <div className="bet-btngroup">
                        <button type="button">Cancel All</button>
                      </div>
                    </div>
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
