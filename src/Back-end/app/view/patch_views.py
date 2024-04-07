from flask import request

from app.controller.teacher_controller import update_teacher_profile
from app.controller.student_controller import update_student_profile
from app.controller.class_controller import update_class_profile
from app.controller.admin_controller import update_admin_profile
from app.controller.activity_controller import update_class_activity_profile



def patch_routes(app):
    @app.patch('/teacher')
    def change_teacher_data_profile():
        data = request.get_json()
        return update_teacher_profile(data)
    
    @app.patch('/student')
    def change_student_data_profile():
        data = request.get_json()
        return update_student_profile(data)

    @app.patch('/class')
    def change_class_data_profile():
        data = request.get_json()
        return update_class_profile(data)
    
    @app.patch('/class/activity')
    def change_activity_class_data_profile():
        data = request.get_json()
        return update_class_activity_profile(data)
    
    @app.patch('/admin')
    def change_admin_data_profile():
        data = request.get_json()
        return update_admin_profile(data)
