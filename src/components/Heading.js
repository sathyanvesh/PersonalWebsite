import {header} from "./profile";
import image from "./images/profile.jpg";

const Style = {
    webkitTextStroke: "4px",
}

const Sty = {
    background: "black",
    minHeight: "100vh",
}

function Heading() {
    return (
        <div class="container-fluid  d-flex align-items-center mb-5 py-5" id="home" style={Sty}>
        <div class="container">
            <div class="row align-items-center">
               
                <div class="col-lg-7 text-center  text-lg-left">
                    <h3 class="text-white font-weight-normal mb-3">{header.title}</h3>
                    <h1 class="display-3 text-uppercase animation mb-2" style={Style}>{header.name}</h1>
                    <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
                  {/* <h3 class="text-white">{header.designation}</h3> */}
                  <p class="animate">{header.designation}</p>
                </div>
                <div class="col-lg-4 px-8 pl-lg-0 pb-5 pb-lg-4 about-img">
                    <img class="img-fluid w-100 rounded-circle shadow-sm" src={image} alt=""/>
                </div>
            </div>
        </div>
    </div>
    )}

export default Heading;