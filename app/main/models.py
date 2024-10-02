from django.db import models
from django.db.models import DO_NOTHING


class Matches(models.Model):
    date = models.DateTimeField()
    finished = models.BooleanField(default=False)
    address = models.CharField(max_length=100)
    command = models.ForeignKey('Commands', on_delete=models.PROTECT, related_name='away_team')
    goals = models.IntegerField(default=0)
    misses = models.IntegerField(default=0)
    home = models.BooleanField(default=True)

    def __str__(self):
        return self.date


class Video(models.Model):
    link = models.TextField()
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Commands(models.Model):
    # image_data = models.TextField()
    image = models.ImageField(upload_to='images/', null=True)
    name = models.CharField(max_length=100)
    text_superliga = models.CharField(max_length=100)
    link = models.ForeignKey('Video', on_delete=models.DO_NOTHING, related_name='video', null=True)

    def __str__(self):
        return self.name

class Members(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    number = models.IntegerField()
    role = models.CharField(max_length=50)
    games_played = models.IntegerField()
    goals = models.IntegerField()
    passes = models.IntegerField()
    yellow_cards = models.IntegerField()
    red_cards = models.IntegerField()
    description = models.TextField()

    def __str__(self):
        return self.name

class Tournaments(models.Model):
    command = models.ForeignKey('Commands', on_delete=DO_NOTHING)
    place = models.IntegerField()
    wins = models.IntegerField()
    draws = models.IntegerField()
    loses = models.IntegerField()
    goals = models.IntegerField()
    misses = models.IntegerField()


