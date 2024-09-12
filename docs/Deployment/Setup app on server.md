## Information

All this documentation take example with Ubuntu.

What's you need :

- A sever with a root access

## Architecture

To deploy all services we need to install a web server (http/apache, nginx) here we use apache.

```sh
sudo apt update & sudo apt install apache
```

Apache in Ubuntu
We will also use the web server as a reverse proxy in order to be able to link services running in localhost in bidirection to the outside

## Deployement

First, you need to install applications in your server.

### Flask example

For a python script that use flask to run in localhost, create a wheel file of your application (`python -m build --wheel`).

Create a new folder in your server, open it and copy your wheel file into it.
Create a new virtual envirtonnement `python -m venv ./.venv`.
And use it, `source /path/to/your/folder/.venv/bin/activate`.
Next, install your python application `pip install nameofyourfile.whl`.

Your app is now install, Test it with `flask --app YourMainFile run`. For a better improvement, in production, you need a production WSGI server.
For our case, we use Gunicorn.

Install gunicorn, `pip install gunicorn`.
Create a configuration file : `gunicorn_config.py`
example :

```
import multiprocessing

workers = multiprocessing.cpu_count() * 2 + 1
bind = 'localhost:666'
umask = 0o007
reload = True

#logging
accesslog = '-'
errorlog = '-'
```

### Make applications to services

Create a services file in `/etc/systemd/system/yourapp.service`

```
[Unit]
Description= The descrition

# Wait the network
After=network.target

[Service]
User=root
# Apache group
Group=www-data
# Your folder 
WorkingDirectory=/root/folder
# The virtual environtement
Environment="PATH=/root/yourapp/.venv/bin"
# Execute the flask app with gunicorn
ExecStart=/root/api_classification/env/bin/gunicorn --config gunicorn_config.py YourMainFile:app
```

Enable and Start your service.

```sh
systemctl enable yourapp.service && systemctl start yourapp.service
```

Check if everythings is good `systemctl status yourapp.service`

### Reverse proxy

After your app run localy, you need to setup a reverse proxy for interaction with outside.

In apache, create a new vhost in `/etc/apache2/sites-available/yourapp.conf`.

```conf
# Chose your port
<VirtualHost *:5000>
        ProxyPreserveHost On

        # Outside link to localhost here is the root url.
        ProxyPass "/" "http://127.0.0.1:667"
        ProxyPassReverse "/" "http://127.0.0.1:667"
</VirtualHost>
```

Next, enable your virtual host with :

```sh
sudo a2ensite yourapp.conf
```

:::note
If you have conflict with default site, you can disable it with :
:::

```sh
sudo a2dissite 000-default.conf
```

Finally, restart apache :

```sh
sudo systemctl restart apache2
```

And check the status of the server :

```sh
sudo systemctl status apache2
```
