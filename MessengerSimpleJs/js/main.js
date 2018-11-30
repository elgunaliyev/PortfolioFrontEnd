let point, pos_x, pos_y, randomColor,randomSize;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("", function (event) {
    pos_x = event.clientX;
    pos_y = event.clientY;
    randomColor=getRandomColor();
    randomSize=(Math.random()*100).toFixed(0)
    // console.log(pos_x, pos_y)
    point = document.createElement("div");
    point.setAttribute("class", "rounded-circle point")
    point.setAttribute("style", `width:${randomSize}px; height:${randomSize}px; ; top:${pos_y}px; left:${pos_x}px; background:${randomColor}`)
    // point.style.transform="translate(-50%,-50%)"
    document.body.appendChild(point)
})


let _btnSend,_text,_listGroup,_listItem;
_btnSend=document.querySelector("#btnSend");
_listGroup=document.querySelector(".list-group");
_btnSend.addEventListener("click",()=>{
    _text=document.querySelector("#messageBox").value;
    _listItem=document.createElement("li");
    _listItem.setAttribute("class","list-group-item bg-info text-white my-1 h6")
    _listItem.innerHTML=_text;
    _listGroup.appendChild(_listItem)
})
