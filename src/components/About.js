import {section2title,about, details} from "./profile";
import img from "./images/satyanvesh.jpg";
import Layout from "./Layout";

 function createCard(details) {
    return (
            <Layout
                title = {details.title} 
                value = {details.value}
            />
            )
        }



    function About() {
        return (
            <div class="container-fluid margin py-5" id="about">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="position-absolute bottom text-uppercase text-primary" ><u>{section2title}</u></h1>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-3 pb-4 pb-lg-0">
                        <img class="img-fluid rounded w-100" src={img} alt=""/>
                    </div>
                    <div class="col-lg-7">
                        <h3 class="mb-4">{about.designation}</h3>
                        <p>{about.objective}</p>
                        <div class="row mb-3">
                        {details.map(createCard)}
                        </div>
                        </div>
            </div>
        </div>
    </div>
        )}
    
    export default About;