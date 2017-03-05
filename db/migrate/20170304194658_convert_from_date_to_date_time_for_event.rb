class ConvertFromDateToDateTimeForEvent < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :start_date
    remove_column :events, :end_date
    add_column :events, :start_time, :integer
    add_column :events, :end_time, :integer
  end
end
