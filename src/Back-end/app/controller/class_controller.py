from bson import ObjectId
from flask import jsonify

from app.controller import classes_collection
from app.services import verify_request_data, get_data_by_id


def get_class_profile(data):

    wrong_request_data = verify_request_data(data, classes_collection, 'GET')
    if wrong_request_data:
        return wrong_request_data, 400
    
    class_id = data.get('id')
    class_profile = classes_collection.find_one({'_id': ObjectId(class_id)})

    class_profile = get_data_by_id(class_id, classes_collection)

    return jsonify(class_profile), 200