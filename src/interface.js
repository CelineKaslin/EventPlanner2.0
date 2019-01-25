window.addEventListener('load', ()=> {

  let calendar = new EventCalendar();
  let button = document.getElementById('event_create_button')

  if (!localStorage.getItem('events')){
    events.innerText = "No events, please add one!"
  } else {
    events.innerText = eventBoard.displayEvents()
  }
  
  button.addEventListener('click', ()=> {
    makeEvent();
  });
  
  //creates event & push to a calendar
  function makeEvent() {
    let content = document.getElementById('user_input').value
    let datetime = document.getElementById('date_time').value
    let event = new EventPlanner(content, datetime);
    calendar.pushEvent(event);
    displayEvent()
  }
  
    const displayEvent = ()=> {
      let eventlistings = document.getElementById('eventlistings');
      events = calendar.displayEvent();
      eventlistings.innerText = " ";
      eventlistings.appendChild(events);
    }
  
  })