var events = JSON.parse(localStorage.getItem('events')) || [];

function init() {
    displayEvents();
    displayDate();
    timeline();
};

// Displays the date at the top of the calendar page.
function displayDate() {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
};

// Changes the formatting of textareas according to hour.
function timeline() {
    var hour = parseInt(moment().format('H'));

    var container = $('.container');
    var position = hour - 9;
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
};

function displayEvents() {
    for (i = 0; i < events.length; i++) {
        $('.container').children().eq(events[i].index).find('textarea').val(events[i].text);
    }
};

$('.saveBtn').on('click', function (event) {
    var textIndex = $(this).parent().index();
    var textValue = $(this).parent().find('textarea').val();

    var data = {
        index: textIndex,
        text: textValue,
    };
    console.log(data);

    var events = JSON.parse(localStorage.getItem('events')) || [];

    events.push(data);

    localStorage.setItem("events", JSON.stringify(events));
});

init();