from django.contrib import admin

from .models import Commands, Matches, Video, Tournaments, Members

admin.site.register(Commands)
admin.site.register(Matches)
admin.site.register(Video)
admin.site.register(Tournaments)
admin.site.register(Members)


admin.site.site_header = "Панель администрирования"
