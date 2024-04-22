from random import randrange

fake_profile = {}

def test_app_is_created(app):
    assert app.name == "app"


def test_request_returns_404(client):
    assert client.get("").status_code == 404

def test_signin_with_new_admin_profile(client):

    random_email = f"Beltrano_{randrange(1, 1000000000)}@mail.com"
    password = f"kishiq-{randrange(1, 100)}"
    
    client.post('/admin', json={
        "name":"Beltrano de Tal",
	    "email": random_email,
        "password": password
    })

    response = client.post('/login', json={
	    "email": random_email,
        "password": password
    })

    assert response.status_code == 200
