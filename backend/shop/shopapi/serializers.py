from rest_framework import serializers
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

    def create(self, validated_data):
        new_product = Product.objects.create(
            product_name=validated_data["product_name"],
            product_description=validated_data["product_description"],
            product_category=validated_data["product_category"],
            product_price=validated_data["product_price"],
            product_img_url=validated_data["product_img_url"]
        )
        return new_product


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductComment
        fields = "__all__"

    def create(self, validated_data):
        new_comment = ProductComment.objects.create(
            product_id=validated_data["product_id"],
            author=validated_data["author"],
            comment=validated_data["comment"],
            rating=validated_data["rating"],
            date=validated_data["date"]
        )
        return new_comment
