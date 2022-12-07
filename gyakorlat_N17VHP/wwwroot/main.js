fetch('/questions/4').then(response => response.json()).then(data => kiiratas(data));
function kiiratas(kerdes) {
    console.log(kerdes);
    document.getElementById("kerdesSzoveg").innerText = kerdes.question1
    document.getElementById("valasz1").innerText = kerdes.answer1
    document.getElementById("valasz2").innerText = kerdes.answer2
    document.getElementById("valasz3").innerText = kerdes.answer3
    document.getElementById("kep").src = "https://szoft1.comeback.hu/hajo/" + kerdes.image;
}
function kerdesbetoltes(id) {
    fetch(`/questions/${id}`).then(response => {
        if (!response.ok) {
            console.error(`hibás válasz:${response.status}`)
        }
        else { return response.json() }

    }).then(data => kiiratas(data));

}
function válaszfeldolgozás(valasz) {
    if (!valasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return valasz.json()
    }
}
function kerdes(id) {
    fetch(`questions/${id}`).then(válaszfeldolgozás).then(kerdesbetoltes);
}
function valaszfeldolg(valasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz:${response.status}`)
    }
        else {return valasz.json()}
}