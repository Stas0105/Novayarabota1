
function showform () {
    let Form = document.getElementById("form");
    Form.style.display="block";
    if(Form.style.display="block") {
        let Back = document.getElementById("hid");
        Back.style.background="grey";
        Back.style.overflow="hidden";
    }
}
function Nonform() {
    let nonform = document.getElementById("form");
    nonform.style.display="none";
    if(nonform.style.display="none") {
        let Back = document.getElementById("hid");
        Back.style.background="white";
        Back.style.overflow="visible";
    }
}
export {showform};
export {Nonform};