#!/bin/zsh

echo "\n\n enter project dir"
cd projects

echo "\n\n clean project dir..."
rm -f *_trans.png
rm -f *-active*

# echo "\n\n convert all base images to png"
# for file in *.jpg; do; convert ${file} `basename ${file} .jpg`.png; echo ${file}; done
# rm -f *.jpg
# for file in *.pdf; do; convert ${file} `basename ${file} .jpg`.pdf; echo ${file}; done
# rm -f *.pdf

echo "\n\n make all images same size..."
for file in *; do; mogrify -resize 498 ${file}; echo ${file}; done

echo "\n\n make active/non-active images..."
for file in *; do; mv ${file} `basename ${file} .png`-active.png; done
for file in *; do; convert -sepia-tone 100% ${file} `basename ${file} -active.png`.png; echo ${file}; done

echo "\n\n prepare transparency..."
for file in *; do; composite ../transparency.png ${file} `basename ${file} .png`_trans.png; echo ${file}; done

echo "\n\n apply transparency..."
for file in *_trans.png; do; mogrify -transparent '#ff00ff' ${file}; echo ${file}; done

echo "\n\n apply rahmen..."
for file in *_trans.png; do; composite ../rahmen.png ${file} `basename ${file} _trans.png`.png; echo ${file}; done

echo "\n\n cleanup..."
rm -f *_trans.png
