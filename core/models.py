from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Members(models.Model): 
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    Goals = models.TextField(blank=True, null=True)
    age = models.FloatField()
    image = models.ImageField(upload_to="item_images", blank=True, null=True)
    # is_sold = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name="items", on_delete=models.CASCADE)
    
    class Meta:
        ordering = ("created_at",)
      
        verbose_name_plural = 'Members'

    def __str__(self):
        return self.name