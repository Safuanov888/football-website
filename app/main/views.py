from bisect import insort

from django.core.serializers import serialize
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Matches, Commands
from .serializers import MatchesSerializer, CommandSerializer


class CommandAPIView(APIView):

    def get(self, request):
        commands = Commands.objects.all()
        serializer = CommandSerializer(commands, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CommandSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if not pk:
            return Response({'error': "Method PUT not allowed"})

        try:
            instance = Commands.objects.get(pk=pk)
        except:
            return Response({"error": "Object does not exists"})

        serializer = CommandSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if not pk:
            return Response({'error': 'Method DELETE not allowed'})

        try:
            instance = Commands.objects.get(pk=pk)
            instance.delete()
        except:
            return Response({"error": "Object Not Found !"})

        return Response({"status": "OK"})


class MatchesAPIView(APIView):

    def get(self, request):
        matches = Matches.objects.all()
        serializer = MatchesSerializer(matches, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MatchesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if not pk:
            return Response({'error': "Method PUT not allowed"})

        try:
            instance = Matches.objects.get(pk=pk)
        except:
            return Response({"error": "Object does not exists"})

        serializer = MatchesSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if not pk:
            return Response({'error': 'Method DELETE not allowed'})

        try:
            instance = Matches.objects.get(pk=pk)
            instance.delete()
        except:
            return Response({"error": "Object Not Found !"})

        return Response({"status": "OK"})
