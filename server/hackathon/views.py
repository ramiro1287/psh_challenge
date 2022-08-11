from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from hackathon.models import Hackathon
from hackathon.serializers import HackathonSerializer, DetailHackathonSerializer


class HackathonsView(APIView):
    def get_queryset(self):
        return Hackathon.objects.all()

    def get(self, request):
        hackathons = self.get_queryset()

        return Response(HackathonSerializer(hackathons, many=True).data, status=status.HTTP_200_OK)


class DetailHackathonView(APIView):
    def get(self, request, hackathon_id):
        try:
            hackathon = Hackathon.objects.get(id=hackathon_id)
            data = DetailHackathonSerializer(hackathon).data
            return Response(data, status=status.HTTP_200_OK)
        except Hackathon.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
