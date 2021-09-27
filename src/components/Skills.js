 import {section3title,skills} from "./profile";


        function Skills() {
            return (
            <div class="container-fluid margin py-5" id="skill">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                {/* <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Skills</h1> */}
                <h1 class="position-absolute text-uppercase bottom text-primary"><u>{section3title}</u></h1>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">{skills.skill1}</h6>
                            <h6 class="font-weight-bold">{skills.percentage1}</h6>
                        </div>
                        <div class="progress bg-1">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">{skills.skill2}</h6>
                            <h6 class="font-weight-bold">{skills.percentage2}</h6>
                        </div>
                        <div class="progress bg-2">
                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">{skills.skill3}</h6>
                            <h6 class="font-weight-bold">{skills.percentage3}</h6>
                        </div>
                        <div class="progress bg-3">
                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">{skills.skill4}</h6>
                            <h6 class="font-weight-bold">{skills.percentage4}</h6>
                        </div>
                        <div class="progress bg-4">
                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">{skills.skill5}</h6>
                            <h6 class="font-weight-bold">{skills.percentage5}</h6>
                        </div>
                        <div class="progress bg-5">
                            <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">{skills.skill6}</h6>
                            <h6 class="font-weight-bold">{skills.percentage6}</h6>
                        </div>
                        <div class="progress bg-6">
                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                )}
export default Skills;