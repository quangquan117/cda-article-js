import { Date_now } from "./model.js";

document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    Date_now.builder();
    Date_now.el.innerText = Date_now.dates;
    Date_now.el.setAttribute("datetime", Date_now.dates);
});