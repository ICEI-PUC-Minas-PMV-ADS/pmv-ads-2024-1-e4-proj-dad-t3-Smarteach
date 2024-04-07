from bson import ObjectId
from flask import jsonify

from app.model import Activity
from app.controller import classes_collection, teacher_collection
from app.services import verify_user_email

def insert_new_class_activity(data):

    is_wrong_data = Activity.verify_new_class_activity_data(data, classes_collection)  
    if is_wrong_data: 
        return is_wrong_data, 400
    
    is_registered_teacher = verify_user_email(data.get('teacher_email'), teacher_collection.find({}))
    if not is_registered_teacher:
        return "Professor inexistente!", 400
    
    new_activity = Activity(**data).__dict__

    day, month, year = data.get('date').split('/')
    time_interval = data.get('time')

    class_profile = classes_collection.find_one({'number': data.get('class_number')})
    class_profile['timeline'][year][month][day].update({time_interval: new_activity})

    new_values = {"$set": class_profile}
    classes_collection.update_one({'number': data.get('class_number')}, new_values)

    return 'Nova Aula registrada com sucesso!', 201
