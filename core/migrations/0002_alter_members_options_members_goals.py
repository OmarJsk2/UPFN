# Generated by Django 4.2.1 on 2023-06-30 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='members',
            options={'ordering': ('created_at',), 'verbose_name_plural': 'Members'},
        ),
        migrations.AddField(
            model_name='members',
            name='Goals',
            field=models.TextField(blank=True, null=True),
        ),
    ]
