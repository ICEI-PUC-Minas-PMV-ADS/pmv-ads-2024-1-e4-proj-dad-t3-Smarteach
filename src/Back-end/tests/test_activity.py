from random import randint

from tests import get_fake_data_profile

fake_profile = {}

def test_insert_new_class_activity(client):
    random_email = f"prof_{randint(1, 1000000000)}@mail.com"
    random_class_number = randint(100, 1000)
    random_time_number = randint(10, 21)

    random_date = f"{randint(10, 31)}/03/2024"
    random_time = f"{random_time_number}:00-{random_time_number + 1}:00" 

    fake_profile.update({'date': random_date})
    fake_profile.update({'time': random_time})
    fake_profile.update({'email': random_email})
    fake_profile.update({'class_number': random_class_number})

    client.post('/class', json={
        "number": random_class_number
    })

    client.post('/teacher', json={
        "name":"Charles Xavier",
        "email": fake_profile.get('email'),
        "subject": "Genética",
        "classes": [fake_profile.get('class_number')],
        "period": "vespertino"
    })

    response = client.post('/class/activity', json= {
        "name":"Aula",
        "date":random_date,
        "time": random_time,
        "class_number": fake_profile.get('class_number'),
        "subject": "Biologia",
        "teacher_email": fake_profile.get('email'),
        "recurrency": "weekly"
    })

    assert response.status_code == 201


def test_insert_new_class_activity_with_wrong_data(client):
        
    response = client.post('/class/activity', json= {
        "name":"Aula",
        "date":"11/03/2024",
        "time": "10:00-11:00",
        "class_number": fake_profile.get('class_number'),
        "subject898": "Biologia",
        "teacher_email": fake_profile.get('email'),
        "null": 'foo'
    })

    assert response.status_code == 400


def test_insert_new_class_activity_in_a_inexistent_class(client):

    response = client.post('/class/activity', json= {
        "name":"Aula",
        "date":"17/03/2024",
        "time": "10:00-11:00",
        "class_number": 999999999999,
        "subject898": "Biologia",
        "teacher_email": fake_profile.get('email'),
        "null": 'foo'
    })

    assert response.status_code == 400


def test_insert_new_class_activity_with_same_timeline_of_another_activity(client):

    response = client.post('/class/activity', json= {
        "name":"Aula",
        "date": fake_profile.get('date'),
        "time": fake_profile.get('time'),
        "class_number": fake_profile.get('class_number'),
        "subject": "Botânica",
        "teacher_email": fake_profile.get('email'),
        "recurrency": "weekly"
    })

    assert response.status_code == 400


def test_get_monthly_class_activities(client):

    response = client.get('/class/activity', json={
        "class_number": fake_profile.get('class_number'),
	    "date":"03/2024"
    })
    
    assert response.status_code == 200


def test_get_monthly_class_activities_in_a_inexistent_class(client):

    response = client.get('/class/activity', json={
        "class_number": 1849498494949,
	    "date":"03/2024"
    })
    
    assert response.status_code == 400


def test_update_an_existent_class_activity_profile(client):

    response = client.patch('/class/activity', json= {
        "date":fake_profile.get('date'),
        "time": fake_profile.get('time'),
        "class_number": fake_profile.get('class_number'),
        "subject": "Microbiologia celular",
    })

    assert response.status_code == 200


def test_update_an_inexistent_class_activity_profile(client):

    response = client.patch('/class/activity', json= {

        "date":"01/03/2024",
        "time": "15:00-16:00",
        "class_number": 199948468545,
        "subject": "Mecânica",
    })

    assert response.status_code == 400


def test_delete_an_existent_class_activity(client):

    response = client.delete('/class/activity', json= {
        "date": fake_profile.get('date'),
        "time": fake_profile.get('time'),
        "class_number": fake_profile.get('class_number')
    })

    assert response.status_code == 200
    

def test_delete_an_inexistent_class_activity(client):

    response = client.delete('/class/activity', json= {
        "date": fake_profile.get('date'),
        "time": "05:00-06:00",
        "class_number": fake_profile.get('class_number')
    })

    assert response.status_code == 400
    