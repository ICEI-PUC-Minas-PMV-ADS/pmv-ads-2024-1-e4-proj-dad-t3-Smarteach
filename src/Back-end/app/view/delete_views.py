from app.controller import delete_teachers_profiles
from app.controller import delete_class

from flask import request

def delete_routes(app):
    @app.delete('/teacher')
    def delete_teacher():
        data = request.get_json()
        return delete_teachers_profiles(data)
    
    @app.delete('/class')
    def delete_classes():
        data = request.get_json()
        return delete_class(data)
