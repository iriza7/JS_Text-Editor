function getId(id) {
    return document.getElementById(id);
}

function getName(name) {
    return document.getElementsByName(name);
}

function getByTag(tag) {
    return document.getElementsByTagName(tag);
}
//--------------------------------------------
function change1() {
    var oldText = getId("block1").innerHTML;
    var newText = getId("textarea1").value;
    console.log(newText);
    getId("textarea1").value = oldText;
}
var check1 = true;

function style1() {
    if (check1) {
        getId("block2").style.display = "none";
        getId("block3").style.display = "block";
        check1 = false;
    }
    else {
        getId("block3").style.display = "none";
        getId("block2").style.display = "block";
        check1 = true;
    }
}
//--------------------------------------------
function save1() {
    var newText = getId("textarea1").value;
    getId("block1").innerHTML = newText;
}
//--------------------------------------------
function add1() {
    getId("block4").style.display = "block";
    getId("block4CreateList").style.display = "none";
    getId("block1").style.display = "none";
    getId("block2").style.display = "none";
    getId("block3").style.display = "none";
    getId("buttons").style.display = "none";
    ///Dont show error msgs
    getId("error1").style.display = "none";
    getId("error2").style.display = "none";
    getId("error3").style.display = "none";
    getId("error4").style.display = "none";
    getId("error5").style.display = "none";
    //
    getId("error11").style.display = "none";
    getId("cListItemsUl").style.borderColor = "white";
    getId("error12").style.display = "none";
    getId("cListItemsOl").style.borderColor = "white";
}
//--------------------------------------------
// 4-- change view - create table/List
function changeView(a) {
    if (a == true) {
        getId("block4CreateTable").style.display = "block";
        getId("block4CreateList").style.display = "none";
    }
    else {
        getId("block4CreateTable").style.display = "none";
        getId("block4CreateList").style.display = "block";
    }
}
var tableStyleLineData = getId("tableStyleLine").value;
getId("tableStyleLine").onchange = function () {
    tableStyleLineData = this.value;
}
var tableStyleColorData = getId("tableStyleColor").value;
getId("tableStyleColor").onchange = function () {
        tableStyleColorData = this.value;
    }
    //validation
function validateTable(c1, c2, c3, c4, c5) {
    if (!(c1.value / 1 == c1.value && c1.value != 0 && c1.value > 0)) {
        getId("error1").style.display = "inline";
        c1.style.borderColor = "red";
        var cc1 = false;
    }
    else {
        getId("error1").style.display = "none";
        c1.style.borderColor = "white";
    }
    if (!(c2.value / 1 == c2.value && c2.value != 0 && c2.value > 0)) {
        getId("error2").style.display = "inline";
        c2.style.borderColor = "red";
        var cc2 = false;
    }
    else {
        getId("error2").style.display = "none";
        c2.style.borderColor = "white";
    }
    if (!(c3.value / 1 == c3.value && c3.value != 0 && c3.value > 0)) {
        getId("error3").style.display = "inline";
        c3.style.borderColor = "red";
        var cc3 = false;
    }
    else {
        getId("error3").style.display = "none";
        c3.style.borderColor = "white";
    }
    if (!(c4.value / 1 == c4.value && c4.value != 0 && c4.value > 0)) {
        getId("error4").style.display = "inline";
        c4.style.borderColor = "red";
        var cc4 = false;
    }
    else {
        getId("error4").style.display = "none";
        c4.style.borderColor = "white";
    }
    if (!(c5.value / 1 == c5.value && c5.value != 0 && c5.value > 0)) {
        getId("error5").style.display = "inline";
        c5.style.borderColor = "red";
        var cc5 = false;
    }
    else {
        getId("error5").style.display = "none";
        c5.style.borderColor = "white";
    }
    if (cc1 == false || cc2 == false || cc3 == false || cc4 == false || cc5 == false) {}
    else {
        createNewTableGo(c1, c2, c3, c4, c5);
    }
}

function createNewTable() {
    /* getId("error1").style.display="block";
    document.querySelectorAll("span")[2].style.display="block";
    document.querySelectorAll("span")[1].style.display="block";*/
    var cRows = getId("cRows4");
    console.log(cRows);
    // var cColumns = getId("cColumns4");
    var cColumns = getId("cColumns4");
    console.log(cColumns);
    var cellWidthData = getId("cellWidth");
    var cellHeightData = getId("cellHeight");
    var tableStyleWeightData = getId("tableStyleWeight");
    validateTable(cRows, cColumns, cellWidthData, cellHeightData, tableStyleWeightData);
}

function createNewTableGo(cRows, cColumns, cellWidthData, cellHeightData, tableStyleWeightData) {
    cRows = cRows.value;
    cColumns = cColumns.value;
    cellWidthData = cellWidthData.value;
    cellHeightData = cellHeightData.value;
    tableStyleWeightData = tableStyleWeightData.value;
    var tableStyleBorder = tableStyleWeightData + "px " + tableStyleLineData + " " + tableStyleColorData;
    console.log(tableStyleBorder);
    getId("block4").style.display = "none";
    getId("block1").style.display = "block";
    getId("block2").style.display = "block";
    getId("block3").style.display = "none";
    getId("buttons").style.display = "block";
    /*var oldText = getId("block1").innerHTML;*/
    var oldText = getId("textarea1").value;
    var newTable = '<table id="myTable" style="border:' + tableStyleBorder + '">';
    //For tr
    for (var i = 0; i <= cRows - 1; i++) {
        newTable += '<tr>';
        //For td
        for (var j = 0; j <= cColumns - 1; j++) {
            newTable += '<td  height="' + cellHeightData + '" width="' + cellWidthData + '"></td>';
        }
        newTable += '</tr>';
    }
    oldText += newTable + '</table>';
    console.log(oldText);
    getId("textarea1").value = oldText;
    /*var s = (cRows - 1) * (cColumns - 1);
    for(var x=0; x<=s ; x++){
         document.querySelectorAll('.td1')[0].style.width = "10px";
       document.querySelectorAll('td')[1].style.height = 15 + "px";
    }*/
}
//--------------------------------------------
// radiobutton Change - list Ul/Ol
function listBlockDisplay(a) {
    if (a == 1) {
        getId("blockListStyleUl").style.display = "block";
        getId("blockListStyleOl").style.display = "none";
    }
    else if (a == 2) {
        getId("blockListStyleOl").style.display = "block";
        getId("blockListStyleUl").style.display = "none";
    }
}
/*<ul style="list-style: circle">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
*/
//var listStyle = getId("listStyle").value;
getId("listStyleUl").onchange = function () {
    listStyleUl = this.value;
}
getId("listTypeOl").onchange = function () {
    listTypeOl = this.value;
}

