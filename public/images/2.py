import os

for i in os.listdir("GCG"):
    if "#" in i:
        os.rename("GCG/" + i, "GCG/" + i[:i.find("#")] + '.png')