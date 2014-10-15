from django.db import models

# Create your models here.

class Publicaciones(models.Model):
	title = models.CharField(max_length=50)
	description = models.CharField(max_length=300)
	information = models.TextField()
	#image = models.ImageField(upload_to = 'Publicaciones_Img')

	def __init__(self):
		return self.title