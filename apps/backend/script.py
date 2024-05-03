import google.generativeai as genai
import PIL.Image
from google.cloud import aiplatform
import vertexai.preview
import openai
import os
import uuid
import constants

#new 
import requests  # For making HTTP requests to download the image
from PIL import Image  # For handling image operations
from io import BytesIO  # For handling byte streams

#GOOGLE_API_KEY=userdata.get('AIzaSyB0hEjMquhMEzna55Myi26GTlKeoF04uow')
genai.configure(api_key=constants.GOOGLE_API_KEY)

#open ai key CHANGE TO BE SECURE LATER !!! 
openai.api_key = constants.OPEN_AI_API_KEY

def create_image(user_prompt):
	response = openai.Image.create(
		prompt=user_prompt, 
		n=6, #number of images 
		size="1024x1024" #size of the image 
	)

	image_urls = []
	for image in response['data']:
		image_url = image['url']
		# Download the image from the URL
		response = requests.get(image_url)
		image = Image.open(BytesIO(response.content))
		# Define the path where you want to save the image
		filename = str(uuid.uuid4()) + '.jpg'
		image_path = os.path.join('apps/backend/static', filename)
		image_urls.append(filename)
		# Save the image to a JPG file
		image.save(image_path, "JPEG")
	return image_urls


def generate_caption(word):
	model = genai.GenerativeModel('gemini-pro')
	response = model.generate_content("Given the word " + word + ", write meditation captions based on this word.")
	return response.text

# img = PIL.Image.open(image_path)
# model = genai.GenerativeModel('gemini-pro-vision')
# response = model.generate_content(["Write a meditation captions using this image as a prompt for the scene.", img])
# print(response.text)











#