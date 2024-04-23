from random import randrange, choice, randint

from tests import available_school_subjects, get_fake_data_profile

fake_profile = {'type': 'teacher'}

def test_get_all_teachers(client):

    response = client.get('/teacher')
    assert response.status_code == 200


def test_register_new_teacher(client):

    random_subject = choice(available_school_subjects)
    random_email = f"fulano_{randrange(1, 1000000000)}@mail.com"
    fake_profile.update({'email': random_email})

    random_number = randint(100, 1000)
    client.post('/class', json={"number": random_number})
    fake_profile.update({'class_number': random_number})
    
    response = client.post('/teacher', json={
        "name":"Fulano de Tal",
	    "email": random_email,
        "password": f"kishiq-{randrange(1, 100)}",
	    "subject": random_subject,
	    "classes": [fake_profile.get('class_number')],
	    "period": "vespertino"
    })

    assert response.status_code == 201

def test_register_new_teacher_with_inexistent_classes(client):

    random_subject = choice(available_school_subjects)
    random_email = f"fulano_{randrange(1, 1000000000)}@mail.com"
    
    response = client.post('/teacher', json={
        "name":"Fulano de Tal",
	    "email": random_email,
        "password": f"kishiq-{randrange(1, 100)}",
	    "subject": random_subject,
	    "classes": [randint(77777, 1000000), randint(77777, 1000000)],
	    "period": "vespertino"
    })

    assert response.status_code == 400


def test_register_new_teacher_with_registered_email_in_data_base(client):

    random_subject = choice(available_school_subjects)
    
    response = client.post('/teacher', json={
        "name":"Fulano de Tal",
	    "email": fake_profile.get('email'),
        "password": f"batata-{randrange(1, 100)}",
	    "subject": random_subject,
	    "classes": [fake_profile.get('class_number')],
	    "period": "vespertino"
    })

    assert response.status_code == 409


def test_get_an_specific_teacher_profile(client):

    teacher = get_fake_data_profile(client, fake_profile)
    teacher_id = teacher.get('_id')

    response = client.get(f'teacher/profile/{teacher_id}')

    assert response.status_code == 200


def test_update_teacher_register(client):

    user = get_fake_data_profile(client, fake_profile)
    
    response = client.patch('/teacher', json={
    "id": user.get("_id"),
    "name": "Fulano de Tal Silva",
    "period": "Noperiod",
    "subject": choice(available_school_subjects)
    })

    assert response.status_code == 200

def test_update_teacher_sent_wrong_properties(client):

    user = get_fake_data_profile(client, fake_profile)
    random_number = randrange(1, 700)

    response = client.patch('/teacher', json={
    "id": user.get("_id"),
    "nome": "Fulano de Tal Silva",
    "fake77777": "batata",
    "foo_921": random_number,
    "subject": choice(available_school_subjects)
    })

    assert response.status_code == 400


def test_update_teacher_without_send_id(client):
    
    response = client.patch('/teacher', json={
    "email": "folano@mail.com",
    "period": "Noperiod",
    "subject": choice(available_school_subjects)
    })

    assert response.status_code == 400


def test_delete_teacher_user(client):

    user = get_fake_data_profile(client, fake_profile)

    fake_class_data = {'type': 'class', 'number': fake_profile.get('class_number')}
    fake_class = get_fake_data_profile(client, fake_class_data)
    client.delete('/class', json={"id": fake_class.get('_id')})

    fake_profile.update({"id": user.get("_id")})
    response = client.delete('/teacher', json={"id": fake_profile.get("id")})

    assert response.status_code == 200


def test_delete_unregistered_teacher(client):
        
    response = client.delete('/teacher', json={
        "id": fake_profile.get("id")
    })

    assert response.status_code == 400
