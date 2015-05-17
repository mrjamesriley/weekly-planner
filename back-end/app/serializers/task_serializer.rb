class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :topic_id, :days_ids, :start_time

  def start_time
    object.start_time.strftime "%H:%M:%S"
  end
end
