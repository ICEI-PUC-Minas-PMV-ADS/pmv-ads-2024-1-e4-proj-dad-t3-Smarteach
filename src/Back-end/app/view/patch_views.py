from flask import request

from app.controller import update_teacher_profile
from app.controller import update_class

def patch_routes(app):
    @app.patch('/teacher')
    def change_teacher_data_profile():
        data = request.get_json()
        return update_teacher_profile(data)
    
    @app.patch('/class')
    def change_class_data():
        data = request.get_json()
        return update_class(data)
    

