
function pokaziDatum() {

    datum = document.getElementById("datum")
    datum.innerHTML = Date();



}

function pokaziGodinu() {

    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("godina").innerHTML = year;
}