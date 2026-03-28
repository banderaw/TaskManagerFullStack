from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, RegisterView, LoginView
from django.urls import path

router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]

urlpatterns += router.urls