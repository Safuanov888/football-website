from rest_framework.viewsets import ModelViewSet

from .models import Matches, Commands
from .serializers import MatchesSerializer, CommandSerializer

class CommandsViewSet(ModelViewSet):
    queryset = Commands.objects.all()
    serializer_class = CommandSerializer


class MatchesViewSet(ModelViewSet):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializer
