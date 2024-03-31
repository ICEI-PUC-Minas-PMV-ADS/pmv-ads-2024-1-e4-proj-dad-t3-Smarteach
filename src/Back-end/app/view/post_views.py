from flask import request

from app.controller.teacher_controller import insert_new_teacher
from app.controller.class_controller import insert_new_class
from app.controller.student_controller import insert_new_student
from app.controller.admin_controller import insert_new_admin


def post_routes(app):

    @app.post('/teacher')
    def register_teacher():
        data = request.get_json()
        return insert_new_teacher(data)

    @app.post('/admin')
    def register_admin():
        data = request.get_json()
        return insert_new_admin(data)
    
    @app.post('/class')
    def register_class():
        data = request.get_json()
        return insert_new_class(data)
    
    @app.post('/student')
    def register_student():
        data = request.get_json()
        return insert_new_student(data)