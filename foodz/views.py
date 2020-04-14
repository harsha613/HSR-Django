from django.shortcuts import render, redirect
from .models import feedback,signup

# Create your views here.
def Home(request):
    return render(request,'foodz/Home.html',{})

def Indian(request):
    return render(request,'foodz/Indian.html',{})

def foreign(request):
    return render(request,'foodz/foreign.html',{})

def testimonials(request):
    fb=feedback.objects.all()
    if request.method == "POST":
        name=request.POST.get("name")
        check=request.POST.get("check")
        designation=request.POST.get("designation")
        location=request.POST.get("location")
        mail=request.POST.get("mail")
        phone=request.POST.get("phone")
        message=request.POST.get("message")
        Feed=feedback()
        Feed.name=name
        Feed.designation=designation
        Feed.location=location
        Feed.mail=mail
        Feed.phone=phone
        Feed.message=message
        Feed.save()
        #return redirect
    return render(request,"foodz/testimonials.html",{'fb':fb})
    
def connect(request):
    if request.method == "POST":
        user=request.POST.get("user")
        email=request.POST.get("email")
        password=request.POST.get("password")
        cpassword=request.POST.get("cpassword")
        if cpassword==password:
            su=signup()
            su.name=name 
            su.email=email
            su.password=password
            su.save()
            return redirect('Home')
    return render(request,"foodz/connect.html",{})

def signin(request):
    su=signup.objects.all()
    if request.method=="POST":
        user=request.POST.get("user")
        password=request.POST.get("password")
        for i in su:
            if i.user==user:
                if i.password==password:
                    return redirect('Home')                
    return render(request,"foodz/connect.html",{})

