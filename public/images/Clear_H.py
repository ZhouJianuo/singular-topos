import os
import srlib

def c(path):

    DIC = {}

    L = os.listdir(path)

    for i in L:
        raw_name = i[: i.find(".")]
        if "#" in raw_name:
            raw_name = raw_name[: raw_name.find("#")]
        if not raw_name in DIC:
            DIC[raw_name] = []
        DIC[raw_name].append({
            "Name": i,
            "Size": os.stat(os.path.join(path, i)).st_size
        })

    DIC_ = {}
    for i in DIC:
        DIC_[i] = sorted(DIC[i], key = lambda x: x["Size"], reverse = True)

    for i in DIC_:
        if len(DIC_[i]) >= 2:
            leave_name = DIC_[i][0]["Name"]
            changeto_name = i + '.png'
            for j in range(len(DIC_[i])):
                if j == 0: continue
                os.remove(os.path.join(path, DIC_[i][j]["Name"]))
            os.rename(os.path.join(path, leave_name), os.path.join(path, changeto_name))


c("Tutorial")