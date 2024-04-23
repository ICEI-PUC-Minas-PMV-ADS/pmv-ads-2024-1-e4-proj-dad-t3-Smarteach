from flask import jsonify
from bson import ObjectId

from app.model import Admin 
from app.controller import admin_collection
from app.services import get_items_data, verify_user_email, verify_request_data, update_time_data, verify_update_sent_data_request, get_data_by_id

def get_available_admins():

    admin_list = get_items_data(admin_collection.find({}))

    return jsonify(admin_list), 200


def insert_new_admin(data: dict):

    is_wrong_data = Admin.verify_new_admin_data(data)

    if is_wrong_data: 
        return is_wrong_data, 400

    is_same_email = verify_user_email(data["email"], admin_collection.find({}))

    if is_same_email: 
        return is_same_email, 409

    new_Admin = Admin(**data)
    admin_collection.insert_one(new_Admin.__dict__)

    return 'Novo Administrador registrado com sucesso!', 201


def delete_admin_profile(data):

    wrong_data_request = verify_request_data(data, admin_collection)
    if wrong_data_request: 
        return wrong_data_request, 400

    admin_id = ObjectId(data['id'])
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

    user_id = data.get('id')
    available_student_keys = ['name', 'email', 'password', 'id']

    wrong_properties = verify_update_sent_data_request(data, available_student_keys)
    if wrong_properties:
        return wrong_properties, 400


    update_data = {key: data[key] for key in data.keys() if key != 'id'}

    if update_data:
        new_values = {"$set": update_data}
        admin_collection.update_one({'_id': ObjectId(user_id)}, new_values)
        admin_collection.update_one({'_id': ObjectId(user_id)}, update_time_data())

        return 'Perfil de Administrador atualizado com sucesso!', 200


def get_admin_profile(user_id):

    wrong_request_data = verify_request_data({'id': user_id}, admin_collection, 'GET')
    if wrong_request_data:
        return wrong_request_data, 400
    
    admin_profile = get_data_by_id(user_id, admin_collection)

    return jsonify(admin_profile), 200


