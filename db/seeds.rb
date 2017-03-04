# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


event_types = EventType.create([
  {name: 'Fun'}, {name: 'Festive'}, {name: 'Knowledge'}, {name: 'KFC'}
])

events = Event.create(
  [
  {
    name: 'Kiprosh 2.0',
    event_type_id: EventType.find_by(name: 'Knowledge').id,
    start_date: Date.parse('3-3-2017'),
    end_date: Date.parse('3-3-2017')
  },
  {
    name: 'Hackathon 2.0',
    event_type_id: EventType.find_by(name: 'Fun').id,
    start_date: Date.parse('4-3-2017'),
    end_date: Date.parse('5-3-2017')
  },
  {
    name: 'Lonavla',
    event_type_id: EventType.find_by(name: 'KFC').id,
    start_date: Date.parse('4-2-2017'),
    end_date: Date.parse('5-2-2017')
  },
  {
    name: 'Session 1',
    event_type_id: EventType.find_by(name: 'Knowledge').id,
    start_date: Date.parse('7-1-2017'),
    end_date: Date.parse('7-1-2017')
  },
  {
    name: 'Session 1',
    event_type_id: EventType.find_by(name: 'Knowledge').id,
    start_date: Date.parse('14-1-2017'),
    end_date: Date.parse('14-1-2017')
  },
  {
    name: 'Session 1',
    event_type_id: EventType.find_by(name: 'Knowledge').id,
    start_date: Date.parse('21-1-2017'),
    end_date: Date.parse('21-1-2017')
  },
  {
    name: 'Session 1',
    event_type_id: EventType.find_by(name: 'Knowledge').id,
    start_date: Date.parse('28-1-2017'),
    end_date: Date.parse('28-1-2017')
  },
]
)