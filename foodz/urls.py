from  django.urls import path
from . import views

urlpatterns=[
    path('Home',views.Home,name='Home'),
    path('Indian',views.Indian,name='Indian'),
    path('foreign',views.foreign,name='foreign'),
    path('testimonials',views.testimonials,name='testimonials'),
    path('',views.connect,name='connect'),
    path('signin',views.signin,name='signin'),
]