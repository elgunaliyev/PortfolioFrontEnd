let _btnClose, _btnMinimize, _panel, _panelContainer, _panelHead, _off, _on, _panelContent;

_off = "off";
_on = "on";

function selectElement (selector){
    let elem = document.querySelector(selector);
    return elem
}
function checkStatus(elem,type) {
    elem.name=type;
    return elem.name
}

_panelContainer = selectElement(".panel--container");
_panelContent = selectElement(".panel--content");
_panel = selectElement(".panel");
_btnClose = selectElement(".fa-times-circle");
_btnMinimize = selectElement(".fa-window-minimize");
_btnFullScreen = selectElement(".fa-expand");

checkStatus(_panelContainer,_off)
checkStatus(_panelContent,_off)






_btnClose.parentElement.addEventListener("click", () => {

    _panelContainer.removeChild(_panel)
    // alert("It works")
})
_btnMinimize.parentElement.addEventListener("click", () => {
    switch (_panelContent.name) {
        case _off:
            _panelContent.style.display = "none";
            checkStatus(_panelContent,_on)
            console.log(_panelContent.name + " after minimize")
            break;
        case _on:
            _panelContent.style.display = "block";
            checkStatus(_panelContent,_off)
            console.log(_panelContent.name + "after maximize")
            break;
    }



})
_btnFullScreen.parentElement.addEventListener("click", () => {
  //alert("It works")
    switch (_panelContainer.name) {
        case _off:
            _panelContainer.style.position = "fixed";
            _panelContainer.style.top = "0";
            _panelContainer.style.left = "0";
            _panelContainer.name = _on;
            console.log(_panelContainer.name + " after fullscreen")
            break;

        case _on:
            _panelContainer.style.position = "static";
            _panelContainer.name = _off;
            console.log(_panelContainer.name + " after minimize")
            break;
    }

})


let defaultStyle={
    width: "500px",
    height: "200px",
    background: "red",
    padding: "0 50px"
}
function addStyle(selector,style) {
for (const key in style) {
    if (style.hasOwnProperty(key)) {
        selectElement(selector).style[key] = style[key];
        
    }
}
}
