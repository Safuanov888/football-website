FROM python:3.12.3

WORKDIR /backend

COPY . /backend

RUN pip install -r requirements.txt

CMD ["python", "app/manage.py", "runserver", "0.0.0.0:9600"]