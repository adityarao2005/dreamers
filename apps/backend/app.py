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
	caption = generate_caption(data['word'])
	return jsonify({'caption': caption})

@app.route('/api/create_image', methods=['POST'])
def create_image_route():
	data = request.get_json()
	filenames = create_image(data['prompt'])
	print(filenames)
	new_images = list(map((lambda x: '/api/image/' + x), filenames))
	print(new_images)
	return jsonify({ 'image_urls' : new_images })

@app.route('/api/image/<imagename>', methods=['GET'])
def get_image(imagename):
	return app.send_static_file(imagename)

if __name__ == "__main__":
	print("Starting Flask Server")
	app.run(port=8000)
	print("Flask Server Running")