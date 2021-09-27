 import {section6title,contact} from "./profile";


function Contact() {
    return (
        <div>
        <div class="container-fluid margin py-5" id="contact">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="position-absolute text-uppercase bottom text-primary"><u>{section6title}</u></h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="contact-form text-center">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <input type="text" class="form-control p-4" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group col-sm-6">
                                    <input type="email" class="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">{contact.button}
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="container-fluid bg-primary text-white mt-5 py-1 px-sm-1 px-md-5">
<div class="container text-center py-5">
    <div class="d-flex justify-content-center mb-4">
        <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
        <a class="btn btn-light btn-social mr-2" href={contact.facebook}><i class="fab fa-facebook-f"></i></a>
        <a class="btn btn-light btn-social mr-2" href={contact.linkedin}><i class="fab fa-linkedin-in"></i></a>
        <a class="btn btn-light btn-social" href={contact.instagram}><i class="fab fa-instagram"></i></a>
    </div>
    </div>
    </div>
    </div>
    )}

export default Contact;