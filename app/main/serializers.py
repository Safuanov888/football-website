from rest_framework import serializers
from .models import Matches, Commands


class CommandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Commands
        fields = ['name', 'text_superliga', 'link_id', 'image']


    def create(self, validated_data):
        image_data = validated_data.pop('image', None)
        if image_data:
            imgstr = image_data.name
            with open(f'./media/{imgstr}', 'wb') as f:
                for chunk in image_data.chunks():
                    f.write(chunk)
            validated_data['image'] = imgstr

        return Commands.objects.create(**validated_data)

    def update(self, instance, validated_data):
        image_data = validated_data.pop('image', None)
        if image_data:
            imgstr = image_data.name
            with open(f'./media/{imgstr}', 'wb') as f:
                for chunk in image_data.chunks():
                    f.write(chunk)
            instance.image = imgstr

        instance.name = validated_data.get('name', instance.name)
        instance.text_superliga = validated_data.get('text_superliga', instance.text_superliga)
        instance.save()
        return instance


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
        instance.address = validated_data.get('address', instance.address)
        instance.finished = validated_data.get('finished', instance.finished)
        instance.command = validated_data.get('command', instance.command.pk)
        instance.goals = validated_data.get('goals', instance.goals)
        instance.misses = validated_data.get('misses', instance.misses)
        instance.home = validated_data.get('home', instance.home)
        instance.save()
        return instance





