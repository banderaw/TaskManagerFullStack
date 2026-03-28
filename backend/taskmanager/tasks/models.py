from django.db import models
from django.contrib.auth.models import User   # ✅ ADD THIS

class Task(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='tasks'
    )  # ✅ LINK TASK TO USER

    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    deadline = models.DateTimeField()

    def __str__(self):
        return f"{self.title} - {self.user.username}"