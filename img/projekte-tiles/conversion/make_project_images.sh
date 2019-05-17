#!/bin/zsh

cd ../2019_sued

echo "\n convert all base images to png"
for file in *.jpg; do; echo ${file}; convert ${file} `basename ${file} .jpg`.png; echo ${file}; done

echo "\n\n remove jpg images"
rm -f *.jpg
# for file in *.pdf; do; convert ${file} `basename ${file} .jpg`.pdf; echo ${file}; done
# rm -f *.pdf

# make sure you have your images already squared
echo "\n\n make all images same size..."
for file in *.png; do; mogrify -resize x498 ${file}; done

echo "\n\n make active images"
# rename images with suffix -active.png
# for file in *; do; mv ${file} `basename ${file} .png`-active.png; done
for file in *.png; do; convert ${file} `basename ${file} .png`-active.png; done

# echo "\n\n make non-active images"
# for file in *; do; convert -sepia-tone 100% ${file} `basename ${file} -active.png`.png; echo ${file}; done
# for file in *; do; convert ${file} `basename ${file} -active.png`.png; done


echo "\n\n apply filter to non-active images ; the name remains the same"
# for file in *[^-active].png; do; convert -sepia-tone 100% ${file} `basename ${file} .png`.png; done
for file in *[^-active].png; do; convert -fill '#ffd83d' -tint 70% ${file} `basename ${file} .png`.png; done

# create rhombus for both active and non-active by applying a negative of any color, then "subtracting" it by making it transparent
echo "\n\n add negative"
for file in *.png; do; composite ../conversion/transparency.png ${file} `basename ${file} .png`_trans.png; done
echo "\n\n make negative transparent"
for file in *_trans.png; do; mogrify -transparent '#ff00ff' ${file}; done

echo "\n\n apply rahmen"
for file in *_trans.png; do; composite ../conversion/rahmen.png ${file} `basename ${file} _trans.png`.png; done

echo "\n\n remove files with _trans.png suffix"
rm -f *_trans.png
