class EventCalendar {
  constructor(eventList = null) {
    this._eventList = this.inStorage()
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
    let now = new Date;
    let eventsArray = this.inflatedObjects(JSON.parse(localStorage.getItem('events')))
    eventsArray.forEach((event) => {
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
      return date1 - date2
      })
      return result.reverse()
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
