# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
#

mon  = Day.create name: 'Monday'
tue  = Day.create name: 'Tuesday'
wed  = Day.create name: 'Wednesday'
thur = Day.create name: 'Thursday'
fri  = Day.create name: 'Friday'

study  = Topic.create name: 'Study'
gym    = Topic.create name: 'Gym'
guitar = Topic.create name: 'Guitar'

planner = Planner.create name: 'Main Planner'

planner.tasks.create [
  { name: 'Guitar session', start_time: '8:00', topic: guitar, days_ids: [mon, tue, wed, thur, fri].map(&:id) },
  { name: 'Portuguese learning', start_time: '19:30', topic: study, days_ids: [mon.id, wed.id] },
  { name: 'Gym workout', start_time: '12:00', topic: gym, days_ids: [tue.id, thur.id] },
]
