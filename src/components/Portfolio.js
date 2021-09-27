import {section5title,portfolio} from "./profile";
import image1 from  "./images/portfolio/portfolio-1.png";
import image2 from  "./images/portfolio/portfolio-2.png";
import image3 from  "./images/portfolio/portfolio-3.png";
import image4 from  "./images/portfolio/portfolio-4.png";
import image5 from  "./images/portfolio/portfolio-5.png";
import image6 from  "./images/portfolio/portfolio-6.png";
   


const Style={
    fontSize: "60px",
    }

function Portfolio() {
    return (
        <div class="container-fluid margin pt-5 pb-3" id="portfolio">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="position-absolute text-uppercase bottom text-primary"><u>{section5title}</u></h1>
            </div>
            <div class="row">
                <div class="col-12 text-center mb-2">
                    <ul class="list-inline mb-4" id="portfolio-flters">
                        <li class="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">{portfolio.button}</li>
                    </ul>
                </div>
            </div>
            <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src={image1} alt=""/>
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={image1} data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={Style}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src={image2} alt=""/>
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={image2} data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={Style}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src={image3} alt=""/>
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={image3} data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={Style}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src={image4} alt=""/>
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={image4} data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={Style}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src={image5} alt=""/>
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={image5} data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={Style}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div class="position-relative overflow-hidden mb-2">
                        <img class="img-fluid rounded w-100" src={image6} alt=""/>
                        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={image6} data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style={Style}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}

export default Portfolio;