from django.db import models


class News(models.Model):
    text = models.TextField()
    photo = models.ImageField(upload_to='images/news_photos/')
    date = models.DateField()

    def __str__(self):
        return f"Новость от {self.date}"
