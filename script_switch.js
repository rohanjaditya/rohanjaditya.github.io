var about = document.getElementById("article-about");
var experience = document.getElementById("article-experience");
var projects = document.getElementById("article-projects");
var contact = document.getElementById("article-contact");

window.onload = () => fade_switch("about");

document.getElementById("button-projects").onclick = () => {
    if(projects.dataset.status === "inactive") {
        fade_switch("projects");
    }
}

document.getElementById("button-about").onclick = () => {
    if(about.dataset.status === "inactive") {
        fade_switch("about");
    }
}

document.getElementById("button-experience").onclick = () => {
    if(experience.dataset.status === "inactive") {
        fade_switch("experience");
    }
}

// document.getElementById("button-contact").onclick = () => {
//     if(contact.dataset.status === "inactive") {
//         fade_switch("contact");
//     }
// }



const fade_switch = (page) => {
    if(page === "about") {
        about.classList.toggle('fade');
        about.style.zIndex = 1;
        about.dataset.status = "active";
    }

    if(page === "projects") {
        projects.classList.toggle('fade');
        projects.style.zIndex = 1;
        projects.dataset.status = "active";
    }

    if(page === "experience") {
        experience.classList.toggle('fade');
        experience.style.zIndex = 1;
        experience.dataset.status = "active";
    }

    // if(page === "contact") {
    //     contact.classList.toggle('fade');
    //     contact.style.zIndex = 1;
    //     contact.dataset.status = "active";
    // }

    if(page !== "about") {
        about.style.zIndex = -1;
        if (about.dataset.status === "active") about.classList.toggle('fade');
        about.dataset.status = "inactive";
    }

    if(page !== "projects") {
        projects.style.zIndex = -1;
        if (projects.dataset.status === "active") projects.classList.toggle('fade');
        projects.dataset.status = "inactive";
    }

    if(page !== "experience") {
        experience.style.zIndex = -1;
        if (experience.dataset.status === "active") experience.classList.toggle('fade');
        experience.dataset.status = "inactive";
    }

    // if(page !== "contact") {
    //     contact.style.zIndex = -1;
    //     if (contact.dataset.status === "active") contact.classList.toggle('fade');
    //     contact.dataset.status = "inactive";
    // }
}