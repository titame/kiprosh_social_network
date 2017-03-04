json.(@events) do |event|
  json.name event.name
  json.event_type event.event_type.name
  json.start_date event.start_date
  json.end_date event.end_date
  json.description event.description
  json.background_image_url event.background_image_url
end