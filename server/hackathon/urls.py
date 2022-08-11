from django.urls import path
from hackathon.views import HackathonsView, DetailHackathonView

urlpatterns = [
    path('hackathons/', HackathonsView.as_view()),
    path('hackathons/<int:hackathon_id>/', DetailHackathonView.as_view()),
]
