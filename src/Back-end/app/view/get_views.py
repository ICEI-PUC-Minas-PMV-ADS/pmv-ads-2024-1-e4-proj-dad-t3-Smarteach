from flask import jsonify
from app.controller import get_available_teachers, get_available_admins, get_available_classes, get_available_students

def get_routes(app):

    @app.get('/teacher')
    def show_teachers():
        return get_available_teachers()
    
    @app.get('/class')
    def show_classes():
        return get_available_classes()
    
    @app.get('/student')
    def show_students():
        return get_available_students()
    
    @app.get('/admin')
    def show_admins():
        admins = get_available_admins()

        return jsonify(admins)

