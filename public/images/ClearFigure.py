import os
import yslib

for i in os.listdir("MonsterFigure"):
    if "(" in i or "#" in i:
        j = i.replace("(1)", "").replace("(2)", "").replace("(3)", "").replace("(4)", "").replace("(5)", "").replace("(6)", "")
        if "#" in j:
            j = j[:j.find("#")] + j[j.find("."):]
        try: os.rename(f"MonsterFigure/{i}", f"MonsterFigure/{j}")
        except: os.remove(f"MonsterFigure/{i}")

L = os.listdir("MonsterFigure")

A = yslib._json("C:/Users/jianu/Desktop/NicoMonsterLib/GI/wiki-dat/Output/Monster")

for i in A:
    if "Figure" in i:
        if not i["Figure"].replace("MonsterFigure/", "") in L:
            print(i["Figure"] + " " + i["Name"]["CH"])