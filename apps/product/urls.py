from django.urls import path
from .views import *

app_name = 'product'

urlpatterns = [
    path('', ProductListView.as_view(), name='product_list_view'),
    path('main-category/<main_category>/', ProductListView.as_view(), name='products_main_category'),
    path('child-category/<child_category>/', ProductListView.as_view(), name='products_child_category'),
    path('child-category/<brand>/', ProductListView.as_view(), name='brand'),
    path('detail/<slug>/', ProductDetailView.as_view(), name='product_detail_view'),
    path('comment/<product_id>/', ProductCommentView.as_view()),
    path('like/<id>/', ProductLikeView.as_view()),
    path('add/<id>', ProductAddView.as_view()),
    path('compare/<category>/<id>', CompareProductView.as_view(), name='compare'),
    path('compare-list/<category>', CompareProductListView.as_view()),
    path('compare-product-detail/<category>/<pk>', CompareProductDetailView.as_view()),
    path('change/<id>', ProductChangeView.as_view()),
    path('delete/<id>', ProductDeleteView.as_view()),
    path('show/<id>', ShowProductView.as_view()),
    path('chart/<id>', ProductChartView.as_view()),
    path('suggested-products/<category>/<title>', SuggestedProductView.as_view()),
]
