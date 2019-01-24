describe('EventCalendar', function() {

  let eventCalendar = new EventCalendar()
  let fakeEvent = {getDateObject: () => Date.parse("21/11/2019")}


  it('eventCalendar is an instance of Event Calendar class', function() {
    instanceOf(eventCalendar, EventCalendar);
  });

  it('eventCalendar can store an event', function() {
    eventCalendar.pushEvent(fakeEvent)
    expectToEqual(eventCalendar._eventList[0], fakeEvent);
  });
});
