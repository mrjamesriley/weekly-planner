class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :topic_id, :days_ids
end
