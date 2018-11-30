// let jhttp=new XMLHttpRequest();
// jhttp.open("GET","data.json",true);
// let data=""
// jhttp.onload=function(){
//     var arr=JSON.parse(jhttp.responseText);
//     for(let i=0;i<arr.length;i++){
//         if (arr[i].age>=50){
//             data+="<li>"+arr[i].name+"</li>"
//         }
//     }
//     document.querySelector("#json").innerHTML=data
// }

// jhttp.send()
function fillCountry() {
    $.ajax({
        type: "GET",
        url: "resources.json",
        success: function (result) {
            console.log(result);
            var output = '<option value="">Select country</option>';
            for (var i in result) {

                output += '<option value="' + result[i]["country"] + '">' + result[i]["country"] + "</option>";
            }


            $("#country").html(output);

        }
    });
}

function selectCountry(sel) {
    let optionValue = ""
    optionValue += sel
    console.log(optionValue)
    $.ajax({
        type: "GET",
        url: "resources.json",
        success: function (result) {
            for (var i in result) {

                if (optionValue == result[i].country) {
                    let cityArr = result[i].city
                    let output = '<option value="">Select City</option>';
                    for (let j in cityArr) {
                        //    console.log(j,cityArr[j])
                        output += '<option value="' + cityArr[j] + '">' + cityArr[j] + "</option>";
                        $("#city").html(output);

                    }

                }
            }

        }
    });
}
function selectCity(sel) {
    console.log(true)
}
$(document).ready(function () {
    fillCountry()

})