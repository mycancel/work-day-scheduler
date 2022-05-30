function init() {
    displayDate();
};

function displayDate(){
    $('#currentDay').text(moment().format('MMMM Do, YYYY'));
}

init();