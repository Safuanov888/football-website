from django.db import models

class Matches(models.Model):
    date = models.DateField()
    score = models.CharField(max_length=5)
    finished = models.BooleanField(default=True)
    adres = models.CharField(max_length=100)
    command = models.ForeignKey('Command', on_delete=models.PROTECT, related_name='away_team')

    def __str__(self):
        return self.date

class Command(models.Model):
    # image_data = models.TextField()
    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=100)
    text_syperliga = models.CharField(max_length=100)
    linck_video = models.TextField(null=True)

    def __str__(self):
        return self.name