FROM linuxbrew/brew

RUN brew install zsh
SHELL ["zsh", "-c"]

# HACK: for docker-compose up in devcontainer
RUN mkdir /code

COPY ./.env.local /tmp

# script
COPY ./config/docker/pre-install.sh /tmp
RUN chmod 755 /tmp/pre-install.sh
RUN /tmp/pre-install.sh

COPY ./config/docker/install.sh /tmp
RUN chmod 755 /tmp/install.sh
RUN /tmp/install.sh

COPY ./config/docker/post-install.sh /tmp
RUN chmod 755 /tmp/post-install.sh
RUN /tmp/post-install.sh
