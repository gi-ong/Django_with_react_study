from django.conf.urls.i18n import urlpatterns
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('posts', views.PostViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
