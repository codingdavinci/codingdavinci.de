#!/bin/zsh

cd ../2018_rm

echo "\n convert all base images to png"
for file in *.jpg; do; echo ${file}; convert ${file} `basename ${file} .jpg`.png; echo ${file}; done
rm -f *.jpg
# for file in *.pdf; do; convert ${file} `basename ${file} .jpg`.pdf; echo ${file}; done
# rm -f *.pdf

#echo "\n\n make all images same size..."
#for file in *; do; mogrify -resize x498 ${file}; echo ${file}; done

echo "\n\n make active/non-active images..."
for file in *; do; mv ${file} `basename ${file} .png`-active.png; done
for file in *; do; convert -sepia-tone 100% ${file} `basename ${file} -active.png`.png; echo ${file}; done

echo "\n\n second filter"
for file in *[^-active].png; do; convert -fill '#784763' -tint 100% ${file} `basename ${file} .png`.png; echo ${file}; done

echo "\n\n prepare transparency..."
for file in *; do; composite ../conversion/transparency.png ${file} `basename ${file} .png`_trans.png; echo ${file}; done

echo "\n\n apply transparency..."
for file in *_trans.png; do; mogrify -transparent '#ff00ff' ${file}; echo ${file}; done

echo "\n\n apply rahmen..."
for file in *_trans.png; do; composite ../conversion/rahmen.png ${file} `basename ${file} _trans.png`.png; echo ${file}; done

echo "\n\n cleanup..."
rm -f *_trans.png
