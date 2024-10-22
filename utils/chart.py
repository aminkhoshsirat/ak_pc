from django.utils import timezone
from django.db.models.aggregates import Sum
import jdatetime

mode = ['day', 'week', 'month', 'year']

months = {
    '1': 'January',
    '2': 'February',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
}

days = {
    'Wednesday': 'چهارشنبه',
    'Thursday': 'پنج شنبه',
    'Friday': 'جمعه',
    'Saturday': 'شنبه',
    'Sunday': 'یک شنبه',
    'Monday': 'دوشنبه',
    'Tuesday': 'سه شنبه',
}


def count_chart(queryset, date_field: str, mode: str) -> None:
    now = timezone.now()
    x = []
    y = []
    if mode == 'day':
        previous = now - timezone.timedelta(days=7)
        for i in range(1, 8):
            date = previous + timezone.timedelta(days=i)
            count = queryset.filter(**{date_field: date}).count()
            y.append(count)
            x.append(days[date.strftime("%A")])

    elif mode == 'month':
        previous = now - timezone.timedelta(days=366)

        for i in range(previous.month + 1, 13):
            count = queryset.filter(**{f'{date_field}__year': previous.year,
                                       f'{date_field}__month': i}).count()
            y.append(count)
            x.append(months[f'{i}'])

        for i in range(1, now.month + 1):
            count = queryset.filter(**{f'{date_field}__year': now.year,
                                       f'{date_field}__month': i}).count()
            y.append(count)
            x.append(months[f'{i}'])

    elif mode == 'year':
        previous = getattr(queryset.first(), date_field)
        previous = jdatetime.date(previous.year, previous.month, previous.day).togregorian()
        for i in range(previous.year, now.year + 1):
            count = queryset.filter(**{f'{date_field}__year': i}).count()
            y.append(count)
            x.append(f'{i}')

    print({'x': x, 'y': y})
    return {'x': x, 'y': y}


def sum_chart(queryset, date_field: str, sum_field: str, mode:str):
    now = timezone.now()
    x = []
    y = []
    if mode == 'day':
        previous = now - timezone.timedelta(days=7)
        for i in range(1, 8):
            date = previous + timezone.timedelta(days=i)
            s = queryset.filter(**{date_field: date}).aggregate(sum=Sum(sum_field))
            if s['sum']:
                y.append(s['sum'])
            else:
                y.append(0)
            x.append(days[date.strftime("%A")])

    elif mode == 'month':
        previous = now - timezone.timedelta(days=366)
        for i in range(previous.month + 1, 13):
            s = queryset.filter(**{f'{date_field}__year': previous.year,
                                   f'{date_field}__month': i}).aggregate(sum=Sum(sum_field))
            if s['sum']:
                y.append(s['sum'])
            else:
                y.append(0)
            x.append(months[f'{i}'])

        for i in range(1, now.month + 1):
            s = queryset.filter(**{f'{date_field}__year': now.year,
                                       f'{date_field}__month': i}).aggregate(sum=Sum(sum_field))
            if s['sum']:
                y.append(s['sum'])
            else:
                y.append(0)
            x.append(months[f'{i}'])

    elif mode == 'year':
        previous = getattr(queryset.first(), date_field)
        previous = jdatetime.date(previous.year, previous.month, previous.day).togregorian()
        for i in range(previous.year, now.year + 1):
            s = queryset.filter(**{f'{date_field}__year': i}).aggregate(sum=Sum(sum_field))
            if s['sum']:
                y.append(s['sum'])
            else:
                y.append(0)
            x.append(f'{i}')

    print({'x': x, 'y': y})
    return {'x': x, 'y': y}
