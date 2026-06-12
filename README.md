# GF_Document_Scanner
Document scanner on Python

# Document_Scanner

Веб-приложение для удобного сканирования документов. Вы можете загрузить документа (или, например, чека из магазина) и приложение автоматически его выпрямит и приведёт виду, готовому для использования где-либо. В проекте реализована веб-версия приложения.

## ПРИМЕЧАНИЕ!

В папке *example/* Вы найдетё скриншот чека из магазина для примера (взято с сайта самого проекта в силу самого подходящего формата), а также скриншот примера работы приложения.

# Стек

- *Backend*: Flask, Python 3.9+
- *Computer Vision*: OpenCV, scikit-image, imutils, NumPy
- *Frontend*: HTML, CSS, JavaScript

# Как запустить локально?

*Terminal*:

- git clone git@github.com:feattempl/GF_Document_Scanner.git 
- cd GF_Document_Scanner

*bash*:

- pip3 install flask opencv-python numpy imutils scikit-image werkzeug gunicorn 
- python app.py

