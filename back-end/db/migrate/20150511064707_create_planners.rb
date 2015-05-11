class CreatePlanners < ActiveRecord::Migration
  def change
    create_table :planners do |t|
      t.string :name
      t.timestamps
    end

    add_column :tasks, :planner_id, :integer
  end
end
