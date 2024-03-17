from flask import request

from app.controller import update_teacher_profile

def patch_routes(app):
    @app.patch('/teacher')
    def change_teacher_data_profile():
        data = request.get_json()
        return update_teacher_profile(data)
