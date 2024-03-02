import os

for i in os.listdir("Cities"):
    if "#" in i:
        os.rename("Cities/" + i, "Cities/" + i[:i.find("#")] + '.png')