# syntax=docker/dockerfile:1
FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /srv

COPY requirements.txt /srv/
RUN pip install -U pip
RUN pip install --no-cache-dir -r requirements.txt
COPY . /srv/
