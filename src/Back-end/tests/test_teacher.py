from random import randrange, choice

from tests import available_school_subjects


def test_get_all_teachers(client):

    response = client.get('/teacher')
    assert response.status_code == 200

def test_register_new_teacher(client):

    random_number = randrange(1, 1000000000)
    random_subject = choice(available_school_subjects) 

    response = client.post('/teacher', json={
        "nome":"Fulano de Tal",
	    "email": f"fulano_{random_number}@mail.com",
	    "disciplina": random_subject,
	    "turmas": [101],
	    "turno": "vespertino"
    })

    assert response.status_code == 200