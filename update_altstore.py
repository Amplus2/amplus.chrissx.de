#!/usr/bin/env python3

from json import *
from os import chdir
from subprocess import check_output as rawrun
from sys import argv

def system(cmd):
    return rawrun(cmd, shell=True).decode('utf-8')

ver = argv[1]

chdir('altstore')
system('git pull')
versionDate = system('date -u +%FT%T') + '+00:00'
desc = system("date '+%d.%m.%y %H:%M'")
json = load(open('alpha.json', 'r'))
app = json['apps'][0]
app['version'] = ver
app['versionDate'] = versionDate
app['versionDescription'] = desc
app['downloadURL'] = 'https://github.com/Amplus2/Amplissimus/releases/download/%s/%s.ipa' % (ver, ver)
dump(json, open('alpha.json', 'w'))
system('git add alpha.json')
system('git commit -m \'Automatic AltStore update to Amplissimus Alpha %s\'' % ver)
system('git push')
