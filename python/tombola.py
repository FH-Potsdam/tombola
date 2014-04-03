#!/usr/bin/python
# -*- coding: utf-8 -*-
import random

list = ["Duffy Duck","Bart Simpson","Bender Bending Rodríguez","Gabriel García Márquez","Massimo Banzi","J. Johna Jameson"];
random.shuffle(list)
for i in range(0,5):
    print list[i]