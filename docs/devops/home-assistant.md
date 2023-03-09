# Home Assistant

My favourite home automation system.

Interesting integrations:

- [HACS](https://hacs.xyz/) - Home Assistant Community Store. Lots of
  third-party plugins are available through this.
- [rbaron/r-parasite](https://github.com/rbaron/b-parasite) - Bluetooth Low
  Energy (BLE) soil moisture and ambient temperature/humidity/light sensor.
  Claims to be able to run for over a year on a single CR2032 battery
- [slashback100/presence_simulation](https://github.com/slashback100/presence_simulation) -
  Simulates someone being at home by turning off and on your lights, based on
  your history in HASS.

Some of my automations:

- [Turn Off TV When It's Too Late](https://gist.github.com/b-turchyn/f36ad994cb8bc79f6ee0e088a211dcb8)
  - This currently works only on weeknights (Sunday through Thursday nights) and
    triggers at 9pm, but can be easily updated.
  - Change the media player you wish to watch over. For me, it's the living room
    TV.

## Troubleshooting

- Tuya integration: error 2406 skill_id invalid can be solved by removing and
  re-adding the integration within the Tuya admin panel.
  ([Instructions](https://community.home-assistant.io/t/tuya-integration-error-2406-skill-id-invalid/372831/27))
