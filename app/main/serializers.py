from rest_framework import serializers
from .models import Matches, Command


class CommandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Command
        fields = ['linck_ava', 'name', 'text_syperliga', 'linck_video']


class MatchesSerializer(serializers.ModelSerializer):
    command1 = CommandSerializer()
    command2 = CommandSerializer()

    class Meta:
        model = Matches
        fields = ['id', 'date', 'score', 'adres', 'finished', 'command1', 'command2']





