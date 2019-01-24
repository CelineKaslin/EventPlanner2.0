describe('Feature Test', function() {

  let event = new EventPlanner('content', '24/11/2019')
  let eventCalendar = new EventCalendar()

  it('An event get stored succesfully in the calendar', function() {
    eventCalendar.pushEvent(event)
    expectToEqual(eventCalendar._eventList[0].getContent(), 'content');
    expectToEqual(eventCalendar._eventList[0].getDate(), '24/11/2019');
  });
});
