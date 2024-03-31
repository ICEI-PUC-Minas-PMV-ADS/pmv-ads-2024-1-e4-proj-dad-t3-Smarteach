from flask import jsonify
from bson import ObjectId

from app.model import Teacher
from app.controller import teacher_collection
from app.services import verify_request_data, get_items_data, get_data_by_id, verify_user_email, update_time_data


def get_available_teachers():

    teacher_list = get_items_data(teacher_collection.find({}))

    return jsonify(teacher_list), 200


def get_teacher_profile(data: dict):

    wrong_request_data = verify_request_data(data, teacher_collection, 'GET')
    if wrong_request_data:
        return wrong_request_data, 400
    
    user_id = data.get('id')
    teacher_profile = get_data_by_id(user_id, teacher_collection)

    return jsonify(teacher_profile), 200


def insert_new_teacher(data: dict):

    is_wrong_data = Teacher.verify_new_teacher_data(data)  

    if is_wrong_data: 
        return is_wrong_data, 400

    new_teacher = Teacher(**data)

    is_same_email = verify_user_email(data["email"], teacher_collection.find({}))

    if is_same_email: 
        return is_same_email, 400

    teacher_collection.insert_one(new_teacher.__dict__)

    return 'Novo Professor registrado com sucesso!', 200
    

def update_teacher_profile(data):

    wrong_data_request = verify_request_data(data, teacher_collection, 'PATCH')
    if wrong_data_request: 
        return wrong_data_request, 400

    user_id = data.get('id')

    for key in data.keys():

        if key != 'id':
            new_values = {"$set": {key: data[key]} }
            teacher_collection.update_one({'_id' : ObjectId(user_id)}, new_values)
    
    teacher_collection.update_one({'_id' : ObjectId(user_id)}, update_time_data())

    return 'Perfil de Professor atualizado com sucesso!', 200


def delete_teacher_profile(data):
    
    wrong_data_request = verify_request_data(data, teacher_collection)
    if wrong_data_request: 
        return wrong_data_request, 400
    
    user_id = data.get('id')
    teacher_collection.delete_one({"_id": ObjectId(user_id) })

    return 'Perfil de Professor deletado com sucesso!', 200 
