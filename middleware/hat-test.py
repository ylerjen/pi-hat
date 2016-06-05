from sense_hat import SenseHat
import time

# https://www.raspberrypi.org/learning/getting-started-with-the-sense-hat/worksheet/

sense = SenseHat()
sense.show_message("Hello World")

sense.show_letter("O", text_colour=[255, 0, 0])
time.sleep(1)

sense.show_letter("M", text_colour=[0, 0, 255])
time.sleep(1)

sense.show_letter("G", text_colour=[0, 255, 0])
time.sleep(1)

sense.show_letter("!", text_colour=[0, 0, 0], back_colour=[255, 255, 255])
time.sleep(1)
sense.clear()

t = sense.get_temperature()
p = sense.get_pressure()
h = sense.get_humidity()

t = round(t, 1)
p = round(p, 1)
h = round(h, 1)

msg = "Temperature = %s, Pressure=%s, Humidity=%s" % (t, p, h)

sense.show_message(msg, scroll_speed=0.05)
