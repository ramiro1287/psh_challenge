from turtle import position
from rest_framework import serializers

from hackathon.models import Hackathon
from developer.models import Developer
from developer.serializers import DeveloperSerializer


class HackathonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hackathon
        fields = ['id', 'title', 'date',]


class DetailHackathonSerializer(serializers.ModelSerializer):
    developers = serializers.SerializerMethodField()

    class Meta:
        model = Hackathon
        fields = ['id', 'title', 'date', 'developers',]

    def get_developers(self, hackathon):
        devs = Developer.objects.filter(hackathon=hackathon).exclude(position=None).order_by('position')[:10]
        return DeveloperSerializer(devs, many=True).data
