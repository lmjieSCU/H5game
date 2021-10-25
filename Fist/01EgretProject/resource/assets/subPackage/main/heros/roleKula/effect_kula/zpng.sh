rm -rf effect_kula*
def_name="effect_kula"
for file in `ls *png`
do
mv $file $def_name"0"$file
done
for file in `ls *json`
do
file_no=`echo $file | cut -b1-1`
file_nm=`echo $file_no".png"`
package_name=`echo $def_name"0"$file_no".png"`
awk '{ gsub(/'$file_nm'/,"'$package_name'"); print $0 }' $file > $def_name$file
rm $file
done
mv ../effect_kula.json ./effect_kula.json
for file in `ls *mp3`
do
mv $file $def_name"_"$file
done