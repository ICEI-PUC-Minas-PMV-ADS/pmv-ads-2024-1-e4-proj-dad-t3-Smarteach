from app.controller import get_available_teachers, get_available_classes

def get_routes(app):

    @app.get('/teacher')
    def show_teachers():
        return get_available_teachers()
    
    @app.get('/class')
    def show_classes():
        return get_available_classes()
