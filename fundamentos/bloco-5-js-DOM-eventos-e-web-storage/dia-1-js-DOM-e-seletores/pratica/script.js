const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const title = document.getElementById("page-title");
title.innerText = "Os Miseráveis";

const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText = "Eu não sou criativo";

const subtitle = document.getElementById("subtitle");
subtitle.innerText = "Ó vc aí!"

const allParagraphs = document.getElementsByClassName("classp");
for (let element of allParagraphs) {
    element.style.color = 'blue';
}

const subtitleColor = document.getElementsByTagName("h4")[0];
subtitleColor.style.color = 'red';