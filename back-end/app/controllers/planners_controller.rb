class PlannersController < ApplicationController
  def show
    planner = Planner.find(params[:id])
    render json: PlannerSerializer.new(planner)
  end

  def update
    # massage them params for Rails consumption
    params[:planner][:tasks_attributes] = params[:planner][:tasks]

    planner = Planner.find params[:id]
    planner.assign_attributes planner_params

    if planner.save!
      render json: { status: 'ok' }
    else
      render json: { status: 'error', message: planner.errors.full_messages }
    end
  end

  private

    def planner_params
      params.require(:planner).permit(:name,
        { tasks_attributes: [:id, :name, :topic_id, :start_time, :_destroy, days_ids: []] })
    end
end
