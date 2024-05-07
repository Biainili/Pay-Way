function openNewPage(url) {
    window.location.href = url
}


function swapStyles(id, change) {
    const buttonElement1 = document.getElementById(id);
    const buttonElement2 = document.getElementById(change);

    const section2Element = document.getElementById('section2_A');
    const section2_B_Element = document.getElementById('section2_B');

    if (buttonElement1 === "button2") {
        buttonElement1.className = "button1_style";
        buttonElement2.className = "button2_style";

        section2Element.style.display = section2Element.style.display === "flex" ? "none" : "flex";
        section2_B_Element.style.display = section2_B_Element.style.display === "none" ? "flex" : "none";
       
    } else {
        buttonElement1.className = "button2_style";
        buttonElement2.className = "button1_style";
        
        section2Element.style.display = section2Element.style.display === "none" ? "flex" : "none";
        section2_B_Element.style.display = section2_B_Element.style.display === "flex" ? "none" : "flex";
    }
}