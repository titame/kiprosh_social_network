json.event_id @event.id
json.name @event.name
json.start_date_time Time.at(@event.start_time).to_time
json.end_date_time Time.at(@event.end_time).to_time
json.description @event.description
json.background_image_url @event.background_image_url

json.albums @event.albums do |album|
  json.creator_id album.creator_id
  json.photos album.photos do |photo|
    json.src photo.url
  end
end

json.posts @event.posts, :content, :created_at, :creator_id
