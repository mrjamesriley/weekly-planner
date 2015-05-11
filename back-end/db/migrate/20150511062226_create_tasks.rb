class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :topic_id
      t.string :days_ids

      t.timestamps
    end
  end
end
