from redis import Redis
import json
from time import perf_counter

start = perf_counter()

re = Redis(host='localhost', port=6379, db=0)

intel_socket = re.get('intel_socket')
amd_socket = re.get('amd_socket')


print(intel_socket)

print(amd_socket)

l = set({})

for i in json.loads(re.get('cpus')):
    if i['socket'].replace("Socket", "").lstrip(" ") == 'TRX4':
        print(i)

for i in json.loads(re.get('cpus')):
    l.add(i['title'])

print(len(json.loads(re.get('gpus'))))
end = perf_counter()
print(end - start)