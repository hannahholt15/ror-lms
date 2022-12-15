class Api::EnrollmentsController < ApplicationController
  before_action :set_course
  before_action :set_enrollments, only: [:show, :update, :destroy]

  def index
    render json: @course.enrollments
  end

  def show
    render json: @enrollment
  end

  def create
    @enrollment = @course.enrollments.new(enrollment_params)
    if @enrollment.save
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @enrollment.update(enrollment_params)
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @enrollment.destroy
    render json: { message: "Unenrolled" }
  end

  # custom action to grab users that aren't in the course
  def avauser
    # grab all the users that arent in the course
    render json: User.all - @course.users
  end

  private
    def set_course
      @course = Course.find(params[:course_id])
    end

    def set_enrollments
      @enrollment = @course.enrollments.find(params[:id])
    end

    def enrollment_params
      params.require(:enrollment).permit(:user_id)
    end
end