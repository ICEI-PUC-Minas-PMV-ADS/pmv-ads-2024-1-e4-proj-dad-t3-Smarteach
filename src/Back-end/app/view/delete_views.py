from flask import request

from app.controller.teacher_controller import delete_teacher_profile
from app.controller.student_controller import delete_student_profile
from app.controller.class_controller import delete_class_profile
from app.controller.admin_controller import delete_admin_profile
from app.controller.activity_controller import delete_class_activity_profile


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
    def delete_class_data_profile():
        data = request.get_json()
        return delete_class_profile(data)
    
    @app.delete('/class/activity')
    def delete_activity_class_data_profile():
        data = request.get_json()
        return delete_class_activity_profile(data)

    @app.delete('/admin')
    def delete_admin_data_profile():
        data = request.get_json()
        return delete_admin_profile(data)