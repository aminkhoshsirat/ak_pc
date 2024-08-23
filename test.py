import requests
import json
from bs4 import BeautifulSoup
from time import perf_counter
from time import sleep
from redis import Redis

re = Redis(host='localhost', port=6379, db=0)

start = perf_counter()
#
# urls = [f'https://www.techpowerup.com/cpu-specs/?released={i}&mobile=No&server=No&sort=name' for i in range(2011, 2024)]
#
# cpus = []
#
# for url in urls:
#     t = requests.get(url,
#                      headers={'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36'}, timeout=100000).text
#     soup = BeautifulSoup(t, 'html.parser')
#     table = soup.find('table', class_='processors')
#     for i in table.find_all('tr'):
#         try:
#             print('*' * 40)
#             cpus.append({
#                 'title': i.find_all('td')[0].get_text(strip=True),
#                 'power': i.find_all('td')[7].get_text(strip=True),
#                 'socket': i.find_all('td')[4].get_text(strip=True)
#             })
#         except:
#             pass
#
#     sleep(20)
#
#
# cpus_socket = set({})
# for i in cpus:
#     cpus_socket.add(i['socket'])
# re.set('cpus', json.dumps(cpus))
# re.set('cpus_socket', json.dumps(cpus_socket))
# end = perf_counter()
# print(end - start)


# gpus


urls = [f'https://www.techpowerup.com/gpu-specs/?released={i}&mobile=No&sort=name' for i in range(2011, 2024)]

gpus = []

for url in urls:
    t = requests.get(url,
                     headers={'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36'}, timeout=100000).text
    soup = BeautifulSoup(t, 'html.parser')
    print(soup)
    table = soup.find('table', class_='processors')
    for i in table.find_all('tr'):
        print(i)
        try:
            gpus.append({
                'title': i.find_all('td')[0].get_text(strip=True),
                'power': i.find_all('td')[7].get_text(strip=True)
            })
            print({
                'title': i.find_all('td')[0].get_text(strip=True),
                'power': i.find_all('td')[7].get_text(strip=True)
            })
            print('*' * 40)
        except:
            pass

    sleep(30)

re.set('gpus', json.dumps(gpus))

