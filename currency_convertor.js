const dropdown = document.querySelectorAll(".dropdown select")


for(let select of dropdown){
    for(currcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if (select.name === "from" && currcode ==="USD"){
            newOption.selected = "selected";
        }else if (select.name === "to" && currcode ==="INR"){
            newOption.selected = "selected";
        }
            select.append(newOption);
    }

    select.addEventListener("change",(evt) => {
        updateFlag (evt.target);
    })

}


const updateFlag = (element) =>{
    let currcode = element.value;
    let countryCode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    
}
