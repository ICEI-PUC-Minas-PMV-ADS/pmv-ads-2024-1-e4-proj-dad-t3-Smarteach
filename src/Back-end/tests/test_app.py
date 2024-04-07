
def test_app_is_created(app):
    assert app.name == "app"


def test_request_returns_404(client):
    assert client.get("").status_code == 404