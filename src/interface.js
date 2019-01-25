window.onload = function() {

  let calendar = new EventCalendar();

  var eventsList = document.querySelector(".Events")
  var button = document.querySelector(".Createevent")

  if (localStorage.length === 0){
    eventsList.innerText = "No events, please add one!"
  } else {
    eventsList.innerText = " ";
    eventsList.appendChild(calendar.displayEvent());
  }

  button.onclick = () => {
    makeEvent();
  }

  function makeEvent() {
    let content = document.getElementById('user_input').value
    let datetime = document.getElementById('date_time').value
    let event = new EventPlanner(content, datetime);
    calendar.pushEvent(event);
    displayEvents()
  }

    const displayEvents = ()=> {
      events = calendar.displayEvent();
      eventsList.innerText = " ";
      eventsList.appendChild(events);
    }
}
