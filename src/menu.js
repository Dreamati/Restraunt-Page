const menu = function(){
const menuButton = document.getElementById('menu')
const parent = document.getElementById("content")

menuButton.addEventListener('click',function (){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    parent.appendChild(menuContainer);

    const menuHead = document.createElement("h2")
    menuHead.classList.add('menuhead');
    menuHead.textContent = "Restraunt Menu";
    menuContainer.appendChild(menuHead);

    const menuItem = function(dishName, dishDescription, dishPrice){
        this.dishName = dishName;
        this.dishDescription = dishDescription;
        this.dishPrice = dishPrice;
        this.createDish = function(){
            const dishDiv = document.createElement('div');
            dishDiv.classList.add('dishDiv');
            menuContainer.appendChild(dishDiv);

            const nameDom = document.createElement('h3');//Item Name created in DOM
            nameDom.textContent = this.dishName;

            dishDiv.appendChild(nameDom);

            const descDom = document.createElement('p');//Item desc created in DOM
            descDom.textContent = this.dishDescription;

            dishDiv.appendChild(descDom);

            const priceDom = document.createElement('p');//Item price created in DOM
            priceDom.textContent = this.dishPrice;
            priceDom.classList.add('price')

            dishDiv.appendChild(priceDom);
        }
    }
    
    const butterChicken = new menuItem('Butter Chicken', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores voluptas, rem itaque adipisci obcaecati sed ducimus consectetur consequuntur doloremque id illo architecto veniam dolores rerum tenetur velit inventore dolor.", '$30');
    butterChicken.createDish();

    const chickenBiryani = new menuItem('Biryani', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores voluptas, rem itaque adipisci obcaecati sed ducimus consectetur consequuntur doloremque id illo architecto veniam dolores rerum tenetur velit inventore dolor.", '$30');
    chickenBiryani.createDish();

    const Paneer = new menuItem('Paneer', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores voluptas, rem itaque adipisci obcaecati sed ducimus consectetur consequuntur doloremque id illo architecto veniam dolores rerum tenetur velit inventore dolor.", '$30');
    Paneer.createDish();
}
)
}
export {menu}