## Classification API

### In your computer

First, you need to build the wheel of python application with the name `api_classification` in your machine.

:::important
Application must be named `api_classification`
:::

:::warning
Please, delete temporary files you don't want to import (Likes test images)
:::

&nbsp;

when you are in the local folder (where is `setup.py`), do

```sh
python -m build --wheel 
```

### In the server

Next, you can find your wheel file in `./dist/api_classification-1.0-py3-none-any.whl`.

&nbsp;

Copy this file in `/root/api_classification/api_classification-1.0-py3-none-any.whl` and do

```sh
cd /root/api_classification && source ./env/bin/activate && pip install api_classification-1.0-py3-none-any.whl --force-reinstall
```

&nbsp;

restart the service

```sh
systemctl restart api_classification.service
```

:::note

Don't forget to check everything works correctly : `systemctl status api_classification.service`

:::

&nbsp;

## Website Front-End - VueJS

### In your computer

In the local folder, do

```sh
npm i && npm run build
```

### In the server

copy and overwrite all files in your `dist` folder to the `/var/www/html` on server

&nbsp;

## Website Back-End - Spring Boot

Copy and overwrite the project folder to `/root/backend` on server.
Next, restart service

```sh
systemctl restart backend.service
```

:::note
Don't forget to check everything works correctly : `systemctl status backend.service`
:::

&nbsp;

## Complementary information

- Service files is in `/etc/systemd/system/`
