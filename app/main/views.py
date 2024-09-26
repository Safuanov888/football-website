from django.core.serializers import serialize
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from main.models import Matches
from main.serializers import MatchesSerializer


class MatchesAPIView(APIView):

    def get(self, request):
        matches = Matches.objects.all()
        serializer = MatchesSerializer(matches, many=True)
        return Response(serializer.data)
