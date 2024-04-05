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


def delete_admin_profiles(data):

    admin_id = ObjectId(data['_id'])
    admin = admin_collection.delete_one({'_id': admin_id})

    if admin:
        admin_collection.delete_one({'_id': admin_id})
        return 'Perfil de Administrador deletado com sucesso!', 200
    else:
        return 'Administrador não encontrado', 400


def update_admin_profile(data):

    wrong_data_request = verify_request_data(data, admin_collection)
    if wrong_data_request: 
        return wrong_data_request, 400

    user_id = data.get('_id')
    update_data = {key: data[key] for key in data.keys() if key != '_id'}

    if update_data:
        new_values = {"$set": update_data}
        admin_collection.update_one({'_id': ObjectId(user_id)}, new_values)
        admin_collection.update_one({'_id': ObjectId(user_id)}, update_time_data())

        return 'Perfil de Administrador atualizado com sucesso!', 200


