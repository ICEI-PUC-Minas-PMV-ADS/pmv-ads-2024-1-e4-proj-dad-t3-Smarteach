from flask import jsonify

from app.controller import teacher_collection
from app.services import verify_request_data, get_data_by_id


def get_teacher_profile(data: dict):

    wrong_request_data = verify_request_data(data, teacher_collection, 'GET')
    if wrong_request_data:
        return wrong_request_data, 400
    
    user_id = data.get('id')
    teacher_profile = get_data_by_id(user_id, teacher_collection)

    return jsonify(teacher_profile), 200