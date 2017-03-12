json.(@events) do |event|
  event_type_name = event.event_type.name
  json.event_id event.id
  json.name event.name
  json.event_type event_type_name
  json.start_date_time Time.at(event.start_time).to_time
  json.end_date_time Time.at(event.end_time).to_time
  json.description event.description
  json.background_image_url event.background_image_url
  json.event_type_image_url image_url(event_type_name == 'KFC' ? 'laughing.png' : 'smiling.png')
  json.event_type_color event_type_name == 'KFC' ? '#75ce66' : '#f0ca45'
end
