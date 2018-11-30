let timerDay = $(".timer_day");
let timerHour = $(".timer_hour");
let timerMinute = $(".timer_minute");
let timerSecond = $(".timer_second");
let bgColorPicker = $(".bg_color_picker")
let timerItem = $(".timer_item")

fixTimerHeight()
setBgColor("black")
$(window).resize(function () {
    fixTimerHeight()
});


function fixTimerHeight() {
    timerItem.each(function () {
        const consSize = $(this).parent().innerWidth()
        $(this).css({
            "height": consSize,

        })
        $(this).parent().addClass("px-1 px-md-2")
    })
    bgColorPicker.each(function () {
        const consSize = $(this).parent().innerWidth()
        $(this).css({
            "height": consSize/2,

        })
       
    })
}

function setBgColor(_color) {
    timerItem.each(function () {
        $(this).css({
            "background-color": _color,
        })
    })

}

// setBgColor("cyan","10rem");
bgColorPicker.click(
    function () {
        let consColor = $(this).css("background-color");
        setBgColor(consColor);
    }
)