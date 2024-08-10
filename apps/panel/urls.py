from django.urls import path
from .views import *
from apps.chat.views import AdminChatRoomView, AdminChatView

app_name = 'panel'

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('site-detail', SiteDetailView.as_view(), name='site_detail'),
    path('chat-box', AdminChatRoomView.as_view(), name='chat_box'),
    path('chat/<id>', AdminChatView.as_view()),
    path('products/', ProductListView.as_view(), name='products'),
    path('products-grid/', ProductGridListView.as_view(), name='products_grid'),
    path('products-grid-body/', ProductGridBodyView.as_view()),
    path('product/add', AddProductView.as_view(), name='products_add'),
    path('product/add-new', AddNewProductView.as_view()),
    path('product/delete/<id>', ProductDeleteView.as_view(), name='products_delete'),
    path('product-categories/', ProductCategoryView.as_view(), name='products_category'),
    path('orders/', OrderView.as_view(), name='orders'),
    path('order/<pk>', OrderDetailView.as_view(), name='order'),
    path('daily-works/', DailyWorksViews.as_view(), name='daily_works'),
    path('daily-works/old/', OldDailyWorksViews.as_view(), name='old_works'),
    path('financial-statement', FinancialStatementsView.as_view(), name='financial_statement'),
    path('financial-statement/<pk>', FinancialStatementSingleView.as_view(), name='financial_statement'),
    path('factor-pdf/<id>', FactorPdfView.as_view(), name='factor_pdf'),
    path('header/', IndexApiView.as_view()),
]
