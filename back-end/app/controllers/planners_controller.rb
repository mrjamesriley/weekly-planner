class PlannersController < ApplicationController
  def show
    planner = Planner.find(params[:id])
    render json: PlannerSerializer.new(planner)
  end
end
