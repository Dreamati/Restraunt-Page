const homepage = function(){

const parent = document.getElementById("content")

while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}

const halfScreen = document.createElement("div");
halfScreen.classList.add("halfScreen");
parent.appendChild(halfScreen);

const blockText = document.createElement("div");
blockText.classList.add("blockText");
halfScreen.appendChild(blockText);

const restName = document.createElement("h2");
restName.textContent = "Restraunt Name";
blockText.appendChild(restName);

const desription = document.createElement("p");
desription.textContent = "This is some mumbo jumbo Restraunt Description. Eat if you want, don't if you don't No one cares";
blockText.appendChild(desription);

const menuButton = document.createElement("button");
menuButton.textContent = "See Menu"
blockText.appendChild(menuButton);

}

export {homepage}