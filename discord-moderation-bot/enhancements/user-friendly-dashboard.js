import Flask

app = Flask(__name__)

# Define routes for the user-friendly dashboard
@app.route('/')
def home():
    return "Welcome to the user-friendly dashboard for the Discord moderation bot."

@app.route('/settings')
def settings():
    return "Here you can configure bot settings without code."

@app.route('/manage-servers')
def manage_servers():
    return "Manage moderation across multiple Discord servers."

@app.route('/updates')
def updates():
    return "Regular updates and bug fixes for bot reliability."

if __name__ == '__main__':
    app.run(debug=True)