

event_types = EventType.create([
  {name: 'Session'}, {name: 'KFC'}
])

20.times do
  start_time = Faker::Time.between(DateTime.now - 1.year, DateTime.now)
  event = Event.create({
    name: Faker::Lorem.sentence,
    event_type_id: EventType.order('random()').first.id,
    start_time: start_time.to_i,
    end_time: (start_time + Random.rand(1..24).hours).to_i,
    description: Faker::Lorem.paragraph,
    venue: Faker::Address.street_name,
    background_image_url: Faker::Avatar.image,
    creator_id: 1
  })
  album = event.albums.create(name: Faker::Internet.user_name, creator_id: 1)

  25.times.each do
    Photo.create(album_id: album.id, image_url: Faker::Avatar.image)
  end

  15.times do
    Post.create(event_id: event.id, content: Faker::Lorem.paragraph, creator_id: 1)
  end
end

