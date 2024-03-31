from flask import request

from app.controller import delete_teacher_profile, delete_student_profile, delete_class


def delete_routes(app):
    @app.delete('/teacher')
    def delete_teacher_data_profile():
        data = request.get_json()
        return delete_teacher_profile(data)
    
    @app.delete('/student')
    def delete_student_data_profile():
        data = request.get_json()
        return delete_student_profile(data)
         
    @app.delete('/class')
    def delete_classes():
        data = request.get_json()
        return delete_class(data)
