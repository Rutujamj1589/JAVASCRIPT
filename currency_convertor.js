const BASE_URL = "https://cdn,jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from selector");
const tocurr = document.querySelector(".to selector");
const msg = document.querySelector(".final-msg");
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
    let img = element.parentElement.querySelector("img" );
    img.src = newsrc;
};


btn.addEventListener("click", async(evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1);{
    amtVal = 1 ;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  data = await response.json();
  let rate = data[tocurr.value.toLowerCase()];
  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromcurr.value} = ${finalAmount}${tocurr}`;
});