# syntax=docker/dockerfile:1
FROM python:latest
WORKDIR /code
COPY requirements.txt .
RUN pip install -U pip 
RUN pip install requirements.txt
COPY . /code/
EXPOSE 8000
CMD ["gunicorn", "akurtekPC.wsgi", ":8000"]
