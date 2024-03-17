from datetime import datetime
from bson import ObjectId

def verify_user_email(email, collection_data):

    teacher_list = [teacher for teacher in collection_data]

    for teacher in teacher_list:
        if teacher["email"] == email:
            return 'Email já cadastrado!'
    

def verify_request_data(request_data, collection):
    
    user_id = request_data.get('id')

    if not user_id:
        return 'Necessário enviar a propriedade "id" e seu respectivo valor no corpo da requisição'

    if not ObjectId.is_valid(user_id):
        return 'O valor da propriedade "id" enviado não é válida'

    if len(request_data.keys()) == 1:
        return  'Necessário enviar um ou mais valores para a execução desta requisição'
    
    user_data = collection.find_one({"_id": ObjectId(user_id)})
    if not user_data:
        return 'Usuário inexistente'


def update_time_data():

    now_datetime = datetime.now().strftime("%d/%m/%Y - %H:%M")
    return {"$set": {'data_atualizacao': now_datetime}}

    