from django.apps import AppConfig


class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

class MatchesConfig(AppConfig):
    name = 'matches'
    verbose_name = "Матчи"