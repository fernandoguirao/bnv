#encoding:utf-8
from django.shortcuts import render

def home(request):
    return render(request, 'app.jade', {'nombre': 'bueninvento'})

def blog(request):
    return render(request, 'blog/app.jade', {'nombre': 'bueninvento'})