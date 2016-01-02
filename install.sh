#!/bin/bash

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

if [ "$1" == "--all" ]; then
    prefix="/usr/share"

elif
    prefix="$HOME/.local/share/"
fi

TEMPLATES=${prefix}/${TEMPLATES}
SERVICES=${prefix}/${SERVICE_DIR}

mkdir -p ${TEMPLATES}
mkdir -p ${SERVICES}

CURDIR=`pwd`

ln -s ${CURDIR} ${TEMPLATES}
ln -s ${CURDIR}/metadata.desktop ${SERVICES}/plasma-layout-template-${CURDIR##*/}.desktop


