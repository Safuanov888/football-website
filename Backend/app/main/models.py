from django.db import models
from django.db.models import DO_NOTHING


class Matches(models.Model):

    class Meta:
        verbose_name = 'матч'
        verbose_name_plural = 'Матчи'


    date = models.DateTimeField()
    finished = models.BooleanField(default=False)
    address = models.CharField(max_length=100)
    command = models.ForeignKey('Commands', on_delete=models.PROTECT, related_name='away_team')
    tournament = models.ForeignKey('Tournaments', on_delete=models.PROTECT, default=1)
    goals = models.IntegerField(default=0)
    misses = models.IntegerField(default=0)
    home = models.BooleanField(default=True)

    def __str__(self):
        return f"Матч:"


class Video(models.Model):

    class Meta:
        verbose_name = 'видео'
        verbose_name_plural = 'Видео'

    link = models.TextField()
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Commands(models.Model):

    class Meta:
        verbose_name = 'команду'
        verbose_name_plural = 'Команды'

    image = models.ImageField(upload_to='media/', null=True)
    name = models.CharField(max_length=100)
    text_superliga = models.CharField(max_length=100)
    link = models.ForeignKey('Video', on_delete=models.DO_NOTHING, related_name='video', null=True)

    def __str__(self):
        return self.name

class Members(models.Model):

    class Meta:
        verbose_name = 'участника'
        verbose_name_plural = 'Состав'

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

    class Meta:
        verbose_name = 'турнир'
        verbose_name_plural = 'Турниры'

    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class TournamentTable(models.Model):

    class Meta:
        verbose_name = 'турнирная таблица'
        verbose_name_plural = 'Турнирые таблицы'

    tournament = models.ForeignKey('Tournaments', on_delete=DO_NOTHING)
    command = models.ForeignKey('Commands', on_delete=DO_NOTHING)
    place = models.IntegerField()
    wins = models.IntegerField()
    draws = models.IntegerField()
    loses = models.IntegerField()
    goals = models.IntegerField()
    misses = models.IntegerField()

    def __str__(self):
        return self.command


