function init() {
    displayDate();
    timeline();
};

// Displays the date at the top of the calendar page.
function displayDate() {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
}

// Changes the formatting of textareas according to hour.
function timeline() {
    var hour = parseInt(moment().format('H'));

    var container = $('.container');
    var position = hour - 9;
    // Within the hours of the calender, 
    if (hour >= 9 && hour <= 17) {
        // The textbox of the current hour will have the present class.
        container.children().eq(position).find('textarea').addClass('present');
        for (var i = 0; i < position; i++) {
            // The textbox of past hours will have the past class.
            container.children().eq(i).find('textarea').addClass('past');
        };
        for (var i = (position + 1); i <= 8; i++) {
            // The textbox of future hours will have the future class.
            container.children().eq(i).find('textarea').addClass('future');
        };
    } else if (hour < 9) {
        // When the hour is before the hours of the calender,
        // All text containers in the calender will have the future class.
        container.find('textarea').addClass('future');
    } else {
        // When the hour is after the hours of the calender,
        // All text containers in the calender will have the past class.
        container.find('textarea').addClass('past');
    }
}

init();