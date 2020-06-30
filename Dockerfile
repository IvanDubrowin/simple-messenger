FROM python:3.8-buster

RUN pip install pipenv

RUN mkdir code

WORKDIR code

COPY Pipfile .

COPY Pipfile.lock .

RUN pipenv install

EXPOSE 8000

ENTRYPOINT pipenv run uvicorn server:app --host 0.0.0.0