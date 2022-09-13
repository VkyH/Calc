from django.urls import path
from .consumers import CalcConsumer
ws_urlpatterns=[
    path("ws/calc/",CalcConsumer.as_asgi()),
]