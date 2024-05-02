import google.generativeai as genai
import PIL.Image
from google.cloud import aiplatform
import vertexai.preview
import openai
import os
import uuid

#new 
import requests  # For making HTTP requests to download the image
from PIL import Image  # For handling image operations
from io import BytesIO  # For handling byte streams

#GOOGLE_API_KEY=userdata.get('AIzaSyB0hEjMquhMEzna55Myi26GTlKeoF04uow')
genai.configure(api_key='AIzaSyB0hEjMquhMEzna55Myi26GTlKeoF04uow')

#open ai key CHANGE TO BE SECURE LATER !!! 
openai.api_key = "sk-proj-hk91tefWL5uTUWYBXlAgT3BlbkFJs7jP2RECLioa5qvti98W" 

def create_image(user_prompt):
	response = openai.Image.create(
		prompt=user_prompt, 
		n=1, #number of images 
		size="1024x1024" #size of the image 
	)

	image_url = response['data'][0]['url']
	#print(image_url)

	# Download the image from the URL
	response = requests.get(image_url)
	image = Image.open(BytesIO(response.content))

	# Define the path where you want to save the image
	filename = str(uuid.uuid4()) + '.jpg'
	image_path = os.path.join('apps/backend/test-images', filename)

	# Save the image to a JPG file
	image.save(image_path, "JPEG")
	return filename


def generate_caption(image_path):
	img = PIL.Image.open(image_path)
	model = genai.GenerativeModel('gemini-pro-vision')
	response = model.generate_content(["Write a meditation captions using this image as a prompt for the scene.", img])
	return response.text

#Generate Caption from Word: 
#model = genai.GenerativeModel('gemini-pro')
#word = 'grass'
#response = model.generate_content("Given the word " + word + ", write meditation captions based on this word.")
#print(response.text)










#