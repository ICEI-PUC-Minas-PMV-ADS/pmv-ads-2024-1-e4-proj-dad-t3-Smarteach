from random import randint

from tests import get_fake_data_profile

fake_profile = {'type': 'class'}

def test_get_all_classes(client):

    response = client.get('/class')
    assert response.status_code == 200


def test_register_new_class(client):

    random_number = randint(100, 10000)
    fake_profile.update({'number': random_number})

    response = client.post('/class', json={
	    "number": random_number
    })

    assert response.status_code == 201


def test_register_new_class_with_invalid_data_type(client):

    response = client.post('/class', json={
	    "number": 'batata congelada'
    })

    assert response.status_code == 400


def test_register_new_class_breaking_class_number_rule(client):
    
    response = client.post('/class', json={
	    "number": 91
    })

    assert response.status_code == 400


def test_update_class_number(client):

    class_data = get_fake_data_profile(client, fake_profile)
    random_number = randint(100, 1001)
    fake_profile.update({'number': random_number})

    response = client.patch('/class', json={
    "id": class_data.get("_id"),
    "number": random_number,
    })

    assert response.status_code == 200


def test_update_class_register_sent_wrong_properties(client):

    user = get_fake_data_profile(client, fake_profile)

    response = client.patch('/class', json={
    "id": user.get("_id"),
    "teachers": [],
    "startgate": "frita_646985",
    "pokemon": 119819,
    })

    assert response.status_code == 400


def test_update_class_without_send_id(client):
    
    response = client.patch('/class', json={
    "number": randint(100, 1001),
    })

    assert response.status_code == 400


def test_delete_class_register(client):

    class_data = get_fake_data_profile(client, fake_profile)
    fake_profile.update({"id": class_data.get("_id")})

    response = client.delete('/class', json={
        "id": fake_profile.get("id")
    })

    assert response.status_code == 200


def test_delete_unregistered_class(client):
        
    response = client.delete('/class', json={
        "id": fake_profile.get("id")
    })

    assert response.status_code == 400
