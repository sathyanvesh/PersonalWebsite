import {title} from "./profile";


const Design={
backgroundColor:"#457efa",
color: "#ffffff",
}

function Title() {
    return (
        <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" class="navbar-brand ml-lg-3">
            <h1 class="m-0 display-5"><span class="text-primary">{title.title1}</span>{title.title2}</h1>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div class="navbar-nav m-auto py-0">
                <a href="#home" class="nav-item nav-link active">{title.navItem1}</a>
                <a href="#about" class="nav-item nav-link">{title.navItem2}</a>
                <a href="#skill" class="nav-item nav-link">{title.navItem3}</a>
                <a href="#qualification" class="nav-item nav-link">{title.navItem4}</a>
                <a href="#portfolio" class="nav-item nav-link">{title.navItem5}</a>
                <a href="#contact" class="nav-item nav-link">{title.navItem6}</a>
                {/* <a href="#testimonial" class="nav-item nav-link">{title.navItem4}</a>
                <a href="#contact" class="nav-item nav-link">{title.navItem5}</a> */}
            </div>
            <a href="" class="btn btn-menu d-none d-lg-block" style={Design}>{title.button}</a>
        </div>
    </nav>
    )}

export default Title;