from rest_framework import serializers

from developer.models import Developer


class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = ['id', 'first_name', 'last_name', 'position',]
