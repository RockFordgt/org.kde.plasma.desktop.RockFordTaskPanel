#!/bin/bash
# Copyright (C) 2015-2020 Radosław Wicik <radoslaw@wicik.pl>
#
# Licensed under GPL v3

function usage(){
    echo -e "Install for current user only:"
    echo -e "\t$0"
    echo -e ""
    echo -e "Install for all users:"
    echo -e "\t$0 --all"
    echo -e ""
}

TEMPLATE_DIR=plasma/layout-templates
SERVICE_DIR=kservices5
TEMPLATE_NAME=org.kde.plasma.desktop.RockFordTaskPanel

if [ "$1" == "--all" ]; then
    if [ `whoami` != "root" ]; then
        echo "You must be a root"
        exit 1
    fi
    prefix="/usr/share"
else
    prefix="$HOME/.local/share/"
fi

TEMPLATES=${prefix}/${TEMPLATE_DIR}/${TEMPLATE_NAME}
SERVICES=${prefix}/${SERVICE_DIR}

mkdir -p ${TEMPLATES}
mkdir -p ${SERVICES}

CURDIR=`pwd`

cp -R contents ${TEMPLATES}
cp metadata.desktop ${TEMPLATES}
cp metadata.desktop ${SERVICES}/plasma-layout-template-${TEMPLATE_NAME}.desktop


