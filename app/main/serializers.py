from rest_framework import serializers
from .models import Matches, Commands


class CommandSerializer(serializers.ModelSerializer):
    # image = serializers.CharField(write_only=True, required=False)
    # linck_ava = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Commands
        fields = ['name', 'text_superliga', 'link_id', 'image']


    def create(self, validated_data):
        image_data = validated_data.pop('image', None)
        if image_data:
            image_format, imgstr = image_data.split(';base64,')
            validated_data['image_data'] = imgstr

        return Commands.objects.create(**validated_data)

    def update(self, instance, validated_data):
        image_data = validated_data.pop('linck_ava', None)
        if image_data:
            image_format, imgstr = image_data.split(';base64,')
            instance.image_data = imgstr

        instance.name = validated_data.get('name', instance.name)
        instance.text_syperliga = validated_data.get('text_syperliga', instance.text_syperliga)
        instance.save()
        return instance

    # def get_linck_video(self, obj):
    #     if obj.image_data:
    #         return f'data:image/png;base64,{obj.image_data}'
    #     return None


class MatchesSerializer(serializers.ModelSerializer):
    command = serializers.PrimaryKeyRelatedField(queryset=Commands.objects.all())

    class Meta:
        model = Matches
        fields = ['id', 'date', 'address', 'finished', 'command', 'goals', 'misses', 'home']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['command'] = CommandSerializer(instance.command).data
        return representation

    def create(self, validated_data):
        return Matches.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.date = validated_data.get('date', instance.date)
        instance.score = validated_data.get('score', instance.score)
        instance.adres = validated_data.get('adres', instance.adres)
        instance.finished = validated_data.get('finished', instance.finished)
        instance.command = validated_data.get('command', instance.command.pk)
        instance.save()
        return instance





