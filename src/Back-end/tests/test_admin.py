from random import randrange

from tests import get_fake_data_profile


fake_profile = {'type': 'admin'}

def test_register_new_admin(client):

    random_email = f"Beltrano_{randrange(1, 1000000000)}@mail.com"
    fake_profile.update({'email': random_email})
    
    response = client.post('/admin', json={
        "nome":"Beltrano de Tal",
	    "email": random_email
    })

    assert response.status_code == 201


def test_get_all_admins(client):

    response = client.get('/admin')
    assert response.status_code == 200


def test_update_admin_register(client):

    user = get_fake_data_profile(client, fake_profile)

    response = client.patch('/admin', json={
    "id": user.get("_id"),
    "nome": "Beltrano de tal da Silva",
    })

    assert response.status_code == 200


def test_update_admin_without_send_id(client):
    
    response = client.patch('/admin', json={
    "email": "beltrano777@gmail.com",
    })

    assert response.status_code == 400


def test_delete_admin_user(client):

    user = get_fake_data_profile(client, fake_profile)
    fake_profile.update({"id": user.get("_id")})

    response = client.delete('/admin', json={
        "id": fake_profile.get("id")
    })

    assert response.status_code == 200


def test_delete_unregistered_admin(client):
        
    response = client.delete('/admin', json={
        "id": fake_profile.get("id")
    })

    assert response.status_code == 400
