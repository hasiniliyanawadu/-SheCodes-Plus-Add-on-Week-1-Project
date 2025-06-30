function displayTime(event) {
    let parisTime = moment().tz("Europe/Paris").format(`[It is] dddd, MMMM D, YYYY - H:mm [in Europe/Paris]`);
    let tokyoTime = moment().tz("Asia/Tokyo").format(`[It is] dddd, MMMM D, YYYY - H:mm [in Asia/Tokyo]`);
    let sidneyTime = moment().tz("Europe/Paris").format(`[It is] dddd, MMMM D, YYYY - H:mm [in Australia/Sydney]`);


    if (event.target.value.length > 0) {
        console.log(event.target.value);

        if (event.target.value === "paris") {
            alert(parisTime);
        }

        if (event.target.value === "tokyo") {
            alert(tokyoTime);
        }

        if (event.target.value === "sydney") {
            alert(sidneyTime);
        }
    }

}


let countries = document.querySelector("#countries");
countries.addEventListener("change", displayTime);