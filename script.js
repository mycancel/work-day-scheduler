function init() {
    displayDate();
    timeline();
};

// Displaying the date at the top of the calendar page
function displayDate() {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
}

function timeline() {
    var hour = parseInt(moment().format('hh'));
    var timeOfDay = moment().format('a');
    if (timeOfDay === 'pm' && hour !== 12) {
        hour = hour + 12;
    };

    var container = $('.container');
    var position = hour - 9;
    if (hour >= 9 && hour <= 17) {
        container.children().eq(position).find('textarea').addClass('present');
        for (var i = 0; i < position; i++) {
            container.children().eq(i).find('textarea').addClass('past');
        };
        for (var i = (position + 1); i <= 8; i++) {
            container.children().eq(i).find('textarea').addClass('future');
        };
    }
}

init();