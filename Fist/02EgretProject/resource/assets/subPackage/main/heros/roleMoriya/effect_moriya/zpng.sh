rm effect_moriya0.json
rm effect_moriya00.png
rm effect_moriya.json
def_name="effect_moriya"
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


mv ../effect_moriya.json ./effect_moriya.json
