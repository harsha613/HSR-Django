from django.db import models
from django.conf import settings
from django.utils import timezone

# Create your models here.
class feedback(models.Model):
     name=models.CharField(max_length=50)
     designation=models.CharField(max_length=50)
     location=models.CharField(max_length=50)
     mail=models.EmailField()
     phone=models.IntegerField()
     message=models.TextField()

class signup(models.Model):
    user=models.CharField(max_length=50)
    email=models.EmailField()
    password=models.CharField(max_length=20)



def publish(self):
    self.save()

def __str__(self):
    return self.title

