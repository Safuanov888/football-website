FROM python:3.12.3

WORKDIR /backend

COPY . /backend

RUN pip install -r requirements.txt

COPY wait-for-it.sh /wait-for-it.sh

RUN chmod +x /wait-for-it.sh

CMD ["bash", "./wait-for-it.sh", "db:3306", "--", "python", "app/manage.py", "runserver", "0.0.0.0:9600"]