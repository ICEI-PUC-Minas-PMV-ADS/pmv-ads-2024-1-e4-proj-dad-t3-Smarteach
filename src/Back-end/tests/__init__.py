from app.model import Student, Teacher, Class, Admin, Activity

available_school_subjects = [
    'Matemática', 
    'Física', 
    'Inglês', 
    'Espanhol', 
    'Biologia', 
    'Português', 
    'Química',
    'Literatra',
    'Geografia',
    'História',
    'Educação física'
]

def get_fake_data_profile(client, fake_key_property):

    response = client.get(f"/{fake_key_property.get('type')}")
    property = 'email' if fake_key_property.get('email') else 'number'

    for user_data in response.json:
        if user_data.get(property) == fake_key_property.get(property):
            return user_data
