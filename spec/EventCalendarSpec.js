describe('EventCalendar', function() {

  let eventCalendar = new EventCalendar()
  let fakeEvent1 = {getDateObject: () => 2}
  let fakeEvent2 = {getDateObject: () => 1}

  it('eventCalendar is an instance of Event Calendar class', function() {
    instanceOf(eventCalendar, EventCalendar);
  });

  it('eventCalendar can store events in chronological order', function() {
    let calendar2 = new EventCalendar(0)
    calendar2.pushEvent(fakeEvent1)
    calendar2.pushEvent(fakeEvent2)
    let sorted = calendar2.chronologicalOrder()
    expectToEqual(sorted.length, 2);
    expectToEqual(sorted[0], fakeEvent2);
    expectToEqual(sorted[1], fakeEvent1);
  });

});
