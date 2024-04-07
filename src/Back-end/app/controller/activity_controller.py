
from flask import jsonify

from app.model import Activity, Class
from app.controller import classes_collection, teacher_collection
from app.services import verify_user_email, verify_update_sent_data_request, update_time_data

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


def get_month_class_activities(data):

    class_number = data.get('class_number')
    month, year = data.get('date').split('/')
    classes_data = classes_collection.find({})

    is_existent_data = Class.verify_if_exist_class_data(class_number, classes_data)  

    if not is_existent_data: 
        return "Turma inexistente", 400

    class_profile = classes_collection.find_one({'number': class_number})
    monthly_activities = class_profile['timeline'][year][month]

    return jsonify(monthly_activities), 200


def update_class_activity_profile(data):

    class_number = data.get('class_number')
    classes_data = classes_collection.find({})
    is_existent_data = Class.verify_if_exist_class_data(class_number, classes_data)  

    if not is_existent_data: 
        return "Turma inexistente", 400
 
    available_class_keys = ['teachers', 'students', 'subject', 'class_number', 'date', 'time']

    wrong_properties = verify_update_sent_data_request(data, available_class_keys)
    if wrong_properties:
        return wrong_properties, 400

    day, month, year = data.get('date').split('/')
    time_interval = data.get('time')

    class_profile = classes_collection.find_one({'number': class_number})
    current_activity = class_profile['timeline'][year][month][day][time_interval]

    for key in data.keys():
        if key not in ['class_number', 'date', 'time']:
            current_activity.update({key: data[key]})

    class_profile.update({"last_update_date": update_time_data()})

    new_values = {"$set": class_profile}
    classes_collection.update_one({'number': class_number}, new_values)

    return 'Aula atualizada com sucesso!', 200


def delete_class_activity_profile(data):

    class_number = data.get('class_number')
    classes_data = classes_collection.find({})

    is_existent_data = Class.verify_if_exist_class_data(class_number, classes_data)  
    if not is_existent_data: 
        return "Turma inexistente", 400
    
    available_class_keys = ['teachers', 'students', 'subject', 'class_number', 'date', 'time']
    wrong_properties = verify_update_sent_data_request(data, available_class_keys)

    if wrong_properties:
        return wrong_properties, 400
    
    day, month, year = data.get('date').split('/')
    time_interval = data.get('time')

    class_profile = classes_collection.find_one({'number': class_number})
    current_day_activity = class_profile['timeline'][year][month][day]

    if time_interval not in current_day_activity.keys():
        return 'Atividade inexistente', 400
    
    current_day_activity.pop(time_interval)
    new_values = {"$set": class_profile}
    classes_collection.update_one({'number': class_number}, new_values)

    return 'Aula removida com sucesso', 200