function createNewList() {
    //
    var listStyleUl = getId("listStyleUl").value;
    var listTypeOl = getId("listTypeOl").value;
    var cListItemsUl = getId("cListItemsUl").value;
    var cListItemsOl = getId("cListItemsOl").value;
    //console.log(cListItems);
    /*var oldText = getId("block1").innerHTML;*/
    var oldText = getId("textarea1").value;
    if (getId("listUl").checked) {
        //validation
        if (!(cListItemsUl / 1 == cListItemsUl && cListItemsUl != 0 && cListItemsUl > 0)) {
            getId("error11").style.display = "inline";
            getId("cListItemsUl").style.borderColor = "red";
        }
        else {
            getId("error11").style.display = "none";
            getId("cListItemsUl").style.borderColor = "white";
            //createListGo
            getId("block4").style.display = "none";
            getId("block1").style.display = "block";
            getId("block2").style.display = "block";
            getId("block3").style.display = "none";
            getId("buttons").style.display = "block";
            getId("error11").style.display = "none";
            var newList = "<ul style='list-style: " + listStyleUl + "'>";
            for (var i = 0; i <= cListItemsUl - 1; i++) {
                newList += "<li>Coffee</li>"
            }
            newList += "</ul>";
            oldText += newList;
            console.log(newList);
            getId("textarea1").value = oldText;
        }
    }
    else if (getId("listOl").checked) {
        //validation
        if (!(cListItemsOl / 1 == cListItemsOl && cListItemsOl != 0 && cListItemsOl > 0)) {
            getId("error12").style.display = "inline";
            getId("cListItemsOl").style.borderColor = "red";
        }
        else {
            getId("error12").style.display = "none";
            getId("cListItemsOl").style.borderColor = "white";
            //createListGo
            getId("block4").style.display = "none";
            getId("block1").style.display = "block";
            getId("block2").style.display = "block";
            getId("block3").style.display = "none";
            getId("buttons").style.display = "block";
            getId("error11").style.display = "none";
            var newList = "<ol type='" + listTypeOl + "'>";
            for (var i = 0; i <= cListItemsOl - 1; i++) {
                newList += "<li>Coffee</li>"
            }
            newList += "</ol>";
            oldText += newList;
            console.log(newList);
            getId("textarea1").value = oldText;
        }
    }
}
//--------------------------------------------
//--------------------------------------------
var radios = getName("textSize");
for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        getId("block1").style.fontSize = this.value; //---- this
        //debugger;
    }
}

function changeSize(i) {
    getId("block1").style.fontSize = i + "px";
}
//--------------------------------------------
getId("FontFamily1").onchange = function () {
        getId("block1").style.fontFamily = this.value;
    }
    //------------------
var check = true;

function changeColor3() {
    getId("colors").style.display = "flex";
    getId("colorsF").style.display = "none";
    check = true;
}

function changeFon3() {
    getId("colorsF").style.display = "flex";
    getId("colors").style.display = "none";
    check = false;
    // getId("block1").style.background = "yellow";
}
//функція зникнення
document.body.onclick = function (e) {
    if (e.target.className != "colorBox" && e.target.className != "box") {
        //позиція мишки де відбувся клік НЕ повинна бути class"colorBox" && class"box"
        getId("colors").style.display = "none";
        getId("colorsF").style.display = "none";
        check = false;
    }
}
for (var i = 0; i < 18; i++) {
    document.querySelectorAll('.box')[i].onclick = function () {
        if (check) {
            getId("block1").style.color = this.style.background;
        }
        else {
            getId("block1").style.background = this.style.background;
        }
    }
}

function changeFontWeight3(a) {
    /*var a = getId("changeFontWeight33");*/
    if (a.checked) {
        getId("block1").style.fontWeight = "bold";
    }
    else {
        getId("block1").style.fontWeight = "normal";
    }
}

function changeFontStyle3(b) {
    if (b.checked) {
        getId("block1").style.fontStyle = "oblique";
    }
    else {
        getId("block1").style.fontStyle = "normal";
    }
}
//-------------------------------
// Block all - showPopUp
function blockAll22() {
    document.getElementById("popUp").style.display = "block";
    document.getElementById("allPage").style.pointerEvents = "none";
    document.getElementById("allPage").style.backgroundColor = "rgba(1,1,1,0.7)";
}

function unblockApp() {
    var correctPassword = "1144";
    var password = document.getElementById("pass").value;
    if (password == correctPassword) {
        document.getElementById("popUp").style.display = "none";
        document.getElementById("allPage").style.pointerEvents = "auto";
        document.getElementById("allPage").style.backgroundColor = "rgba(0,0,0,0)";
    }
    else {
        alert("Password is incorrect - try again ")
    }
}
/*----------------------*/