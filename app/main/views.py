from datetime import datetime

from PIL.ImageTransform import AffineTransform
from django.core.exceptions import BadRequest
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Matches, Commands, Tournaments
from .serializers import MatchesSerializer, CommandSerializer, TournamentsSerializer


class CommandsViewSet(ModelViewSet):
    queryset = Commands.objects.all()
    serializer_class = CommandSerializer


class TournamentsViewSet(ModelViewSet):
    queryset = Tournaments.objects.all()
    serializer_class = TournamentsSerializer


class MatchesAPIView(APIView):

    def get(self, request):
        queryset = Matches.objects.all()
        date = request.query_params.get('date')
        if date:
            try:
                year, month = date.split('-')
                queryset = queryset.filter(date__year=year, date__month=month)
            except Exception:
                month = None


        upcoming = request.query_params.get('upcoming')

        if upcoming:
            try:
                upcoming = int(upcoming)
                if date and month:
                    ...
                year, month, day = datetime.now().year, datetime.now().month, datetime.now().day

                if upcoming == True:
                    queryset = queryset.filter(date__gte=datetime(int(year), int(month), day))
                elif upcoming == False:
                    queryset = queryset.filter(date__lte=datetime(int(year), int(month), day))
            except AttributeError:
                ...

        tournament_id = request.query_params.get('tournament')

        if tournament_id:
            try:
                tournament_id = int(tournament_id)
                queryset = queryset.filter(tournament=tournament_id)
            except AttributeError:
                ...

        command_id = request.query_params.get('command')

        if command_id:
            try:
                command_id = int(command_id)
                queryset = queryset.filter(command=command_id)
            except AttributeError:
                ...

        serializer = MatchesSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
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

        return Response(status=status.HTTP_204_NO_CONTENT)





