def_name="hero_konan"
for file in `ls *png`
do
mv $file $def_name"_"$file
done