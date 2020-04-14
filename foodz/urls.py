from  django.urls import path
from . import views

urlpatterns=[
    path('foodz/',views.Home,name='Home'),
    path('foodz/Indian',views.Indian,name='Indian'),
    path('foodz/foreign',views.foreign,name='foreign'),
    path('foodz/testimonials',views.testimonials,name='testimonials'),
    path('foodz/connect',views.connect,name='connect'),
]