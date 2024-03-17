from datetime import datetime

def verify_user_email(email, collection_data):

    teacher_list = [teacher for teacher in collection_data]

    for teacher in teacher_list:
        if teacher["email"] == email:
            return 'Email já cadastrado!'
    

def verify_request_data(request_data):

    email = request_data.get('email')
    if not email:
        return 'Necessário enviar a propriedade "email" e seu respectivo valor no corpo da requisição'

    if len(request_data.keys()) == 1:
        return  'Necessário enviar os valores para a execução desta requisição'


def update_time_data():

    now_datetime = datetime.now().strftime("%d/%m/%Y - %H:%M")
    return {"$set": {'data_atualizacao': now_datetime}}
    