# PirHat
This repository hosts my web dashboard to interact with the RaspberryPi Sense Hat.

It's composed of a python middleware which will be installed on the Pi to interact with it, and a web application which will allow you to read status of the Hat's components (temperature, pressure, humidity, pi infos, ...).
The Dashboard will also be able to interact with the Led's of the Sense Hat.


## Pre-requisite
### Hardware
* A raspberry Pi (tested with the Pi3) and with Linux installed
* A Sense Hat
 
Then pin the Sense Hat on your linux ready Pi

### Software Installation
To have the requirements installed for the PirHat app, I would redirect you to the [Official Getting Started Guide](https://www.raspberrypi.org/learning/getting-started-with-the-sense-hat/requirements/software/)

## PirHat installation
To use PirHat, follow the install instructions of each parts (middleware, front dashboard) from their Readme files :
* [MiddleWare](middleware/README.md)
* [Dashboard](front/README.md)
