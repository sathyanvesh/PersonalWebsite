 import {section4title,education} from "./profile";


const Style={
    top: "2px",
    left: "-35px",  
    fontSize: "22px",
}

function Education() {
    return (
        <div class="container-fluid margin py-5" id="qualification">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="position-absolute text-uppercase bottom text-primary"><u>{section4title}</u></h1>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h3 class="mb-4">{education.heading1}</h3>
                    <div class="border-left border-primary pt-2 pl-4 ml-2">
                        <div class="position-relative ex-me mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute" style={Style}></i>
                            <h5 class="font-weight-bold mb-1">{education.qualification1}</h5>
                            <p class="mb-2"><strong>{education.university}</strong> | <small>{education.period1}</small></p>
                            <p>{education.description1}</p>
                        </div>
                        <div class="position-relative ex-me mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute" style={Style}></i>
                            <h5 class="font-weight-bold mb-1">{education.qualification2}</h5>
                            <p class="mb-2"><strong>{education.college}</strong> | <small>{education.period2}</small></p>
                            <p>{education.description2}</p>
                        </div>
                        <div class="position-relative ex-me mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute" style={Style}></i>
                            <h5 class="font-weight-bold mb-1">{education.qualification3}</h5>
                            <p class="mb-2"><strong>{education.school}</strong> | <small>{education.period3}</small></p>
                            <p>{education.description3}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="mb-4">{education.heading2}</h3>
                    <div class="border-left border-primary pt-2 pl-4 ml-2">
                        <div class="position-relative ex-me mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute" style={Style}></i>
                            <h5 class="font-weight-bold mb-1">{education.designation}</h5>
                            <p class="mb-2"><strong>{education.institute}</strong> | <small> Excellent</small></p>
                            <p>{education.description4}</p>
                        </div>
                        <div class="position-relative ex-me mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute" style={Style}></i>
                            <h5 class="font-weight-bold mb-1">{education.title}</h5>
                            <p class="mb-2"><strong>{education.company}</strong> | <small> Good</small></p>
                            <p>{education.description5}</p>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}

export default Education;