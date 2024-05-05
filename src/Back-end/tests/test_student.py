from random import randrange, randint

from tests import get_fake_data_profile

fake_profile = {'type': 'student'}

def test_get_all_students(client):

    response = client.get('/student')
    assert response.status_code == 200
    

def test_register_new_student(client):

    random_email = f"ciclano_{randrange(1, 1000000000)}@mail.com"
    fake_profile.update({'email': random_email})

    random_number = randint(100, 1000)
    client.post('/class', json={"number": random_number})
    fake_profile.update({'class_number': random_number})
    
    response = client.post('/student', json={
        "name":"Ciclano de Tal",
	    "email": random_email,
        "password": f"kishiq-{randrange(1, 100)}",
	    "class_number": fake_profile.get('class_number')
    })

    assert response.status_code == 201

def test_register_new_student_in_an_inexistent_class(client):

    random_email = f"ciclano_{randrange(1, 1000000000)}@mail.com"
    random_number = randint(10001, 100000000000)
    
    response = client.post('/student', json={
        "name":"Ciclano de Tal",
	    "email": random_email,
        "password": f"kishiq-{randrange(1, 100)}",
	    "class_number": random_number
    })

    assert response.status_code == 400


def test_register_new_student_with_an_registered_email(client):
    
    response = client.post('/student', json={
        "name":"Peter parker",
	    "email": fake_profile.get("email"),
        "password": f"kishiq-{randrange(1, 100)}",
	    "class_number": fake_profile.get('class_number')
    })

    client.delete('/class', json={"number": fake_profile.get('class_number')})

    assert response.status_code == 409


def test_get_an_specific_student_profile(client):

    user = get_fake_data_profile(client, fake_profile)
    student_id = user.get('_id')

    response = client.get(f'student/profile/{student_id}')

    assert response.status_code == 200


def test_update_student_register(client):

    user = get_fake_data_profile(client, fake_profile)
    
    response = client.patch('/student', json={
    "id": user.get("_id"),
    "name": "Ciclano de Tal dos Santos"
    })

    assert response.status_code == 200


def test_update_student_without_send_id(client):
    
    response = client.patch('/student', json={
    "email": "ciclano@mail.com",
    "turma": 174
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

    fake_class_data = {'type': 'class', 'number': fake_profile.get('class_number')}
    fake_class = get_fake_data_profile(client, fake_class_data)
    client.delete('/class', json={"id": fake_class.get('_id')})

    assert response.status_code == 200


def test_delete_unregistered_student(client):
        
    response = client.delete('/student', json={
        "id": fake_profile.get("id")
    })

    assert response.status_code == 400
