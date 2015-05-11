class PlannerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :tasks
end
