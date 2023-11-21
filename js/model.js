export const Date_now = {
    builder() {
        console.log("hello world");
    },
    dates: new Date().getFullYear(),
    el: document.querySelector("time")
};