from django.urls import path
from . import views
from django.conf.urls.static import static 
from django.conf import settings 


    # path('api/members/', members_data, name='members_data'),

urlpatterns = [
    path('api/members/', views.members_data, name='members_data'),
    path("", views.home, name="home"),
    path("index/", views.index, name="index"),
    path("contact/", views.contact, name="contact"),
    path("about/", views.about, name="about"),
]+  static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
