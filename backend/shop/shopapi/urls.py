from django.urls import path
from .views import *

urlpatterns = [
    path("serverStatus/", ServerStatus.as_view(), name="status"),
    path("products/", ProductOperations.as_view(), name="products"),
    path("comments/", CommentOperations.as_view(), name="newComment")
]
