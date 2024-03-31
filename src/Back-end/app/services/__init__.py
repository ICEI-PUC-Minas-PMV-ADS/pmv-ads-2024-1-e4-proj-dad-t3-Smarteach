from datetime import datetime
from bson import ObjectId

def verify_user_email(email, collection_data):

    teacher_list = [teacher for teacher in collection_data]

    for teacher in teacher_list:
        if teacher.get("email") == email:
            return 'Email já cadastrado!'
    

def verify_request_data(request_data, collection, request_type=None):
    
    data_id = request_data.get('id')
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


def verify_class_number(class_number, collection_data):

    class_data_list = [class_data for class_data in collection_data]

    for class_data in class_data_list:
        if class_data.get("number") == class_number:
            return 'Email já cadastrado!'


def update_time_data():

    now_datetime = datetime.now().strftime("%d/%m/%Y - %H:%M")
    return {"$set": {'data_atualizacao': now_datetime}}


def get_items_data(data_collection):

    data_list = [data for data in data_collection]

    for index, elt in enumerate(data_list):
        data_list[index] = {key: elt[key] for key in elt if key != '_id'}
    
    return data_list

    