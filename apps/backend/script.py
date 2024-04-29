import google.generativeai as genai
import PIL.Image
from google.cloud import aiplatform
import vertexai.preview

#GOOGLE_API_KEY=userdata.get('AIzaSyB0hEjMquhMEzna55Myi26GTlKeoF04uow')
genai.configure(api_key='AIzaSyB0hEjMquhMEzna55Myi26GTlKeoF04uow')

#Generate Caption from Image : 
img = PIL.Image.open('apps/backend/test-images/grassyfield.jpg')
model = genai.GenerativeModel('gemini-pro-vision')
response = model.generate_content(["Write a meditation captions using this image as a prompt for the scene.", img])
print(response.text)

#Generate Caption from Word: 

model = genai.GenerativeModel('gemini-pro')
word = 'grass'
response = model.generate_content("Given the word " + word + ", write meditation captions based on this word.")
#print(response.text)










#