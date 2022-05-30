function init() {
    displayDate();
    timeline();
};

// Displaying the date at the top of the calendar page
function displayDate(){
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
}

function timeline() {
    var hour = moment().format('hh');
    var timeOfDay = moment().format('a');
    console.log(hour);
    console.log(timeOfDay);
    if (timeOfDay === 'pm' && hour !== '12') {
        hour = parseInt(hour) + 12;
        console.log(hour);
    };
}

init();