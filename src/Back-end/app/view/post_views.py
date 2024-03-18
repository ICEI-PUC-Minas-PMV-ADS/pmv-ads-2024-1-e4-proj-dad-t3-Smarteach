from flask import request

from app.controller import insert_new_teacher, insert_new_class

def post_routes(app):

    @app.post('/teacher')
    def register_teacher():
        data = request.get_json()
        return insert_new_teacher(data)
    
    @app.post('/class')
    def register_class():
        data = request.get_json()
        return insert_new_class(data)