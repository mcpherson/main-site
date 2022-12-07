FROM debian:buster

RUN adduser --home /home/marlon --shell /usr/bin/bash --no-create-home marlon \
    && usermod -aG sudo marlon \
    && mkdir /home/marlon \
    && chown marlon /home/marlon \
    && chgrp marlon /home/marlon

# Had to update certificates--git https clone was failing
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        bash                                      \
        zsh                                       \
        zip                                       \
        unzip                                     \
        less                                      \
        file                                      \
        make                                      \
        httpie                                    \
        curl                                      \
        git                                       \
        jq                                        \
        htop                                      \
        gnupg2                                    \
        ssh                                       \
        man-db                                    \
        groff                                     \
        python3                                   \
        python3-pip                               \
        python3-setuptools                        \
        openssh-client ca-certificates \
    && update-ca-certificates \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g aws-cdk

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o awscliv2.zip \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf aws awscliv2.zip

RUN npm install -g aws-cdk@next

RUN /bin/sh -c "$(curl -fsSL https://raw.githubusercontent.com/turbot/steampipe/main/install.sh)"

RUN pip3 install cfn-lint

USER marlon
WORKDIR /home/marlon

RUN steampipe plugin install steampipe
RUN steampipe plugin install aws
RUN steampipe plugin install github