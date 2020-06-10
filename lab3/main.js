function openInfo(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function openCategory(evt, categoryName) {
  var i, cat_tabcontent, tablinks;
  cat_tabcontent = document.getElementsByClassName("cat_tabcontent");
  for (i = 0; i < cat_tabcontent.length; i++) {
    cat_tabcontent[i].style.display = "none";
  }

  cat_tablinks = document.getElementsByClassName("cat_tablinks");
  for (i = 0; i < cat_tablinks.length; i++) {
    cat_tablinks[i].className = cat_tablinks[i].className.replace(" active", "");
  }
  if (document.getElementById(categoryName) != null) {
	document.getElementById(categoryName).style.display = "block";
  }
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
  var s1 = document.getElementById(slct1);
  var s2 = document.getElementById(slct2);

  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  // s2.innerHTML = "";

  // obtain a reduced list of products based on restrictions
  var optionArray = restrictListProducts(products, s1.value);

  // for each item in the array, create a checkbox element, each containing information such as:
  // <input type="checkbox" name="product" value="Bread">
  // <label for="Bread">Bread/label><br>

  // clean the tab content
  var tabContent = s2.getElementsByClassName("cat_tabcontent");
  for (var i = 0; i < tabContent.length; i++) {
	  tabContent[i].innerHTML = "";
	  
  }

  for (i = 0; i < optionArray.length; i++) {
    var prod = optionArray[i];

	var productName = document.getElementById(prod.category);

	// create the checkbox and add in HTML DOM
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.name = "product";
	checkbox.value = prod.name;
	productName.appendChild(checkbox);

	var image = document.createElement("img");
	image.src = prod.name.toLowerCase() + ".jpg";
	image.width = 150;
	image.height = 155;
	productName.appendChild(image);

	// create a label for the checkbox, and also add in HTML DOM
	var label = document.createElement("label");
	label.htmlFor = prod.name;
	label.appendChild(document.createTextNode(prod.name));
	label.appendChild(document.createTextNode(" : $" + prod.price));
	productName.appendChild(label);

	// create a breakline node and add in HTML DOM
	productName.appendChild(document.createElement("br"));
  }
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {
  var ele = document.getElementsByName("product");
  var chosenProducts = [];

  var c = document.getElementById("displayCart");
  c.innerHTML = "";

  // build list of selected item
  var para = document.createElement("P");
  para.innerHTML = "You selected : ";
  para.appendChild(document.createElement("br"));
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      para.appendChild(document.createTextNode(ele[i].value));
      para.appendChild(document.createElement("br"));
      chosenProducts.push(ele[i].value);
    }
  }

  // add paragraph and total price
  c.appendChild(para);
  c.appendChild(
    document.createTextNode(
      "Total Price is $" + getTotalPrice(chosenProducts).toFixed(2)
    )
  );
}
