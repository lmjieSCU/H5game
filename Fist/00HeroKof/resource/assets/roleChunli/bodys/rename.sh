def_name="roleChunli"
for file in `ls *png`
do
mv $file $def_name"_"$file
done