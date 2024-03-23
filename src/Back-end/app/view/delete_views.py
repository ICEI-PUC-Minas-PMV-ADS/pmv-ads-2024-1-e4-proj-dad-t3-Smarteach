from app.controller import delete_teacher_profile, delete_student_profile
from flask import request

def delete_routes(app):
    @app.delete('/teacher')
    def delete_teacher_data_profile():
        data = request.get_json()
        return delete_teacher_profile(data)
    

    @app.delete('/student')
    def delete_student_data_profile():
        data = request.get_json()
        return delete_student_profile(data)
    
