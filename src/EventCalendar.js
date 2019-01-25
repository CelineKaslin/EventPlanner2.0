class EventCalendar {
  constructor(now = new Date, eventList = null) {
    this._eventList = this.inStorage()
    this._now = now
  }

  pushEvent(event) {
    this._eventList.push(event);
    localStorage.setItem('events', JSON.stringify(this._eventList))
  }

  inStorage() {
    if(!localStorage.getItem('events')) {
      return []
    } else {
      return this.inflatedObjects(JSON.parse(localStorage.getItem('events')))
    }
  }

  getEvents() {
    return this._eventList
  }

  upComingEvents(){
    let upcoming = [];
    let eventsArray = this.inflatedObjects(JSON.parse(localStorage.getItem('events')))
    eventsArray.forEach((event) => {
      let now = this._now;
      let eventDate = event.getDateObject();
      if (eventDate > now) {
        upcoming.push(event);
      }
    });
    return upcoming;
  };

  chronologicalOrder() {
    let result = [];
      result = this.upComingEvents().sort(function(a, b) {
      let date1 = a.getDateObject();
      let date2 = b.getDateObject();
      if (date1 < date2) {
        return -1;
      }
      if (date2 < date1) {
        return 1;
      }
      return 0;
    })
    return result;
  }

  displayEvent(){
    let div = document.createElement('div');
    this.chronologicalOrder().forEach((e)=>{
      let eventHTML = e.displayAnEvent();
      div.appendChild(eventHTML);
    })
    return div;
  }

  inflatedObjects(flattenedObject) {
    let temporaryArray = [];
    flattenedObject.forEach(function(event) {
      let newObject = new EventPlanner(event._content, event._date)
      temporaryArray.push(newObject)
    })
    return temporaryArray;
  }
}