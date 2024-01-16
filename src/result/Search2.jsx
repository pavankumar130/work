import React from 'react'
import {FaMagnifyingGlass} from 'react-icons/fa6'

import './Search.css'

import './../assets/css/bootstrap.min.css'
import './../assets/css/animate.css'
import './../assets/css/custom-animation.css'
import './../assets/css/slick.css'
import './../assets/css/nice-select.css'
import './../assets/css/flaticon.css'
import './../assets/css/swiper-bundle.css'
import './../assets/css/meanmenu.css'
import './../assets/css/font-awesome-pro.css'
import './../assets/css/magnific-popup.css'
import './../assets/css/spacing.css'
import './../assets/css/style.css'
import './../New Home/Style.css'

import heroshape1 from '../assets/img/hero/hero-shape-1.png'
import heroshape2 from '../assets/img/hero/hero-shape-2.png'
import heroframe from '../assets/img/hero/hero-frame.png'
import herolineshape from '../assets/img/hero/hero-line-shape.png'
import herolineshape2 from '../assets/img/hero/hero-line-shape-2.png'

import mainLogo from '../assets/google.png'

const Search2 = () => {
    return (
        <body>

        <button className="scroll-top scroll-to-target" data-target="html">
           <i className="far fa-angle-double-up"></i>
        </button>
        
        <div className="search__popup">
           <div className="container">
              <div className="row">
                 <div className="col-xxl-12">
                    <div className="search__wrapper">
                       <div className="search__top d-flex justify-content-between align-items-center">
                          <div className="search__logo">
                             <a href="home-main.html">
                                <img src={mainLogo} alt=""/>
                             </a>
                          </div>
                          <div className="search__close">
                             <button type="button" className="search__close-btn search-close-btn">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                   <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                </svg>
                             </button>
                          </div>
                       </div>
                       <div className="search__form">
                          <form action="#">
                             <div className="search__input">
                                <input className="search-input-field" type="text" placeholder="Type here to search..."/>
                                <span className="search-focus-border"></span>
                                <button type="submit">
                                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                         d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                         stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                         stroke-linejoin="round" />
                                      <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5"
                                         stroke-linecap="round" stroke-linejoin="round" />
                                   </svg>
                                </button>
                             </div>
                          </form>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        
        <header className="header-bottom__transparent z-index-6 tp-header-height">
     
           
           <div className="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation">
              <div className="container">
                 <div className="row align-items-start">
                    <div className="col-6">
                       <div className="header-top__link">
                       </div>
                    </div>
                    <div className="col-6">
                       <div className="header-top__support text-end">
                          <span></span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
     
           <div id="header-sticky"
              className="header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5">
              <div className="container">
                 <div className="row align-items-center">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                    </div>
                    <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                       <div className="header-bottom__main-menu">
                          <nav id="mobile-menu">
                             <ul>
                                <li>
                                   <a href="index.html">Home</a>
                                   <ul className="submenu">
                                      <li><a href="index.html">Data analytics</a></li>
                                      <li><a href="index-2.html">Payment Gateway</a></li>
                                      <li><a href="index-3.html">CRM Software</a></li>
                                      <li><a href="index-4.html">Security Software</a></li>
                                      <li><a href="index-5.html">Saas</a></li>
                                   </ul>
                                </li>
                                <li>
                                   <a href="#">Pages</a>
                                   <ul className="submenu">
                                      <li><a href="about.html">About</a></li>
                                      <li><a href="service.html">Service</a></li>
                                      <li><a href="service-details.html">Service Details</a></li>
                                      <li><a href="team.html">Team</a></li>
                                      <li><a href="team-details.html">Team Details</a></li>
                                      <li><a href="career.html">Career</a></li>
                                      <li><a href="career-details.html">Career Details</a></li>
                                      <li><a href="integrations.html">Integrations</a></li>
                                      <li><a href="price.html">Price</a></li>
                                      <li><a href="register.html">Register</a></li>
                                      <li><a href="sign-in.html">Signin</a></li>
                                      <li><a href="404.html">404</a></li>
                                   </ul>
                                </li>
                                <li>
                                   <a href="blog-details.html">Blog</a>
                                   <ul className="submenu">
                                      <li><a href="blog.html">Blog</a></li>
                                      <li><a href="blog-list.html">Blog List</a></li>
                                      <li><a href="blog-details.html">Blog Details</a></li>
                                      <li><a href="blog-details-2.html">Blog Details 02</a></li>
                                   </ul>
                                </li>
                                <li>
                                   <a href="project-details.html">Projects</a>
                                   <ul className="submenu">
                                      <li><a href="project.html">Project</a></li>
                                      <li><a href="project-details.html">Project Details</a></li>
                                   </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                             </ul>
                          </nav>
                       </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                       <div className="header-bottom__right d-flex align-items-center justify-content-end">
                          <div className="header-bottom__action">
                             <a className="d-none d-md-inline-block search-open-btn" href="javascript:void(0)">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                      d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z"
                                      stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                   <path d="M16.9999 17L15.3999 15.4" stroke="#292D32" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                             </a>
                             <a className="d-none d-lg-inline-block last-child" href="register.html">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                      d="M7 8C8.92882 8 10.4924 6.433 10.4924 4.5C10.4924 2.567 8.92882 1 7 1C5.07118 1 3.50757 2.567 3.50757 4.5C3.50757 6.433 5.07118 8 7 8Z"
                                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                   <path d="M13 15C13 12.291 10.3108 10.1 7 10.1C3.68917 10.1 1 12.291 1 15"
                                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                </svg>
                                <span>Log In</span>
                             </a>
                          </div>
                          <div className="header-bottom__btn d-flex align-items-center">
                             <a className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block"
                                href="service-details.html">
                                <span className="white-text">Get Started</span>
                                <b></b>
                             </a>
                             <a className="header-bottom__bar d-lg-none tp-menu-bar" href="javascript:void(0)"><i
                                   className="fal fa-bars"></i></a>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
     
        </header>
     
        <div className="tpoffcanvas-area">
           <div className="tpoffcanvas">
              <div className="tpoffcanvas__close-btn">
                 <button className="close-btn"><i className="fal fa-times"></i></button>
              </div>
              <div className="tpoffcanvas__logo text-center">
                 <a href="index.html">
                    <img src={mainLogo} alt=""/>
                 </a>
              </div>
              <div className="mobile-menu"></div>
              <div className="tpoffcanvas__instagram text-center">
                 <div className="tpoffcanvas__instagram-title">
                    <h4>instagram</h4>
                 </div>
                 <a href="#"><img src="assets/img/project/project-inner-4.jpg" alt=""/></a>
                 <a href="#"><img src="assets/img/project/project-inner-5.jpg" alt=""/></a>
                 <a href="#"><img src="assets/img/project/project-inner-6.jpg" alt=""/></a>
                 <a href="#"><img src="assets/img/project/project-inner-7.jpg" alt=""/></a>
              </div>
              <div className="tpoffcanvas__info text-center">
                 <h4 className="offcanva-title">we are here</h4>
                 <a href="https://www.google.com/maps/@23.506657,90.3443647,7z" target="_blank">
                    27 Division St, New York, <br/>
                    NY 10002, USA
                 </a>
              </div>
              <div className="tpoffcanvas__social">
                 <div className="social-icon text-center">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                 </div>
              </div>
           </div>
        </div>
        <div className="body-overlay"></div>
     
        <div id="smooth-wrapper">
           <div id="smooth-content">
     
              <main className="fix">
     
                 <div className="tp-hero__area tp-hero__pl-pr">
                    <div className="tp-hero__bg p-relative">
                       <div className="tp-hero-bg tp-hero-bg-single">
                          <img src={heroframe} alt=""/>
                       </div>
                       <div className="tp-hero-shape">
                          <img className="tp-hero-shape-1" src={herolineshape} alt=""/>
                          <img className="tp-hero-shape-2" src={herolineshape2} alt=""/>
                       </div>
                       <div className="container">
                          <div className="row justify-content-center">
                             <div className="col-xl-10">
                                <div className="tp-hero__content-box text-center z-index-3">
                                   <div className="tp-hero__title-box p-relative">
                                      <h2 className="tp-hero__hero-title tp-title-anim">
                                         <img src={mainLogo}/>
                                      </h2>
                                      <div className="tp-hero__title-shape d-none d-sm-block">
                                         <svg width="491" height="24" viewBox="0 0 491 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path className="line1" fill-rule="evenodd" clip-rule="evenodd"
                                               d="M208.549 3.29849C185.59 4.08616 162.901 5.05468 140.776 6.11351C109.455 7.61138 78.1462 9.16091 47.0261 11.6143C37.2302 12.3891 27.2823 12.8797 17.5476 13.8482C11.4368 14.4551 3.334 15.3201 2.27061 15.5009C1.71441 15.6042 1.47176 15.7593 1.39336 15.8109C0.842061 16.1725 0.942652 16.521 1.25383 16.7921C1.37879 16.9084 1.69478 17.1925 2.57195 17.2313C61.2348 19.8784 121.221 14.7133 179.955 14.171C281.81 13.2413 386.752 16.9343 487.799 24.9918C488.681 25.0564 489.539 24.7334 489.661 24.2557C489.808 23.7908 489.171 23.3389 488.289 23.2743C387.071 15.2039 281.957 11.498 179.906 12.4406C125.168 12.9442 69.3499 17.4766 14.5363 15.9271C15.7957 15.798 17.0307 15.6688 18.1578 15.5526C27.8533 14.5841 37.7594 14.1064 47.5162 13.3316C78.5701 10.8782 109.815 9.32872 141.095 7.84376C179.906 5.98434 220.408 4.38316 261.228 3.63423C275.831 3.75044 290.386 3.86671 304.94 4.00875C336.425 4.31865 368.057 5.22254 399.469 6.43633C408.927 6.8108 418.385 7.19814 427.842 7.53387C430.979 7.65009 439.064 7.98576 440.191 7.95993C441.588 7.93411 441.857 7.31436 441.882 7.21106C441.955 6.97863 441.906 6.65579 441.22 6.38463C441.147 6.34589 440.706 6.21668 439.726 6.13921C382.611 1.56813 321.626 0.806405 261.277 1.90398C197.621 1.42621 133.719 1.21951 70.2247 1C69.3157 1 68.5733 1.38744 68.5659 1.8652C68.561 2.34297 69.2935 2.73042 70.2026 2.74333C116.178 2.89828 162.387 3.05315 208.549 3.29849Z"
                                               fill="none" stroke="none" />
                                         </svg>
                                      </div>
                                   </div>
                                   <div className="tp-hero__input p-relative wow tpfadeUp" data-wow-duration=".9s"
                                      data-wow-delay=".5s">
                                      <form action="#">
                                         <div className="p-relative">
                                            <input type="text" placeholder="Type here to search"/>
                                            <FaMagnifyingGlass/>
                                         </div>
                                         <button className="tp-btn tp-btn-hover alt-color-black">
                                            <span>Search</span>
                                            <b></b>
                                         </button>
                                      </form>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="tp-hero__bottom z-index-5">
                       <div className="container">
                          <div className="row justify-content-center">
                             <div className="col-xl-10">
                                <div className="tp-hero__thumb-wrapper-main p-relative">
                                   <div className="tp-hero__shape-img-1 d-none d-xl-block">
                                      <img src={heroshape1} alt=""/>
                                   </div>
                                   <div className="tp-hero__shape-img-2 d-none d-xl-block">
                                      <img src={heroshape2} alt=""/>
                                   </div>
                                   <div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                
                 <div className="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
                    <div className="tp-feature__bottom-shape">
                       <img src="assets/img/feature/fea-bg-shape-1.png" alt=""/>
                    </div>
                    <div className="container">
                       <div className="row justify-content-center">
                          <div className="col-xl-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".2s">
                             <div className="tp-feature__section-box text-center mb-55 tp-title-anim">
                                <h2 className="tp-section-title">Our Exciting Features</h2>
                                <p>More than 15,000 companies trust and choose Itech</p>
                             </div>
                          </div>
                       </div>
                       <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                             data-wow-delay=".4s">
                             <div id="divtest" className="tp-feature__item">
                                <div className="tp-feature__icon">
                                   <img src="assets/img/feature/fea-icon-1.png" alt=""/>
                                </div>
                                <h3 className="tp-feature__title-sm">A Unified View of The Customer</h3>
                                <div className="tp-feature__link">
                                   <a href="service-details.html">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                         <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                             data-wow-delay=".6s">
                             <div className="tp-feature__item">
                                <div className="tp-feature__icon">
                                   <img src="assets/img/feature/fea-icon-2.png" alt=""/>
                                </div>
                                <h3 className="tp-feature__title-sm">Industry Leading Procedures</h3>
                                <div className="tp-feature__link">
                                   <a href="service-details.html">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                         <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                             data-wow-delay=".8s">
                             <div className="tp-feature__item">
                                <div className="tp-feature__icon">
                                   <img src="assets/img/feature/fea-icon-3.png" alt=""/>
                                </div>
                                <h3 className="tp-feature__title-sm">Collaboration Across <br/> All Areas</h3>
                                <div className="tp-feature__link">
                                   <a href="service-details.html">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                         <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                   </a>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="tp-about__area tp-about__pt-pb pt-100 pb-160">
                    <div className="container">
                       <div className="row align-items-center">
                          <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                             <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                                <div className="tp-about__bg-shape">
                                   <img src="assets/img/about/about-bg-shape.png" alt=""/>
                                </div>
                                <div className="tp-about__main-img z-index">
                                   <img src="assets/img/about/about-2.jpg" alt=""/>
                                </div>
                                <div className="tp-about__sub-img-1 d-none d-sm-block z-index-3">
                                   <img src="assets/img/about/about-1.jpg" alt=""/>
                                </div>
                                <div className="tp-about__sub-img-2 d-none d-sm-block">
                                   <img src="assets/img/about/about-3.jpg" alt=""/>
                                </div>
                                <div className="tp-about__sub-img-3 d-none d-sm-block z-index-3">
                                   <img src="assets/img/about/about-5.png" alt=""/>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
                             <div className="tp-about__right">
                                <div className="tp-about__section-box">
                                   <h4 className="tp-section-subtitle">OVER 150K+ CLIENT</h4>
                                   <h3 className="tp-section-title mb-15">We Offer Real Time Data Solutions
                                   </h3>
                                   <p>Excepteur sint occaecat cupidatat officia non proident <br/>
                                      sunt in culpa qui deserunt.!</p>
                                </div>
                                <div className="tp-about__list">
                                   <ul>
                                      <li><i className="fal fa-check"></i>Various analysis options.</li>
                                      <li><i className="fal fa-check"></i>Page Load (time, size, number of requests).</li>
                                      <li><i className="fal fa-check"></i>Big data analysis.</li>
                                   </ul>
                                </div>
                                <div className="tp-about__btn">
                                   <a className="tp-btn tp-btn-hover alt-color-black" href="about.html">
                                      <span>About Us</span>
                                      <b></b>
                                   </a>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                
                 <div className="tp-service__area p-relative fix">
                    <div className="tp-service__grey-shape grey-bg"></div>
                    <div className="container">
                       <div className="row justify-content-center">
                          <div className="col-lg-8">
                             <div className="tp-service__section-box mb-50 text-center tp-title-anim">
                                <h2 className="tp-section-title">Explore Our Data Services</h2>
                                <p>More than 15,000 companies trust and choose Itech</p>
                             </div>
                          </div>
                       </div>
                       <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                             <div className="tp-service__item mb-30">
                                <div className="tp-service__icon">
                                   <img src="assets/img/service/sv-icon-1.png" alt=""/>
                                </div>
                                <div className="tp-service__content">
                                   <h3 className="tp-service__title-sm tp-orange-color"><a href="service-details.html">AI Data
                                         Analysis</a></h3>
                                   <p>Lorem Ipsum is simply dummy text <br/>
                                      of the printing</p>
                                </div>
                                <div className="tp-service__link">
                                   <a href="service-details.html">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                         <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".6s">
                             <div className="tp-service__item mb-30">
                                <div className="tp-service__icon">
                                   <img src="assets/img/service/sv-icon-2.png" alt=""/>
                                </div>
                                <div className="tp-service__content">
                                   <h3 className="tp-service__title-sm tp-theme-color"><a href="service-details.html">Machine
                                         Learning</a></h3>
                                   <p>Lorem Ipsum is simply dummy text <br/>
                                      of the printing</p>
                                </div>
                                <div className="tp-service__link">
                                   <a href="service-details.html">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                         <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                             <div className="tp-service__item mb-30">
                                <div className="tp-service__icon">
                                   <img src="assets/img/service/sv-icon-3.png" alt=""/>
                                </div>
                                <div className="tp-service__content">
                                   <h3 className="tp-service__title-sm tp-purple-color"><a href="service-details.html">Data
                                         Visualization</a></h3>
                                   <p>Lorem Ipsum is simply dummy text <br/>
                                      of the printing</p>
                                </div>
                                <div className="tp-service__link">
                                   <a href="service-details.html">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                         <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".8s">
                             <div className="tp-service__item mb-30">
                                <div className="tp-service__icon">
                                   <img src="assets/img/service/sv-icon-4.png" alt=""/>
                                </div>
                                <div className="tp-service__content">
                                   <h3 className="tp-service__title-sm tp-green-color"><a href="service-details.html">Business
                                         Intelligence</a></h3>
                                   <p>Lorem Ipsum is simply dummy text <br/>
                                      of the printing</p>
                                </div>
                                <div className="tp-service__link">
                                   <a href="service-details.html">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                         <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                             <div className="tp-service__item mb-30">
                                <div className="tp-service__icon">
                                   <img src="assets/img/service/sv-icon-5.png" alt=""/>
                                </div>
                                <div className="tp-service__content">
                                   <h3 className="tp-service__title-sm tp-yellow-color"><a href="service-details.html">Artificial
                                         Intelligence</a></h3>
                                   <p>Lorem Ipsum is simply dummy text <br/>
                                      of the printing</p>
                                </div>
                                <div className="tp-service__link">
                                   <a href="service-details.html">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                         <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                             <div className="tp-service__dashboard" data-background="assets/img/service/sv-bg.jpg">
                                <div className="tp-service__top-content">
                                   <h3 className="tp-service__title-white">Data Analysis <br/> Tools & Methods</h3>
                                   <p>Lorem Ipsum is simply dummy text <br/> of the printing</p>
                                   <a className="tp-btn-orange tp-btn-hover alt-color-white" href="project-details.html">
                                      <span>Work with Us</span>
                                      <b></b>
                                   </a>
                                </div>
                                <div className="tp-service__dashdboard-sm-img">
                                   <img className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s"
                                      src="assets/img/service/sv-dashbord.png" alt=""/>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="tp-project__area grey-bg pt-50 pb-110 fix">
                    <div className="container">
                       <div className="row">
                          <div className="col-xl-6">
                             <div className="tp-project__section-box wow tpfadeLeft" data-wow-duration=".9s"
                                data-wow-delay=".3s">
                                <h3 className="tp-section-title">Check Some Of Our Recent Work.</h3>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="container-fluid gx-0">
                       <div className="row gx-0">
                          <div className="col-xl-12">
                             <div className="tp-project__slider-section">
                                <div className=" swiper-container tp-project__slider-active">
                                   <div className="swiper-wrapper">
                                      <div className="swiper-slide wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                         <div className="tp-project__slider-wrapper">
                                            <div className="tp-project__item d-flex align-items-center">
                                               <div className="tp-project__thumb">
                                                  <img src="assets/img/project/project-img-2.jpg" alt=""/>
                                               </div>
                                               <div className="tp-project__content">
                                                  <div className="tp-project__brand-icon">
                                                     <img src="assets/img/project/project-brand-1.png" alt=""/>
                                                  </div>
                                                  <div className="tp-project__title-box">
                                                     <h4 className="tp-project__title-sm"><a href="project-details.html">Muckup
                                                           Design</a></h4>
                                                     <p>Excepteur sint occaecat cupidatat officia non
                                                        proident, sunt in culpa qui deserunt mollit anim
                                                        id est laborum.
                                                     </p>
                                                  </div>
                                                  <div className="tp-project__meta d-flex align-items-center">
                                                     <div className="tp-project__author-info">
                                                        <span>Client Name</span>
                                                        <h4>Phillip Anthropy</h4>
                                                     </div>
                                                     <div className="tp-project__budget">
                                                        <span>Budget</span>
                                                        <h4>$200-250k</h4>
                                                     </div>
                                                     <div className="tp-project__link">
                                                        <a href="project-details.html">
                                                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                              xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M1.00098 7H13.001" stroke="currentColor"
                                                                 stroke-width="1.5" stroke-linecap="round"
                                                                 stroke-linejoin="round" />
                                                              <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor"
                                                                 stroke-width="1.5" stroke-linecap="round"
                                                                 stroke-linejoin="round" />
                                                           </svg>
                                                        </a>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="swiper-slide wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                         <div className="tp-project__slider-wrapper">
                                            <div className="tp-project__item d-flex align-items-center">
                                               <div className="tp-project__thumb">
                                                  <img src="assets/img/project/project-img-1.jpg" alt=""/>
                                               </div>
                                               <div className="tp-project__content">
                                                  <div className="tp-project__brand-icon">
                                                     <img src="assets/img/project/project-brand-2.png" alt=""/>
                                                  </div>
                                                  <div className="tp-project__title-box">
                                                     <h4 className="tp-project__title-sm"><a href="project-details.html">3d
                                                           Design</a></h4>
                                                     <p>Excepteur sint occaecat cupidatat officia non
                                                        proident, sunt in culpa qui deserunt mollit anim
                                                        id est laborum.
                                                     </p>
                                                  </div>
                                                  <div className="tp-project__meta d-flex align-items-center">
                                                     <div className="tp-project__author-info">
                                                        <span>Client Name</span>
                                                        <h4>Phillip Anthropy</h4>
                                                     </div>
                                                     <div className="tp-project__budget">
                                                        <span>Budget</span>
                                                        <h4>$200-250k</h4>
                                                     </div>
                                                     <div className="tp-project__link">
                                                        <a href="project-details.html">
                                                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                              xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M1.00098 7H13.001" stroke="currentColor"
                                                                 stroke-width="1.5" stroke-linecap="round"
                                                                 stroke-linejoin="round" />
                                                              <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor"
                                                                 stroke-width="1.5" stroke-linecap="round"
                                                                 stroke-linejoin="round" />
                                                           </svg>
                                                        </a>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="swiper-slide wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                         <div className="tp-project__slider-wrapper">
                                            <div className="tp-project__item d-flex align-items-center">
                                               <div className="tp-project__thumb">
                                                  <img src="assets/img/project/project-img-3.jpg" alt=""/>
                                               </div>
                                               <div className="tp-project__content">
                                                  <div className="tp-project__brand-icon">
                                                     <img src="assets/img/project/project-brand-4.png" alt=""/>
                                                  </div>
                                                  <div className="tp-project__title-box">
                                                     <h4 className="tp-project__title-sm"><a href="project-details.html">App
                                                           Design</a></h4>
                                                     <p>Excepteur sint occaecat cupidatat officia non
                                                        proident, sunt in culpa qui deserunt mollit anim
                                                        id est laborum.
                                                     </p>
                                                  </div>
                                                  <div className="tp-project__meta d-flex align-items-center">
                                                     <div className="tp-project__author-info">
                                                        <span>Client Name</span>
                                                        <h4>Phillip Anthropy</h4>
                                                     </div>
                                                     <div className="tp-project__budget">
                                                        <span>Budget</span>
                                                        <h4>$200-250k</h4>
                                                     </div>
                                                     <div className="tp-project__link">
                                                        <a href="project-details.html">
                                                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                              xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M1.00098 7H13.001" stroke="currentColor"
                                                                 stroke-width="1.5" stroke-linecap="round"
                                                                 stroke-linejoin="round" />
                                                              <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor"
                                                                 stroke-width="1.5" stroke-linecap="round"
                                                                 stroke-linejoin="round" />
                                                           </svg>
                                                        </a>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="swiper-slide wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                                         <div className="tp-project__slider-wrapper">
                                            <div className="tp-project__item d-flex align-items-center">
                                               <div className="tp-project__thumb">
                                                  <img src="assets/img/project/project-img-4.jpg" alt=""/>
                                               </div>
                                               <div className="tp-project__content">
                                                  <div className="tp-project__brand-icon">
                                                     <img src="assets/img/project/project-brand-2.png" alt=""/>
                                                  </div>
                                                  <div className="tp-project__title-box">
                                                     <h4 className="tp-project__title-sm"><a href="project-details.html">Graphic
                                                           Design</a></h4>
                                                     <p>Excepteur sint occaecat cupidatat officia non
                                                        proident, sunt in culpa qui deserunt mollit anim
                                                        id est laborum.
                                                     </p>
                                                  </div>
                                                  <div className="tp-project__meta d-flex align-items-center">
                                                     <div className="tp-project__author-info">
                                                        <span>Client Name</span>
                                                        <h4>Phillip Anthropy</h4>
                                                     </div>
                                                     <div className="tp-project__budget">
                                                        <span>Budget</span>
                                                        <h4>$200-250k</h4>
                                                     </div>
                                                     <div className="tp-project__link">
                                                        <a href="project-details.html">
                                                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                              xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M1.00098 7H13.001" stroke="currentColor"
                                                                 stroke-width="1.5" stroke-linecap="round"
                                                                 stroke-linejoin="round" />
                                                              <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor"
                                                                 stroke-width="1.5" stroke-linecap="round"
                                                                 stroke-linejoin="round" />
                                                           </svg>
                                                        </a>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="tp-scrollbar"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                
                 <div className="tp-testimonial__area pt-105 pb-200 fix">
                    <div className="container">
                       <div className="row justify-content-center">
                          <div className="col-xl-6">
                             <div className="tp-testimonial__section-box text-center">
                                <h3 className="tp-section-title">Word From Our Client</h3>
                                <p>5 Stars Based on 4,700+ Real Users Reviews</p>
                                <div className="tp-testimonial__rating">
                                   <span>
                                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path
                                            d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                                            fill="url(#tp-1)" fill-opacity="0.2" />
                                         <defs>
                                            <linearGradient id="tp-1" x1="15" y1="0" x2="15" y2="29.9921"
                                               gradientUnits="userSpaceOnUse">
                                               <stop offset="0" stop-color="#6360F3" />
                                               <stop offset="1" stop-color="#625FF1" stop-opacity="0" />
                                            </linearGradient>
                                         </defs>
                                      </svg>
                                   </span>
                                   <span>
                                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path
                                            d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                                            fill="url(#tp-2)" fill-opacity="0.2" />
                                         <defs>
                                            <linearGradient id="tp-2" x1="15" y1="0" x2="15" y2="29.9921"
                                               gradientUnits="userSpaceOnUse">
                                               <stop offset="0" stop-color="#6360F3" />
                                               <stop offset="1" stop-color="#625FF1" stop-opacity="0" />
                                            </linearGradient>
                                         </defs>
                                      </svg>
                                   </span>
                                   <span>
                                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path
                                            d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                                            fill="url(#tp-3)" fill-opacity="0.2" />
                                         <defs>
                                            <linearGradient id="tp-3" x1="15" y1="0" x2="15" y2="29.9921"
                                               gradientUnits="userSpaceOnUse">
                                               <stop offset="0" stop-color="#6360F3" />
                                               <stop offset="1" stop-color="#625FF1" stop-opacity="0" />
                                            </linearGradient>
                                         </defs>
                                      </svg>
                                   </span>
                                   <span>
                                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path
                                            d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                                            fill="url(#tp-4)" fill-opacity="0.2" />
                                         <defs>
                                            <linearGradient id="tp-4" x1="15" y1="0" x2="15" y2="29.9921"
                                               gradientUnits="userSpaceOnUse">
                                               <stop offset="0" stop-color="#6360F3" />
                                               <stop offset="1" stop-color="#625FF1" stop-opacity="0" />
                                            </linearGradient>
                                         </defs>
                                      </svg>
                                   </span>
                                   <span>
                                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path
                                            d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                                            fill="url(#tp-5)" fill-opacity="0.2" />
                                         <defs>
                                            <linearGradient id="tp-5" x1="15" y1="0" x2="15" y2="29.9921"
                                               gradientUnits="userSpaceOnUse">
                                               <stop offset="0" stop-color="#6360F3" />
                                               <stop offset="1" stop-color="#625FF1" stop-opacity="0" />
                                            </linearGradient>
                                         </defs>
                                      </svg>
                                   </span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="row justify-content-center">
                          <div className="col-xl-10">
                             <div className="tp-testimonial__slider-section">
                                <div className="tp-testimonial__slider-active wow tpfadeUp" data-wow-duration=".9s"
                                   data-wow-delay=".5s">
                                   <div className="tp-testimonial__wrapper-main">
                                      <div className="tp-testimonial__wrapper">
                                         <div className="row gx-0">
                                            <div className="col-xl-7 col-lg-7">
                                               <div className="tp-testimonial__left-item p-relative">
                                                  <div className="tp-testimonial__logo">
                                                     <img src="assets/img/testimonial/testi-logo-up-3.png" alt=""/>
                                                  </div>
                                                  <div className="tp-testimonial__content z-index">
                                                     <p>“Business growth is a point a business reaches where it expands and
                                                        requires more avenues to generate a profit. This can happen when a
                                                        company increases revenue.”
                                                     </p>
                                                  </div>
                                                  <div className="tp-testimonial__author-info z-index">
                                                     <span>Benjamin Evalent</span>
                                                     <i>WP Developer</i>
                                                  </div>
                                               </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-5">
                                               <div
                                                  className="tp-testimonial__right-item d-flex flex-column justify-content-between">
                                                  <div className="tp-testimonial__increase">
                                                     <span>94%</span>
                                                     <p>Increase in offline purchases
                                                        versus control group.</p>
                                                  </div>
                                                  <div className="tp-testimonial__link">
                                                     <a href="project-details.html">
                                                        Read Case Study
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M1 7H13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                           <path d="M7 1L13 7L7 13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                     </a>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__wrapper-main">
                                      <div className="tp-testimonial__wrapper">
                                         <div className="row gx-0">
                                            <div className="col-xl-7 col-lg-7">
                                               <div className="tp-testimonial__left-item p-relative">
                                                  <div className="tp-testimonial__logo">
                                                     <img src="assets/img/testimonial/testi-logo-up-4.png" alt=""/>
                                                  </div>
                                                  <div className="tp-testimonial__content z-index">
                                                     <p>“Market penetration. The aim of this strategy is to increase sales of
                                                        existing products or services on existing markets, and thus to
                                                        increase your market share.”
                                                     </p>
                                                  </div>
                                                  <div className="tp-testimonial__author-info z-index">
                                                     <span>Benjamin Evalent</span>
                                                     <i>WP Developer</i>
                                                  </div>
                                               </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-5">
                                               <div
                                                  className="tp-testimonial__right-item d-flex flex-column justify-content-between">
                                                  <div className="tp-testimonial__increase">
                                                     <span>59%</span>
                                                     <p>Increase in offline purchases
                                                        versus control group.</p>
                                                  </div>
                                                  <div className="tp-testimonial__link">
                                                     <a href="#">
                                                        Read Case Study
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M1 7H13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                           <path d="M7 1L13 7L7 13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                     </a>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__wrapper-main">
                                      <div className="tp-testimonial__wrapper">
                                         <div className="row gx-0">
                                            <div className="col-xl-7 col-lg-7">
                                               <div className="tp-testimonial__left-item p-relative">
                                                  <div className="tp-testimonial__logo">
                                                     <img src="assets/img/testimonial/testi-logo-up-5.png" alt=""/>
                                                  </div>
                                                  <div className="tp-testimonial__content z-index">
                                                     <p>“Every new business and start-up, big or small, goes through the five
                                                        stages of business growth. These phases include existence, survival,
                                                        success, take-off, and resource maturity.”
                                                     </p>
                                                  </div>
                                                  <div className="tp-testimonial__author-info z-index">
                                                     <span>Benjamin Evalent</span>
                                                     <i>WP Developer</i>
                                                  </div>
                                               </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-5">
                                               <div
                                                  className="tp-testimonial__right-item d-flex flex-column justify-content-between">
                                                  <div className="tp-testimonial__increase">
                                                     <span>82%</span>
                                                     <p>Increase in offline purchases
                                                        versus control group.</p>
                                                  </div>
                                                  <div className="tp-testimonial__link">
                                                     <a href="#">
                                                        Read Case Study
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M1 7H13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                           <path d="M7 1L13 7L7 13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                     </a>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__wrapper-main">
                                      <div className="tp-testimonial__wrapper">
                                         <div className="row gx-0">
                                            <div className="col-xl-7 col-lg-7">
                                               <div className="tp-testimonial__left-item p-relative">
                                                  <div className="tp-testimonial__logo">
                                                     <img src="assets/img/testimonial/testi-logo-up-6.png" alt=""/>
                                                  </div>
                                                  <div className="tp-testimonial__content z-index">
                                                     <p>“Calculating the growth rates of various metrics and then comparing
                                                        them to one another gives you a more complete picture of your
                                                        business’s trajectory.”
                                                     </p>
                                                  </div>
                                                  <div className="tp-testimonial__author-info z-index">
                                                     <span>Benjamin Evalent</span>
                                                     <i>WP Developer</i>
                                                  </div>
                                               </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-5">
                                               <div
                                                  className="tp-testimonial__right-item d-flex flex-column justify-content-between">
                                                  <div className="tp-testimonial__increase">
                                                     <span>99%</span>
                                                     <p>Increase in offline purchases
                                                        versus control group.</p>
                                                  </div>
                                                  <div className="tp-testimonial__link">
                                                     <a href="#">
                                                        Read Case Study
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M1 7H13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                           <path d="M7 1L13 7L7 13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                     </a>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__wrapper-main">
                                      <div className="tp-testimonial__wrapper">
                                         <div className="row gx-0">
                                            <div className="col-xl-7 col-lg-7">
                                               <div className="tp-testimonial__left-item p-relative">
                                                  <div className="tp-testimonial__logo">
                                                     <img src="assets/img/testimonial/testi-logo-up-1.png" alt=""/>
                                                  </div>
                                                  <div className="tp-testimonial__content z-index">
                                                     <p>“While there is no way to guarantee success, implementing these tips
                                                        can put your business in the best position to succeed and grow.”
                                                     </p>
                                                  </div>
                                                  <div className="tp-testimonial__author-info z-index">
                                                     <span>Benjamin Evalent</span>
                                                     <i>WP Developer</i>
                                                  </div>
                                               </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-5">
                                               <div
                                                  className="tp-testimonial__right-item d-flex flex-column justify-content-between">
                                                  <div className="tp-testimonial__increase">
                                                     <span>81%</span>
                                                     <p>Increase in offline purchases
                                                        versus control group.</p>
                                                  </div>
                                                  <div className="tp-testimonial__link">
                                                     <a href="#">
                                                        Read Case Study
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M1 7H13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                           <path d="M7 1L13 7L7 13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                     </a>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__wrapper-main">
                                      <div className="tp-testimonial__wrapper">
                                         <div className="row gx-0">
                                            <div className="col-xl-7 col-lg-7">
                                               <div className="tp-testimonial__left-item p-relative">
                                                  <div className="tp-testimonial__logo">
                                                     <img src="assets/img/testimonial/testi-logo-up-5.png" alt=""/>
                                                  </div>
                                                  <div className="tp-testimonial__content z-index">
                                                     <p>“Small businesses can quickly adapt and respond to customers’ needs.
                                                        This agility can give them an advantage over larger businesses.”
                                                     </p>
                                                  </div>
                                                  <div className="tp-testimonial__author-info z-index">
                                                     <span>Benjamin Evalent</span>
                                                     <i>WP Developer</i>
                                                  </div>
                                               </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-5">
                                               <div
                                                  className="tp-testimonial__right-item d-flex flex-column justify-content-between">
                                                  <div className="tp-testimonial__increase">
                                                     <span>83%</span>
                                                     <p>Increase in offline purchases
                                                        versus control group.</p>
                                                  </div>
                                                  <div className="tp-testimonial__link">
                                                     <a href="#">
                                                        Read Case Study
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M1 7H13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                           <path d="M7 1L13 7L7 13" stroke="#6865FF" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                     </a>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="tp-testimonial__img-active">
                                   <div className="tp-testimonial__img-wrap tp-title-anim">
                                      <div className="tp-testimonial__img-item">
                                         <svg width="86" height="22" viewBox="0 0 86 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                               d="M41.1763 14.1579C44.6007 15.684 48.1533 16.3607 52.0255 16.3822C56.0933 16.4072 59.1656 15.7678 63.0703 14.2849L63.0478 18.4879C59.5535 20.2166 55.7753 21.0212 51.9989 20.9996C47.8819 20.9755 44.9162 20.1319 41.1505 18.36L41.1763 14.1579ZM77.8325 5.8739C83.873 5.90794 83.8098 8.41048 83.7956 10.84L83.7648 16.0153C83.7607 16.9635 83.8023 18.0337 84.3333 18.8375L79.4123 18.8092C79.2941 18.468 79.2225 17.9573 79.25 17.6186L79.2001 17.6177C78.1712 18.7768 76.6846 19.1098 75.1256 19.1007C72.6884 19.0849 70.674 17.9075 70.6898 15.2597C70.714 11.2742 75.3878 11.4486 77.8508 11.001C78.5092 10.8823 79.1684 10.6922 79.1726 9.89091C79.1784 9.03985 78.3777 8.71852 77.5961 8.71437C76.1103 8.7069 75.814 9.4575 75.7882 9.99138L71.3041 9.96647C71.4706 6.41941 74.8359 5.8548 77.8325 5.8739ZM25.8639 1.14447L30.6859 1.17187L30.6509 7.29621H30.6992C31.435 6.23093 32.7302 5.60654 34.1677 5.61401C38.4045 5.63892 39.529 9.24162 39.5115 12.2058C39.4924 15.3643 37.7427 18.8765 34.1627 18.8575C31.8004 18.8424 31.0746 17.9391 30.4703 17.1337H30.422L30.4128 18.5203L25.7615 18.4921L25.8639 1.14447ZM65.6423 1.38277L70.4651 1.40934L70.3627 18.7586L65.5408 18.7304L65.6423 1.38277ZM19.2199 5.52683C25.2604 5.56253 25.1972 8.06507 25.1822 10.4945L25.1539 15.6707C25.1472 16.6181 25.1897 17.6875 25.7199 18.4921L20.8006 18.463C20.6807 18.1226 20.6099 17.6119 20.6374 17.2723H20.5883C19.5595 18.4314 18.0712 18.7636 16.5113 18.7544C14.0758 18.7395 12.0623 17.5621 12.0764 14.9143C12.0997 10.9288 16.7768 11.1023 19.2382 10.6556C19.8966 10.5369 20.555 10.3468 20.56 9.54551C20.565 8.69444 19.7642 8.37312 18.9843 8.36896C17.4985 8.36149 17.2005 9.11209 17.1747 9.64681L12.6924 9.62107C12.8589 6.074 16.2225 5.51022 19.2199 5.52683ZM1.02497 1L16.1268 1.08718L16.101 5.5343L11.2282 5.50524L11.1541 18.4082L5.79531 18.3766L5.87106 5.47452L1 5.44629L1.02497 1ZM79.1534 13.1465C78.5666 13.4338 77.9082 13.6007 77.2515 13.7419C76.1752 13.9802 75.6167 14.2442 75.6108 15.0936C75.6075 15.6773 76.2376 16.2635 77.1133 16.2685C78.2104 16.2743 79.0661 15.6242 79.1468 14.3115L79.1534 13.1465ZM20.5409 12.8003C19.9549 13.0893 19.2948 13.2553 18.6381 13.3973C17.5643 13.6348 17.0024 13.8971 16.9983 14.7474C16.9949 15.3319 17.6251 15.9181 18.5007 15.9239C19.597 15.9297 20.4526 15.2788 20.5342 13.9669L20.5409 12.8003ZM32.587 9.10457C30.8582 9.09465 30.4594 10.7204 30.4503 12.2017C30.442 13.7078 30.8224 15.3394 32.5504 15.3494C34.2809 15.3576 34.6796 13.7336 34.6888 12.2266C34.6971 10.7445 34.3167 9.11375 32.587 9.10457ZM46.2987 1.00083C49.2898 1.01704 51.2403 2.26153 52.2695 4.05471C53.3179 2.27758 55.2812 1.05947 58.2675 1.07722C63.017 1.10545 65.1429 4.2274 65.1229 7.72548C65.1021 11.2252 62.9404 14.3455 58.1901 14.3198C55.2003 14.302 53.2502 13.0477 52.2212 11.248C51.171 13.0313 49.208 14.2589 46.2213 14.2417C41.4718 14.2143 39.3459 11.0675 39.3675 7.56855C39.3884 4.06881 41.5484 0.9726 46.2987 1.00083ZM58.2467 4.57608C56.4204 4.56533 56.1665 6.33721 56.1599 7.674C56.1507 9.01079 56.383 10.8092 58.2109 10.8201C60.0363 10.8317 60.291 9.03404 60.2993 7.69808C60.3068 6.36129 60.0737 4.58526 58.2467 4.57608ZM46.2788 4.49886C44.4509 4.48811 44.1978 6.26082 44.1895 7.59595C44.182 8.93191 44.4142 10.7328 46.2421 10.7429C48.0684 10.7536 48.3231 8.95765 48.3306 7.62003C48.3389 6.28324 48.1058 4.50887 46.2788 4.49886Z"
                                               fill="currentcolor" stroke="white" />
                                         </svg>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__img-wrap tp-title-anim">
                                      <div className="tp-testimonial__img-item">
                                         <svg width="94" height="20" viewBox="0 0 94 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                               d="M24.4177 19.3778V19.5511H17.0234V19.3778C17.8544 19.2336 18.1816 19.0313 18.2704 18.3962V8.81004C18.2704 7.04762 17.6175 6.18131 16.2811 6.18131C15.8393 6.19003 15.4116 6.3344 15.0594 6.59379C14.707 6.85309 14.448 7.21425 14.3193 7.62546C14.3799 7.95927 14.4099 8.2977 14.4087 8.63678V17.6489C14.4087 18.7176 14.7352 19.1512 15.7428 19.3817V19.5549H8.67563V19.3778C9.68482 19.1489 10.0096 18.7138 10.0096 17.6451V8.80622C10.0096 7.0438 9.32618 6.17749 8.01963 6.17749C7.60418 6.18122 7.20045 6.31132 6.86491 6.54973C6.52936 6.78804 6.279 7.12258 6.14891 7.50635V17.6451C6.14891 18.7138 6.47536 19.1473 7.48291 19.3778V19.5511H0V19.3778C1.15736 19.1184 1.75145 18.6267 1.75145 17.4696V8.26127C1.75145 6.73008 1.33627 6.26753 0 6.15223V5.97897L6.14655 4.33257V7.04762C6.40555 6.21919 6.93945 5.49771 7.66482 4.99591C8.39027 4.49421 9.26627 4.24045 10.1556 4.27452C12.3826 4.27452 13.7786 5.37215 14.2235 7.16364C14.513 6.3046 15.0798 5.5594 15.8395 5.03889C16.5994 4.51838 17.5116 4.25026 18.4406 4.27452C21.2028 4.27452 22.6576 6.00795 22.6576 8.63678V17.4757C22.6655 18.6305 23.2595 19.1222 24.4177 19.3778Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M40.1281 16.4066C39.6236 18.7728 38.0494 19.9887 35.9691 19.9887C35.5942 20.022 35.2161 19.9825 34.857 19.8723C34.4979 19.7622 34.165 19.5836 33.8776 19.3471C33.5901 19.1105 33.3539 18.8206 33.1828 18.4945C33.0116 18.1682 32.9088 17.8121 32.8805 17.447L32.8217 17.2179C32.5502 18.0556 32.0007 18.7821 31.2593 19.2835C30.5179 19.7849 29.6266 20.0329 28.7248 19.9887C28.2147 20.0273 27.7019 19.9624 27.2189 19.7982C26.736 19.6338 26.2934 19.3737 25.9193 19.0342C25.5452 18.6948 25.2477 18.2834 25.0456 17.8262C24.8436 17.369 24.7413 16.876 24.7455 16.3783C24.7455 13.8076 26.8838 12.1321 30.2988 11.4383L32.7636 10.9475V10.3369C32.7636 8.11265 31.9318 6.58219 29.4372 6.58219C27.5077 6.58219 26.1415 7.47757 25.4878 9.73079L25.2524 9.67283C25.7232 6.35096 27.9839 4.271 31.4885 4.271C35.4378 4.271 37.1603 6.72647 37.1603 10.4238V16.2295C37.1603 17.2408 37.6648 17.7606 38.3186 17.7606C38.8828 17.7606 39.5357 17.4432 39.8621 16.3745L40.1281 16.4066ZM32.7636 16.7249V11.6688L31.6054 11.8711C29.2889 12.3336 28.844 13.7488 28.844 15.164C28.844 16.6371 29.5863 17.7927 31.0114 17.7927C31.3824 17.82 31.7527 17.7312 32.0679 17.539C32.3833 17.3469 32.627 17.0616 32.7636 16.7249Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M56.2542 19.3778V19.5511H48.7713V19.3778C49.7514 19.1488 50.1053 18.7137 50.1053 17.6451V8.83897C50.1053 7.07655 49.4225 6.18117 48.0265 6.18117C47.5533 6.17726 47.0894 6.30946 46.6931 6.56122C46.2968 6.81307 45.986 7.17323 45.7995 7.59634V17.6489C45.7995 18.7175 46.126 19.1511 47.1336 19.3816V19.5549H39.6514V19.3778C40.8096 19.1183 41.4036 18.6267 41.4036 17.4695V8.26113C41.4036 6.73003 40.9877 6.26739 39.6514 6.15219V5.97893L45.7988 4.33253V7.16505C46.0999 6.28384 46.6906 5.52347 47.4799 5.00105C48.2692 4.47872 49.2133 4.22341 50.1665 4.27447C52.9915 4.27447 54.502 5.95376 54.502 8.66499V17.4756C54.5028 18.6305 55.0968 19.1221 56.2542 19.3778Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M66.3515 16.1467C65.6987 18.2549 64.0951 19.9884 61.5115 19.9884C59.0169 19.9884 57.8287 18.4573 57.8287 16.2048V5.34304H56.1069V5.19877C58.4733 3.90153 60.5278 2.12939 62.1351 0H62.2542V4.76602H65.2533V5.34304H62.2506V15.5399C62.2506 16.8688 62.8151 17.7641 63.9133 17.7641C64.4242 17.7633 64.9188 17.5944 65.3178 17.2849C65.7169 16.9754 65.996 16.5435 66.1106 16.0597L66.3515 16.1467Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M78.6769 14.3265C77.9342 18.4857 75.2323 19.9879 72.6487 19.9879C69.2032 19.9879 66.0569 17.388 66.0569 12.4198C66.0569 7.68274 68.7596 4.27393 72.8278 4.27393C75.7078 4.27393 78.6778 6.03634 78.6478 10.8024H69.5014C69.7987 14.4997 71.7587 16.5507 74.6396 16.5507C75.4451 16.6229 76.2542 16.4396 76.9442 16.0283C77.6342 15.617 78.1696 14.9997 78.4696 14.2685L78.6769 14.3265ZM69.4705 9.75971V10.0772H74.6078C74.6378 6.37987 73.6578 5.08 72.1751 5.08C70.5105 5.083 69.4705 6.87367 69.4705 9.75971Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M90.0514 4.27393V8.43385H89.9032C89.4178 8.22642 88.8878 8.13702 88.3587 8.17355C86.4287 8.17355 85.1514 9.18495 85.1514 13.0266V17.4751C85.1514 18.7727 85.8942 19.1787 87.4969 19.3833V19.5566H79.0042V19.3772C80.1623 19.1177 80.7569 18.6261 80.7569 17.469V8.52016C80.7569 6.87367 80.3105 6.29592 79.0042 6.18062V6.00736L84.9732 4.33198V10.8024H85.1223C85.3578 6.15164 87.1414 4.27393 89.7251 4.27393H90.0514Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M88.7451 17.562C88.7551 16.9321 89.0197 16.3313 89.4806 15.8888C89.9415 15.4464 90.5624 15.1975 91.2097 15.1958C91.8524 15.2041 92.466 15.456 92.9206 15.898C93.3751 16.3399 93.6342 16.937 93.6424 17.562C93.646 18.1934 93.3915 18.8004 92.9351 19.2498C92.4797 19.6992 91.8588 19.9545 91.2097 19.9595C90.886 19.9603 90.5651 19.8989 90.2651 19.7787C89.966 19.6585 89.6942 19.4818 89.4651 19.2591C89.236 19.0363 89.0542 18.7717 88.9306 18.4804C88.807 18.1892 88.7442 17.877 88.7451 17.562Z"
                                               fill="currentcolor" />
                                         </svg>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__img-wrap tp-title-anim">
                                      <div className="tp-testimonial__img-item">
                                         <svg width="76" height="20" viewBox="0 0 76 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                               d="M10.3234 18.7013C9.19309 18.8868 8.06279 18.961 6.85714 19.1095L3.24019 8.64564V19.5547C2.10989 19.666 1.09262 19.8145 0 20V0H3.01413L7.12088 11.3544V0H10.3234V18.7013ZM16.5777 7.34694C17.821 7.34694 19.7049 7.27273 20.8352 7.27273V10.3896C19.4411 10.3896 17.7834 10.3896 16.5777 10.4638V15.102C18.4239 14.9907 20.3077 14.8423 22.1915 14.7681V17.7737L13.4129 18.4416V0H22.1915V3.11688H16.5777C16.5777 3.15399 16.5777 7.34694 16.5777 7.34694ZM33.9466 3.15399H30.6688V17.5139C29.6138 17.5139 28.5212 17.5139 27.5039 17.551V3.15399H24.2261V0H33.9843C33.9466 0 33.9466 3.15399 33.9466 3.15399ZM39.1083 7.1243H43.4411V10.2412H39.1083V17.3284H35.9812V0H44.8352V3.11688H39.1083C39.1083 3.15399 39.1083 7.1243 39.1083 7.1243ZM49.9969 14.5826C51.8053 14.6197 53.6138 14.7681 55.3846 14.8423V17.9221C52.5589 17.7365 49.7331 17.5881 46.832 17.5139V0H49.9969V14.5826ZM58.0597 18.1447C59.0769 18.2189 60.1319 18.256 61.1868 18.3673V0H58.0597V18.1447ZM75.0518 0L71.0204 9.49907L75.0518 19.9629C73.8462 19.8145 72.6782 19.5918 71.4725 19.4063L69.2119 13.6178L66.876 18.9239C65.7457 18.7384 64.6154 18.6642 63.4851 18.5158L67.5542 9.38776L63.8619 0H67.2528L69.325 5.23191L71.5479 0H75.0518Z"
                                               fill="currentcolor" />
                                         </svg>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__img-wrap tp-title-anim">
                                      <div className="tp-testimonial__img-item">
                                         <svg width="102" height="22" viewBox="0 0 102 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                               d="M23.7505 13.26L26.4174 12.5317C26.4614 13.1189 26.7359 13.6648 27.1812 14.0508C27.7026 14.4833 28.3684 14.703 29.0453 14.6657C29.5497 14.6944 30.0498 14.558 30.4696 14.2773C30.6273 14.1722 30.7569 14.0301 30.8468 13.8634C30.9367 13.6966 30.9842 13.5104 30.9852 13.321C30.9859 13.164 30.952 13.0088 30.8858 12.8664C30.8196 12.724 30.7227 12.5979 30.6022 12.4971C30.2736 12.2373 29.8811 12.0707 29.4658 12.0145L27.5509 11.5849C26.5662 11.4037 25.6654 10.9123 24.9805 10.1829C24.3881 9.52044 24.067 8.65959 24.0812 7.77159C24.0807 7.21721 24.2044 6.66973 24.4428 6.16917C24.6814 5.66861 25.0289 5.2276 25.46 4.87839C26.393 4.06824 27.5966 3.63748 28.8324 3.67128C29.4604 3.66415 30.0859 3.75069 30.6884 3.92796C31.1724 4.06446 31.631 4.27832 32.0464 4.56133C32.3885 4.8071 32.6914 5.10291 32.945 5.43892C33.169 5.72562 33.3555 6.03956 33.5003 6.37318C33.6148 6.64873 33.6962 6.93691 33.7426 7.23157L31.2083 7.95985C31.1801 7.75075 31.119 7.54748 31.0272 7.35741C30.9218 7.1392 30.7873 6.93625 30.6273 6.75422C30.4289 6.53553 30.1808 6.36777 29.904 6.26498C29.5623 6.13365 29.1984 6.06966 28.8324 6.07672C28.3502 6.05908 27.8775 6.21314 27.4985 6.51149C27.336 6.63117 27.2034 6.78696 27.1114 6.96652C27.0193 7.14617 26.9703 7.34469 26.9683 7.54649C26.9664 7.70604 26.9972 7.86429 27.0587 8.01153C27.1202 8.15878 27.2113 8.29192 27.3262 8.40266C27.5899 8.6536 27.9239 8.81832 28.2837 8.87501L30.2347 9.2759C31.2528 9.44275 32.1945 9.91953 32.931 10.6412C33.5463 11.2785 33.8835 12.1334 33.8685 13.0186C33.8684 13.5519 33.7646 14.08 33.5629 14.5738C33.3537 15.0838 33.056 15.5529 32.6835 15.9597C32.2609 16.408 31.743 16.756 31.1679 16.9778C30.4992 17.2435 29.7847 17.3753 29.0651 17.3654C28.2563 17.3781 27.4524 17.2367 26.6965 16.949C26.0722 16.7207 25.5077 16.3543 25.0453 15.8773C24.6753 15.4862 24.3656 15.0424 24.1261 14.5605C23.9264 14.152 23.7993 13.712 23.7505 13.26Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M33.876 6.77751V4.07488H34.5388C34.8127 4.09456 35.0877 4.05478 35.3448 3.95831C35.6019 3.86175 35.8349 3.71081 36.028 3.51574C36.3772 3.10722 36.5576 2.58115 36.5325 2.04457V0.0922852H39.3165V4.07488H41.9959V6.77751H39.3165V12.7919C39.2957 13.015 39.3199 13.2401 39.3877 13.4537C39.4555 13.6674 39.5656 13.8653 39.7113 14.0357C40.0624 14.3219 40.5118 14.4598 40.9633 14.4197C41.3197 14.4205 41.6752 14.3855 42.0246 14.3153V16.8399C41.4174 17.0553 40.7741 17.1512 40.1304 17.1224C39.6122 17.1509 39.0936 17.075 38.6054 16.899C38.1172 16.723 37.6695 16.4508 37.2889 16.0984C36.9319 15.7231 36.6556 15.2786 36.4771 14.7926C36.2987 14.3065 36.2218 13.7891 36.2512 13.2722V6.77751H33.876Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M42.7589 13.5087C42.7366 13.014 42.821 12.5202 43.0064 12.0609C43.1918 11.6016 43.4738 11.1874 43.8334 10.8465C44.6235 10.1489 45.6088 9.71011 46.6564 9.58936L49.9707 9.0847C50.6089 9.0043 50.9281 8.71415 50.9281 8.21441C50.9345 7.96183 50.8829 7.71123 50.7772 7.48162C50.6715 7.25209 50.5144 7.0498 50.3183 6.89033C49.7876 6.50954 49.1397 6.32718 48.4881 6.37541C47.8069 6.34047 47.1387 6.5718 46.6254 7.0206C46.1626 7.44938 45.8777 8.03608 45.8271 8.66461L43.0284 8.04452C43.0867 7.44487 43.2629 6.86252 43.5468 6.33103C43.8308 5.79946 44.2171 5.32909 44.6833 4.9469C45.7376 4.0726 47.0783 3.6188 48.4476 3.67277C49.3148 3.65694 50.1781 3.79213 50.9988 4.07227C51.6592 4.29253 52.2562 4.66963 52.7384 5.17126C53.1584 5.62474 53.4812 6.15917 53.687 6.74177C53.8971 7.35201 54.0012 7.99367 53.9949 8.63893V14.8982C53.9842 15.5913 54.0404 16.2838 54.1628 16.966H51.2551C51.1301 16.4279 51.0805 15.8751 51.1078 15.3234C50.7203 15.9238 50.1922 16.4209 49.5693 16.7719C48.8229 17.1877 47.9776 17.3933 47.1234 17.3669C45.9621 17.4181 44.8275 17.0103 43.9652 16.2319C43.5816 15.89 43.2754 15.4702 43.0673 15.0005C42.8593 14.5308 42.7541 14.0222 42.7589 13.5087ZM45.8271 13.288C45.8233 13.5087 45.8657 13.7277 45.9516 13.9311C46.0377 14.1344 46.1653 14.3175 46.3264 14.4686C46.5136 14.6365 46.7322 14.7657 46.9696 14.8487C47.207 14.9318 47.4585 14.9672 47.7096 14.9526C48.1269 14.9574 48.5424 14.8984 48.9418 14.7776C49.3126 14.6621 49.6584 14.4779 49.9611 14.2347C50.288 13.9606 50.5347 13.6032 50.6747 13.2004C50.8542 12.6918 50.94 12.1551 50.9281 11.616V11.034L47.563 11.549C47.0974 11.6093 46.6596 11.8044 46.3036 12.1103C46.1438 12.2602 46.0185 12.4429 45.9362 12.6458C45.854 12.8487 45.8168 13.067 45.8271 13.2857V13.288Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M56.0696 16.9679V4.07552H59.0352V5.68213C59.4019 5.04203 59.9589 4.53178 60.6291 4.22195C61.3174 3.87987 62.0753 3.70162 62.844 3.70113C63.6659 3.6862 64.4772 3.88275 65.2008 4.27191C65.8841 4.64343 66.4272 5.22734 66.7471 5.93511C67.1712 5.21503 67.7864 4.62555 68.5239 4.23146C69.2614 3.83738 70.0932 3.65388 70.9283 3.70113C71.4968 3.69686 72.062 3.7953 72.5952 3.99168C73.1194 4.18807 73.6009 4.48216 74.0151 4.85819C74.4712 5.28533 74.8191 5.81494 75.0291 6.40303C75.2891 7.10654 75.4154 7.85205 75.4031 8.60174V16.9679H72.5164V9.06744C72.5517 8.36836 72.3318 7.68019 71.8971 7.13123C71.6616 6.87849 71.3721 6.68177 71.0505 6.55569C70.7281 6.42969 70.3819 6.37751 70.0374 6.40303C69.6748 6.39064 69.3139 6.45815 68.98 6.60072C68.6461 6.74338 68.3484 6.95773 68.1072 7.22835C67.6068 7.79052 67.3402 8.5229 67.364 9.27481V16.9679H64.296V9.06744C64.3288 8.37164 64.1114 7.68708 63.6824 7.13787C63.4477 6.88193 63.1573 6.68276 62.8341 6.55528C62.5109 6.4278 62.1631 6.37555 61.8169 6.40229C61.4527 6.38736 61.0909 6.45208 60.7546 6.59186C60.4191 6.73165 60.118 6.94313 59.8728 7.21146C59.374 7.78142 59.1131 8.52061 59.1427 9.27703V16.97L56.0696 16.9679Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M77.6133 22V4.07536H80.6042V5.80263C80.9815 5.17435 81.5336 4.66911 82.1931 4.34828C82.9692 3.95617 83.8289 3.76044 84.6976 3.77824C85.5212 3.73862 86.3432 3.88726 87.1011 4.21284C87.8583 4.53835 88.5318 5.03227 89.0691 5.65694C90.17 7.0259 90.7352 8.7476 90.6605 10.5017C90.7302 12.2774 90.138 14.016 88.9977 15.3803C88.4547 16.0084 87.7763 16.5065 87.0142 16.8375C86.2513 17.1685 85.4244 17.3242 84.5934 17.2928C83.7805 17.3085 82.9741 17.1379 82.2366 16.7942C81.6165 16.5134 81.08 16.0761 80.6797 15.5252V21.9985L77.6133 22ZM80.6559 10.5039C80.605 11.5762 80.9495 12.6298 81.6247 13.4648C81.929 13.8282 82.3105 14.1183 82.7428 14.3132C83.1743 14.5082 83.6451 14.6028 84.1184 14.5903C84.5934 14.6037 85.0651 14.5101 85.4991 14.3164C85.9322 14.1227 86.3161 13.8338 86.6229 13.4713C87.3005 12.6349 87.645 11.5785 87.5917 10.5039C87.6426 9.447 87.2997 8.40888 86.6294 7.58938C86.3202 7.22918 85.933 6.94305 85.4982 6.75208C85.0635 6.5611 84.5909 6.47013 84.116 6.48596C83.6435 6.47292 83.1734 6.56611 82.7419 6.75872C82.3104 6.95141 81.9274 7.23861 81.6222 7.59898C80.952 8.41397 80.6075 9.44807 80.6559 10.5017V10.5039Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M90.8843 13.26L93.5511 12.5317C93.5954 13.1189 93.8702 13.6648 94.3149 14.0508C94.8366 14.4834 95.5027 14.7031 96.1803 14.6657C96.684 14.6942 97.1844 14.5579 97.6035 14.2773C97.7619 14.1722 97.8907 14.0301 97.9809 13.8634C98.0711 13.6966 98.1187 13.5104 98.1195 13.321C98.1203 13.164 98.0859 13.0088 98.0203 12.8664C97.9538 12.724 97.857 12.5979 97.7364 12.4971C97.4083 12.2373 97.0154 12.0706 96.6003 12.0145L94.6857 11.5849C93.7013 11.4038 92.8006 10.9124 92.1164 10.1829C91.5233 9.52085 91.2017 8.65975 91.2157 7.77159C91.2157 7.21721 91.3396 6.66973 91.5775 6.16917C91.8162 5.66861 92.164 5.2276 92.5946 4.87839C93.5282 4.06824 94.7316 3.63748 95.967 3.67128C96.5954 3.66415 97.2205 3.75069 97.8234 3.92796C98.3074 4.0643 98.7659 4.27824 99.181 4.56133C99.5231 4.80727 99.8266 5.10308 100.081 5.43892C100.304 5.72578 100.49 6.03972 100.635 6.37318C100.749 6.64873 100.831 6.93691 100.877 7.23157L98.3435 7.95985C98.3156 7.75083 98.2541 7.54747 98.163 7.35741C98.0572 7.13928 97.9218 6.93642 97.7619 6.75422C97.5634 6.53553 97.3156 6.36777 97.0392 6.26498C96.6971 6.13357 96.3329 6.06958 95.967 6.07672C95.4855 6.05908 95.013 6.21322 94.634 6.51149C94.4716 6.63101 94.3387 6.78679 94.2468 6.96644C94.1541 7.14601 94.1049 7.34461 94.1032 7.54649C94.1016 7.70604 94.1319 7.86428 94.1935 8.01153C94.255 8.15878 94.346 8.29192 94.4609 8.40266C94.725 8.65344 95.0589 8.81816 95.4182 8.87501L97.3689 9.2759C98.387 9.44259 99.3295 9.91944 100.066 10.6412C100.681 11.2787 101.018 12.1336 101.003 13.0186C101.003 13.5519 100.899 14.0802 100.697 14.5738C100.488 15.084 100.19 15.5532 99.8176 15.9596C99.3951 16.4081 98.8775 16.756 98.3016 16.9778C97.6339 17.2435 96.9194 17.3752 96.2 17.3654C95.3911 17.3782 94.5864 17.2368 93.8309 16.949C93.2066 16.7206 92.6422 16.3541 92.1804 15.8773C91.8104 15.4862 91.5003 15.0424 91.2608 14.5605C91.0615 14.1519 90.9343 13.7119 90.8843 13.26Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M1.46943 3.83955C1.4828 3.80435 1.4924 3.76793 1.49814 3.73069C1.59125 3.0691 1.93209 2.46739 2.45193 2.04689C2.82009 1.75379 3.26044 1.56495 3.7268 1.50031C3.75764 1.49572 3.78799 1.48809 3.81736 1.47751C3.90891 1.46807 4.00087 1.46339 4.09283 1.46356C4.72792 1.45987 5.34234 1.68833 5.82034 2.10595C6.29835 2.52366 6.60679 3.10158 6.68751 3.73069C6.69612 3.83044 6.74223 3.9233 6.81655 3.9904C6.89087 4.05759 6.98791 4.09409 7.08816 4.09261H7.18323C7.28356 4.09442 7.38077 4.05808 7.45517 3.99081C7.52965 3.92363 7.57559 3.83061 7.58388 3.73069C7.66107 3.10306 7.96615 2.52563 8.44128 2.10776C8.91641 1.68981 9.52854 1.46061 10.1616 1.46356C10.7967 1.45987 11.4111 1.68833 11.8891 2.10595C12.3671 2.52366 12.6755 3.10158 12.7563 3.73069C12.7648 3.83044 12.8109 3.9233 12.8853 3.9904C12.9596 4.05759 13.0567 4.09409 13.1569 4.09261H13.2306C13.3309 4.09442 13.4282 4.05808 13.5026 3.99081C13.577 3.92363 13.623 3.83061 13.6312 3.73069C13.7115 3.10437 14.0174 2.52875 14.4919 2.11145C14.9664 1.69415 15.5768 1.46381 16.209 1.46356C16.8921 1.46348 17.5481 1.73066 18.0362 2.208C18.515 2.69651 18.7829 3.35309 18.7823 4.03675C18.7824 4.66832 18.5518 5.27831 18.1337 5.75229C17.7157 6.22628 17.139 6.53168 16.5117 6.61134C16.4117 6.61954 16.3185 6.66548 16.2513 6.7398C16.1839 6.8142 16.1475 6.91133 16.1493 7.01157V7.08507C16.1478 7.18524 16.1844 7.28212 16.2517 7.35644C16.3189 7.43068 16.4118 7.4767 16.5117 7.48523C17.1416 7.56554 17.7205 7.87341 18.1387 8.35075C18.5571 8.82802 18.786 9.44178 18.7823 10.0761C18.7852 10.7085 18.5556 11.32 18.1371 11.7946C17.7186 12.2692 17.1402 12.5738 16.5117 12.6507C16.4117 12.6589 16.3185 12.7049 16.2513 12.7792C16.1839 12.8535 16.1475 12.9507 16.1493 13.0509V13.1465C16.148 13.2466 16.1846 13.3435 16.2518 13.4176C16.3191 13.4919 16.4119 13.538 16.5117 13.5467C17.1416 13.627 17.7205 13.9349 18.1387 14.4122C18.5571 14.8895 18.786 15.5032 18.7823 16.1375C18.7823 16.2228 18.7779 16.3067 18.7698 16.3898C18.7562 16.425 18.7463 16.4615 18.7404 16.4987C18.6478 17.1604 18.3072 17.7622 17.7873 18.1825C17.4188 18.4757 16.9782 18.6644 16.5117 18.7291C16.4812 18.7339 16.4512 18.7413 16.4219 18.7511C16.3301 18.7609 16.2379 18.7658 16.1457 18.7658C15.5107 18.7695 14.8963 18.541 14.4184 18.1233C13.9406 17.7057 13.6323 17.1278 13.5517 16.4987C13.5431 16.3989 13.497 16.3062 13.4227 16.239C13.3484 16.1718 13.2512 16.1353 13.151 16.1368H13.0553C12.9549 16.135 12.8577 16.1714 12.7833 16.2386C12.7089 16.3058 12.6628 16.3988 12.6546 16.4987C12.5776 17.1263 12.2725 17.704 11.7974 18.1219C11.3223 18.5398 10.71 18.7689 10.0769 18.7658C9.44183 18.7696 8.82741 18.5411 8.3494 18.1234C7.8714 17.7057 7.56296 17.1279 7.48224 16.4987C7.47363 16.3989 7.42753 16.3062 7.3532 16.239C7.27888 16.1718 7.18176 16.1353 7.08159 16.1368H7.00793C6.9076 16.135 6.81031 16.1714 6.73591 16.2386C6.66151 16.3058 6.61549 16.3988 6.6072 16.4987C6.5273 17.1252 6.2214 17.701 5.74693 18.1183C5.27237 18.5357 4.6618 18.7659 4.0295 18.7658C3.34494 18.7668 2.68728 18.4995 2.1978 18.0214C1.7193 17.5327 1.45171 16.8762 1.45245 16.1927C1.45245 15.5611 1.68288 14.9513 2.10075 14.4773C2.51863 14.0034 3.09515 13.6979 3.72237 13.618C3.82253 13.61 3.9158 13.5642 3.98331 13.4898C4.05074 13.4154 4.08733 13.3182 4.08544 13.2179V13.1443C4.08676 13.0442 4.05 12.9472 3.98266 12.873C3.91531 12.7987 3.82228 12.7527 3.72237 12.7442C3.09252 12.6637 2.51395 12.3557 2.09575 11.8785C1.67763 11.4012 1.44876 10.7875 1.45245 10.1533C1.44942 9.52094 1.67886 8.90947 2.09722 8.43491C2.51567 7.96028 3.09392 7.65561 3.72237 7.57866C3.82253 7.57062 3.9158 7.52477 3.98331 7.45044C4.05074 7.37612 4.08733 7.27883 4.08544 7.17851V7.08286C4.08676 6.9827 4.05 6.88574 3.98266 6.8115C3.91531 6.73726 3.82228 6.69124 3.72237 6.68271C3.09252 6.60223 2.51395 6.29428 2.09575 5.81702C1.67763 5.33975 1.44876 4.72607 1.45245 4.09188C1.45245 4.00656 1.45688 3.92273 1.465 3.83955H1.46943ZM3.72901 0.659561C3.6971 0.651275 3.66462 0.645613 3.6318 0.642578C2.76349 0.763494 1.97286 1.20721 1.41791 1.88504C0.998728 2.3838 0.729171 2.99067 0.640166 3.63578C0.642298 3.66383 0.646728 3.69164 0.653373 3.71896C0.642134 3.83011 0.636475 3.94184 0.636475 4.05365C0.641807 4.6739 0.812516 5.28151 1.13105 5.81398C1.44966 6.34637 1.90461 6.78443 2.44898 7.08286C1.90445 7.38146 1.4495 7.81959 1.13088 8.35215C0.812351 8.8847 0.641643 9.49248 0.636475 10.1129C0.641807 10.7331 0.812516 11.3407 1.13105 11.8731C1.44966 12.4056 1.90461 12.8437 2.44898 13.1421C1.90125 13.4368 1.44359 13.8741 1.12449 14.4075C0.805379 14.9409 0.636721 15.5506 0.636475 16.172C0.636475 16.2684 0.640822 16.3633 0.648205 16.4583C0.637705 16.5021 0.634259 16.5473 0.63795 16.5921C0.739096 17.3495 1.08814 18.0521 1.63071 18.5908C2.16999 19.1327 2.8735 19.4813 3.6318 19.5824C3.677 19.5861 3.72245 19.5826 3.76658 19.5721C3.86084 19.5802 3.95657 19.5839 4.05304 19.5839C4.67509 19.5836 5.28549 19.4152 5.81952 19.0965C6.35347 18.7777 6.79112 18.3206 7.08594 17.7735C7.3847 18.3174 7.82317 18.7718 8.35629 19.09C8.88942 19.4082 9.49786 19.5787 10.1188 19.5839C10.74 19.5788 11.3486 19.4084 11.8819 19.0902C12.4151 18.772 12.8537 18.3174 13.1525 17.7735C13.4512 18.3174 13.8897 18.7718 14.4228 19.09C14.956 19.4082 15.5644 19.5787 16.1854 19.5839C16.2951 19.5839 16.4064 19.5787 16.511 19.5684C16.543 19.5768 16.5759 19.5822 16.6089 19.5846C17.4757 19.4636 18.2649 19.0201 18.8184 18.3429C19.2378 17.8442 19.5077 17.2373 19.5969 16.5921C19.5946 16.5641 19.5902 16.5364 19.5837 16.509C19.5946 16.3987 19.5998 16.2884 19.5998 16.1743C19.5946 15.5541 19.4241 14.9465 19.1056 14.4141C18.7871 13.8816 18.3323 13.4436 17.788 13.1451C18.3324 12.8465 18.7873 12.4083 19.1058 11.8758C19.4243 11.3431 19.5948 10.7354 19.5998 10.1151C19.5946 9.49486 19.4241 8.88724 19.1056 8.35485C18.7871 7.82238 18.3323 7.38433 17.788 7.08581C18.3356 6.79099 18.7932 6.35376 19.1121 5.8203C19.4311 5.28684 19.5996 4.67718 19.5998 4.05586C19.5998 3.95948 19.5961 3.86383 19.5887 3.76965C19.5986 3.72576 19.602 3.68073 19.5991 3.63578C19.4982 2.87821 19.1488 2.17535 18.6056 1.63714C18.0668 1.09499 17.3634 0.746268 16.6052 0.645532C16.56 0.641841 16.5145 0.645286 16.4704 0.655868C16.3762 0.647747 16.2804 0.644055 16.1839 0.644055C15.5619 0.644301 14.9515 0.812714 14.4175 1.13149C13.8836 1.45019 13.4459 1.90735 13.151 2.45443C12.8522 1.91047 12.4136 1.45593 11.8804 1.13773C11.3471 0.819525 10.7385 0.649141 10.1174 0.644055C9.49638 0.649223 8.88795 0.819687 8.35482 1.13789C7.82169 1.45609 7.38323 1.91055 7.08446 2.45443C6.7857 1.91047 6.34707 1.45593 5.81386 1.13773C5.28057 0.819525 4.67198 0.649141 4.05083 0.644055C3.94115 0.644055 3.82991 0.649225 3.72532 0.659561H3.72901Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M16.6287 20.2308L16.5609 20.2257C16.5329 20.2257 16.5042 20.2197 16.4763 20.2161C16.3805 20.2227 16.2833 20.2264 16.1868 20.2264C15.4396 20.2253 14.7073 20.0178 14.0708 19.6269C13.732 19.4198 13.4242 19.1656 13.1568 18.8721C12.7719 19.2953 12.3034 19.6342 11.7807 19.8673C11.258 20.1004 10.6927 20.2226 10.1202 20.2264C9.37308 20.2253 8.64078 20.0178 8.00429 19.6269C7.66648 19.4201 7.35951 19.1668 7.0925 18.8743C6.8277 19.1674 6.52213 19.4208 6.18514 19.6269C5.54381 20.0189 4.80642 20.2264 4.05443 20.2264C3.96903 20.2264 3.8829 20.2264 3.79742 20.2184C3.72655 20.2271 3.65501 20.2286 3.58381 20.2227H3.56543H3.54706C3.09506 20.1622 2.65627 20.0272 2.24857 19.8233C1.85227 19.6245 1.49092 19.363 1.17846 19.0487C0.863781 18.7369 0.602098 18.3758 0.403661 17.9799C0.198827 17.5728 0.0633901 17.1345 0.00301425 16.683V16.6645V16.6462C-0.00215379 16.5751 -0.000675889 16.5037 0.00744531 16.4329C0.00227728 16.3476 6.17635e-05 16.2614 6.17635e-05 16.1769C-0.000266366 15.4259 0.207194 14.6894 0.599555 14.0487C0.805702 13.7115 1.05976 13.4061 1.35368 13.1417C1.06033 12.8754 0.80644 12.5688 0.599555 12.231C0.208424 11.5953 0.000882087 10.8639 6.17635e-05 10.1176C0.00375322 9.54603 0.126063 8.98131 0.359363 8.45926C0.592581 7.93729 0.931703 7.46921 1.35515 7.08473C1.06131 6.81763 0.806933 6.51034 0.599555 6.17179C0.208424 5.53604 0.000882087 4.80464 6.17635e-05 4.05839C6.17635e-05 3.95618 0.00375272 3.85314 0.0117919 3.75093C0.00883873 3.73034 0.006625 3.70975 0.00514842 3.68916L6.17635e-05 3.62148L0.00883941 3.55372C0.113923 2.79 0.432782 2.07148 0.92875 1.48085C1.58484 0.677015 2.52141 0.151349 3.54993 0.00959752L3.61769 0L3.68619 0.00516958C3.71424 0.00516958 3.74221 0.0110756 3.77019 0.0147671C3.86666 0.00812248 3.96387 0.00443107 4.0596 0.00443107C4.807 0.00574359 5.53954 0.213203 6.17628 0.604006C6.51491 0.811137 6.82245 1.06527 7.08955 1.3587C7.47444 0.935579 7.94301 0.596703 8.46572 0.363567C8.98835 0.130513 9.5538 0.00820456 10.1261 0.00443107C10.8735 0.00574359 11.6061 0.213203 12.2428 0.604006C12.5807 0.810809 12.8876 1.06412 13.1546 1.35649C13.4194 1.06355 13.725 0.810153 14.062 0.604006C14.7034 0.211891 15.4407 0.00434904 16.1927 0.00443107C16.2782 0.00443107 16.3643 0.00443036 16.449 0.0125516C16.5201 0.00369207 16.5919 0.00221417 16.6633 0.0081205H16.681H16.6994C17.1514 0.0685784 17.5902 0.203522 17.9979 0.407536C18.3945 0.606055 18.7562 0.867657 19.0687 1.18217C19.3837 1.49373 19.6455 1.85483 19.8435 2.25097C20.0478 2.65818 20.183 3.09648 20.2434 3.5479V3.56628V3.58465C20.2487 3.65577 20.247 3.72722 20.2383 3.79802C20.2434 3.88333 20.2464 3.96865 20.2464 4.05396C20.2465 4.80505 20.0388 5.54153 19.6462 6.18212C19.4403 6.51928 19.1864 6.82477 18.8927 7.08907C19.186 7.35527 19.4397 7.66199 19.6462 7.9998C20.0375 8.63546 20.2453 9.36695 20.2464 10.1132C20.2427 10.685 20.1203 11.2497 19.8869 11.7717C19.6535 12.2938 19.3143 12.7618 18.8905 13.1462C19.1844 13.4129 19.4388 13.72 19.6462 14.0583C20.0374 14.6943 20.2451 15.4259 20.2464 16.1724C20.2464 16.2747 20.2427 16.3777 20.2346 16.4792C20.2346 16.4998 20.2397 16.5212 20.2412 16.5417L20.2464 16.6094L20.2368 16.6771C20.1321 17.4407 19.8135 18.1593 19.3177 18.7501C18.6614 19.554 17.7245 20.0797 16.6957 20.2212L16.6287 20.2308ZM14.1924 16.4233C14.2538 16.8967 14.4867 17.3311 14.8472 17.6445C15.2076 17.958 15.6706 18.1285 16.1485 18.124C16.2008 18.124 16.2524 18.1241 16.3039 18.1182C16.3385 18.1093 16.3731 18.1019 16.4085 18.0961H16.4276C16.7779 18.047 17.1086 17.905 17.3851 17.6849C17.7777 17.368 18.035 16.9138 18.1047 16.4144V16.3961C18.1119 16.3524 18.1215 16.3092 18.1334 16.2666C18.1334 16.2247 18.1378 16.182 18.1378 16.1401C18.1421 15.6626 17.9712 15.2001 17.6574 14.84C17.3434 14.4799 16.9083 14.2471 16.4343 14.1855C16.1782 14.1589 15.9412 14.038 15.7693 13.8464C15.5975 13.6549 15.5033 13.4063 15.5048 13.1491V13.0535C15.5028 12.8016 15.5931 12.5578 15.7588 12.3681C15.9245 12.1784 16.154 12.0558 16.4041 12.0236H16.4225H16.4416C16.9114 11.9624 17.3426 11.732 17.6545 11.3758C17.9664 11.0197 18.1374 10.5621 18.1356 10.0889C18.14 9.61149 17.969 9.14899 17.6551 8.78887C17.3412 8.42875 16.9061 8.19594 16.432 8.13441C16.1759 8.10775 15.9389 7.98684 15.7672 7.79529C15.5953 7.60374 15.5011 7.35519 15.5026 7.09793V7.02443C15.5006 6.77259 15.5909 6.52879 15.7566 6.33905C15.9223 6.14923 16.1518 6.02675 16.4019 5.99451H16.4202H16.4394C16.9071 5.92856 17.3355 5.6969 17.6465 5.3417C17.9574 4.98658 18.1303 4.53163 18.1334 4.05986C18.1345 3.54618 17.9345 3.05251 17.5758 2.68426C17.2073 2.32595 16.7129 2.12611 16.1986 2.12743C15.7248 2.12562 15.2667 2.29641 14.9101 2.60789C14.5535 2.91937 14.3229 3.35012 14.2616 3.81934V3.83846V3.85683C14.2294 4.10654 14.1067 4.33582 13.9167 4.50136C13.7267 4.66682 13.4826 4.75714 13.2305 4.75501H13.1568C12.8992 4.75665 12.6503 4.66247 12.4584 4.49086C12.2664 4.31933 12.1453 4.08259 12.1184 3.82665C12.0569 3.35316 11.8237 2.91863 11.4632 2.6051C11.1026 2.29158 10.6396 2.12087 10.1615 2.12521C9.68775 2.12341 9.22969 2.2942 8.87301 2.60576C8.51642 2.91724 8.28582 3.34791 8.22454 3.81713V3.83625V3.85462C8.19231 4.10433 8.06958 4.33361 7.8796 4.49915C7.68961 4.66461 7.44548 4.75484 7.1934 4.75279H7.09841C6.84082 4.75443 6.59185 4.66026 6.39998 4.48865C6.20802 4.31712 6.08678 4.08037 6.05996 3.82451C5.99835 3.35094 5.7653 2.91642 5.40476 2.60289C5.04415 2.28944 4.58108 2.11865 4.10307 2.123C4.05148 2.123 3.99922 2.123 3.94762 2.12964C3.91374 2.1385 3.87847 2.1458 3.84311 2.15171H3.82392C3.47364 2.20052 3.14288 2.34252 2.86652 2.56294C2.47342 2.87942 2.21608 3.3338 2.14693 3.83329V3.85167C2.13971 3.89531 2.13011 3.93854 2.11822 3.98119C2.11822 4.02311 2.11453 4.06577 2.11453 4.10769C2.11018 4.58504 2.28097 5.04745 2.59475 5.40757C2.90844 5.7677 3.34337 6.00059 3.81727 6.06219C4.07338 6.08885 4.31045 6.20977 4.48223 6.40132C4.65409 6.59294 4.74834 6.8415 4.74678 7.09867V7.19432C4.74883 7.446 4.6586 7.68972 4.49306 7.87946C4.32751 8.0692 4.09815 8.19184 3.84828 8.22416H3.82909H3.80997C3.34009 8.28527 2.90877 8.51553 2.59688 8.87172C2.28499 9.22799 2.11404 9.68564 2.116 10.1588C2.11149 10.6362 2.28228 11.0985 2.59606 11.4585C2.90983 11.8186 3.34485 12.0513 3.81875 12.1126C4.07494 12.1396 4.31185 12.2607 4.48362 12.4524C4.65532 12.6441 4.74965 12.8926 4.74826 13.1498V13.2234C4.75031 13.475 4.66007 13.7188 4.49453 13.9085C4.32899 14.0982 4.09963 14.2209 3.84968 14.2532H3.83056H3.81145C3.3437 14.3192 2.91533 14.5509 2.60434 14.906C2.29336 15.2612 2.1206 15.7161 2.11748 16.1879C2.11617 16.7014 2.31633 17.1949 2.67497 17.5627C3.04338 17.9214 3.53787 18.1213 4.05221 18.1196C4.52456 18.1164 4.97992 17.9437 5.33553 17.6331C5.69106 17.3226 5.92305 16.8948 5.98925 16.4277V16.4086L5.99293 16.3894C6.02534 16.1399 6.14806 15.9108 6.33804 15.7454C6.52803 15.5801 6.77208 15.4899 7.024 15.492H7.09767C7.35525 15.4904 7.60421 15.5846 7.79617 15.7562C7.98804 15.9277 8.10929 16.1645 8.13611 16.4203C8.19772 16.8937 8.43086 17.3283 8.79139 17.6416C9.152 17.9551 9.61507 18.1256 10.093 18.1211C10.5668 18.1231 11.025 17.9523 11.3816 17.6407C11.7383 17.3293 11.9688 16.8984 12.03 16.4292V16.4101L12.0337 16.3917C12.0659 16.1419 12.1886 15.9126 12.3786 15.7472C12.5686 15.5816 12.8127 15.4914 13.0648 15.4935H13.1605C13.4172 15.4936 13.6647 15.5887 13.8553 15.7604C14.0459 15.9322 14.166 16.1683 14.1924 16.4233Z"
                                               fill="currentcolor" />
                                            <path
                                               d="M10.1292 12.6232C9.66403 12.6245 9.20317 12.5337 8.77332 12.3559C8.34348 12.1781 7.95325 11.9169 7.6252 11.5875C7.29535 11.2598 7.03383 10.87 6.8559 10.4407C6.67789 10.0114 6.58692 9.55104 6.58815 9.08641C6.58815 8.87813 6.67092 8.67846 6.81833 8.53113C6.96566 8.3838 7.16557 8.30095 7.37402 8.30078C7.58254 8.30095 7.78237 8.3838 7.92978 8.53113C8.07711 8.67846 8.15989 8.87813 8.15989 9.08641C8.16063 9.60781 8.36841 10.1075 8.73756 10.4762C9.10678 10.8448 9.60727 11.0521 10.1292 11.0527C10.6513 11.0521 11.1518 10.8448 11.5209 10.4762C11.8901 10.1075 12.0978 9.60781 12.0987 9.08641C12.0986 8.98329 12.1189 8.88116 12.1582 8.78584C12.1977 8.69052 12.2556 8.60389 12.3285 8.53088C12.4015 8.45796 12.4882 8.40004 12.5836 8.36059C12.679 8.32113 12.7813 8.30078 12.8845 8.30078C13.093 8.30095 13.2929 8.3838 13.4402 8.53113C13.5876 8.67846 13.6703 8.87813 13.6703 9.08641C13.6716 9.55104 13.5806 10.0113 13.4026 10.4407C13.2246 10.87 12.9631 11.2598 12.6334 11.5875C12.3052 11.9169 11.915 12.178 11.4852 12.3559C11.0553 12.5337 10.5945 12.6245 10.1292 12.6232Z"
                                               fill="currentcolor" />
                                         </svg>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__img-wrap tp-title-anim">
                                      <div className="tp-testimonial__img-item">
                                         <svg width="125" height="24" viewBox="0 0 125 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                               d="M8.23179 20.2734C12.2642 20.2734 15.7405 18.2155 15.7405 14.6003C15.7405 6.59099 4.50521 10.4287 4.50521 4.44963C4.50521 2.8645 5.5342 1.58523 7.64787 1.58523C11.708 1.58523 10.6791 6.53541 13.6825 6.53541C14.8783 6.53541 15.4624 5.86794 15.4624 4.81116C15.4902 2.50298 12.4033 0 7.73113 0C3.14257 0 0.361622 2.44731 0.361622 5.78448C0.389409 14.0162 11.6245 9.95605 11.6245 15.8795C11.6245 17.5759 10.3454 18.6883 8.39861 18.6883C3.6988 18.6883 4.44963 13.6269 1.66868 13.5713C0.528441 13.5713 0 14.2943 0 15.2677C0 17.4925 2.94786 20.2734 8.23179 20.2734ZM29.7599 17.1587V6.9803C29.7599 6.50763 29.4262 6.39638 28.7032 6.47974L25.1435 7.00808C24.8097 7.06376 24.5872 7.31403 24.5872 7.5922V7.67556C24.5872 8.28746 25.6997 8.56543 25.6997 9.78913V15.4345C25.6997 17.409 24.6429 18.6883 23.3081 18.6883C21.7785 18.6883 20.9998 17.4925 20.9998 14.9061L21.0833 6.9803C21.0833 6.50763 20.6662 6.39638 19.9431 6.47974L16.439 7.00808C16.0775 7.06376 15.855 7.31403 15.855 7.5922V7.67556C15.855 8.28746 16.9396 8.56543 16.9396 9.78913V14.489C16.9396 18.299 19.2477 20.2734 22.1123 20.2734C24.0311 20.2734 25.3939 19.5783 26.1447 18.3547C26.228 19.7173 27.0347 20.1623 28.6198 20.1623C30.1771 20.1623 31.0948 19.9954 31.0948 19.3558C31.0948 18.3268 29.7599 19.3558 29.7599 17.1587ZM43.3857 6.64666C40.5491 6.64666 39.6313 6.36849 37.8515 6.36849C33.9581 6.36849 31.2605 8.73234 31.2605 12.2086C31.2605 15.3789 34.0416 17.715 37.768 17.715C38.1296 17.715 38.4912 17.6872 38.8527 17.6593C39.9373 17.8818 40.5769 18.8273 40.5769 20.2178C40.5769 21.7753 39.4923 22.832 37.768 22.832C34.5143 22.7764 35.1261 18.6048 32.8457 18.6048C31.7055 18.6048 31.2049 19.3836 31.2049 20.1623C31.2049 22.3314 33.5966 24 37.6846 24C41.6337 24 44.6649 22.4704 44.6649 20.1066C44.6649 18.6326 43.8029 17.4925 41.3277 16.9362C43.2467 16.0186 44.4424 14.2943 44.4424 12.0973C44.4424 10.7625 43.775 9.45539 42.8851 8.53764C43.7472 8.28746 44.804 8.39861 44.9986 7.48085C45.1655 6.9803 44.8874 6.64666 43.3857 6.64666ZM35.1818 10.3731C35.1818 8.67667 35.9604 7.5922 37.2397 7.5922C39.1864 7.5922 40.4935 11.0127 40.4935 13.6825C40.4935 15.3232 39.7148 16.4636 38.3799 16.4636C36.6279 16.4636 35.1818 13.321 35.1818 10.3731ZM58.0102 17.2143L57.3984 12.0695C57.009 8.56543 54.5617 6.36849 50.9465 6.36849C48.0542 6.36849 45.607 7.53652 45.607 9.53885C45.607 10.4844 46.2744 11.0962 47.2756 11.0962C49.3613 11.0962 48.7217 7.53653 50.9465 7.53653C52.6429 7.53653 53.0879 9.09387 53.4216 12.3476L53.4494 12.6813C52.7263 12.1808 51.6973 11.847 50.4181 11.847C47.6927 11.847 45.3567 13.2932 45.3845 16.0742C45.3845 18.8551 47.6093 20.2734 50.6128 20.2734C52.5317 20.2734 53.6997 19.5783 54.3116 18.6604C54.4783 19.8563 55.2014 20.1623 56.7866 20.1623C58.1214 20.1623 59.4563 19.9954 59.4563 19.3558C59.4563 18.6048 58.2326 19.1333 58.0102 17.2143ZM51.8364 19.0498C50.4181 19.0498 49.5003 17.3534 49.5003 15.4345C49.5003 14.0162 50.3625 13.0985 51.5305 13.0985C52.6708 13.0985 53.5606 13.9328 53.7274 15.5736L53.8109 16.5469C53.8944 17.7984 53.1156 19.0498 51.8364 19.0498ZM67.7195 6.36849C65.8563 6.36849 64.5493 7.34182 63.9374 9.12165V7.03587C63.9374 6.50763 63.6871 6.17389 63.0475 6.47974L59.7103 8.03708C59.3488 8.204 59.1263 8.42639 59.1263 8.70455V8.8158C59.1263 9.51106 60.4055 9.59452 60.4055 10.8181V17.3256C60.4055 18.4937 59.321 18.7161 59.321 19.4113V19.5226C59.321 19.8285 59.5713 19.9954 59.9605 19.9954H65.1054C65.4669 19.9954 65.7172 19.8285 65.7172 19.5226V19.4113C65.7172 18.7161 64.3268 18.4937 64.3268 17.3256V11.7637C64.3268 10.234 64.7161 8.70455 65.8007 8.70455C67.3024 8.70455 66.3291 11.0962 68.4982 11.0962C69.8331 11.0962 70.278 10.0673 70.278 8.89916C70.278 7.48085 69.3603 6.36849 67.7195 6.36849ZM76.7538 20.2734C80.37 20.2734 82.2613 18.0209 82.4277 15.7404C82.4824 15.1287 81.7878 15.0175 81.4541 15.4624C80.871 16.4636 79.8133 17.409 78.1168 17.409C75.2803 17.409 73.3891 14.9896 73.3891 11.2909C73.3891 9.2329 74.391 7.5922 75.975 7.5922C78.3956 7.56431 78.2283 11.5134 80.6205 11.6524C81.8993 11.7081 82.3445 10.9849 82.3445 10.2619C82.3445 8.09275 79.7859 6.34071 76.5865 6.36849C72.8333 6.39638 69.5793 9.01041 69.5793 13.2932C69.5793 17.0475 72.5545 20.2734 76.7538 20.2734ZM95.3828 17.2143L94.7713 12.0695C94.3819 8.56543 91.9349 6.36849 88.3197 6.36849C85.4275 6.36849 82.9795 7.53652 82.9795 9.53885C82.9795 10.4844 83.6468 11.0962 84.6487 11.0962C86.7337 11.0962 86.0947 7.53653 88.3197 7.53653C90.0162 7.53653 90.4604 9.09387 90.7941 12.3476L90.8224 12.6813C90.0994 12.1808 89.0701 11.847 87.7913 11.847C85.0654 11.847 82.73 13.2932 82.7574 16.0742C82.7574 18.8551 84.9823 20.2734 87.986 20.2734C89.9037 20.2734 91.0719 19.5783 91.6844 18.6604C91.8507 19.8563 92.5748 20.1623 94.1588 20.1623C95.4944 20.1623 96.8289 19.9954 96.8289 19.3558C96.8289 18.6048 95.6059 19.1333 95.3828 17.2143ZM89.209 19.0498C87.7913 19.0498 86.8736 17.3534 86.8736 15.4345C86.8736 14.0162 87.7355 13.0985 88.9038 13.0985C90.0436 13.0985 90.933 13.9328 91.1003 15.5736L91.1835 16.5469C91.2666 17.7984 90.4878 19.0498 89.209 19.0498ZM111.043 17.2978L110.71 12.292C110.376 7.87026 107.929 6.36849 105.398 6.36849C103.508 6.36849 102.033 7.20279 101.283 8.6211V7.06376C101.283 6.53541 100.977 6.146 100.337 6.47974L97.0275 8.09276C96.6939 8.25957 96.4718 8.3986 96.4718 8.67667V8.78792C96.4718 9.48328 97.8338 9.59452 97.8338 10.8459V17.3256C97.8338 18.5215 96.6381 18.7439 96.6381 19.4391V19.5504C96.6381 19.8285 96.8886 20.0232 97.277 20.0232H102.451C102.839 20.0232 103.09 19.8285 103.09 19.5504V19.4391C103.09 18.7439 101.894 18.5215 101.894 17.3256V11.0127C101.894 9.20511 102.756 7.95372 104.258 7.95372C105.732 7.95372 106.54 9.17733 106.678 12.153L106.956 17.2978C107.011 18.5215 105.955 18.7439 105.955 19.4391V19.5504C105.955 19.8285 106.205 20.0232 106.594 20.0232H111.405C111.795 20.0232 112.045 19.8285 112.045 19.5504V19.4391C112.045 18.7439 111.127 18.5215 111.043 17.2978ZM123.518 15.7682C122.99 16.6304 121.822 17.3812 120.348 17.3812C118.679 17.3812 117.4 16.4914 116.677 14.9618L122.851 12.153C123.602 11.8192 124.074 11.2631 124.074 10.3175C124.074 8.48207 122.462 6.36849 118.819 6.36849C115.175 6.36849 112.088 9.17733 112.088 13.2098C112.088 17.4925 114.953 20.2734 118.819 20.2734C122.406 20.2734 124.297 17.6872 124.464 16.0742C124.492 15.4901 123.852 15.3511 123.518 15.7682ZM118.318 7.5922C119.82 7.5922 120.543 9.56664 120.543 10.5677C120.543 11.1519 120.321 11.6246 119.82 11.8748L116.232 13.6825C116.038 12.9595 115.954 12.153 115.954 11.2909C115.954 9.17733 116.844 7.5922 118.318 7.5922Z"
                                               fill="currentcolor" />
                                         </svg>
                                      </div>
                                   </div>
                                   <div className="tp-testimonial__img-wrap tp-title-anim">
                                      <div className="tp-testimonial__img-item">
                                         <svg width="76" height="20" viewBox="0 0 76 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                               d="M10.3234 18.7013C9.19309 18.8868 8.06279 18.961 6.85714 19.1095L3.24019 8.64564V19.5547C2.10989 19.666 1.09262 19.8145 0 20V0H3.01413L7.12088 11.3544V0H10.3234V18.7013ZM16.5777 7.34694C17.821 7.34694 19.7049 7.27273 20.8352 7.27273V10.3896C19.4411 10.3896 17.7834 10.3896 16.5777 10.4638V15.102C18.4239 14.9907 20.3077 14.8423 22.1915 14.7681V17.7737L13.4129 18.4416V0H22.1915V3.11688H16.5777C16.5777 3.15399 16.5777 7.34694 16.5777 7.34694ZM33.9466 3.15399H30.6688V17.5139C29.6138 17.5139 28.5212 17.5139 27.5039 17.551V3.15399H24.2261V0H33.9843C33.9466 0 33.9466 3.15399 33.9466 3.15399ZM39.1083 7.1243H43.4411V10.2412H39.1083V17.3284H35.9812V0H44.8352V3.11688H39.1083C39.1083 3.15399 39.1083 7.1243 39.1083 7.1243ZM49.9969 14.5826C51.8053 14.6197 53.6138 14.7681 55.3846 14.8423V17.9221C52.5589 17.7365 49.7331 17.5881 46.832 17.5139V0H49.9969V14.5826ZM58.0597 18.1447C59.0769 18.2189 60.1319 18.256 61.1868 18.3673V0H58.0597V18.1447ZM75.0518 0L71.0204 9.49907L75.0518 19.9629C73.8462 19.8145 72.6782 19.5918 71.4725 19.4063L69.2119 13.6178L66.876 18.9239C65.7457 18.7384 64.6154 18.6642 63.4851 18.5158L67.5542 9.38776L63.8619 0H67.2528L69.325 5.23191L71.5479 0H75.0518Z"
                                               fill="currentcolor" />
                                         </svg>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="tp-rank__area pb-200">
                    <div className="container">
                       <div className="row">
                          <div className="col-xl-5 col-lg-5 order-1 order-lg-1">
                             <div className="tp-rank__section-box pb-25 wow tpfadeUp" data-wow-duration=".9s"
                                data-wow-delay=".3s">
                                <h4 className="tp-section-subtitle">Key Benefits</h4>
                                <h3 className="tp-section-title">Get more Sales <br/> by Improving <br/> Results
                                </h3>
                             </div>
                             <div className="tp-rank__btn wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <a className="tp-btn tp-btn-hover alt-color-black" href="service-details.html">
                                   <span>Explore More</span>
                                   <b></b>
                                </a>
                             </div>
                          </div>
                          <div className="col-xl-7 col-lg-7 order-0 order-lg-2">
                             <div className="tp-rank__wrapper p-relative">
                                <div className="tp-rank__circle-shape-1 d-none d-sm-block wow tpfadeUp" data-wow-duration=".9s"
                                   data-wow-delay=".3s">
                                   <img src="assets/img/rank/sky-circle.png" alt=""/>
                                </div>
                                <div className="tp-rank__circle-shape-2 d-none d-sm-block wow tpfadeLeft" data-wow-duration=".9s"
                                   data-wow-delay=".5s">
                                   <img src="assets/img/rank/yellow-circle.png" alt=""/>
                                </div>
                                <div className="tp-rank__circle-shape-3 d-none d-sm-block wow tpfadeRight"
                                   data-wow-duration=".9s" data-wow-delay=".4s">
                                   <img src="assets/img/rank/black-circle.png" alt=""/>
                                </div>
                                <div className="tp-rank__circle-shape-4 d-none d-sm-block wow tpfadeIn" data-wow-duration=".9s"
                                   data-wow-delay=".7s">
                                   <img src="assets/img/rank/black-sm-circle.png" alt=""/>
                                </div>
                                <div className="tp-rank__circle-shape-5 d-none d-sm-block wow tpfadeUp" data-wow-duration=".9s"
                                   data-wow-delay=".9s">
                                   <img src="assets/img/rank/black-sm-circle.png" alt=""/>
                                </div>
                                <div className="tp-rank__circle-shape-6 d-none d-sm-block wow tpfadeUp" data-wow-duration=".9s"
                                   data-wow-delay=".2s">
                                   <img src="assets/img/rank/black-sm-circle.png" alt=""/>
                                </div>
                                <div className="tp-rank__circle-shape-7 d-none d-sm-block wow tpfadeIn" data-wow-duration=".9s"
                                   data-wow-delay="1s">
                                   <img src="assets/img/rank/black-sm-circle.png" alt=""/>
                                </div>
                                <div className="tp-rank__bg-shape">
                                   <img className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay="1.2s"
                                      src="assets/img/rank/rank-bg-shape.png" alt=""/>
                                </div>
                                <div className="tp-rank__rank-card wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                                   <div className="tp-rank__item active p-relative z-index">
                                      <div className="tp-rank__cup">
                                         <span><img src="assets/img/rank/rank-cup.png" alt=""/></span>
                                      </div>
                                      <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                         <i>#</i>
                                         <span>1</span>
                                      </div>
                                      <div className="tp-rank__company">
                                         <span><img src="assets/img/rank/amazon.png" alt=""/></span>
                                      </div>
                                      <div className="tp-rank__company-info">
                                         <a href="#">amazon.com</a>
                                         <span>2.4B Visits</span>
                                      </div>
                                   </div>
                                   <div className="tp-rank__item p-relative">
                                      <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                         <i>#</i>
                                         <span>2</span>
                                      </div>
                                      <div className="tp-rank__company">
                                         <span><img src="assets/img/rank/ebay.png" alt=""/></span>
                                      </div>
                                      <div className="tp-rank__company-info">
                                         <a href="#">ebay.com</a>
                                         <span>700.2M Visits</span>
                                      </div>
                                   </div>
                                   <div className="tp-rank__item p-relative z-index">
                                      <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                         <i>#</i>
                                         <span>3</span>
                                      </div>
                                      <div className="tp-rank__company">
                                         <span><img src="assets/img/rank/walmart.png" alt=""/></span>
                                      </div>
                                      <div className="tp-rank__company-info">
                                         <a href="#">walmart.com</a>
                                         <span>489.6M Visits</span>
                                      </div>
                                   </div>
                                   <div className="tp-rank__item p-relative">
                                      <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                         <i>#</i>
                                         <span>4</span>
                                      </div>
                                      <div className="tp-rank__company">
                                         <span><img src="assets/img/rank/shopify.png" alt=""/></span>
                                      </div>
                                      <div className="tp-rank__company-info">
                                         <a href="#">shopify.com</a>
                                         <span>386.6M Visits</span>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                
                 <div className="tp-price__area tp-price__pl-pr p-relative pt-110 pb-80">
                    <div className="container">
                       <div className="row justify-content-center">
                          <div className="col-xl-7 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                             <div className="tp-price__section-box text-center mb-35">
                                <h2 className="tp-section-title">Deliver End-To-End Retail
                                   Billing & Solutions</h2>
                                <p>Choose a plan tailored to your needs</p>
                             </div>
                          </div>
                       </div>
                       <div className="row wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                          <div className="col-12">
                             <div className="tp-price__btn-box p-relative mb-50 d-flex justify-content-center">
                                <div className="tp-price-offer-badge-wrap d-none d-sm-block">
                                   <div className="price-shape-line">
                                      <svg width="80" height="42" viewBox="0 0 80 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path
                                            d="M78.5938 8.78059C59.0829 45.2801 2.05127 -8.72021 27.0652 32.28C52.079 73.2801 48.5771 -41.2195 0.550438 18.7821"
                                            stroke="#FF3C82" stroke-dasharray="3 3" />
                                      </svg>
                                   </div>
                                   <div className="price-offer-badge">
                                      <span>SAVE <br/>
                                         35%</span>
                                   </div>
                                </div>
                                <nav>
                                   <div className="nav nav-tab tp-price__btn-bg" id="nav-tab" role="tablist">
                                      <button className="nav-link active monthly" id="nav-home-tab" data-bs-toggle="tab"
                                         data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                         aria-selected="true">Monthly</button>
                                      <button className="nav-link yearly" id="nav-profile-tab" data-bs-toggle="tab"
                                         data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                         aria-selected="false">Yearly</button>
                                      <span className="test"></span>
                                   </div>
                                </nav>
                             </div>
                          </div>
                       </div>
                       <div className="price-tab-content">
                          <div className="tab-content" id="nav-tabContent">
                             <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                aria-labelledby="nav-home-tab" tabindex="0">
                                <div className="row">
                                   <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                      <div className="tp-price__item p-relative">
                                         <div className="tp-price__icon">
                                            <img src="assets/img/price/price-icon-1.png" alt=""/>
                                         </div>
                                         <div className="tp-price__title-box">
                                            <h4 className="tp-price__title-sm">Personal Plan</h4>
                                            <p>Customized anything in anytime</p>
                                         </div>
                                         <div className="tp-price__feature">
                                            <ul>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Easy To Track AI Data
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  100+ Ready Boots
                                               </li>
                                               <li className="inactive">
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Best Data Plan & Package
                                               </li>
                                               <li className="inactive">
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  24/7 Online Support
                                               </li>
                                            </ul>
                                         </div>
                                         <div className="tp-price__btn tp-btn-price">
                                            <span>Price: 146.00</span>
                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                      <div className="tp-price__item active p-relative">
                                         <div className="tp-price__icon">
                                            <img src="assets/img/price/price-icon-2.png" alt=""/>
                                         </div>
                                         <div className="tp-price__title-box">
                                            <h4 className="tp-price__title-sm">Advanced</h4>
                                            <p>Customized anything in anytime</p>
                                         </div>
                                         <div className="tp-price__feature">
                                            <ul>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Easy To Track AI Data
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  100+ Ready Boots
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span> Best Data Plan & Package
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  24/7 Online Support
                                               </li>
                                            </ul>
                                         </div>
                                         <div className="tp-price__btn tp-btn-price">
                                            <span>Price: 159.00</span>
                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                      <div className="tp-price__item p-relative">
                                         <div className="tp-price__icon">
                                            <img src="assets/img/price/price-icon-3.png" alt=""/>
                                         </div>
                                         <div className="tp-price__title-box">
                                            <h4 className="tp-price__title-sm">For Team</h4>
                                            <p>Customized anything in anytime</p>
                                         </div>
                                         <div className="tp-price__feature">
                                            <ul>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Easy To Track AI Data
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  100+ Ready Boots
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Best Data Plan & Package
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  24/7 Online Support
                                               </li>
                                            </ul>
                                         </div>
                                         <div className="tp-price__btn tp-btn-price">
                                            <span>Price: 289.00</span>
                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                                tabindex="0">
                                <div className="row">
                                   <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                      <div className="tp-price__item p-relative">
                                         <div className="tp-price__icon">
                                            <img src="assets/img/price/price-icon-1.png" alt=""/>
                                         </div>
                                         <div className="tp-price__title-box">
                                            <h4 className="tp-price__title-sm">Personal Plan</h4>
                                            <p>Customized anything in anytime</p>
                                         </div>
                                         <div className="tp-price__feature">
                                            <ul>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Easy To Track AI Data
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  100+ Ready Boots
                                               </li>
                                               <li className="inactive">
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Best Data Plan & Package
                                               </li>
                                               <li className="inactive">
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  24/7 Online Support
                                               </li>
                                            </ul>
                                         </div>
                                         <div className="tp-price__btn tp-btn-price">
                                            <span>Price: 99.00</span>
                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                      <div className="tp-price__item active p-relative">
                                         <div className="tp-price__icon">
                                            <img src="assets/img/price/price-icon-2.png" alt=""/>
                                         </div>
                                         <div className="tp-price__title-box">
                                            <h4 className="tp-price__title-sm">Advanced</h4>
                                            <p>Customized anything in anytime</p>
                                         </div>
                                         <div className="tp-price__feature">
                                            <ul>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Easy To Track AI Data
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  100+ Ready Boots
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span> Best Data Plan & Package
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  24/7 Online Support
                                               </li>
                                            </ul>
                                         </div>
                                         <div className="tp-price__btn tp-btn-price">
                                            <span>Price: 199.00</span>
                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                      <div className="tp-price__item p-relative">
                                         <div className="tp-price__icon">
                                            <img src="assets/img/price/price-icon-3.png" alt=""/>
                                         </div>
                                         <div className="tp-price__title-box">
                                            <h4 className="tp-price__title-sm">For Team</h4>
                                            <p>Customized anything in anytime</p>
                                         </div>
                                         <div className="tp-price__feature">
                                            <ul>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Easy To Track AI Data
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  100+ Ready Boots
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  Best Data Plan & Package
                                               </li>
                                               <li>
                                                  <span>
                                                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path className="price-path-1"
                                                           d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-2"
                                                           d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                           fill="currentcolor" />
                                                        <path className="price-path-3"
                                                           d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                           fill="currentcolor" />
                                                     </svg>
                                                  </span>
                                                  24/7 Online Support
                                               </li>
                                            </ul>
                                         </div>
                                         <div className="tp-price__btn tp-btn-price">
                                            <span>Price: 299.00</span>
                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
     
              </main>
     
              <footer className="pb-50">
                 <div className="tp-footer__pl-pr p-relative">
                    <div className="footer-black-bg tp-gsap-bg"></div>
                    <div className="tp-footer__area pt-50">
                       <div className="container">
                          <div className="tp-footer__border-bottom">
                             <div className="row align-items-center">
                                <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                   <div className="tp-footer__top-text">
                                      <span>Get Our Latest's News <br/>
                                         & Updates</span>
                                   </div>
                                </div>
                                <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                   <div className="tp-footer__input p-relative">
                                      <form action="#">
                                         <input type="text" placeholder="Business email adress"/>
                                         <span>
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                               <path
                                                  d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                                                  stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                               <path opacity="0.4"
                                                  d="M13 5.39993L10.496 7.39993C9.672 8.05593 8.32 8.05593 7.496 7.39993L5 5.39993"
                                                  stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                         </span>
                                         <button>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                               <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                               <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor"
                                                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                         </button>
                                      </form>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="tp-footer__top-space">
                             <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-7 pb-30 wow tpfadeUp" data-wow-duration=".9s"
                                   data-wow-delay=".5s">
                                   <div className="tp-footer__widget footer-col-1">
                                      <a href="index.html" className="tp-footer__widget-logo mb-10">
                                         <img src="assets/img/logo/logo-white.png" alt=""/>
                                      </a>
                                      <div className="tp-footer__text">
                                         <p>Our highly skilled development teams <br/>
                                            specialized in data analysis.</p>
                                      </div>
                                      <div className="tp-footer__social">
                                         <a href="#"><i className="fab fa-facebook-f"></i></a>
                                         <a href="#"><i className="fab fa-twitter"></i></a>
                                         <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                         <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                      </div>
                                   </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 pb-30 wow tpfadeUp" data-wow-duration=".9s"
                                   data-wow-delay=".7s">
                                   <div className="tp-footer__widget footer-col-2">
                                      <h4 className="tp-footer__widget-title">What We Do</h4>
                                      <div className="tp-footer__content">
                                         <ul>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Online Marketing</a></li>
                                            <li><a href="#">Advertising Strategy</a></li>
                                            <li><a href="#">Strategy</a></li>
                                            <li><a href="#">Development</a></li>
                                         </ul>
                                      </div>
                                   </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s"
                                   data-wow-delay=".9s">
                                   <div className="tp-footer__widget footer-col-3">
                                      <h4 className="tp-footer__widget-title">Other Pages</h4>
                                      <div className="tp-footer__content">
                                         <ul>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">How It Works</a></li>
                                            <li><a href="#">Pricing Plan</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Contact</a></li>
                                         </ul>
                                      </div>
                                   </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s"
                                   data-wow-delay="1s">
                                   <div className="tp-footer__widget footer-col-4">
                                      <h4 className="tp-footer__widget-title">Contact Us</h4>
                                      <div className="tp-footer__contact-info tp-footer__icon-space">
                                         <ul>
                                            <li>
                                               <span>
                                                  <svg width="22" height="22" viewBox="0 0 26 26" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                     <path
                                                        d="M14.332 1C14.332 1 17.2651 1.26664 20.9981 4.99966C24.7311 8.73267 24.9978 11.6658 24.9978 11.6658"
                                                        stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                                                     <path
                                                        d="M14.6079 5.71289C14.6079 5.71289 15.9277 6.08998 17.9075 8.06971C19.8872 10.0494 20.2643 11.3693 20.2643 11.3693"
                                                        stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                                                     <path opacity="0.5"
                                                        d="M9.04943 5.42369L9.91471 6.97413C10.6956 8.37332 10.3821 10.2088 9.15225 11.4387C9.15225 11.4387 9.15225 11.4387 9.15225 11.4387C9.15213 11.4388 7.66057 12.9306 10.3652 15.6352C13.0692 18.3392 14.561 16.849 14.5618 16.8482C14.5618 16.8482 14.5618 16.8482 14.5618 16.8482C15.7917 15.6183 17.6271 15.3049 19.0263 16.0857L20.5768 16.951C22.6896 18.1301 22.9391 21.0931 21.082 22.9502C19.9661 24.0661 18.599 24.9344 17.0878 24.9917C14.5439 25.0882 10.2236 24.4443 5.88985 20.1106C1.55612 15.7769 0.912294 11.4566 1.00873 8.91261C1.06602 7.40143 1.93432 6.03439 3.05023 4.91848C4.90734 3.06137 7.87031 3.31089 9.04943 5.42369Z"
                                                        stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                                                  </svg>
                                               </span>
                                               <a href="tel:+806(000)8899">+806 (000) 88 99</a>
                                            </li>
                                            <li>
                                               <span>
                                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                     <path
                                                        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 10.2797 1.30049 11.4893 1.83477 12.562C1.97675 12.847 2.02401 13.1729 1.94169 13.4805L1.46521 15.2613C1.25836 16.0344 1.96561 16.7416 2.73868 16.5348L4.51951 16.0583C4.82715 15.976 5.15297 16.0233 5.43802 16.1652C6.51069 16.6995 7.72025 17 9 17Z"
                                                        stroke="#FF3C82" stroke-width="1.5" />
                                                     <path opacity="0.5" d="M5.7998 7.80078H12.1998" stroke="#FF3C82"
                                                        stroke-width="1.5" stroke-linecap="round" />
                                                     <path opacity="0.5" d="M5.7998 10.6006H10.1998" stroke="#FF3C82"
                                                        stroke-width="1.5" stroke-linecap="round" />
                                                  </svg>
                                               </span>
                                               <a href="mailto:contact@info.com">contact@info.com</a>
                                            </li>
                                            <li>
                                               <span>
                                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                     <path opacity="0.5"
                                                        d="M3.7002 6.86317C3.7002 3.62503 6.5208 1 10.0002 1C13.4796 1 16.3002 3.62503 16.3002 6.86317C16.3002 10.0759 14.2895 13.8249 11.1523 15.1656C10.4209 15.4781 9.57947 15.4781 8.84814 15.1656C5.71094 13.8249 3.7002 10.0759 3.7002 6.86317Z"
                                                        stroke="#FF3C82" stroke-width="1.5" />
                                                     <path
                                                        d="M11.8002 7.3C11.8002 8.29411 10.9943 9.1 10.0002 9.1C9.00608 9.1 8.2002 8.29411 8.2002 7.3C8.2002 6.30589 9.00608 5.5 10.0002 5.5C10.9943 5.5 11.8002 6.30589 11.8002 7.3Z"
                                                        stroke="#FF3C82" stroke-width="1.5" />
                                                     <path
                                                        d="M18.0645 13.1504C18.6633 13.6926 19 14.3038 19 14.9504C19 17.1871 14.9706 19.0004 10 19.0004C5.02944 19.0004 1 17.1871 1 14.9504C1 14.3038 1.33671 13.6926 1.93552 13.1504"
                                                        stroke="#FF3C82" stroke-width="1.5" stroke-linecap="round" />
                                                  </svg>
                                               </span>
                                               <a href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                                                  target="_blank">1234 North Avenue Luke Lane, South Bend,</a>
                                            </li>
                                         </ul>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="tp-copyright__area pt-20 pb-20">
                       <div className="container">
                          <div className="row align-items-center">
                             <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                <div className="tp-copyright__text">
                                   <span>Full Copyright & Design By <a href="#">@Theme pure</a> – 2023</span>
                                </div>
                             </div>
                             <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                <div
                                   className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-start">
                                   <div className="tp-copyright__lang">
                                      <ul>
                                         <li>
                                            <a id="tp-copyright__lang-toggle" href="javascript:void(0)">
                                               <span>English (US)<i className="fal fa-angle-down"></i></span>
                                            </a>
                                            <ul className="tp-copyright__lang-submenu">
                                               <li>
                                                  <a href="#">Arabic</a>
                                               </li>
                                               <li>
                                                  <a href="#">Spanish</a>
                                               </li>
                                               <li>
                                                  <a href="#">Mandarin</a>
                                               </li>
                                            </ul>
                                         </li>
                                      </ul>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </footer>
     
           </div>
        </div>

     
     
     </body>
     
    )
}

export default Search2