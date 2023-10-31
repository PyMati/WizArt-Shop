from django.shortcuts import render
# Rest framework imports
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
# Serializers
from .serializers import *
# Models
from .models import *
from .utils import saveActionToLogFile


class ServerStatus(APIView):
    def get(self, request):
        saveActionToLogFile("GET", "Check server status")
        return Response({
            "msg": "Server is working."
        }, status=status.HTTP_200_OK)


class ProductOperations(APIView):
    def get(self, request):
        products = Product.objects.all().values()
        saveActionToLogFile("GET", "Get all products")
        return Response({"data": products})

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            saveActionToLogFile("POST", "Product created")
            return Response({
                "msg": "New product was created."
            }, status=status.HTTP_201_CREATED)

        saveActionToLogFile(
            "POST", "Invalid data to create product was provided")
        return Response({
            "msg": "Product data was corrupted"
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        product_id = request.data["id"]
        product = Product.objects.filter(id=product_id)
        if product:
            product.delete()
            saveActionToLogFile(
                "DELETE", f"Product with id {product_id} was deleted")
            return Response({
                "msg": "Product was successfully destroyed."
            })

        saveActionToLogFile(
            "POST", "Invalid data to delete product was provided")
        return Response({
            "msg": "Product not found."
        })


class CommentOperations(APIView):
    def get(self, request):
        comments = ProductComment.objects.filter(
            product_id=request.GET.getlist('id')[0]).values()
        saveActionToLogFile(
            "GET", f"Get all comments for product with id {request.GET.getlist('id')[0]}")
        return Response({"data": comments})

    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            saveActionToLogFile(
                "POST", f"New comment for product with id {serializer.validated_data['product_id']} was created")
            serializer.save()
            return Response({
                "msg": "New comment was added."
            }, status=status.HTTP_201_CREATED)

        saveActionToLogFile(
            "POST", f"New comment for product with id {serializer.validated_data['product_id']} was tried to be created by invalid data was provided.")
        return Response({
            "msg": "Comment data was corrupted."
        }, status=status.HTTP_400_BAD_REQUEST)
