# Generated by Django 4.0.4 on 2022-08-10 22:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('hackathon', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Developer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default='', max_length=30)),
                ('last_name', models.CharField(default='', max_length=30)),
                ('position', models.PositiveIntegerField(null=True)),
                ('hackathon', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='hackathon.hackathon')),
            ],
        ),
    ]
