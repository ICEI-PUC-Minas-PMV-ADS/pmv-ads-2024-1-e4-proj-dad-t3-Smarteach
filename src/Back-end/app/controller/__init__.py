import os
# import urllib.parse
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()
# DB_USER = urllib.parse.quote_plus(os.getenv('DB_USER'))
# PASSWORD = urllib.parse.quote_plus(os.getenv('PASSWORD'))

STR_CONNECTION = os.getenv('DB_STR_CONNECTION')

client = MongoClient(STR_CONNECTION)

db = client['SmarTeach']
db_collections = db.list_collection_names()
app_collections = ['Professores', 'Alunos', 'Admins', 'Turmas']

if db_collections != app_collections:
    for collection_name in app_collections:
        if collection_name not in db_collections:
            db.create_collection(collection_name)

teacher_collection = db.get_collection('Professores')
student_collection = db.get_collection('Alunos')
admin_collection = db.get_collection('Admins')
classes_collection = db.get_collection('Turmas')


def signin_user(data):
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return 'Necessário enviar email e password do usuário!', 404
    
    for collection in [student_collection, teacher_collection, admin_collection]:

        user = collection.find_one({'email': email})
        collection_name = collection.name

        if not user:
            continue
        
        if user.get('password') == password:
            user_level = 1

            if collection.name == 'Professores':
                user_level += 1

            elif collection.name == 'Admins':
                user_level += 2

            user_info = {
                'user_level': str(user_level),
                'name': user.get('name'),
                'user_class': user.get('class_number') if collection_name == "Alunos" else user.get('classes')
            }

            return user_info, 200
        
        else:
            return 'Senha incorreta', 400 

    return 'Usuário não registrado!', 400
