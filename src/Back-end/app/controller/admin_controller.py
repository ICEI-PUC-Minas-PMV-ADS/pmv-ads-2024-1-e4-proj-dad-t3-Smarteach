from flask import jsonify

from app.model import Admin 
from app.controller import admin_collection
from app.services import get_items_data, verify_user_email

def get_available_admins():

    admin_list = get_items_data(admin_collection.find({}))

    return jsonify(admin_list), 200

def insert_new_admin(data: dict):

    is_wrong_data = Admin.verify_new_admin_data(data)

    if is_wrong_data: 
        return is_wrong_data, 400

    new_Admin = Admin(**data)

    is_same_email = verify_user_email(data["email"], admin_collection.find({}))

    if is_same_email: 
        return is_same_email, 400

    admin_collection.insert_one(new_Admin.__dict__)

    return 'Novo Administrador registrado com sucesso!', 200
