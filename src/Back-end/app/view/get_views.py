from flask import request

from app.controller.teacher_controller import get_teacher_profile, get_available_teachers
from app.controller.class_controller import get_class_profile, get_available_classes
from app.controller.student_controller import get_available_students
from app.controller.admin_controller import get_available_admins
from app.controller.activity_controller import get_month_class_activities


def get_routes(app):

    @app.get('/teacher')
    def show_teachers():
        return get_available_teachers()
    
    @app.get('/teacher/profile')
    def show_teacher_profile():
        data = request.get_json()
        return get_teacher_profile(data)
    
    @app.get('/class')
    def show_classes():
        return get_available_classes()
    
    @app.get('/class/profile')
    def show_class_profile():
        data = request.get_json()
        return get_class_profile(data)
    
    @app.get('/class/activity')
    def show_monthly_class_activities_data():
        data = request.get_json()
        return get_month_class_activities(data)
    
    @app.get('/student')
    def show_students():
        return get_available_students()
    
    @app.get('/admin')
    def show_admins():
        return get_available_admins()
