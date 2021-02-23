#!/bin/bash

mkarch (){
	for i in $@
	do
		> $i
	done
}

mkdir -p $1/{css/{user,admin},img/{avatars,buttons,products,pets},js/{validations,effects},tpl,php}

cd $1 && echo $2 > index.php

mkarch css/user/estilo.css, css/admin/estilo.css, js/validations/login.js, js/validations/register.js, js/effects/panels.js
cd tpl
mkarch main.tpl, login.tpl, register.tpl, panel.tpl, profile.tpl, crud.tpl
cd ../php
mkarch create.php, read.php, update.php, delete.php, dbconect.php
cd ../..
