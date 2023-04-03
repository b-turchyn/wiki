# Rkhunter

Rkhunter is a rootkit detection tool.

## Installation

On Ubuntu: `sudo apt install rkhunter`

## Configuration

For a first run, edit `/etc/rkhunter.conf` and update the following properties:

- `WEB_CMD`: this is initially set to `/bin/false` on Ubuntu, which will cause
  all updates to fail. This should be able to be set to `curl`.
- `UPDATE_MIRRORS`: by default, this is disabled, but mirrors will need to be
  updated at some point to get the most up-to-date database[^1]. Set this to `1`
  to allow updates.
- `MIRRORS_MODE`: This defaults to `1` (use only local mirrors), however you can
  set this to `0` to use a remote mirror as well.

After config changes, check your config files by running
`rkhunter --config-check`.

## Usage

Get database updates using `rkhunter --update`

Run `rkhunter --check`. The following additional options can be used as well:

- `--sk`: skips the "Press &lt;ENTER&gt; to continue" checks that exist when
  running.
- `--rwo`: reports warnings only

When you're comfortable with the state of the system, running
`rkhunter --propupd` will update your local database of the current state.

## Regular Scanning

Apply the following changes to `/etc/default/rkhunter.conf`:

- `CRON_DAILY_RUN="true"`: Runs a scan daily
- `CRON_DB_UPDATE="true"`: Updates the database weekly
- `APT_AUTOGEN="true"`: Automatic database updates (what is the difference
  between the two of these?)

[^1]:
    It's possible with an infected system that a malicious database could be
    uploaded, so in sensitive environments you probably only want to accept
    local mirrors. I don't know what the risk of this would be however.
