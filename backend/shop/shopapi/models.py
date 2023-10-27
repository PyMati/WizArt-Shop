from django.db import models


class Product(models.Model):
    product_category = models.CharField(max_length=32)
    product_name = models.CharField(max_length=64)
    product_description = models.CharField(max_length=1024)
    product_price = models.FloatField()
    product_img_url = models.CharField(max_length=512)


class ProductComment(models.Model):
    product_id = models.IntegerField()
    author = models.CharField(max_length=64)
    comment = models.CharField(max_length=512)
    rating = models.IntegerField()
    date = models.DateField()
