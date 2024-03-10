from flask import Flask

from .delete_views import delete_routes
from .get_views import get_routes
from .patch_views import patch_routes
from .post_views import post_routes 

def init_app(app: Flask):
    post_routes(app)
    get_routes(app)
    patch_routes(app)
    delete_routes(app)
