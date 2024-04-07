from random import randrange

from tests import get_fake_data_profile

fake_profile = {'type': 'student'}

def test_get_all_students(client):

    response = client.get('/student')
    assert response.status_code == 200
    

def test_register_new_student(client):

    random_email = f"ciclano_{randrange(1, 1000000000)}@mail.com"
    fake_profile.update({'email': random_email})
    
    response = client.post('/student', json={
        "name":"Ciclano de Tal",
	    "email": random_email,
	    "class_number": 101
    })

    assert response.status_code == 201


def test_register_new_student_with_registered_email(client):
    
    response = client.post('/student', json={
        "name":"Peter parker",
	    "email": fake_profile.get("email"),
	    "class_number": 101
    })

    assert response.status_code == 400


def test_update_student_register(client):

    user = get_fake_data_profile(client, fake_profile)
    
    response = client.patch('/student', json={
    "id": user.get("_id"),
    "name": "Ciclano de Tal dos Santos",
    "class_number": 102
    })

    assert response.status_code == 200


def test_update_student_without_send_id(client):
    
    response = client.patch('/student', json={
    "email": "ciclano@mail.com",
    "turno": "Noturno"
    })

    assert response.status_code == 400


def test_update_student_sent_wrong_properties(client):

    user = get_fake_data_profile(client, fake_profile)
    random_number = randrange(1, 700)

    response = client.patch('/student', json={
    "id": user.get("_id"),
    "name": "Fulano de Tal Silva",
    "batata": "frita_646985",
    "luluzinha77": random_number,
    })

    assert response.status_code == 400


def test_delete_student_user(client):

    user = get_fake_data_profile(client, fake_profile)
    fake_profile.update({"id": user.get("_id")})

    response = client.delete('/student', json={
        "id": fake_profile.get("id")
    })

    assert response.status_code == 200


def test_delete_unregistered_student(client):
        
    response = client.delete('/student', json={
        "id": fake_profile.get("id")
    })

    assert response.status_code == 400
