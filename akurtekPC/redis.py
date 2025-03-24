from redis import Redis
import os
from dotenv import load_dotenv
load_dotenv()
redis_cli = Redis(host=os.getenv("redis_host"), password=os.getenv("redis_password"), db=0)


