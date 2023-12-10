from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from .models import Members
# Create your views here.
from django.http import JsonResponse
from django.template.defaultfilters import truncatewords

from .models import Members

from .forms import ContactForm
from django.core.mail import send_mail

def home(request):
    # return HttpResponse(request, "hello world")
    members = Members.objects.filter()
    context = {"members": members}
    # return render(request, "core/index.html", context)

    
    return render(request, "core/home.html", context)
    

def index(request):
    # return HttpResponse(request, "hello world")
    members = Members.objects.filter()
    context = {"members": members}
    return render(request, "core/index.html", context)


def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        # email = request.POST.get("")

        if form.is_valid():
            name = form.cleaned_data["name"]
            subject = form.cleaned_data["subject"]
            message = form.cleaned_data["message"]
            email = form.cleaned_data["email"]

            html = render_to_string("core/emails/contactform.html", {
                "name": name,
                "subject": subject,
                "message": message,
                "email": email
            })

            send_mail("The contact form subject", "This is the message, hey baby", "djomararabmoney@yahoo.com", ["phillipomark2@gmail.com"], html_message=html)
            return redirect("home")
    else:
        form = ContactForm()
    # return HttpResponse(request, "hello world")
   
    return render(request, "core/contact.html", {
       "form": form
    })

def about(request):
    members = Members.objects.filter()
    context = {"members": members}
    return render(request, "core/about.html", context)



# new
def members_data(request):
    members = Members.objects.all()
    data = [
        {
            'id': member.id,
            'name': member.name,
            'description': truncatewords(member.description, 20),
            'age': member.age,
            'image': member.image.url if member.image else None,
            'created_at': member.created_at,
            'created_by': member.created_by.username
        }
        for member in members
    ]
    return JsonResponse(data, safe=False)


# return render(request, "core/about.html", context)
