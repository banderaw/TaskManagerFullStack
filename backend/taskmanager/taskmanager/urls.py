from django.contrib import admin
from django.urls import path, include

# JWT views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # 🔹 Include app-level API URLs
    path('api/', include('tasks.urls')),  

    # 🔹 JWT token endpoints (optional if you want direct login via JWT)
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]