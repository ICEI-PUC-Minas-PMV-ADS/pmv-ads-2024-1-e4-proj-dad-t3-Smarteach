from app.controller import get_available_teachers

def get_routes(app):
    @app.get('/teacher')
    def show_teachers():
        return get_available_teachers()
