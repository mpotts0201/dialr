class Api::ContactsController < ApplicationController

    before_action :authenticate_user!

  def index
    @contacts = current_user.contacts
    puts current_user

    render json: @contacts
  end

  def show
    @contact = Contact.find(params[:id])

    render json: @contact
  end

  def create
    @user = current_user
    puts current_user
    @contact = @user.contacts.build(contact_params)

    if @user.save
      render json: @contact
    else
      render json: @contact.errors
    end
  end

  def update
    @contact = Contact.find(params[:id])


    if @contact.update(contact_params)
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @contact = Contact.find(params[:id]).delete

    render status: :ok
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :contactType, :email, :phone, :address)
  end
end
