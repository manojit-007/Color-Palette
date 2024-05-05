
const wrapper = document.querySelector(".wrapper");
const refreshBtn = document.querySelector(".refresh_btn");

const maxBoxes = 20;

const generatePalette = () => {
    wrapper.innerHTML = ""; //clearing the wrapper
    for (let i = 0; i < maxBoxes; i++) {
        //generating a random hex code for color
        let randomHexValue = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHexValue = `#${randomHexValue.padStart(6, "0")}`

        //creating a new "li" element add it to the wrapper
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="box" style="background: ${randomHexValue}"></div>
                           <span class="hex-value">${randomHexValue}</span>`;
        
        //adding click event to current li element to copy the color 
        color.addEventListener("click", () => copyColor(color,randomHexValue));
        wrapper.appendChild(color);
    }
}

generatePalette();

const copyColor = (elem,HexValue) =>{
    const colorElement = elem.querySelector(".hex-value")
    //Copying the hex value, updating text to the copied,
    //and changing the text back to original hex code or hex value after 1 second
    navigator.clipboard.writeText(HexValue).then(() =>{
        colorElement.innerText = "Copied"
        setTimeout(() => colorElement.innerText = HexValue, 1000)
    }).catch(() =>alert("Failed to copy the color code!"))
    //showing alart if the color can't be copied
}

refreshBtn.addEventListener("click", generatePalette);
