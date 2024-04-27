from datetime import datetime
from bson import ObjectId
import re


def verify_user_email(email, collection_data):

    teacher_list = [teacher for teacher in collection_data]

    for teacher in teacher_list:
        if teacher.get("email") == email:
            return 'Email já cadastrado!'
    

def verify_request_data(request_data, collection, request_type=None):
    
    data_id = request_data.get('id') or request_data.get('class_id') 
    collection_name = collection.name

    if not data_id:
        return 'Necessário enviar a propriedade "id" e seu respectivo valor no corpo da requisição'

    if not ObjectId.is_valid(data_id):
        return 'O valor da propriedade "id" enviado não é válida'

    if len(request_data.keys()) == 1 and request_type == 'PATCH':
        return  'Necessário enviar um ou mais valores para a execução desta requisição'
    
    item_data = collection.find_one({"_id": ObjectId(data_id)})
    if not item_data:
        if collection_name not in ['Turmas', 'Aulas']:
            return 'Usuário inexistente'
        
        if collection_name == 'Turmas':
            return "Turma inexistente"
        
        if collection_name == 'Aulas':
            return "Aula inexistente"
        

def update_time_data():

    now_datetime = datetime.now().strftime("%d/%m/%Y - %H:%M")
    return {"$set": {'data_atualizacao': now_datetime}}


def get_items_data(data_collection):

    data_list = [data for data in data_collection]

    for index, elt in enumerate(data_list):
        data_list[index] = {key: elt[key] if key != '_id' else str(elt[key]) for key in elt}
    
    return data_list


def get_data_by_id(item_id, collection):

    item = collection.find_one({'_id': ObjectId(item_id)})
    item['_id'] = item_id

    return item


def get_user_by_email(email, collection):

    user_data = collection.find_one({'email': email})
    user = {key: user_data[key] for key in user_data if key in ['_id', 'name', 'subject']}
    user.update({'_id': str(user_data['_id'])})

    return user


def verify_data_format(data, type):
        
        regex = r"^'([01]?[0-9]|2[0-3]):([0-5][0-9])-([01]?[0-9]|2[0-3]):([0-5][0-9])$'"

        if type == 'DATE':
            regex = r"^'(0[1-9]|[1-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/\d{4}$'"

        is_wrong_format = re.search(regex, data)
        if is_wrong_format:
            return True

def verify_update_sent_data_request(data, available_keys):
        
    wrong_properties = []
    for key in data.keys():
        if key not in available_keys:
            wrong_properties.append({key: data[key]})
    
    if wrong_properties:
        return f"Propriedade(s) invalida(s): {wrong_properties}"
        
