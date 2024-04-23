from bson import ObjectId
from flask import jsonify

from app.model import Class
from app.controller import classes_collection
from app.services import verify_request_data, get_data_by_id, get_items_data, update_time_data, verify_update_sent_data_request


def get_available_classes():

    classes_list = get_items_data(classes_collection.find({}))
    return jsonify(classes_list), 200


def get_class_profile(class_id):

    wrong_request_data = verify_request_data({'id': class_id}, classes_collection, 'GET')
    if wrong_request_data:
        return wrong_request_data, 400

    class_profile = classes_collection.find_one({'_id': ObjectId(class_id)})
    class_profile = get_data_by_id(class_id, classes_collection)

    return jsonify(class_profile), 200


def insert_new_class(data):

    classes_data = classes_collection.find({})
    is_wrong_data = Class.verify_new_class_data(data) 
    is_inexistent_data = Class.verify_if_exist_class_data(data.get('number'), classes_data)  

    if is_wrong_data or is_inexistent_data: 
        return is_wrong_data or is_inexistent_data, 400

    new_class = Class(**data)
    classes_collection.insert_one(new_class.__dict__)

    return 'Nova turma registrada com sucesso!', 201


def update_class_profile(data):

    wrong_data_request = verify_request_data(data, classes_collection, 'PATCH')
    if wrong_data_request: 
        return wrong_data_request, 400

    class_id = data.get('id')
    available_class_keys = ['teachers', 'students', 'number', 'id']

    wrong_properties = verify_update_sent_data_request(data, available_class_keys)
    if wrong_properties:
        return wrong_properties, 400

    for key in data.keys():

        if key != 'id':
            new_values = {"$set": {key: data[key]}}
            classes_collection.update_one({'_id' : ObjectId(class_id)}, new_values)
    
    classes_collection.update_one({'_id' : ObjectId(class_id)}, update_time_data())

    return 'Turma atualizada com sucesso', 200


def delete_class_profile(data):

    wrong_data = verify_request_data(data, classes_collection)
    if wrong_data:
        return wrong_data, 400
 
    class_id = {"_id": ObjectId(data.get("id"))}
    classes_collection.delete_one(class_id)

    return 'Turma removida com sucesso', 200
