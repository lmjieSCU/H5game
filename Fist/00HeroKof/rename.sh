def_name="hero_killerbee"
for file in `ls *png`
do
mv $file $def_name"_"$file
done