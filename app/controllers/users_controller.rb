class UsersController < ApplicationController

  def index
    @users = User.all
    @not_admin = User.where(admin: false)
    @admin = User.where(admin: true)
    @superadmin = User.where(superadmin: true)
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes!(allowed_params)

    respond_to do |f|
      f.html { redirect_to users_url }
      f.js
    end
  end

 def removed
   @user = User.destroy(params[:id])

   respond_to do |f|
     f.html { redirect_to users_url }
     f.js
   end
 end


  private

  def allowed_params
    params.require(:user).permit(:name, :email, :admin, :superadmin)
  end
end
