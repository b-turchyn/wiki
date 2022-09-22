# Matrix

## Database Setup

- Create user
  `createuser -W matrix_user`
- Create database
  `createdb --encoding=UTF8 --locale=C --template=template0 --owner=matrix_user
  matrix`

## Double Puppeting

_[Reference info](https://docs.mau.fi/bridges/general/double-puppeting.html)_

Double puppeting is when your bridge software will make messages you sent via
the other software show up in your Matrix chats. For example, if I send a
message via Signal, double puppeting will make it show up in my Matrix chat.

- Set up and install
  [`matrix-synapse-shared-secret-auth`](https://github.com/devture/matrix-synapse-shared-secret-auth).
  Docker instructions:
  - Download the [Python
    file](https://raw.githubusercontent.com/devture/matrix-synapse-shared-secret-auth/master/shared_secret_authenticator.py)
    to a place where you'll mount the file from
  - Add the following line to your `volumes` for your Synapse install. Replace
    the first part with the relative path to the downloaded Python file:
    ```yaml
    volumes:
      - ./shared_secret_authenticator.py:/usr/local/lib/python3.9/site-packages/shared_secret_authenticator.py:ro
    ```
- Generate a random string, which will be the shared secret between the Signal
  bridge and the Synapse server. In the below steps, look for
  `replace-this-random-string`.
  ```bash
  pwgen -s 128 1 # Generates a 128-character string
  ```
- Update `homeserver.yaml` for Synapse to include the new module. `modules` is a
  top-level heading that may already exist:
  ```yaml
  modules:
    - module: shared_secret_authenticator.SharedSecretAuthProvider
      config:
        shared_secret: "replace-this-random-string"
        m_login_password_support_enabled: true # Unsure if this is needed
  ```
- Your bridge software now needs to know about the Synapse server and the shared
  secret that applies to it. In the case of Signal Bridge, update `config.yaml`:
  - Under `bridge.double_puppet_server_map`, add a server mapping for your home
    server.
  - Under `bridge.login_shared_secret_map`, add the shared secret.
  ```yaml
  bridge:
    double_puppet_server_map:
      matrix.btdev.org: https://matrix.btdev.org
    login_shared_secret_map:
      matrix.btdev.org: replace-this-random-string
  ```
- Restart Synapse and your bridge software
- Once restarted, start a chat with the bridge bot (i.e. `@signalbot`) and send
  the message `ping-matrix`. If working correctly, you should receive the
  message `Your Matrix login is working.`.

