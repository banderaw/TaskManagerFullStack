from rest_framework import viewsets, permissions, generics
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from .models import Task
from .serializers import TaskSerializer, RegisterSerializer

# ------------------------------
# Task API (Protected, User-Specific)
# ------------------------------
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        Only return tasks of the logged-in user
        """
        return Task.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        """
        Automatically assign the logged-in user as the task owner
        """
        serializer.save(user=self.request.user)


# ------------------------------
# Register API
# ------------------------------
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]  # Anyone can register


# ------------------------------
# Login API (JWT)
# ------------------------------
class LoginView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]  # Anyone can login