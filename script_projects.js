const reel = document.getElementById("image-reel");

const handler_mouse_down = e => reel.dataset.mouse_down_at = e.clientX;

const handler_mouse_up = e => {
    reel.dataset.mouse_down_at = "0";
    reel.dataset.prev_perc = reel.dataset.curr_perc;
}

const handler_move = (e, flag) => {
    if(flag == "scroll") {
        if(!reel.dataset.curr_perc) reel.dataset.curr_perc = 0;
        var mouse_dist = e.deltaY * 0.5;
    } else {
        if(reel.dataset.mouse_down_at === "0") return;
        var mouse_dist = parseFloat(reel.dataset.mouse_down_at) - e.clientX;
    }
    
    max_dist = window.innerWidth / 2;

    const perc_dist = mouse_dist / max_dist * -100;
    var new_perc = parseFloat(reel.dataset.prev_perc) + perc_dist;
    new_perc = Math.max(Math.min(new_perc, 0), -50)

    reel.dataset.curr_perc = new_perc;

    reel.animate({
        transform: `translate(${new_perc}%, -50%)`
    }, {duration: 1000, fill: "forwards"});
    // reel.style.transform = `translate(${new_perc}%, -50%)`;
    
    for(const image of reel.getElementsByClassName("reel-images")) {
        image.animate({
            objectPosition: `${new_perc + 100}% 50%`
        }, {duration: 1000, fill: "forwards"});
        // image.style.objectPosition = `${new_perc + 100}% 50%`
    }
    if(flag === "scroll") reel.dataset.prev_perc = reel.dataset.curr_perc;
}

var projects = document.getElementById("article-projects");

projects.onmousedown = e => handler_mouse_down(e);
projects.onmouseup = e => handler_mouse_up(e);
projects.onmousemove = e => handler_move(e, "mouse");

projects.ontouchstart = e => handler_mouse_down(e.touches[0]);
projects.ontouchend = e => handler_mouse_up(e.touches[0]);
projects.ontouchmove = e => handler_mouse_move(e.touches[0]);


projects.onwheel = e => handler_move(e, "scroll");