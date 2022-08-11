from pyexpat import model
from django.db import models

from hackathon.models import Hackathon


class Developer(models.Model):
    first_name = models.CharField(max_length=30, default='')
    last_name = models.CharField(max_length=30, default='')
    hackathon = models.ForeignKey(Hackathon, on_delete=models.DO_NOTHING)
    position = models.PositiveIntegerField(null=True)

    def __str__(self):
        return f'{self.fist_name} {self.last_name}'
