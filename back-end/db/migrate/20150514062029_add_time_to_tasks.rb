class AddTimeToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :start_time, :time
  end
end
