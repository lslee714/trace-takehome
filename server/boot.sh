#!/bin/bash

exec gunicorn -b 0.0.0.0 --access-logfile - --error-logfile - wsgi:app
