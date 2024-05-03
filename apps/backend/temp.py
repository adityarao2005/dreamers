images = ["asdfasdf", "asdfasdf", "asdfasdf", "asdfasdf", "asdfasdf"]
new_images = list(map((lambda x: '/api/image/' + x), images))
print(new_images)