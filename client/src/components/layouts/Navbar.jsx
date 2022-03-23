import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <header className="header rs-nav header-transparent">
        <div className="top-bar">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="topbar-left">
                <ul>
                  <li>
                    <a href="faq-1.html">
                      <i className="fa fa-question-circle"></i>Ask a Question
                    </a>
                  </li>
                  <li>
                    <a href="javascript">
                      <i className="fa fa-envelope-o"></i>Support@website.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topbar-right">
                <ul>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header navbar-expand-lg">
          <div className="menu-bar clearfix">
            <div className="container clearfix">
              <div className="menu-logo">
                <a href="index.html">
                  <img src="assets/images/logo-white.png" alt="" />
                </a>
              </div>

              <button
                className="navbar-toggler collapsed menuicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#menuDropdown"
                aria-controls="menuDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div className="secondary-menu">
                <div className="secondary-inner">
                  <ul>
                    <li>
                      <a href="javascript" className="btn-link">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript" className="btn-link">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript" className="btn-link">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>

                    <li className="search-btn">
                      <button
                        id="quik-search-btn"
                        type="button"
                        className="btn-link"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="nav-search-bar">
                <form action="#">
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Type to search"
                  />
                  <span>
                    <i className="ti-search"></i>
                  </span>
                </form>
                <span id="search-remove">
                  <i className="ti-close"></i>
                </span>
              </div>

              <div
                className="menu-links navbar-collapse collapse justify-content-start"
                id="menuDropdown"
              >
                <div className="menu-logo">
                  <a href="index.html">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="/home">Home</a>
                  </li>
                  <li className="">
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="javascript">
                      Pages <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"/about"}>About</Link>
                      </li>
                      <li>
                        <a href="javascript">
                          Event<i className="fa fa-angle-right"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="event.html">Event</a>
                          </li>
                          <li>
                            <a href="events-details.html">Events Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript">
                          FAQ's<i className="fa fa-angle-right"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="faq-1.html">FAQ's 1</a>
                          </li>
                          <li>
                            <a href="faq-2.html">FAQ's 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript">
                          Contact Us<i className="fa fa-angle-right"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="contact-1.html">Contact Us 1</a>
                          </li>
                          <li>
                            <a href="contact-2.html">Contact Us 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="membership.html">Membership</a>
                      </li>
                      <li>
                        <a href="error-404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li className="add-mega-menu">
                    <a href="javascript">
                      Our Courses <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu add-menu">
                      <li className="add-menu-left">
                        <h5 className="menu-adv-title">Our Courses</h5>
                        <ul>
                          <li>
                            <a href="courses.html">Courses </a>
                          </li>
                          <li>
                            <a href="courses-details.html">Courses Details</a>
                          </li>
                          <li>
                            <a href="profile.html">Instructor Profile</a>
                          </li>
                          <li>
                            <a href="event.html">Upcoming Event</a>
                          </li>
                          <li>
                            <a href="membership.html">Membership</a>
                          </li>
                        </ul>
                      </li>
                      <li className="add-menu-right">
                        <img src="assets/images/adv/adv.jpg" alt="" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript">
                      Blog <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-classNameic-grid.html">
                          Blog classNameic
                        </a>
                      </li>
                      <li>
                        <a href="blog-classNameic-sidebar.html">
                          Blog classNameic Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list-sidebar.html">Blog List Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-standard-sidebar.html">
                          Blog Standard Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-dashboard">
                    <a href="javascript">
                      Dashboard <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="admin/index.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="admin/add-listing.html">Add Listing</a>
                      </li>
                      <li>
                        <a href="admin/bookmark.html">Bookmark</a>
                      </li>
                      <li>
                        <a href="admin/courses.html">Courses</a>
                      </li>
                      <li>
                        <a href="admin/review.html">Review</a>
                      </li>
                      <li>
                        <a href="admin/teacher-profile.html">Teacher Profile</a>
                      </li>
                      <li>
                        <a href="admin/user-profile.html">User Profile</a>
                      </li>
                      <li>
                        <a href="javascript">
                          Calendar<i className="fa fa-angle-right"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="admin/basic-calendar.html">
                              Basic Calendar
                            </a>
                          </li>
                          <li>
                            <a href="admin/list-view-calendar.html">
                              List View Calendar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript">
                          Mailbox<i className="fa fa-angle-right"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="admin/mailbox.html">Mailbox</a>
                          </li>
                          <li>
                            <a href="admin/mailbox-compose.html">Compose</a>
                          </li>
                          <li>
                            <a href="admin/mailbox-read.html">Mail Read</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="nav-social-link">
                  <a href="javascript">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="javascript">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="javascript">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
