from app.controller import delete_teachers_profiles
from flask import request

def delete_routes(app):
    @app.delete('/teacher')
    def delite_teacher():
        data = request.get_json()
        return delete_teachers_profiles(data)
