from flask import request

from app.controller.teacher_controller import get_teacher_profile, get_available_teachers
from app.controller.student_controller import get_student_profile, get_available_students
from app.controller.class_controller import get_class_profile, get_available_classes
from app.controller.admin_controller import get_admin_profile, get_available_admins
from app.controller.activity_controller import get_month_class_activities


def get_routes(app):

    @app.get('/teacher')
    def show_teachers():
        return get_available_teachers()
    
    @app.get('/teacher/profile/<teacher_id>')
    def show_teacher_profile(teacher_id):
        return get_teacher_profile(teacher_id)
    
    @app.get('/class')
    def show_classes():
        return get_available_classes()
    
    @app.get('/class/profile/<class_id>')
    def show_class_profile(class_id):
        return get_class_profile(class_id)
    
    @app.get('/class/activity/<int:class_number>/<date>')
    def show_monthly_class_activities_data(class_number, date):
        return get_month_class_activities(class_number, date)
    
    @app.get('/student')
    def show_students():
        return get_available_students()
    
    @app.get('/student/profile/<student_id>')
    def show_student_profile(student_id):
        return get_student_profile(student_id)
    
    
    @app.get('/admin')
    def show_admins():
        return get_available_admins()
    
    @app.get('/admin/profile/<admin_id>')
    def show_admin_profile(admin_id):
        return get_admin_profile(admin_id)
