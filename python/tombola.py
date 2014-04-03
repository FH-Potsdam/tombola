#!/usr/bin/python
# -*- coding: utf-8 -*-
import random

list = ["Duffy Duck","Bart Simpson","Bender Bending Rodríguez","Gabriel García Márquez","Massimo Banzi","J. Johna Jameson"];
random.shuffle(list)
text = ""
for i in range(0,3):
    print list[i]
    text+=str("- " + list[i] + "\n")

f = open("result.md", 'w+')
f.write(text)
f.close()