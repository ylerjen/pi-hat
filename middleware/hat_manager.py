class HatManager(object):

    def __init__(self, sense):
        self.sense = sense

        self._pressure = self.sense.get_pressure()
        self._temperature = self.sense.get_temperature()
        self._humidity = self.sense.get_humidity()

    def refresh_state(self):
        self._pressure = self.sense.get_pressure()
        self._temperature = self.sense.get_temperature()
        self._humidity = self.sense.get_humidity()

    @property
    def get_humidity(self):
        return self._humidity

    @property
    def get_temperature(self):
        return self._temperature

    @property
    def get_pressure(self):
        return self._pressure

    def set_message(self, msg):
        self.sense.show_message(msg, scroll_speed=0.05)
