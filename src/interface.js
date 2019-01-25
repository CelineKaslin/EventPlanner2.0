window.onload = function() {

  let calendar = new EventCalendar();
  // let button = document.getElementById('event_create_button')
  var eventi = document.querySelector(".Events")
  var button = document.querySelector(".Createevent")

  if (!localStorage.getItem('events')){
    eventi.innerText = "No events, please add one!"
  } else {
    eventi.innerText = calendar.displayEvent()
  }

  button.onclick = () => {
    makeEvent();
  }

  // id="event_create_button" 
  // id="eventlistings"
  
  // button.addEventListener('click', ()=> {
  //   makeEvent();
  // });
  
  //creates event & push to a calendar
  function makeEvent() {
    let content = document.getElementById('user_input').value
    let datetime = document.getElementById('date_time').value
    let event = new EventPlanner(content, datetime);
    calendar.pushEvent(event);
    displayEvent()
  }
  
    const displayEvent = ()=> {
      // let eventlistings = document.getElementById('eventlistings');
      events = calendar.displayEvent();
      eventi.innerText = " ";
      eventi.appendChild(events);
    }
}

// window.addEventListener('load', ()=> {

  
  
//   })