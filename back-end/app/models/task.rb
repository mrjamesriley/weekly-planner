class Task < ActiveRecord::Base
  belongs_to :planner
  serialize :days_ids, Array
end
