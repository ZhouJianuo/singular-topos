import os

for i in os.listdir("AvatarSkill"):
    if not "SkillIcon_" in i: continue
    j=i[10:14]
    if not os.path.exists('skillicons/' + j):
        os.mkdir('skillicons/' + j)
    os.rename("AvatarSkill/" + i, 'skillicons/' + j + '/' + i)