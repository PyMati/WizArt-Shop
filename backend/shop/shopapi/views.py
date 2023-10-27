from django.shortcuts import render
# Rest framework imports
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
# Serializers
from .serializers import *
# Models
from .models import *


class ServerStatus(APIView):
    def get(self, request):
        return Response({
            "msg": "Server is working."
        }, status=status.HTTP_200_OK)


class ProductOperations(APIView):
    def get(self, request):
        products = Product.objects.all().values()
        return Response({"data": products})

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "msg": "New product was created."
            }, status=status.HTTP_201_CREATED)

        return Response({
            "msg": "Product data was corrupted"
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        product_id = request.data["id"]
        product = Product.objects.filter(id=product_id)
        if product:
            product.delete()
            return Response({
                "msg": "Product was successfully destroyed."
            })
        return Response({
            "msg": "Product not found."
        })


class CommentOperations(APIView):
    def get(self, request):
        comments = ProductComment.objects.filter(
            product_id=request.data["id"]).values()
        return Response({"data": comments})

    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "msg": "New comment was added."
            }, status=status.HTTP_201_CREATED)

        return Response({
            "msg": "Comment data was corrupted."
        }, status=status.HTTP_400_BAD_REQUEST)
