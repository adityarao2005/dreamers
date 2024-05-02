# Imports
from flask import Flask, request, jsonify
from flask_cors import CORS
from script import create_image, generate_caption

# Create the Flask app
app = Flask(__name__)
CORS(app)

@app.route('/api/generate_caption', methods=['POST'])
def generate_caption_route():
	data = request.get_json()
	caption = generate_caption(data['image_path'])
	return jsonify({'caption': caption})

@app.route('/api/create_image', methods=['POST'])
def create_image_route():
	data = request.get_json()
	filename = create_image(data['prompt'])
	return jsonify({'image_path': '/api/image/' + filename})

@app.route('/api/image/<imagename>', methods=['GET'])
def get_image():
	data = request.view_args['imagename']
	return app.send_static_file('test-images/' + data)

if __name__ == "__main__":
	print("Starting Flask Server")
	app.run(port=8000)
	print("Flask Server Running")