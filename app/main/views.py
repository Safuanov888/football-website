from datetime import datetime

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Matches, Commands
from .serializers import MatchesSerializer, CommandSerializer

class CommandsViewSet(ModelViewSet):
    queryset = Commands.objects.all()
    serializer_class = CommandSerializer


class MatchesAPIView(APIView):

    def get(self, request):
        data = request.query_params.get('data')
        upcoming = request.query_params.get('upcoming')
        if data:
            upcoming = int(upcoming)
            year, month = data.split('-')
            if upcoming == True:
                queryset = Matches.objects.filter(date__gte=datetime(int(year),int(month),1),
                                                  date__year=year,
                                                  date__month=month)
            elif upcoming == False:
                queryset = Matches.objects.filter(date__lte=datetime(int(year), int(month), 1),
                                                  date__year=year,
                                                  date__month=month)
            else:
                queryset = Matches.objects.filter(date__year = year, date__month=month)
        else:
            queryset = Matches.objects.all()

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



