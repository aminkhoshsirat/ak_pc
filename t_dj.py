from celery import shared_task
import redis
import requests
from bs4 import BeautifulSoup
import json

r = redis.Redis(host='localhost', port=6379, db=0)

url = [
    {'category': 'fastest-desktops', 'url': 'https://www.pcbenchmarks.net/fastest-desktop.html'},
    {'category': 'fastest-systems', 'url': 'https://www.pcbenchmarks.net/leaderboard.html'},
    {'category': 'fastest-laptops', 'url': 'https://www.pcbenchmarks.net/fastest-laptop.html'},
    {'category': 'fastest-server', 'url': 'https://www.pcbenchmarks.net/fastest-server.html'},
]

for i in url:
    details = []
    text = requests.get(i.get('url'), timeout=20).text
    category = i.get('category')
    soup = BeautifulSoup(text, 'html.parser').find('ul', class_='chartlist')
    for i in soup.find_all('li'):
        details.append({'name': i.find('p', {'class': 'clmn-1'}).get_text(),
                        'count': i.find('span', {'class': 'count'}).get_text(),
                        'cpu': i.find('p', {'class': 'clmn-2'}).get_text(),
                        'main_board': i.find('span', {'class': ''}).get_text(),
                        'vga': i.find_all('td')[3].get_text(),
                        'ram': i.find_all('td')[7].get_text(),
                        'os': i.find_all('td')[11].get_text(),
                        })
    r.set(f'benchmark:pc:{category}', json.dumps(details))
